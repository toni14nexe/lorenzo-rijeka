<script setup lang="ts">
import { CirclePlusFilled, Edit, DeleteFilled } from '@element-plus/icons-vue'
import Editor from 'primevue/editor'
import { stripHtml } from 'string-strip-html'
import type { InfoCardData } from '~/components/dashboard/DashboardInfoCard.vue'
import type { FormInstance, FormRules } from 'element-plus'

type DialogType = 'create' | 'edit' | 'delete'
interface RuleForm {
  position: number
  title: string
  text: string
}

const { $axios } = useNuxtApp()
const isLoading = ref({
  cards: true,
  button: false
})
const cards = ref<InfoCardData[]>()
const dialog = ref<{
  isOpened: boolean
  type: DialogType
  item: InfoCardData | undefined
}>({
  isOpened: false,
  type: 'create',
  item: undefined
})
const form = reactive<RuleForm>({
  position: 0,
  title: '',
  text: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  position: [
    { required: true, message: 'Odaberite poziciju kartice', trigger: 'blur' }
  ],
  title: [
    { required: true, message: 'Unesite naslov kartice', trigger: 'blur' },
    { max: 50, message: 'Previše znakova', trigger: 'blur' }
  ],
  text: [
    { required: true, message: 'Unesite opis kartice', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (stripHtml(form.text).result.length > 180)
          callback(new Error('Previše znakova'))
        else callback()
      },
      trigger: 'blur'
    }
  ]
})

onMounted(() => getAllCards())

async function getAllCards() {
  isLoading.value.cards = true
  try {
    const response = await $axios.get(`/dashboard-card`)
    cards.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.cards = false
  }
}

function openDialog(type: DialogType, item?: InfoCardData) {
  if (item) {
    form.position = Number(item.position)
    form.title = String(item.title)
    form.text = String(item.text)
  }
  dialog.value = {
    isOpened: true,
    type,
    item
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
}

function handleCloseDialog() {
  form.position = 0
  form.title = ''
  form.text = ''
  dialog.value.isOpened = false
}

async function handleCreate(formEl: FormInstance | undefined) {
  console.log(form.text)
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      isLoading.value.button = true
      try {
        await $axios.post('/dashboard-card', form)
        getAllCards()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste dodali novu karticu na naslovnicu.')
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
        await $axios.put(`/dashboard-card/${dialog.value.item?.id}`, form)
        getAllCards()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste uredili karticu na naslovnici.')
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
    await $axios.delete(`/dashboard-card/${dialog.value.item?.id}`)
    getAllCards()
    handleCloseDialog()
    showSuccessMessage('Uspješno ste obrisali karticu na naslovnici.')
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
        <h3 class="color-primary">Kartice na naslovnici</h3>
      </ElCol>
      <ElCol :span="6" align="end">
        <ElButton type="primary" plain @click="openDialog('create')">
          <ElIcon size="24">
            <CirclePlusFilled />
          </ElIcon>
          <span class="ml-8">Dodaj karticu</span>
        </ElButton>
      </ElCol>
    </ElRow>

    <ElRow justify="center" align="middle" class="w-100">
      <span class="color-primary"><b>Kartice</b></span>
    </ElRow>
    <ElTable
      :data="cards"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading.cards"
    >
      <ElTableColumn label="Naslov" prop="title" />
      <ElTableColumn label="Pozicija" prop="position" />
      <ElTableColumn label="Text" prop="text">
        <template #default="items">
          {{ truncateText(stripHtml(items.row.text).result, 50) }}
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
  </div>

  <ElDialog
    v-model="dialog.isOpened"
    :close-on-click-modal="false"
    destroy-on-close
    fullscreen
    @close="handleCloseDialog"
  >
    <template #header>
      <ElRow justify="center">
        <h3 class="color-primary">
          <span v-if="dialog.type === 'create'">Dodaj novu karticu</span>
          <span v-else-if="dialog.type === 'edit'">Uredi karticu</span>
          <span v-else>Obriši karticu</span>
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
        <ElFormItem label="Pozicija" prop="position">
          <ElInputNumber
            v-model="form.position"
            :precision="0"
            placeholder="5"
            :step="1"
            :min="0"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Naslov" prop="title">
          <ElInput
            v-model="form.title"
            placeholder="Moj naslov za karticu"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Text" prop="text">
          <Editor v-model="form.text" class="editor" />
        </ElFormItem>
      </ElForm>
    </ElRow>

    <!-- Delete only -->
    <ElRow v-else-if="dialog.type === 'delete'" justify="center" class="mb-24">
      <ElCol align="middle">
        Jeste li sigurni da želite obrisati
        <b>{{ dialog.item?.title }}</b> karticu sa naslovnice?
      </ElCol>
    </ElRow>

    <!-- Submit -->
    <ElRow v-if="isLoading.button" justify="center" class="color-primary mb-12">
      Ne prekidajte učitavanje podataka!
    </ElRow>
    <ElRow justify="center" class="mt-24">
      <ElButton
        :type="dialog.type === 'delete' ? 'danger' : 'primary'"
        plain
        class="mt-24"
        @click="handleSubmitButton(ruleFormRef)"
        :loading="isLoading.button"
      >
        <span v-if="dialog.type === 'create'">Dodaj</span>
        <span v-else-if="dialog.type === 'edit'">Uredi</span>
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
