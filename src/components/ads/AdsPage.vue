<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  email: string
  adId: string
  message: string
}

const { $axios } = useNuxtApp()
const adStore = useAdStore()
const { adsLoading, dashboardSide, footerSlider, footerLarge } =
  storeToRefs(adStore)
const ruleFormRef = ref<FormInstance>()
const loading = ref({ submit: false })
const form = reactive<RuleForm>({
  email: '',
  adId: '',
  message: ''
})
const rules = reactive<FormRules<RuleForm>>({
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
  adId: [{ required: true, message: 'Unesite email adresu', trigger: 'blur' }],
  message: [
    { max: 10000, message: 'Maximalno 10,000 znakova', trigger: 'change' }
  ]
})

async function sendEmail(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      loading.value.submit = true
      try {
        await $axios.post(`/ad/email`, form)
        ElNotification({
          type: 'success',
          message: 'Email je uspješno poslan.',
          duration: 3000
        })
        form.email = ''
        form.adId = ''
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
      <h1 class="color-primary">Reklamiranje</h1>
    </ElRow>

    <ElRow align="middle" justify="center">
      <ElCol :span="24" align="middle">
        <h3 class="color-primary">Ponuda na naslovnici</h3>
      </ElCol>
      <ElCol :span="24">
        <img
          src="https://res.cloudinary.com/dtp08anpy/image/upload/v1746656871/1_rqrx5b.png"
          class="offer-image"
        />
      </ElCol>
    </ElRow>

    <ElRow align="middle" justify="center">
      <ElCol :span="24" align="middle">
        <h3 class="color-primary">Ponuda u podnožju</h3>
      </ElCol>
      <ElCol :span="24">
        <img
          src="https://res.cloudinary.com/dtp08anpy/image/upload/v1746656871/2_o3xcor.png"
          class="offer-image"
        />
      </ElCol>
    </ElRow>

    <ElRow align="middle" justify="center">
      <ElCol :span="24" align="middle">
        <h3 class="color-primary">Cijene</h3>
      </ElCol>
      <ElSkeleton v-if="adsLoading" animated>
        <template #template>
          <ElCol v-for="_ in 7" align="middle">
            <ElSkeletonItem
              variant="text"
              style="height: 21px; margin: 7px 0; width: 150px"
            />
          </ElCol>
        </template>
      </ElSkeleton>
      <ElCol v-else :span="24" align="middle">
        <p v-for="ad in dashboardSide">
          Reklama {{ ad.id }} -
          {{ ad.price ? `${Number(ad.price).toFixed(2)} €` : '???.?? €' }}
        </p>
        <p v-for="ad in footerSlider">
          Reklama {{ ad.id }} -
          {{ ad.price ? `${Number(ad.price).toFixed(2)} €` : '???.?? €' }}
        </p>
        <p>
          Reklama {{ footerLarge.id }} -
          {{
            footerLarge.price
              ? `${Number(footerLarge.price).toFixed(2)} €`
              : '???.?? €'
          }}
        </p>
      </ElCol>
    </ElRow>

    <ElRow align="middle" justify="center">
      <h3 class="color-primary">Zatražite reklamu</h3>
    </ElRow>

    <ElRow align="middle">
      <p>Odaberite reklamu, pošaljite zahtijev i sačekajte naš odgovor!</p>
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
        <ElFormItem label="Vaš email" prop="email">
          <ElInput
            v-model="form.email"
            type="text"
            placeholder="pero.peric@mail.com"
            class="max-w-250"
          />
        </ElFormItem>
        <ElFormItem label="Reklama" prop="adId">
          <ClientOnly>
            <ElSelect
              v-model="form.adId"
              placeholder="Odaberite kategoriju"
              :loading="adsLoading"
              class="max-w-250"
            >
              <ElOption
                v-for="ad in dashboardSide"
                :key="String(ad.id)"
                :label="String(ad.id)"
                :value="String(ad.id)"
              />
              <ElOption
                v-for="ad in footerSlider"
                :key="String(ad.id)"
                :label="String(ad.id)"
                :value="String(ad.id)"
              />
              <ElOption
                :label="String(footerLarge.id)"
                :value="footerLarge.id"
              />
            </ElSelect>
          </ClientOnly>
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
            @click="sendEmail(ruleFormRef)"
            size="large"
            >Pošalji
          </ElButton>
        </ElRow>
      </ElForm>
    </ElRow>
  </div>
</template>

<style lang="css" scoped>
.offer-image {
  width: 100%;
}
</style>
