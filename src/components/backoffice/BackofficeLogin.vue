<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { useCookie } from 'nuxt/app'

interface RuleForm {
  email: string
  password: string
}

const emit = defineEmits(['login-success'])

const { $axios } = useNuxtApp()
const btnLoading = ref(false)
const ruleFormRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  email: '',
  password: ''
})
const rules = reactive<FormRules<RuleForm>>({
  email: [
    { required: true, message: 'Unesite email adresu', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (!validateEmail(value)) callback(new Error('Netočna email adresa'))
        else callback()
      },
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: 'Unesite lozinku', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (!validatePassword(value)) callback(new Error('Netočna lozinka'))
        else callback()
      },
      trigger: 'blur'
    }
  ]
})

async function handleLogin(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      btnLoading.value = true
      try {
        const response = await $axios.post('/auth/login', form)

        const bearerCookie = useCookie('bearer_token', {
          maxAge: 60 * 60 * 2, // 2h
          secure: true
        })
        bearerCookie.value = response.data.token

        const roleCookie = useCookie('role', {
          maxAge: 60 * 60 * 2, // 2h
          secure: true
        })
        roleCookie.value = response.data.role

        const activitiesCookie = useCookie('activities', {
          maxAge: 60 * 60 * 2, // 2h
          secure: true
        })
        activitiesCookie.value = response.data.activities
        emit('login-success')
      } catch (error: any) {
        console.error('API Error:', error)
      } finally {
        btnLoading.value = false
      }
    }
  })
}
</script>

<template>
  <div class="page-container">
    <ElRow justify="center" align="middle" class="main-row">
      <div>
        <ElCol :span="24">
          <ElRow justify="center" align="middle">
            <h2 class="color-primary">Backoffice prijava</h2>
          </ElRow>
        </ElCol>

        <ElCol :span="24">
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
            <ElRow justify="center">
              <ElFormItem label="Email" prop="email">
                <ElInput
                  v-model="form.email"
                  placeholder="prefix@email.com"
                  class="input-width"
                  @keyup.enter="handleLogin(ruleFormRef)"
                />
              </ElFormItem>
            </ElRow>

            <ElRow justify="center">
              <ElFormItem label="Lozinka" prop="password">
                <ElInput
                  v-model="form.password"
                  type="password"
                  placeholder="********"
                  show-password
                  class="input-width"
                  @keyup.enter="handleLogin(ruleFormRef)"
                />
              </ElFormItem>
            </ElRow>

            <ElRow justify="center">
              <ElButton
                type="primary"
                @click="handleLogin(ruleFormRef)"
                :loading="btnLoading"
              >
                Prijava
              </ElButton>
            </ElRow>
          </ElForm>
        </ElCol>
      </div>
    </ElRow>
  </div>
</template>

<style lang="css" scoped>
.main-row {
  min-height: 100dvh;
}
</style>
