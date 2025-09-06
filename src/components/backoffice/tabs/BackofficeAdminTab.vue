<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  password: string
  passwordConfirmation: string
}

const { $axios } = useNuxtApp()
const loadingBtn = ref(false)
const form = reactive<RuleForm>({
  password: '',
  passwordConfirmation: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  password: [
    { required: true, message: 'Unesite lozinku', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (!validatePassword(value))
          callback(
            new Error(
              'Morate koristiti mala i velika slova, brojeve i specijalni znak'
            )
          )
        else callback()
      },
      trigger: 'change'
    }
  ],
  passwordConfirmation: [
    { required: true, message: 'Unesite potvrdu lozinke', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (!isValuesEqual(value, form.password))
          callback(new Error('Lozinke se ne podudaraju'))
        else callback()
      },
      trigger: 'change'
    }
  ]
})

async function handleEdit(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      loadingBtn.value = true
      try {
        await $axios.put('/users/user', { password: form.password })
        ElNotification({
          type: 'success',
          message: 'Uspješno ste promijenili lozinku.',
          duration: 3000
        })
      } catch (error) {
        console.error('API Error:', error)
      } finally {
        loadingBtn.value = false
      }
    }
  })
}
</script>

<template>
  <div class="backoffice-page">
    <ElRow justify="center">
      <h3 class="color-primary">Admin</h3>
    </ElRow>

    <ElRow justify="center">
      <span class="color-primary"><b>Promijena lozinke</b></span>
    </ElRow>
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
      <ElFormItem label="Lozinka" prop="password">
        <ElInput
          v-model="form.password"
          type="password"
          placeholder="********"
          show-password
          class="input-width"
        />
      </ElFormItem>
      <ElFormItem
        label="Potvrda lozinke"
        prop="passwordConfirmation"
        class="mt-36"
      >
        <ElInput
          v-model="form.passwordConfirmation"
          type="password"
          placeholder="********"
          show-password
          class="input-width"
        />
      </ElFormItem>
      <ElRow justify="center">
        <ElButton
          type="primary"
          plain
          @click="handleEdit(ruleFormRef)"
          :loading="loadingBtn"
          >Promijeni
        </ElButton>
      </ElRow>
    </ElForm>
  </div>
</template>

<style lang="css" scoped></style>
