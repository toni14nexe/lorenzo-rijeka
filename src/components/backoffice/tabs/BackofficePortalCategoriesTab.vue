<script setup lang="ts">
import type { PortalCategory } from '~/types/portal'
import {
  CirclePlusFilled,
  Edit,
  DeleteFilled,
  RefreshLeft
} from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
  parentId: string | null
}
type DialogType = 'create' | 'edit' | 'delete' | 'unarchive'

const { $axios } = useNuxtApp()
const isLoading = ref({
  activeCategories: true,
  deletedCategories: true,
  button: false
})
const activeCategories = ref<PortalCategory[]>()
const deletedCategories = ref<PortalCategory[]>()
const dialog = ref<{
  isOpened: boolean
  type: DialogType
  item: PortalCategory | undefined
}>({
  isOpened: false,
  type: 'create',
  item: undefined
})
const form = reactive<RuleForm>({
  name: '',
  parentId: null
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Unesite naziv kategorije', trigger: 'blur' }
  ]
})

onMounted(() => getAllCategories())

function getAllCategories() {
  getActivePortalCategories()
  getDeletedPortalCategories()
}

function openDialog(type: DialogType, item?: PortalCategory) {
  if (item) {
    form.name = String(item.name)
    form.parentId = item.parentId ? String(item.parentId) : null
  }
  dialog.value = {
    isOpened: true,
    type,
    item
  }
}

async function getActivePortalCategories() {
  isLoading.value.activeCategories = true
  try {
    const response = await useNuxtApp().$axios.get(
      `/portal-category?withoutHierarchy=true`
    )
    activeCategories.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.activeCategories = false
  }
}

async function getDeletedPortalCategories() {
  isLoading.value.deletedCategories = true
  try {
    const response = await useNuxtApp().$axios.get(
      `/portal-category?deletedOnly=true`
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
  form.parentId = null
  dialog.value.isOpened = false
}

async function handleCreate(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      isLoading.value.button = true
      try {
        await $axios.post('/portal-category', form)
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
        await $axios.put(`/portal-category/${dialog.value.item?.id}`, form)
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
    await $axios.delete(`/portal-category/${dialog.value.item?.id}`)
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
    await $axios.patch(`/portal-category/${dialog.value.item?.id}/unarchive`)
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
        <h3 class="color-primary">Portal kategorije</h3>
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
        <ElTableColumn label="Nadkategorija" prop="parent.name">
          <template #default="items">
            {{ items.row.parent?.name || '-' }}
          </template>
        </ElTableColumn>
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
        <ElTableColumn label="Nadkategorija" prop="parent.name">
          <template #default="items">
            {{ items.row.parent?.name || '-' }}
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
        <ElFormItem label="Nadkategorija" prop="parentId">
          <ElSelect
            v-model="form.parentId as string"
            placeholder="Odaberite kategoriju"
            class="input-width"
            clearable
          >
            <ElOption
              v-for="category in activeCategories"
              :key="String(category.id)"
              :label="String(category.name)"
              :value="String(category.id)"
            />
          </ElSelect>
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
