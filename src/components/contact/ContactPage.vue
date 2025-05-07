<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

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
      <p>
        Također, ako imate određenu ideju ili želite dodati nešto novo, bit ćemo
        zahvalni na vašim prijedlozima!
      </p>
    </ElRow>
    <ElRow align="middle">
      <p>
        Naš tim će se potruditi odgovoriti u što kraćem roku i osigurati da vaša
        iskustva s aplikacijom budu što bolja.
      </p>
    </ElRow>
    <ElRow align="middle">
      <p>
        Kontaktirajte nas putem obrasca ispod ili na našu email adresu:
        <a href="mailto:toni.kolaric@innova-tech.live">
          kontakt@gastabajter.de
        </a>
      </p>
    </ElRow>
    <ElRow align="middle">
      <p>
        Želite postaviti svoju reklamu na našu web stranicu, učinite od ovdje:
        <NuxtLink to="/reklamiranje"> Gastabajter Reklamiranje </NuxtLink>
      </p>
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
        <ElFormItem label="Ime i prezime" prop="fullname">
          <ElInput
            v-model="form.fullname"
            type="text"
            placeholder="Pero Perić"
            class="max-w-250"
          />
        </ElFormItem>
        <ElFormItem label="Vaš email" prop="email">
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
