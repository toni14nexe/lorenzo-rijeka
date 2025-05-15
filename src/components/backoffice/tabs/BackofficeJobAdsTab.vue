<script setup lang="ts">
import type { Job, JobsCategory } from '~/types/jobs'
import {
  CirclePlusFilled,
  Edit,
  DeleteFilled,
  RefreshLeft,
  Search
} from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import Pagination from '~/components/shared/Pagination.vue'
import Editor from 'primevue/editor'

interface RuleForm {
  jobCategoryId: string
  name: string
  description: string
  location: string
  salary: number
  contactEmail: string
  contactNumber: string
}
type DialogType = 'create' | 'edit' | 'delete' | 'unarchive'

const { $axios } = useNuxtApp()
const isLoading = ref({
  activeJobs: true,
  deletedJobs: true,
  categories: true,
  button: false
})
const activeJobs = ref<Job[]>()
const deletedJobs = ref<Job[]>()
const categories = ref<JobsCategory[]>()
const searchValues = ref({
  active: '',
  deleted: ''
})
const dialog = ref<{
  isOpened: boolean
  type: DialogType
  item: Job | undefined
}>({
  isOpened: false,
  type: 'create',
  item: undefined
})
const form = reactive<RuleForm>({
  jobCategoryId: '',
  name: '',
  description: '',
  location: '',
  salary: 0,
  contactEmail: '',
  contactNumber: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  jobCategoryId: [
    { required: true, message: 'Odaberite kategoriju posla', trigger: 'blur' }
  ],
  name: [{ required: true, message: 'Unesite naslov posla', trigger: 'blur' }],
  description: [
    { required: true, message: 'Unesite opis posla', trigger: 'blur' }
  ],
  location: [
    { required: true, message: 'Unesite lokaciju posla', trigger: 'blur' }
  ],
  salary: [{ required: true, message: 'Unesite plaću posla', trigger: 'blur' }],
  contactEmail: [
    { required: true, message: 'Unesite email prodavača', trigger: 'blur' },
    {
      validator: (_, value, callback) => {
        if (!validateEmail(value)) callback(new Error('Netočna email adresa'))
        else callback()
      },
      trigger: 'blur'
    }
  ],
  contactNumber: [
    {
      validator: (_, value, callback) => {
        if (value.length && !validateMobileNumber(value))
          callback(new Error('Netočan broj telefona'))
        else callback()
      },
      trigger: 'blur'
    }
  ]
})
const activeJobsPagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})
const deletedJobspagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})

onMounted(() => getAllJobs())

async function getCategories() {
  isLoading.value.categories = true
  try {
    const response = await $axios.get(`/jobs-category`)
    categories.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.categories = false
  }
}

function getAllJobs() {
  getActiveJobs()
  getDeletedJobs()
}

function openDialog(type: DialogType, item?: Job) {
  if (item) {
    form.jobCategoryId = String(item.jobCategoryId)
    form.name = String(item.name)
    form.description = String(item.description)
    form.location = String(item.location)
    form.salary = Number(item.salary)
    form.contactEmail = String(item.contactEmail)
    form.contactNumber = item.contactNumber ? String(item.contactNumber) : ''
  }
  dialog.value = {
    isOpened: true,
    type,
    item
  }
}

function handleActiveSearch() {
  activeJobsPagination.value.page = 1
  debounceActiveSearch()
}
const debounceActiveSearch = debounce(getActiveJobs, 300)

async function getActiveJobs() {
  isLoading.value.activeJobs = true
  try {
    const response = await $axios.get(
      `/job?page=${activeJobsPagination.value.page}&perPage=${activeJobsPagination.value.perPage}&search=${searchValues.value.active}`
    )
    activeJobs.value = response.data.jobs
    activeJobsPagination.value.total = response.data.total
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.activeJobs = false
  }
}

function handleDeletedSearch() {
  deletedJobspagination.value.page = 1
  debounceDeletedSearch()
}
const debounceDeletedSearch = debounce(getDeletedJobs, 300)

async function getDeletedJobs() {
  isLoading.value.deletedJobs = true
  try {
    const response = await $axios.get(
      `/job?deletedOnly=true&page=${deletedJobspagination.value.page}&perPage=${deletedJobspagination.value.perPage}&search=${searchValues.value.deleted}`
    )
    deletedJobs.value = response.data.jobs
    deletedJobspagination.value.total = response.data.total
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.deletedJobs = false
  }
}

function showSuccessMessage(message: string) {
  ElNotification({
    type: 'success',
    message,
    duration: 3000
  })
}

function handleSubmitButton(formEl: FormInstance | undefined) {
  if (dialog.value.type === 'create') handleCreate(formEl)
  else if (dialog.value.type === 'edit') handleEdit(formEl)
  else if (dialog.value.type === 'delete') handleDelete()
  else if (dialog.value.type === 'unarchive') handleUnarchive()
}

