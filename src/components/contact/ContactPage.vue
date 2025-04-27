<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  message: string
}

const { $axios } = useNuxtApp()
const ruleFormRef = ref<FormInstance>()
const loading = ref({ submit: false })
const form = reactive<RuleForm>({
  message: ''
})
const rules = reactive<FormRules<RuleForm>>({
  message: [{ min: 10, message: 'Minimalno 10 znakova', trigger: 'change' }]
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
          message: 'Poruka je uspješno poslana.',
          duration: 3000
        })
        form.message = ''
      } catch (error) {
        ElNotification({
          type: 'error',
          message: 'Došlo je do greške prilikom slanja poruke.',
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
  <div class="page-container">
    <ElRow align="middle" justify="center">
      <h1
        :class="[
          'color-primary',
          { 'mr-77': $viewport.isGreaterOrEquals('tablet') }
        ]"
      >
        Kontaktirajte nas
      </h1>
    </ElRow>

    <ElRow align="middle">
      <p><b>Imate pitanje? Naišli ste na pogrešku?</b></p>
    </ElRow>
    <ElRow align="middle">
      <p>
        Ukoliko imate bilo kakvih pitanja, prijedloga ili ste naišli na pogrešku
        u aplikaciji, slobodno nas kontaktirajte. Tu smo da vam pomognemo i
        pružimo podršku kako bismo unaprijedili vaše iskustvo.
      </p>
    </ElRow>
    <ElRow align="middle">
      <p>
        Također, ako imate ideju za poboljšanje ili želite dodati novu
        funkcionalnost, bit ćemo zahvalni na vašim prijedlozima!
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
          toni.kolaric@innova-tech.live
        </a>
      </p>
    </ElRow>

    <ElRow align="middle" justify="center">
      <h1
        :class="[
          'color-primary',
          { 'mr-77': $viewport.isGreaterOrEquals('tablet') }
        ]"
      >
        Poruka
      </h1>
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
            :disabled="form.message.length < 10"
            @click="sendMessage(ruleFormRef)"
            size="large"
            >Pošalji
          </ElButton>
        </ElRow>
      </ElForm>
    </ElRow>
  </div>
</template>
