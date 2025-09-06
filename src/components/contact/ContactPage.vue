<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import FacebookIcon from '~/assets/icons/facebook.vue'
import InstagramIcon from '~/assets/icons/instagram.vue'
import TikTokIcon from '~/assets/icons/tiktok.vue'

interface RuleForm {
  fullname: string
  email: string
  message: string
}

const { $axios } = useNuxtApp()
const ruleFormRef = ref<FormInstance>()
const loading = ref({ submit: false })
const form = reactive<RuleForm>({
  fullname: '',
  email: '',
  message: ''
})
const rules = reactive<FormRules<RuleForm>>({
  fullname: [{ max: 100, message: 'Maximalno 100 znakova', trigger: 'change' }],
  email: [
    { required: true, message: 'Unesite email adresu', trigger: 'blur' },
    {
      validator: (_, value, callback) => {
        if (!validateEmail(value)) callback(new Error('Netočna email adresa'))
        else callback()
      },
      trigger: 'blur'
    }
  ],
  message: [
    { min: 10, message: 'Minimalno 10 znakova', trigger: 'change' },
    { max: 10000, message: 'Maximalno 10,000 znakova', trigger: 'change' }
  ]
})

async function sendMessage(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      loading.value.submit = true
      try {
        await $axios.post(`/contact/email`, form)
        ElNotification({
          type: 'success',
          message: 'Email je uspješno poslan.',
          duration: 3000
        })
        form.fullname = ''
        form.email = ''
        form.message = ''
      } catch (error) {
        ElNotification({
          type: 'error',
          message: 'Došlo je do greške prilikom slanja emaila.',
          duration: 3000
        })
        console.error('API Error:', error)
      } finally {
        loading.value.submit = false
      }
    }
  })
}
</script>

<template>
  <div class="page-container mb-24">
    <ElRow align="middle" justify="center">
      <h1 class="color-primary">Kontaktirajte nas</h1>
    </ElRow>

    <ElRow align="middle">
      <p><b>Imate pitanje?</b></p>
    </ElRow>
    <ElRow align="middle">
      <p>
        Ukoliko imate bilo kakvih pitanja ili prijedloga slobodno nas
        kontaktirajte. Tu smo da vam pomognemo i pružimo podršku kako bismo
        unaprijedili naše zajedničko iskustvo.
      </p>
    </ElRow>
    <ElRow align="middle">
      <p>Također, ako imate određenu ideju, javite nam se!</p>
    </ElRow>
    <ElRow align="middle">
      <p>
        Naš tim će se potruditi odgovoriti u što kraćem roku i osigurati da vaša
        iskustva s budu što bolja.
      </p>
    </ElRow>
    <ElRow align="middle">
      <p>
        Kontaktirajte nas putem obrasca ispod ili na našu email adresu:
        <a href="mailto:toni.kolaric@innova-tech.live"> kontakt@s.art </a>
      </p>
    </ElRow>
    <ElRow>
      <ElCol class="small-text">s.art, obrt za umjetničko stvaralaštvo</ElCol>
      <ElCol class="small-text">Baćina 2, 51219 Čavle</ElCol>
      <ElCol class="small-text">Matični broj: 98880349</ElCol>
      <ElCol class="small-text">OIB: 76720947227</ElCol>
      <ElCol class="small-text">Telefon: +385 99 7900 257</ElCol>
      <ElCol class="small-text">Banka: Erste&Steiermärkische Bank d.d.</ElCol>
      <ElCol class="small-text">SWIFT/BIC: ESBCHR22</ElCol>
      <ElCol class="small-text">IBAN: HR5124020061140578266</ElCol>
    </ElRow>

    <ElRow justify="center" align="middle" class="w-100 mt-16">
      <NuxtLink
        to="https://web.facebook.com/people/sart/61566776001032"
        class="icon-link ml-4"
        target="_blank"
      >
        <ElIcon :size="40">
          <FacebookIcon />
        </ElIcon>
      </NuxtLink>
      <NuxtLink
        to="https://www.instagram.com/svjetlana_art"
        class="icon-link ml-4"
        target="_blank"
      >
        <ElIcon :size="40">
          <InstagramIcon />
        </ElIcon>
      </NuxtLink>
      <NuxtLink
        to="https://www.tiktok.com/@svjetlanaart"
        class="icon-link ml-4"
        target="_blank"
      >
        <ElIcon :size="40">
          <TikTokIcon />
        </ElIcon>
      </NuxtLink>
    </ElRow>

    <ElRow align="middle" justify="center">
      <h1 class="color-primary">Poruka</h1>
    </ElRow>

    <ElRow justify="center">
      <ElForm
        :label-position="$viewport.isLessThan('tablet') ? 'top' : 'left'"
        require-asterisk-position="right"
        ref="ruleFormRef"
        class="form"
        :model="form"
        :rules="rules"
        label-width="auto"
        status-icon
        style="width: 100%"
      >
        <ElFormItem label="" prop="fullname">
          <ElInput
            v-model="form.fullname"
            type="text"
            placeholder="Pero Perić"
            class="max-w-250"
          />
        </ElFormItem>
        <ElFormItem label="" prop="email">
          <ElInput
            v-model="form.email"
            type="text"
            placeholder="pero.peric@mail.com"
            class="max-w-250"
          />
        </ElFormItem>
        <ElFormItem prop="message">
          <ElInput
            v-model="form.message"
            :autosize="{ minRows: 6 }"
            type="textarea"
            placeholder="Poruka..."
          />
        </ElFormItem>
        <ElRow
          align="middle"
          :justify="$viewport.isLessThan('tablet') ? 'center' : 'end'"
          class="mt-16"
        >
          <ElButton
            type="primary"
            :loading="loading.submit"
            @click="sendMessage(ruleFormRef)"
            size="large"
            >Pošalji
          </ElButton>
        </ElRow>
      </ElForm>
    </ElRow>
  </div>
</template>

<style scoped>
p {
  font-weight: 600;
  letter-spacing: 0.75px;
  color: #aaaaaa;
}
.small-text {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.75px;
  color: #aaaaaa;
}
.icon-link {
  color: var(--el-text-color-secondary);
  transition: 0.3s ease-in-out;
}
.icon-link:hover {
  color: var(--el-color-primary);
}
</style>
