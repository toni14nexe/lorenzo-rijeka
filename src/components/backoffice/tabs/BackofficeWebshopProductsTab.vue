<script setup lang="ts">
import type { Product, ProductCategory } from '~/types/webshop'
import {
  CirclePlusFilled,
  Edit,
  DeleteFilled,
  RefreshLeft,
  Plus,
  Delete,
  ZoomIn,
  GoldMedal,
  Download
} from '@element-plus/icons-vue'
import type {
  FormInstance,
  FormRules,
  UploadFile,
  UploadUserFile
} from 'element-plus'
import Pagination from '~/components/shared/Pagination.vue'
import Editor from 'primevue/editor'

interface RuleForm {
  productCategoryId: string
  name: string
  description: string
  images: String[] | null
  videos: String[] | null
  price: number
  contactEmail: string
  contactNumber: string
  locationCountry: string
  locationPlace: string
}
type DialogType = 'create' | 'edit' | 'delete' | 'unarchive'

const { $axios } = useNuxtApp()
const config = useRuntimeConfig()
const cloudinaryPreset = config.public.cloudinaryPreset
const cloudinaryCloudName = config.public.cloudinaryCloudName
const fileList = ref<{
  images: UploadUserFile[]
  videos: any
}>({
  images: [],
  videos: []
})
const isLoading = ref({
  activeProducts: true,
  deletedProducts: true,
  categories: true,
  button: false
})
const activeProducts = ref<Product[]>()
const deletedProducts = ref<Product[]>()
const categories = ref<ProductCategory[]>()
const dialog = ref<{
  isOpened: boolean
  type: DialogType
  item: Product | undefined
}>({
  isOpened: false,
  type: 'create',
  item: undefined
})
const form = reactive<RuleForm>({
  productCategoryId: '',
  name: '',
  description: '',
  images: [],
  videos: [],
  price: 0,
  contactEmail: '',
  contactNumber: '',
  locationCountry: '',
  locationPlace: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  productCategoryId: [
    {
      required: true,
      message: 'Odaberite kategoriju proizvoda',
      trigger: 'blur'
    }
  ],
  name: [
    { required: true, message: 'Unesite naziv proizvoda', trigger: 'blur' }
  ],
  description: [
    { required: true, message: 'Unesite opis proizvoda', trigger: 'blur' }
  ],
  price: [
    { required: true, message: 'Unesite cijenu proizvoda', trigger: 'blur' }
  ],
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
  ],
  locationCountry: [
    {
      required: true,
      message: 'Unesite naziv države lokacije proizvoda',
      trigger: 'blur'
    }
  ],
  locationPlace: [
    {
      required: true,
      message: 'Unesite naziv mjesta lokacije proizvoda',
      trigger: 'blur'
    }
  ]
})
const activeProductsPagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})
const deletedProductspagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})
const fullscreenImageUrl = ref('')
const fullscreenImageDialog = ref(false)

onMounted(() => getAllProducts())

async function getCategories() {
  isLoading.value.categories = true
  try {
    const response = await useNuxtApp().$axios.get(`/product-category`)
    categories.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.categories = false
  }
}

function getAllProducts() {
  getActiveProducts()
  getDeletedProducts()
}

function openDialog(type: DialogType, item?: Product) {
  if (item) {
    form.productCategoryId = String(item.productCategoryId)
    form.name = String(item.name)
    form.description = String(item.description)
    form.price = Number(item.price)
    form.contactEmail = String(item.contactEmail)
    form.contactNumber = item.contactNumber ? String(item.contactNumber) : ''
    form.locationCountry = String(item.locationCountry)
    form.locationPlace = String(item.locationPlace)
    form.images = item.images ? item.images : null
    form.videos = item.videos ? item.videos : null
    // @ts-expect-error
    fileList.value.images =
      form.images?.map(image => ({
        url: image
      })) ?? []
  }
  dialog.value = {
    isOpened: true,
    type,
    item
  }
}

async function getActiveProducts() {
  isLoading.value.activeProducts = true
  try {
    const response = await useNuxtApp().$axios.get(
      `/product?page=${activeProductsPagination.value.page}&perPage=${activeProductsPagination.value.perPage}`
    )
    activeProducts.value = response.data.products
    activeProductsPagination.value.total = response.data.total
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.activeProducts = false
  }
}