function handleOpenDialog() {
  if (
    !categories.value?.length &&
    (dialog.value.type === 'create' || dialog.value.type === 'edit')
  )
    getCategories()
}

function handleCloseDialog() {
  form.jobCategoryId = ''
  form.name = ''
  form.description = ''
  form.location = ''
  form.salary = 0
  form.contactEmail = ''
  form.contactNumber = ''
  dialog.value.isOpened = false
}

async function handleCreate(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      isLoading.value.button = true
      try {
        await $axios.post('/job', form)
        getAllJobs()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste dodali novi oglas za posao.')
      } catch (error) {
        console.error('API Error:', error)
      } finally {
        isLoading.value.button = false
      }
    }
  })
}

async function handleEdit(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      isLoading.value.button = true
      try {
        await $axios.put(`/job/${dialog.value.item?.id}`, form)
        getAllJobs()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste uredili oglas za posao.')
      } catch (error) {
        console.error('API Error:', error)
      } finally {
        isLoading.value.button = false
      }
    }
  })
}

async function handleDelete() {
  isLoading.value.button = true
  try {
    await $axios.delete(`/job/${dialog.value.item?.id}`)
    getAllJobs()
    handleCloseDialog()
    showSuccessMessage('Uspješno ste obrisali oglas za posao.')
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.button = false
  }
}

async function handleUnarchive() {
  isLoading.value.button = true
  try {
    await $axios.patch(`/job/${dialog.value.item?.id}/unarchive`)
    getAllJobs()
    handleCloseDialog()
    showSuccessMessage('Uspješno ste vratili obrisan oglas za posao.')
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.button = false
  }
}
</script>

