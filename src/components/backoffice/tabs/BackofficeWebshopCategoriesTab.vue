<script setup lang="ts">
import type { ProductCategory } from '~/types/webshop'
import {
  CirclePlusFilled,
  Edit,
  DeleteFilled,
  RefreshLeft,
  Search,
  Plus
} from '@element-plus/icons-vue'
import type { FormInstance, FormRules, UploadUserFile } from 'element-plus'

interface RuleForm {
  name: string
  parentId: string | null
  image: string | null
}
type DialogType = 'create' | 'edit' | 'delete' | 'unarchive'

const { $axios } = useNuxtApp()
const isLoading = ref({
  activeCategories: true,
  deletedCategories: true,
  button: false
})
const activeCategories = ref<ProductCategory[]>()
const deletedCategories = ref<ProductCategory[]>()
const image = ref<UploadUserFile[]>()
const config = useRuntimeConfig()
const cloudinaryPreset = config.public.cloudinaryPreset
const cloudinaryCloudName = config.public.cloudinaryCloudName
const searchValues = ref({
  active: '',
  deleted: ''
})
const dialog = ref<{
  isOpened: boolean
  type: DialogType
  item: ProductCategory | undefined
}>({
  isOpened: false,
  type: 'create',
  item: undefined
})
const form = reactive<RuleForm>({
  name: '',
  parentId: null,
  image: null
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Unesite naziv kategorije', trigger: 'blur' }
  ]
})

onMounted(() => getAllCategories())

function getAllCategories() {
  getActiveCategories()
  getDeletedCategories()
}

function openDialog(type: DialogType, item?: ProductCategory) {
  if (item) {
    form.name = String(item.name)
    form.parentId = item.parentId ? String(item.parentId) : null
    form.image = item.image ? String(item.image) : null
  }
  dialog.value = {
    isOpened: true,
    type,
    item
  }
}

function handleActiveSearch() {
  debounceActiveSearch()
}
const debounceActiveSearch = debounce(getActiveCategories, 300)

async function getActiveCategories() {
  isLoading.value.activeCategories = true
  try {
    const response = await $axios.get(
      `/product-category?withoutHierarchy=true&search=${searchValues.value.active}`
    )
    activeCategories.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.activeCategories = false
  }
}

function handleDeletedSearch() {
  debounceDeletedSearch()
}
const debounceDeletedSearch = debounce(getDeletedCategories, 300)

async function getDeletedCategories() {
  isLoading.value.deletedCategories = true
  try {
    const response = await $axios.get(
      `/product-category?deletedOnly=true&search=${searchValues.value.deleted}`
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
  form.image = null
  image.value = []
  dialog.value.isOpened = false
}

function handleUploadChange(file: any, files: any) {
  if (files.length) files.pop()
  form.image = ''
  files[0] = file
}

async function uploadDataToCloudinary() {
  if (image.value && image.value[0].raw) {
    const url = await cloudinaryUpload(image.value[0].raw as File, 'image')
    if (url) form.image = url
  }
}

async function cloudinaryUpload(file: File, resourceType: 'image' | 'video') {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', cloudinaryPreset)
  formData.append('resource_type', resourceType)

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/${resourceType}/upload`,
      {
        method: 'POST',
        body: formData
      }
    )
    const data = await response.json()
    return data.secure_url
  } catch (error) {
    console.error('Upload failed:', error)
    return null
  }
}

async function handleCreate(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      isLoading.value.button = true
      await uploadDataToCloudinary()
      try {
        await $axios.post('/product-category', form)
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
      await uploadDataToCloudinary()
      try {
        await $axios.put(`/product-category/${dialog.value.item?.id}`, form)
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
    await $axios.delete(`/product-category/${dialog.value.item?.id}`)
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
    await $axios.patch(`/product-category/${dialog.value.item?.id}/unarchive`)
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
      <ElCol :span="6" />
      <ElCol :span="12" align="center">
        <h3 class="color-primary">Kategorije</h3>
      </ElCol>
      <ElCol :span="6" align="end">
        <ElButton type="primary" plain @click="openDialog('create')">
          <ElIcon size="24">
            <CirclePlusFilled />
          </ElIcon>
          <span class="ml-8">Dodaj kategoriju</span>
        </ElButton>
      </ElCol>
    </ElRow>

    <ElRow justify="center" align="middle" class="w-100">
      <ElCol :span="8" :offset="8" align="center">
        <span class="color-primary"><b>Aktivne kategorije</b></span>
      </ElCol>
      <ElCol :span="8" align="end">
        <ElInput
          v-model="searchValues.active"
          type="text"
          placeholder="Pretražite naziv..."
          class="max-w-250"
          :prefix-icon="Search"
          @input="handleActiveSearch"
        />
      </ElCol>
    </ElRow>
    <ElTable
      :data="activeCategories"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading.activeCategories"
    >
      <ElTableColumn label="Naziv" prop="name" />
      <!-- <ElTableColumn label="Nadkategorija" prop="parent.name">
        <template #default="items">
          {{ items.row.parent?.name || '-' }}
        </template>
      </ElTableColumn> -->
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

    <ElRow justify="center" align="middle" class="w-100">
      <ElCol :span="8" :offset="8" align="center">
        <span class="color-primary"><b>Obrisane kategorije</b></span>
      </ElCol>
      <ElCol :span="8" align="end">
        <ElInput
          v-model="searchValues.deleted"
          type="text"
          placeholder="Pretražite naziv..."
          class="max-w-250"
          :prefix-icon="Search"
          @input="handleDeletedSearch"
        />
      </ElCol>
    </ElRow>
    <ElTable
      :data="deletedCategories"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading.deletedCategories"
    >
      <ElTableColumn label="Naziv" prop="name" />
      <!-- <ElTableColumn label="Nadkategorija" prop="parent.name">
        <template #default="items">
          {{ items.row.parent?.name || '-' }}
        </template>
      </ElTableColumn> -->
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
        <!-- <ElFormItem label="Nadkategorija" prop="parentId">
          <ElSelect
            v-model="form.parentId as string"
            placeholder="Odaberite kategoriju"
            class="input-width"
            clearable
            filterable
          >
            <ElOption
              v-for="category in activeCategories"
              :key="String(category.id)"
              :label="String(category.name)"
              :value="String(category.id)"
            />
          </ElSelect>
        </ElFormItem> -->
        <p class="color-danger">
          Preporuča se slika što manje veličine (najbolje u formatu 'jpg' ili
          'jpeg'), ne veća od 500x500px.
        </p>
        <ElFormItem label="Slika" prop="image">
          <img
            v-if="dialog.type === 'edit' && form.image"
            class="el-upload-list__item-thumbnail"
            :src="form.image as string"
            style="width: 148px"
          />
          <ElUpload
            v-model:file-list="image"
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            multiple
            accept="image/*"
            @change="handleUploadChange"
          >
            <ElIcon><Plus /></ElIcon>
            <template #file="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
            </template>
          </ElUpload>
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