async function getDeletedProducts() {
  isLoading.value.deletedProducts = true
  try {
    const response = await useNuxtApp().$axios.get(
      `/product?deletedOnly=true&page=${deletedProductspagination.value.page}&perPage=${deletedProductspagination.value.perPage}`
    )
    deletedProducts.value = response.data.products
    deletedProductspagination.value.total = response.data.total
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.deletedProducts = false
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
  form.productCategoryId = ''
  form.name = ''
  form.description = ''
  form.price = 0
  form.contactEmail = ''
  form.contactNumber = ''
  form.locationCountry = ''
  form.locationPlace = ''
  form.images = null
  form.videos = null
  fileList.value.images = []
  fileList.value.videos = []
  dialog.value.isOpened = false
}

async function handleCreate(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      isLoading.value.button = true
      await uploadDataToCloudinary()
      try {
        await $axios.post('/product', form)
        getAllProducts()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste dodali novi proizvod.')
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
        await $axios.put(`/product/${dialog.value.item?.id}`, form)
        getAllProducts()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste uredili proizvod.')
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
    await $axios.delete(`/product/${dialog.value.item?.id}`)
    getAllProducts()
    handleCloseDialog()
    showSuccessMessage('Uspješno ste obrisali proizvod.')
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.button = false
  }
}

async function handleUnarchive() {
  isLoading.value.button = true
  try {
    await $axios.patch(`/product/${dialog.value.item?.id}/unarchive`)
    getAllProducts()
    handleCloseDialog()
    showSuccessMessage('Uspješno ste vratili obrisan proizvod.')
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.button = false
  }
}

function handleSetImageToFirstPlace(file: UploadFile) {
  const index = fileList.value.images.findIndex(f => f.uid === file.uid)
  if (index > -1) {
    const [selected] = fileList.value.images.splice(index, 1)
    fileList.value.images.unshift(selected)
  }
  form.images = fileList.value.images.map(f => f.url as string)
}

function handleImagePreview(file: UploadFile) {
  fullscreenImageUrl.value = file.url!
  fullscreenImageDialog.value = true
}

function handleImageRemove(file: UploadFile) {
  const index = fileList.value.images.findIndex(f => f.uid === file.uid)
  if (index > -1) fileList.value.images.splice(index, 1)

  form.images = fileList.value.images.length
    ? fileList.value.images.map(f => f.url as string)
    : null
}

async function handleVideoChange(event: Event) {
  const files = (event.target as HTMLInputElement).files
  if (!files) return
  fileList.value.videos = files ? files : null
}

function handleVideoDownload(file: string) {
  window.location.href = file
}

function handleVideoRemove(file: string) {
  form.videos = form.videos?.filter(video => video !== file) ?? []
}

async function uploadDataToCloudinary() {
  if (!form.images) form.images = []
  if (!form.videos) form.videos = []

  for (const image of fileList.value.images) {
    if (image.raw) {
      const url = await cloudinaryUpload(image.raw as File, 'image')
      if (url) form.images.push(url)
    }
  }

  for (const video of fileList.value.videos) {
    const url = await cloudinaryUpload(video as File, 'video')
    if (url) form.videos.push(url)
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
</script>

<template>
  <div class="backoffice-page">
    <ElRow justify="space-between" align="middle" class="w-100">
      <ElCol :span="6" />
      <ElCol :span="12" align="center">
        <h3 class="color-primary">Webshop proizvodi</h3>
      </ElCol>
      <ElCol :span="6" align="end">
        <ElButton type="primary" plain @click="openDialog('create')">
          <ElIcon size="24">
            <CirclePlusFilled />
          </ElIcon>
          <span class="ml-8">Dodaj proizvod</span>
        </ElButton>
      </ElCol>
    </ElRow>

    <span class="color-primary"><b>Aktivni proizvodi</b></span>
    <ElTable
      :data="activeProducts"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading.activeProducts"
    >
      <ElTableColumn label="Naziv" prop="name" />
      <ElTableColumn label="Kategorija" prop="productCategory.name" />
      <ElTableColumn label="Prodano" prop="sold" />
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
      v-if="activeProductsPagination.total > 10"
      v-model="activeProductsPagination"
      :loading="isLoading.deletedProducts"
      scroll-element-id="scroll-element"
      @page-change="getActiveProducts"
      class="mb-24"
    />

    <span class="color-primary mt-50"><b>Obrisani proizvodi</b></span>
    <ElTable
      :data="deletedProducts"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading.deletedProducts"
    >
      <ElTableColumn label="Naziv" prop="name" />
      <ElTableColumn label="Kategorija" prop="productCategory.name" />
      <ElTableColumn label="Prodano" prop="sold" />
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
      v-if="deletedProductspagination.total > 10"
      v-model="deletedProductspagination"
      :loading="isLoading.deletedProducts"
      scroll-element-id="scroll-element"
      @page-change="getDeletedProducts"
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
          <span v-if="dialog.type === 'create'">Dodaj novi proizvod</span>
          <span v-else-if="dialog.type === 'edit'">Uredi proizvod</span>
          <span v-else-if="dialog.type === 'unarchive'">Vrati proizvod</span>
          <span v-else>Obriši proizvod</span>
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
            v-model="form.productCategoryId"
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
        <ElFormItem label="Naslov" prop="title">
          <ElInput
            v-model="form.name"
            placeholder="Moj proizvod"
            class="input-width"
          />
        </ElFormItem>
        <div style="height: 450px">
          <ElFormItem label="Sadržaj" prop="text">
            <Editor v-model="form.description" class="editor" />
          </ElFormItem>
        </div>
        <ElFormItem label="Cijena" prop="price" class="mt-20">
          <ElInputNumber
            v-model="form.price"
            :precision="2"
            placeholder="1.99"
            :step="0.01"
            class="input-width"
          >
            <template #suffix>€</template>
          </ElInputNumber>
        </ElFormItem>
        <ElFormItem label="Email prodavača" prop="contactEmail" class="mt-20">
          <ElInput
            v-model="form.contactEmail"
            placeholder="john.doe@mail.com"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem
          label="Telefon prodavača"
          prop="contactNumber"
          class="mt-20"
        >
          <ElInput
            v-model="form.contactNumber"
            placeholder="+3850123456789"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem
          label="Država proizvoda"
          prop="locationCountry"
          class="mt-20"
        >
          <ElInput
            v-model="form.locationCountry"
            placeholder="Hrvatska"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Mjesto proizvoda" prop="locationPlace" class="mt-20">
          <ElInput
            v-model="form.locationPlace"
            placeholder="Zagreb"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Slike" prop="images">
          <ElUpload
            v-model:file-list="fileList.images"
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            multiple
            accept="image/*"
          >
            <ElIcon><Plus /></ElIcon>
            <template #file="{ file }">
              <div>
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <ElTooltip
                    effect="dark"
                    content="Postavi na prvu poziciju"
                    placement="top"
                    :show-after="500"
                  >
                    <span
                      v-if="fileList.images[0].url !== file.url"
                      @click="handleSetImageToFirstPlace(file)"
                    >
                      <ElIcon><GoldMedal /></ElIcon>
                    </span>
                  </ElTooltip>
                  <span @click="handleImagePreview(file)">
                    <ElIcon><ZoomIn /></ElIcon>
                  </span>
                  <span @click="handleImageRemove(file)">
                    <ElIcon><Delete /></ElIcon>
                  </span>
                </span>
              </div>
            </template>
          </ElUpload>
        </ElFormItem>
        <ElFormItem v-if="form.videos?.length" label="Dodani video">
          <ElRow v-for="video in form.videos" justify="center" align="middle">
            * {{ video }}
            <ElIcon
              :size="18"
              @click="handleVideoDownload(video as string)"
              class="ml-8 video-download-icon"
            >
              <Download />
            </ElIcon>
            <ElIcon
              :size="18"
              @click="handleVideoRemove(video as string)"
              class="ml-8 video-remove-icon"
            >
              <Delete />
            </ElIcon>
          </ElRow>
        </ElFormItem>
        <ElFormItem label="Video" prop="videos">
          <input
            type="file"
            multiple
            accept="video/*"
            @change="handleVideoChange"
          />
        </ElFormItem>
      </ElForm>
    </ElRow>

    <!-- Delete only -->
    <ElRow v-else-if="dialog.type === 'delete'" justify="center" class="mb-24">
      <ElCol align="middle">
        Jeste li sigurni da želite obrisati
        <b>{{ dialog.item?.name }}</b> proizvod?
      </ElCol>
      <ElCol align="middle" class="mt-12">Moguće ga je vratiti kasnije. </ElCol>
    </ElRow>

    <!-- Unarchive only -->
    <ElRow
      v-else-if="dialog.type === 'unarchive'"
      justify="center"
      class="mb-24"
    >
      <ElCol align="middle">
        Jeste li sigurni da želite vratiti
        <b>{{ dialog.item?.name }}</b> proizvod?
      </ElCol>
    </ElRow>

    <!-- Submit -->
    <ElRow v-if="isLoading.button" justify="center" class="color-primary mb-12">
      Ne prekidajte učitavanje podataka!
    </ElRow>
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

  <ElDialog v-model="fullscreenImageDialog" width="90%">
    <ElRow justify="center" align="middle">
      <img w-full :src="fullscreenImageUrl" class="preview-image" />
    </ElRow>
  </ElDialog>
</template>

<style lang="css" scoped>
.editor {
  height: 400px;
  width: 80dvw;
}
.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin-top: 12px;
}
.video-download-icon {
  cursor: pointer;
  color: var(--el-color-primary);
}
.video-remove-icon {
  cursor: pointer;
  color: var(--el-color-danger);
}
</style>