<template>
  <div class="backoffice-page">
    <ElRow justify="space-between" align="middle" class="w-100">
      <ElCol :span="6" />
      <ElCol :span="12" align="center">
        <h3 class="color-primary">Posao oglasi</h3>
      </ElCol>
      <ElCol :span="6" align="end">
        <ElButton type="primary" plain @click="openDialog('create')">
          <ElIcon size="24">
            <CirclePlusFilled />
          </ElIcon>
          <span class="ml-8">Dodaj oglas</span>
        </ElButton>
      </ElCol>
    </ElRow>

    <ElRow justify="center" align="middle" class="w-100">
      <ElCol :span="8" :offset="8" align="center">
        <span class="color-primary"><b>Aktivni poslovi</b></span>
      </ElCol>
      <ElCol :span="8" align="end">
        <ElInput
          v-model="searchValues.active"
          type="text"
          placeholder="Pretražite naslov..."
          class="max-w-250"
          :prefix-icon="Search"
          @input="handleActiveSearch"
        />
      </ElCol>
    </ElRow>
    <ElTable
      :data="activeJobs"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading.activeJobs"
    >
      <ElTableColumn label="Naslov" prop="name" />
      <ElTableColumn label="Kategorija" prop="jobCategory.name" />
      <ElTableColumn label="Lokacija" prop="location" />
      <ElTableColumn label="Plaća" prop="salary">
        <template #default="items">
          {{ Number(items.row.salary).toFixed(2) }} €
        </template>
      </ElTableColumn>
      <ElTableColumn label="Akcije" align="center" width="148">
        <template #default="items">
          <ElButton type="primary" plain @click="openDialog('edit', items.row)">
            <ElIcon size="24">
              <Edit />
            </ElIcon>
          </ElButton>
          <ElButton
            type="danger"
            plain
            @click="openDialog('delete', items.row)"
          >
            <ElIcon size="24">
              <DeleteFilled />
            </ElIcon>
          </ElButton>
        </template>
      </ElTableColumn>
    </ElTable>
    <Pagination
      v-if="activeJobsPagination.total > 10"
      v-model="activeJobsPagination"
      :loading="isLoading.deletedJobs"
      scroll-element-id="scroll-element"
      @page-change="getActiveJobs"
      class="mb-24"
    />

    <ElRow justify="center" align="middle" class="w-100">
      <ElCol :span="8" :offset="8" align="center">
        <span class="color-primary"><b>Obrisani poslovi</b></span>
      </ElCol>
      <ElCol :span="8" align="end">
        <ElInput
          v-model="searchValues.deleted"
          type="text"
          placeholder="Pretražite naslov..."
          class="max-w-250"
          :prefix-icon="Search"
          @input="handleDeletedSearch"
        />
      </ElCol>
    </ElRow>
    <ElTable
      :data="deletedJobs"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading.deletedJobs"
    >
      <ElTableColumn label="Naslov" prop="name" />
      <ElTableColumn label="Kategorija" prop="jobCategory.name" />
      <ElTableColumn label="Lokacija" prop="location" />
      <ElTableColumn label="Plaća" prop="salary">
        <template #default="items">
          {{ Number(items.row.salary).toFixed(2) }} €
        </template>
      </ElTableColumn>
      <ElTableColumn label="Akcije" align="center" width="80">
        <template #default="items">
          <ElButton
            type="primary"
            plain
            @click="openDialog('unarchive', items.row)"
          >
            <ElIcon size="24">
              <RefreshLeft />
            </ElIcon>
          </ElButton>
        </template>
      </ElTableColumn>
    </ElTable>
    <Pagination
      v-if="deletedJobspagination.total > 10"
      v-model="deletedJobspagination"
      :loading="isLoading.deletedJobs"
      scroll-element-id="scroll-element"
      @page-change="getDeletedJobs"
      class="mb-24"
    />
  </div>

  <ElDialog
    v-model="dialog.isOpened"
    :close-on-click-modal="false"
    destroy-on-close
    fullscreen
    @open="handleOpenDialog"
    @close="handleCloseDialog"
  >
    <template #header>
      <ElRow justify="center">
        <h3 class="color-primary">
          <span v-if="dialog.type === 'create'">Dodaj novu vijest</span>
          <span v-else-if="dialog.type === 'edit'">Uredi vijest</span>
          <span v-else-if="dialog.type === 'unarchive'">Vrati vijest</span>
          <span v-else>Obriši vijest</span>
        </h3>
      </ElRow>
    </template>
    <!-- Create and edit only -->
    <ElRow
      v-if="dialog.type === 'create' || dialog.type === 'edit'"
      justify="center"
    >
      <ElForm
        :label-position="$viewport.isLessThan('tablet') ? 'top' : 'left'"
        require-asterisk-position="right"
        ref="ruleFormRef"
        class="form"
        :model="form"
        :rules="rules"
        label-width="auto"
        status-icon
      >
        <ElFormItem label="Kategorija" prop="text">
          <ElSelect
            v-model="form.jobCategoryId"
            :loading="isLoading.categories"
            placeholder="Odaberite kategoriju"
            class="input-width"
            clearable
          >
            <ElOption
              v-for="category in categories"
              :key="String(category.id)"
              :label="String(category.name)"
              :value="String(category.id)"
            />
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="Naziv" prop="name">
          <ElInput
            v-model="form.name"
            placeholder="Moj oglas za posao"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Lokacija" prop="location">
          <ElInput
            v-model="form.location"
            placeholder="Stuttgart"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Plaća" prop="salary">
          <ElInputNumber
            v-model="form.salary"
            :precision="2"
            placeholder="1999.99"
            :step="50"
            class="input-width"
          >
            <template #suffix>€</template>
          </ElInputNumber>
        </ElFormItem>
        <ElFormItem label="Kontakt email" prop="contactEmail">
          <ElInput
            v-model="form.contactEmail"
            placeholder="john.doe@mail.com"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Kontakt telefon" prop="contactNumber">
          <ElInput
            v-model="form.contactNumber"
            placeholder="+3850123456789"
            class="input-width"
          />
        </ElFormItem>
        <div style="height: 450px">
          <ElFormItem label="Opis" prop="text">
            <Editor v-model="form.description" class="editor" />
          </ElFormItem>
        </div>
      </ElForm>
    </ElRow>

    <!-- Delete only -->
    <ElRow v-else-if="dialog.type === 'delete'" justify="center" class="mb-24">
      <ElCol align="middle">
        Jeste li sigurni da želite obrisati
        <b>{{ dialog.item?.name }}</b> oglas za posao?
      </ElCol>
      <ElCol align="middle" class="mt-12">Moguće ju je vratiti kasnije. </ElCol>
    </ElRow>

    <!-- Unarchive only -->
    <ElRow
      v-else-if="dialog.type === 'unarchive'"
      justify="center"
      class="mb-24"
    >
      <ElCol align="middle">
        Jeste li sigurni da želite vratiti
        <b>{{ dialog.item?.name }}</b> oglas za posao?
      </ElCol>
    </ElRow>

    <!-- Submit -->
    <ElRow v-if="isLoading.button" justify="center" class="color-primary mb-12">
      Ne prekidajte učitavanje podataka!
    </ElRow>
    <ElRow justify="center" class="mt-16">
      <ElButton
        :type="dialog.type === 'delete' ? 'danger' : 'primary'"
        plain
        @click="handleSubmitButton(ruleFormRef)"
        :loading="isLoading.button"
      >
        <span v-if="dialog.type === 'create'">Dodaj</span>
        <span v-else-if="dialog.type === 'edit'">Uredi</span>
        <span v-else-if="dialog.type === 'unarchive'">Vrati</span>
        <span v-else-if="dialog.type === 'delete'">Obriši</span>
      </ElButton>
    </ElRow>
  </ElDialog>
</template>

<style lang="css" scoped>
.editor {
  height: 400px;
  width: 80dvw;
}
</style>
