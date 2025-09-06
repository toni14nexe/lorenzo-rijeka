<script setup lang="ts">
import image1 from '@/assets/images/1.jpeg'
import image2 from '@/assets/images/2.jpeg'
import image8 from '@/assets/images/8.png'
import image9 from '@/assets/images/9.jpg'
import image10 from '@/assets/images/10.jpeg'
import vidimoSeURI from '@/assets/images/vidimo-se-u-ri.jpeg'

useHead({
  title: 'O nama',
  meta: [
    {
      name: 's.art o nama',
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
</script>

<template>
  <div class="page-container mb-24">
    <div
      class="container"
      :style="{ backgroundImage: `url(${image9})` }"
      v-motion-slide-left
      :duration="1000"
      :delay="300"
    >
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
      </ElRow>
    </div>

    <ElRow
      class="mt-24 mb-24"
      style="text-align: center"
      justify="center"
      align="middle"
    >
      <h3 style="width: 80%">
        inspirirani ljepotom našeg grada, kroz dizajn prenosimo energiju grada i
        stvaramo jedinstvene komade koij pričaju priču. umjetnost koja se nosi,
        strast koja nas pokreće.
      </h3>
    </ElRow>

    <div
      class="middle-container mt-24 mb-24"
      :style="{ backgroundImage: `url(${image10})` }"
    />

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
  background-position: center right;
  background-repeat: no-repeat;
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
.background-image {
  height: calc(100dvh - 62px);
  margin-top: -18px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.15;
}
.middle-container {
  height: 100dvh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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
  .background-image {
    background-size: 100px;
  }
  .image {
    width: 100%;
    height: auto;
  }
  .big-title {
    font-size: 70px;
  }
  .waves-image {
    width: 100%;
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
