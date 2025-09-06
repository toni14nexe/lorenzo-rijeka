<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { useCookie } from 'nuxt/app'

interface RuleForm {
  email: string
  password: string
}

const router = useRouter()
const { $axios, $viewport } = useNuxtApp()
const ruleFormRef = ref<FormInstance>()
const emit = defineEmits(['changeToForgottenPassword'])
const btnLoading = ref(false)
const verificationToken = ref(router.currentRoute.value.query.token)
const resendVerificationEmail = ref('')
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

onMounted(() => checkVerificationToken())

function checkVerificationToken() {
  if (verificationToken.value) accountVerification()
}

async function accountVerification() {
  router.replace({ params: {} })
  try {
    const response = await $axios.put('/auth/account-verification', {
      token: verificationToken.value
    })
    if (response.data.message === 'Email verified successfully')
      ElNotification({
        type: 'success',
        message:
          'Račun vam je uspješno potvrđen. Sada možete pristupiti aplikaciji putem prijave.',
        duration: 0
      })
  } catch (error) {
    console.error('API Error:', error)
  }
}

async function sendNewVerificationEmail() {
  ElNotification.closeAll()
  try {
    await $axios.put('/auth/resend-verification', {
      email: resendVerificationEmail.value
    })
    ElNotification({
      type: 'success',
      message:
        'Poslan vam je verifikacijski email. Provjerite poštu i obavite verikaciju prije prijave.',
      duration: 0
    })
  } catch (error) {
    console.error('API Error:', error)
  } finally {
  }
}

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

        router.push('/dashboard')
      } catch (error: any) {
        if (error.response.data.message === 'Account is not verified yet') {
          ElNotification({
            type: 'error',
            message: h('div', [
              h(
                'p',
                'Račun vam nije verificiran. Provjerite email i verificirajte račun. Ako niste primili email:'
              ),
              h(
                'button',
                {
                  onClick: sendNewVerificationEmail,
                  style: {
                    color: 'white',
                    backgroundColor: '#F3EF88',
                    padding: '8px 12px',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }
                },
                'Pošalji novi'
              )
            ]),
            duration: 0
          })
          resendVerificationEmail.value = form.email
        } else console.error('API Error:', error)
      } finally {
        btnLoading.value = false
      }
    }
  })
}
</script>

<template>
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
      <ElFormItem
        label="Email"
        prop="email"
        v-motion-slide-right
        :duration="1000"
      >
        <ElInput
          v-model="form.email"
          placeholder="prefix@email.com"
          class="input-width"
          @keyup.enter="handleLogin(ruleFormRef)"
        />
      </ElFormItem>
    </ElRow>

    <ElRow justify="center">
      <ElFormItem
        label="Lozinka"
        prop="password"
        v-motion-slide-left
        :duration="1000"
      >
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

    <ElRow justify="center" v-motion-slide-bottom :duration="1000">
      <ElButton
        type="primary"
        @click="handleLogin(ruleFormRef)"
        :loading="btnLoading"
      >
        Prijava
      </ElButton>
    </ElRow>
    <ElRow justify="center" v-motion-slide-bottom :duration="1000">
      <p class="forgotten-password" @click="emit('changeToForgottenPassword')">
        Zaboravili ste lozinku?
      </p>
    </ElRow>
  </ElForm>
</template>

<style scoped>
.form {
  min-width: 300px;
}

.input-width {
  width: 230px;
}

.forgotten-password {
  color: var(--el-color-primary);
  text-underline-offset: 3px;
}
.forgotten-password:hover {
  cursor: pointer;
  text-decoration: underline;
}

.center-form {
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
}
</style>
