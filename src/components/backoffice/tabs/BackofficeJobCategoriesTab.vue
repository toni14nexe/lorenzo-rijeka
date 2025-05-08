<script setup lang="ts">
import type { JobsCategory } from '~/types/jobs'
import {
  CirclePlusFilled,
  Edit,
  DeleteFilled,
  RefreshLeft
} from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
}
type DialogType = 'create' | 'edit' | 'delete' | 'unarchive'

const { $axios } = useNuxtApp()
const isLoading = ref({
  activeCategories: true,
  deletedCategories: true,
  button: false
})
const activeCategories = ref<JobsCategory[]>()
const deletedCategories = ref<JobsCategory[]>()
const dialog = ref<{
  isOpened: boolean
  type: DialogType
  item: JobsCategory | undefined
}>({
  isOpened: false,
  type: 'create',
  item: undefined
})
const form = reactive<RuleForm>({
  name: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Unesite naziv kategorije', trigger: 'blur' }
  ]
})

onMounted(() => getAllCategories())

function getAllCategories() {
  getActiveJobCategories()
  getDeletedJobCategories()
}

function openDialog(type: DialogType, item?: JobsCategory) {
  if (item) form.name = String(item.name)

  dialog.value = {
    isOpened: true,
    type,
    item
  }
}

async function getActiveJobCategories() {
  isLoading.value.activeCategories = true
  try {
    const response = await useNuxtApp().$axios.get(`/jobs-category`)
    activeCategories.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.activeCategories = false
  }
}

async function getDeletedJobCategories() {
  isLoading.value.deletedCategories = true
  try {
    const response = await useNuxtApp().$axios.get(
      `/jobs-category?deletedOnly=true`
    )
    deletedCategories.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.deletedCategories = false
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

function handleCloseDialog() {
  form.name = ''
  dialog.value.isOpened = false
}

async function handleCreate(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      isLoading.value.button = true
      try {
        await $axios.post('/jobs-category', form)
        getAllCategories()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste dodali novu kategoriju.')
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
        await $axios.put(`/jobs-category/${dialog.value.item?.id}`, form)
        getAllCategories()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste uredili kategoriju.')
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
    await $axios.delete(`/jobs-category/${dialog.value.item?.id}`)
    getAllCategories()
    handleCloseDialog()
    showSuccessMessage('Uspješno ste obrisali kategoriju.')
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.button = false
  }
}

async function handleUnarchive() {
  isLoading.value.button = true
  try {
    await $axios.patch(`/jobs-category/${dialog.value.item?.id}/unarchive`)
    getAllCategories()
    handleCloseDialog()
    showSuccessMessage('Uspješno ste vratili obrisanu kategoriju.')
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
      <ElCol :span="4" />
      <ElCol :span="16" align="center">
        <h3 class="color-primary">Posao kategorije</h3>
      </ElCol>
      <ElCol :span="4" align="end">
        <ElButton type="primary" plain @click="openDialog('create')">
          <ElIcon size="24">
            <CirclePlusFilled />
          </ElIcon>
          <span class="ml-8">Dodaj kategoriju</span>
        </ElButton>
      </ElCol>
    </ElRow>

    <div
      v-if="isLoading.activeCategories || isLoading.deletedCategories"
      v-loading="true"
      element-loading-text="Učitavanje..."
      class="loading-div"
    />

    <template v-else>
      <span class="color-primary"><b>Aktivne kategorije</b></span>
      <ElTable
        :data="activeCategories"
        stripe
        empty-text="Nema dostupnih podataka"
      >
        <ElTableColumn label="Naziv" prop="name" />
        <ElTableColumn label="Akcije" align="center" width="148">
          <template #default="items">
            <ElButton
              type="primary"
              plain
              @click="openDialog('edit', items.row)"
            >
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

      <span class="color-primary mt-50"><b>Obrisane kategorije</b></span>
      <ElTable
        :data="deletedCategories"
        stripe
        empty-text="Nema dostupnih podataka"
      >
        <ElTableColumn label="Naziv" prop="name" />
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
    </template>
  </div>

  <ElDialog
    v-model="dialog.isOpened"
    :close-on-click-modal="false"
    destroy-on-close
    :fullscreen="$viewport.isLessOrEquals('tablet') ? true : false"
    @close="handleCloseDialog"
  >
    <template #header>
      <ElRow justify="center">
        <h3 class="color-primary">
          <span v-if="dialog.type === 'create'">Dodaj novu kategoriju</span>
          <span v-else-if="dialog.type === 'edit'">Uredi kategoriju</span>
          <span v-else-if="dialog.type === 'unarchive'">Vrati kategoriju</span>
          <span v-else>Obriši kategoriju</span>
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
        <ElFormItem label="Naziv" prop="name">
          <ElInput
            v-model="form.name"
            placeholder="Moja kategorija"
            class="input-width"
          />
        </ElFormItem>
      </ElForm>
    </ElRow>

    <!-- Delete only -->
    <ElRow v-else-if="dialog.type === 'delete'" justify="center" class="mb-24">
      <ElCol align="middle">
        Jeste li sigurni da želite obrisati
        <b>{{ dialog.item?.name }}</b> kategoriju?
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
        <b>{{ dialog.item?.name }}</b> kategoriju?
      </ElCol>
    </ElRow>

    <!-- Submit -->
    <ElRow justify="center">
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

<style lang="css" scoped></style>
