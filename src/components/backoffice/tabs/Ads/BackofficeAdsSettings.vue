<script setup lang="ts">
import { Edit, DeleteFilled } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { Ad } from '~/types/ad'

type DialogType = 'edit' | 'remove'
interface RuleForm {
  id: string
  url: string
  imageUrl: string
  price: number
}

defineProps<{ ads: Ad[] }>()
const emit = defineEmits<{
  (e: 'save'): void
}>()

const { $axios } = useNuxtApp()
const dialog = ref<{
  isOpened: boolean
  type: DialogType
  item: Ad | undefined
}>({
  isOpened: false,
  type: 'edit',
  item: undefined
})
const form = reactive<RuleForm>({
  id: '',
  url: '',
  imageUrl: '',
  price: 0
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  imageUrl: [
    {
      required: true,
      message: 'Unesite link slike za reklamu',
      trigger: 'blur'
    }
  ],
  price: [
    { required: true, message: 'Unesite cijenu reklame', trigger: 'blur' }
  ]
})
const buttonLoading = ref(false)

function openDialog(type: DialogType, item?: Ad) {
  if (item) {
    form.id = String(item.id)
    form.imageUrl = item.imageUrl ? String(item.imageUrl) : ''
    form.url = item.url ? String(item.url) : ''
    form.price = Number(item.price)
  }
  dialog.value = {
    isOpened: true,
    type,
    item
  }
}

function handleCloseDialog() {
  form.id = ''
  form.imageUrl = ''
  form.url = ''
  form.price = 0
  dialog.value.isOpened = false
}

function handleSubmitButton(formEl: FormInstance | undefined) {
  if (dialog.value.type === 'edit') handleEdit()
  else if (dialog.value.type === 'remove') handleRemove()
}

async function handleEdit() {
  buttonLoading.value = true
  try {
    await $axios.put(`/ad/update`, form)
    emit('save')
    ElNotification({
      type: 'success',
      message: 'Uspješno ste spremili promijene na reklami.',
      duration: 3000
    })
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    buttonLoading.value = false
  }
}

async function handleRemove() {
  buttonLoading.value = true
  try {
    await $axios.patch(`/ad/remove`, { id: dialog.value.item?.id })
    emit('save')
    handleCloseDialog()
    showSuccessMessage('Uspješno ste uklonili reklamu.')
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    buttonLoading.value = false
  }
}

function showSuccessMessage(message: string) {
  ElNotification({
    type: 'success',
    message,
    duration: 3000
  })
}
</script>

<template>
  <div class="backoffice-page mt-24 mb-24">
    <ElRow justify="center" align="middle">
      <span class="color-primary"><b>Reklame</b></span>
    </ElRow>

    <ElTable :data="ads" stripe empty-text="Nema dostupnih podataka">
      <ElTableColumn label="Pozicija" prop="id" />
      <ElTableColumn label="Status">
        <template #default="items">
          <ElTag v-if="items.row.imageUrl" type="success">Aktivna</ElTag>
          <ElTag v-else type="danger">Neaktivna</ElTag>
        </template>
      </ElTableColumn>
      <ElTableColumn label="Cijena">
        <template #default="items">
          {{ Number(items.row.price).toFixed(2) }} €
        </template>
      </ElTableColumn>
      <ElTableColumn label="Akcije" width="148" align="center">
        <template #default="items">
          <ElButton type="primary" plain @click="openDialog('edit', items.row)">
            <ElIcon size="24">
              <Edit />
            </ElIcon>
          </ElButton>
          <ElButton
            type="danger"
            plain
            @click="openDialog('remove', items.row)"
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
          <span v-if="dialog.type === 'remove'">Ukloni reklamu</span>
          <span v-else-if="dialog.type === 'edit'">Uredi reklamu</span>
        </h3>
      </ElRow>
    </template>
    <!-- Edit only -->
    <ElRow v-if="dialog.type === 'edit'" justify="center">
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
        <ElFormItem label="Link slike" prop="imageUrl">
          <ElInput
            v-model="form.imageUrl"
            placeholder="https://link-moje-slike.com"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Link poveznice" prop="url">
          <ElInput
            v-model="form.url"
            placeholder="https://moja-poveznica.com"
            class="input-width"
          />
        </ElFormItem>
        <ElFormItem label="Cijena" prop="price">
          <ElInputNumber
            v-model="form.price"
            :precision="2"
            placeholder="100.00"
            :step="1"
            class="input-width"
          >
            <template #suffix>€</template>
          </ElInputNumber>
        </ElFormItem>
      </ElForm>
    </ElRow>

    <!-- Remove only -->
    <ElRow v-else-if="dialog.type === 'remove'" justify="center" class="mb-24">
      <ElCol align="middle">
        Jeste li sigurni da želite ukloniti reklamu ID:
        <b>{{ dialog.item?.id }}</b
        >?
      </ElCol>
      <ElCol align="middle" class="mt-12"
        >Reklama će u tom slučaju ostati prazna.</ElCol
      >
    </ElRow>

    <ElRow v-if="buttonLoading" justify="center" class="color-primary mb-12">
      Ne prekidajte učitavanje podataka!
    </ElRow>
    <ElRow justify="center" class="mt-16">
      <ElButton
        :type="dialog.type === 'edit' ? 'primary' : 'danger'"
        plain
        @click="handleSubmitButton(ruleFormRef)"
        :loading="buttonLoading"
      >
        <span v-if="dialog.type === 'edit'">Uredi</span>
        <span v-else-if="dialog.type === 'remove'">Ukloni</span>
      </ElButton>
    </ElRow>
  </ElDialog>
</template>

<style lang="css" scoped></style>
