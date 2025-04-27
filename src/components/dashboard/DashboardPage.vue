<!-- KADA SE PLATI NETLIFY POVEĆATI REQUEST TIMEOUT I PRIKAZATI OVAKO SA STATISTIKOM
 
<script setup lang="ts">
import WebsiteIcon from '~/assets/icons/website.vue'

const cookieActivities = useCookie('activities')
const cookieActivitiesLenght = ref(0)
const { $axios } = useNuxtApp()
const activities = shallowRef<any>()
const loading = ref(true)

onMounted(() => getDashboardActivities())

async function getDashboardActivities() {
  cookieActivitiesLenght.value =
    Object.keys(cookieActivities.value ?? []).length || 1
  loading.value = true
  try {
    const response = await $axios.get('/user-statistics/dashboard')
    activities.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    loading.value = false
  }
}

function getTitle(title: string) {
  if (title === 'alcoholic-beverages') return 'Alkoholna pića'
  else if (title === 'beekeeping') return 'Pčelarstvo'
  else if (title === 'cattle-breeding') return 'Stočarstvo'
  else if (title === 'consulting-services') return 'Konzultantske usluge'
  else if (title === 'educational-services') return 'Edukacijske usluge'
  else if (title === 'farming') return 'Ratarstvo'
  else if (title === 'fruit-farming') return 'Voćarstvo'
  else if (title === 'medicinal-plants') return 'Ljekovito bilje'
  else if (title === 'nursery') return 'Rasadničarstvo'
  else if (title === 'olive-growing') return 'Maslinarstvo'
  else if (title === 'seed-production') return 'Sjemenska proizvodnja'
  else if (title === 'trade-and-services') return 'Trgovina i usluge'
  else if (title === 'vegetable-growing') return 'Povrtlarstvo'
  else if (title === 'viticulture') return 'Vinogradarstvo'
}
</script>

<template>
  <div class="page-container">
    <div v-if="loading" v-for="_ in cookieActivitiesLenght">
      <ElSkeleton>
        <template #template>
          <ElRow align="middle" justify="space-between" class="skeleton-row">
            <ElSkeletonItem variant="h1" class="skeleton-title" />
            <ElSkeletonItem variant="button" class="skeleton-button" />
          </ElRow>
        </template>
      </ElSkeleton>
      <ElRow v-for="(_, row) in 2" :gutter="24" :class="{ 'mt-24': row > 0 }">
        <ElCol :span="8" v-for="_ in 3">
          <ElCard class="skeleton-card">
            <ElSkeleton :rows="1" animated />
          </ElCard>
        </ElCol>
      </ElRow>
    </div>

    <div v-else v-for="(activity, name) in activities">
      <ElRow align="middle" justify="space-between">
        <NuxtLink :to="String(name)" class="link-fix">
          <h1 class="color-primary">
            {{ getTitle(String(name)) }}
          </h1>
        </NuxtLink>
        <NuxtLink :to="String(name)" class="link-fix">
          <ElButton type="primary" size="large">
            <ElIcon size="24" class="mr-8">
              <WebsiteIcon />
            </ElIcon>
            Posjeti stranicu
          </ElButton>
        </NuxtLink>
      </ElRow>
      <ElRow :gutter="24">
        <ElCol
          v-for="(stat, statName, index) in activity"
          :span="8"
          :class="{ 'mt-24': index > 2 }"
        >
          <ElCard>
            <ElStatistic
              :title="formatCamelToNormalCase(statName)"
              :value="useAnimatedNumber(stat ?? 0)"
            >
            </ElStatistic>
          </ElCard>
        </ElCol>
      </ElRow>
    </div>
  </div>
</template>

<style scoped>
.skeleton-row {
  margin: 16px 0;
}
.skeleton-title {
  height: 32px;
  width: 167px;
}
.skeleton-button {
  height: 40px;
  width: 167px;
}
.skeleton-card {
  height: 91px;
}
</style>
 -->

<script setup lang="ts">
import Activities from '~/components/shared/Activities.vue'
import Terms from '~/components/shared/Terms.vue'
import SettingsIcon from '~/assets/icons/settings.vue'
import MessageIcon from '~/assets/icons/message.vue'

const { $viewport } = useNuxtApp()
const { licenceType, licenceLifetime, licenceExpiration } =
  storeToRefs(useUserStore())
const warningText = ref()

onMounted(() => setWarningText())

function setWarningText() {
  if (!licenceLifetime.value) {
    const now = new Date()
    const expiration = new Date(licenceExpiration.value)
    const differenceInTime = expiration.getTime() - now.getTime()
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24))
    if (licenceType.value === 'trial')
      warningText.value = `Koristite probnu licencu koja istiće ${formatISOToDatetime(licenceExpiration.value)}. Nabavite ju što prije da biste ne ometano nastavili koristiti aplikaciju.`
    else if (differenceInDays < 20) {
      warningText.value = `Vaša licenca istiće ${formatISOToDatetime(licenceExpiration.value)}. Obnovite ju što prije da biste ne ometano nastavili koristiti aplikaciju.`
    }
  }
}
</script>

<template>
  <div class="page-container">
    <ElRow
      align="middle"
      justify="center"
      v-motion-slide-top
      :duration="300"
      :delay="1000"
    >
      <h1
        class="color-primary"
        :class="{ 'mr-77': $viewport.isGreaterOrEquals('tablet') }"
      >
        Usluge
      </h1>
    </ElRow>

    <ClientOnly>
      <Activities :logged-user="true" />
    </ClientOnly>

    <ElRow
      align="middle"
      justify="center"
      v-motion-slide-bottom
      :duration="300"
      :delay="1000"
    >
      <NuxtLink
        to="/settings"
        class="link-fix"
        :class="{ 'mr-77': $viewport.isGreaterOrEquals('tablet') }"
      >
        <ElButton
          type="primary"
          :size="$viewport.isLessThan('tablet') ? 'default' : 'large'"
        >
          <ElIcon size="24" class="mr-8">
            <SettingsIcon />
          </ElIcon>
          Upravljaj uslugama
        </ElButton>
      </NuxtLink>
    </ElRow>

    <br /><br />

    <ElRow
      align="middle"
      justify="center"
      v-motion-slide-bottom
      :duration="300"
      :delay="1000"
    >
      <h1
        class="color-primary"
        :class="{ 'mr-77': $viewport.isGreaterOrEquals('tablet') }"
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
      <NuxtLink
        to="/contact"
        class="link-fix"
        :class="{ 'mr-77': $viewport.isGreaterOrEquals('tablet') }"
      >
        <ElButton type="primary" size="large">
          <ElIcon size="24" class="mr-8">
            <MessageIcon />
          </ElIcon>
          Kontaktirajte nas
        </ElButton>
      </NuxtLink>
    </ElRow>

    <ClientOnly>
      <Terms :logged-user="true" />
    </ClientOnly>
  </div>
</template>
