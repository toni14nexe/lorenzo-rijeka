<script setup lang="ts">
import backgroundImage from '@/assets/images/7.jpg'
import image1 from '@/assets/images/1.jpeg'
import image2 from '@/assets/images/2.jpeg'
import image8 from '@/assets/images/8.png'
import vidimoSeURI from '@/assets/images/vidimo-se-u-ri.jpeg'
import Categories from '~/components/shared/Categories.vue'
import { ArrowRight, Search } from '@element-plus/icons-vue'

useHead({
  title: 'Naslovnica',
  meta: [
    {
      name: 's.art naslovnica',
      content:
        'Inspirirani ljepotom našeg grada, kroz dizajn prenosimo energiju grada i stvaramo jedinstvene komade koij pričaju priču. Umjetnost koja se nosi, strast koja nas pokreće.'
    },
    { property: 'og:title', content: 'Kontakt' },
    {
      property: 'og:description',
      content:
        'Inspirirani ljepotom našeg grada, kroz dizajn prenosimo energiju grada i stvaramo jedinstvene komade koij pričaju priču. Umjetnost koja se nosi, strast koja nas pokreće.'
    }
  ]
})

useSeoMeta({
  description:
    'Inspirirani ljepotom našeg grada, kroz dizajn prenosimo energiju grada i stvaramo jedinstvene komade koij pričaju priču. Umjetnost koja se nosi, strast koja nas pokreće.',
  ogTitle: `Kontakt`,
  ogDescription:
    'Inspirirani ljepotom našeg grada, kroz dizajn prenosimo energiju grada i stvaramo jedinstvene komade koij pričaju priču. Umjetnost koja se nosi, strast koja nas pokreće.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
})

const route = useRoute()
const searchValue = ref('')

watch(
  () => route.path,
  () => {
    if (route.name !== 'pretrazivanje') searchValue.value = ''
  }
)

function handleSearch() {
  if (searchValue.value.trim().length < 3)
    ElNotification({
      type: 'warning',
      message: 'Vrijednost pretraživanja ne smije biti kraća od 3 znaka!',
      duration: 3000
    })
  else if (searchValue.value.trim().length > 100)
    ElNotification({
      type: 'warning',
      message: 'Vrijednost pretraživanja ne smije biti duža od 100 znakova!',
      duration: 3000
    })
  else {
    navigateTo(`/pretrazivanje?value=${searchValue.value}`)
  }
}
</script>

<template>
  <div class="mb-24">
    <div
      class="container"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      v-motion-slide-left
      :duration="1000"
      :delay="300"
    >
      <div v-motion-slide-top :duration="1000" :delay="600">
        <ElIcon :size="28">
          <Search />
        </ElIcon>
        <input
          v-model="searchValue"
          placeholder="PRETRAŽI"
          class="search"
          @keyup.enter="handleSearch"
        />
      </div>
      <ElRow>
        <ElCol :span="8" align="center">
          <div
            class="big-title"
            v-motion-slide-left
            :duration="1000"
            :delay="900"
          >
            S.ART
          </div>
        </ElCol>
        <ElCol :span="16" />
        <ElCol :span="8" align="center">
          <div
            class="waves-image"
            :style="{ backgroundImage: `url(${image8})` }"
            v-motion-slide-bottom
            :duration="1000"
            :delay="1200"
          />
        </ElCol>
        <ElCol :span="16" />
        <ElCol>
          <NuxtLink
            to="/webshop"
            class="webshop-button"
            v-motion-slide-left
            :duration="1000"
            :delay="1500"
          >
            TRGOVINA
            <ElIcon :size="28" class="ml-16">
              <ArrowRight />
            </ElIcon>
          </NuxtLink>
        </ElCol>
        <ElCol class="paragraph"> STIL KOJI TEČE S TOBOM </ElCol>
      </ElRow>
    </div>

    <Categories />

    <ElRow class="background-container">
      <ElCol :xs="1" :sm="4" />
      <ElCol :xs="22" :sm="7">
        <h2>Umjetnost</h2>
        <p>
          U s.art radionici stvaramo unikatne umjetničke predmete, nastale
          spajanjem kreativnosti, zanatske vještine i ljubavi prema detaljima.
        </p>
        <img :src="image1" class="image" />
      </ElCol>
      <ElCol :span="1" class="hidden-sm-and-up" />
      <ElCol :xs="1" :sm="1" />
      <ElCol :xs="22" :sm="7">
        <img :src="image2" class="image" />
        <h2>Naš cilj</h2>
        <p>
          Naš cilj je ponuditi proizvode koji nisu samo estetski privlačni, nego
          i nose priču – priču o tradiciji, ručnom radu i osobnom dodiru koji se
          osjeti u svakom komadu.
        </p>
      </ElCol>
    </ElRow>

    <img :src="vidimoSeURI" class="vidimo-se-image" />
  </div>
</template>

<style lang="css" scoped>
.container {
  height: calc(100dvh - 80px);
  padding: 20px 0;
  background-size: contain;
  background-position: 120% center;
  background-repeat: no-repeat;
}
.search {
  margin-top: 70px;
  margin-left: -36px;
  background-color: #d9d9d9;
  border: none;
  width: 350px;
  height: 50px;
  text-align: end;
  font-family: amatic;
  font-size: larger;
  padding: 0 20px;
  border-radius: 4px;
}
.big-title {
  margin-top: 70px;
  font-size: 150px;
}
.waves-image {
  width: 50%;
  height: 90px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 75px;
}
.webshop-button {
  color: black;
  background-color: #d9d9d9;
  padding: 5px 122px;
  font-size: larger;
  border-radius: 4px;
  text-decoration: none;
}
.paragraph {
  margin-top: 25px;
  color: black;
  font-size: larger;
}
.image {
  height: 500px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 24px 0;
  border-radius: 8px;
}
h2 {
  color: black;
  font-weight: 700;
  letter-spacing: 2px;
}
p {
  font-weight: 500;
  letter-spacing: 0.75px;
  color: #aaaaaa;
}
.vidimo-se-image {
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 768px) {
  .image {
    width: 100%;
    height: auto;
  }
  .search {
    width: 260px;
  }
  .big-title {
    font-size: 70px;
  }
  .waves-image {
    width: 100%;
  }
  .webshop-button {
    padding: 5px 50px;
  }
}
@media only screen and (max-width: 991px) {
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 14px;
  }
}
</style>
