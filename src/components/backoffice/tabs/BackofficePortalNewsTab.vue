<script setup lang="ts">
import type { News, PortalCategory } from '~/types/portal'
import {
  CirclePlusFilled,
  Edit,
  DeleteFilled,
  RefreshLeft,
  Plus,
  Delete,
  ZoomIn,
  GoldMedal,
  Download,
  Search
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
  categoryId: string
  title: string
  text: string
  author: string
  images: String[] | null
  videos: String[] | null
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
  activeNews: true,
  deletedNews: true,
  categories: true,
  button: false
})
const activeNews = ref<News[]>()
const deletedNews = ref<News[]>()
const categories = ref<PortalCategory[]>()
const searchValues = ref({
  active: '',
  deleted: ''
})
const dialog = ref<{
  isOpened: boolean
  type: DialogType
  item: News | undefined
}>({
  isOpened: false,
  type: 'create',
  item: undefined
})
const form = reactive<RuleForm>({
  categoryId: '',
  title: '',
  text: '',
  author: '',
  images: [],
  videos: []
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  categoryId: [
    { required: true, message: 'Odaberite kategoriju vijesti', trigger: 'blur' }
  ],
  title: [
    { required: true, message: 'Unesite naslov vijesti', trigger: 'blur' }
  ],
  text: [{ required: true, message: 'Unesite text vijesti', trigger: 'blur' }],
  author: [
    { required: true, message: 'Unesite autora vijesti', trigger: 'blur' }
  ]
})
const activeNewsPagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})
const deletedNewspagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})
const fullscreenImageUrl = ref('')
const fullscreenImageDialog = ref(false)

onMounted(() => getAllNews())

async function getCategories() {
  isLoading.value.categories = true
  try {
    const response = await $axios.get(`/portal-category?withoutHierarchy=true`)
    categories.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.categories = false
  }
}

function getAllNews() {
  getActivePortalNews()
  getDeletedPortalNews()
}

function openDialog(type: DialogType, item?: News) {
  if (item) {
    form.categoryId = String(item.categoryId)
    form.title = String(item.title)
    form.text = String(item.text)
    form.author = String(item.author)
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

function handleActiveSearch() {
  activeNewsPagination.value.page = 1
  debounceActiveSearch()
}
const debounceActiveSearch = debounce(getActivePortalNews, 300)

async function getActivePortalNews() {
  isLoading.value.activeNews = true
  try {
    const response = await $axios.get(
      `/portal-news?page=${activeNewsPagination.value.page}&perPage=${activeNewsPagination.value.perPage}&search=${searchValues.value.active}`
    )
    activeNews.value = response.data.news
    activeNewsPagination.value.total = response.data.total
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.activeNews = false
  }
}

function handleDeletedSearch() {
  deletedNewspagination.value.page = 1
  debounceDeletedSearch()
}
const debounceDeletedSearch = debounce(getDeletedPortalNews, 300)

async function getDeletedPortalNews() {
  isLoading.value.deletedNews = true
  try {
    const response = await $axios.get(
      `/portal-news?deletedOnly=true&page=${deletedNewspagination.value.page}&perPage=${deletedNewspagination.value.perPage}&search=${searchValues.value.deleted}`
    )
    deletedNews.value = response.data.news
    deletedNewspagination.value.total = response.data.total
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.deletedNews = false
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
  form.categoryId = ''
  form.title = ''
  form.text = ''
  form.author = ''
  form.images = null
  form.videos = null
  fileList.value = {
    images: [],
    videos: []
  }
  dialog.value.isOpened = false
}

async function handleCreate(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      isLoading.value.button = true
      await uploadDataToCloudinary()
      try {
        await $axios.post('/portal-news', form)
        getAllNews()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste dodali novu vijest.')
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
        await $axios.put(`/portal-news/${dialog.value.item?.id}`, form)
        getAllNews()
        handleCloseDialog()
        showSuccessMessage('Uspješno ste uredili vijest.')
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
    await $axios.delete(`/portal-news/${dialog.value.item?.id}`)
    getAllNews()
    handleCloseDialog()
    showSuccessMessage('Uspješno ste obrisali vijest.')
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value.button = false
  }
}

async function handleUnarchive() {
  isLoading.value.button = true
  try {
    await $axios.patch(`/portal-news/${dialog.value.item?.id}/unarchive`)
    getAllNews()
    handleCloseDialog()
    showSuccessMessage('Uspješno ste vratili obrisanu vijest.')
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
        <h3 class="color-primary">Portal vijesti</h3>
      </ElCol>
      <ElCol :span="6" align="end">
        <ElButton type="primary" plain @click="openDialog('create')">
          <ElIcon size="24">
            <CirclePlusFilled />
          </ElIcon>
          <span class="ml-8">Dodaj vijest</span>
        </ElButton>
      </ElCol>
    </ElRow>

    <ElRow justify="center" align="middle" class="w-100">
      <ElCol :span="8" :offset="8" align="center">
        <span class="color-primary"><b>Aktivne vijesti</b></span>
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
      :data="activeNews"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading.activeNews"
    >
      <ElTableColumn label="Naslov" prop="title" />
      <ElTableColumn label="Kategorija" prop="category.name" />
      <ElTableColumn label="Autor" prop="author" />
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
      v-if="activeNewsPagination.total > 10"
      v-model="activeNewsPagination"
      :loading="isLoading.deletedNews"
      scroll-element-id="scroll-element"
      @page-change="getActivePortalNews"
      class="mb-24"
    />

    <ElRow justify="center" align="middle" class="w-100">
      <ElCol :span="8" :offset="8" align="center">
        <span class="color-primary"><b>Obrisane vijesti</b></span>
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
      :data="deletedNews"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading.deletedNews"
    >
      <ElTableColumn label="Naslov" prop="title" />
      <ElTableColumn label="Kategorija" prop="category.name" />
      <ElTableColumn label="Autor" prop="author" />
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
      v-if="deletedNewspagination.total > 10"
      v-model="deletedNewspagination"
      :loading="isLoading.deletedNews"
      scroll-element-id="scroll-element"
      @page-change="getDeletedPortalNews"
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
        <ElFormItem label="Kategorija" prop="categoryId">
          <ElSelect
            v-model="form.categoryId"
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
            v-model="form.title"
            placeholder="Moja vijest"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Autor" prop="author">
          <ElInput
            v-model="form.author"
            placeholder="John Doe"
            class="input-width"
          />
        </ElFormItem>
        <div style="height: 450px">
          <ElFormItem label="Sadržaj" prop="text">
            <Editor v-model="form.text" class="editor" />
          </ElFormItem>
        </div>
        <ElFormItem label="Slike" prop="images" class="mt-12">
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
        <b>{{ dialog.item?.title }}</b> vijest?
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
        <b>{{ dialog.item?.title }}</b> vijest?
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
