<script setup lang="ts">
import DashboardInfoCard from '~/components/dashboard/DashboardInfoCard.vue'
import {
  Promotion,
  Connection,
  Picture,
  Share,
  DocumentChecked,
  Money
} from '@element-plus/icons-vue'
import EarthIcon from '~/assets/icons/earth.vue'
import AdIcon from '~/assets/icons/ad.vue'
import type { InfoCardData } from '~/components/dashboard/DashboardInfoCard.vue'

const infoCardsData: InfoCardData[] = [
  {
    title: 'Informativni sadržaj za dijasporu',
    infos: [
      'Vodiči za život i rad u Njemačkoj (stanovanje, zdravstvo, administracija)',
      'Prava radnika, ugovori, osiguranja, prijava boravka',
      'Obavijesti o zakonima, promjenama i novostima koje utječu na strance'
    ],
    icon: EarthIcon
  },
  {
    title: 'Oglasi i promocija',
    infos: [
      'Poslovni oglasi (auto saloni, servisi, kafići, firme koje traže radnike)',
      'Privatni oglasi (kupoprodaja auta, stanova, traženje posla/sobe)',
      'Digitalni marketing za firme u dijaspori ili iz regije koje ciljaju tu klijentelu'
    ],
    icon: Promotion
  },
  {
    title: 'Zajednica i mreža',
    infos: [
      'Povezivanje ljudi (pomoć novopridošlima, dijeljenje iskustava)',
      'Grupe podrške – posebno za žene, samohrane roditelje, studente, radnike',
      'Organizacija događanja, turnira, okupljanja'
    ],
    icon: Connection
  },
  {
    title: 'Zabavni i viralni sadržaj',
    infos: [
      'Meme, skečevi, TikTok videi iz dijaspore',
      'Balkanski humor u kontekstu života vani',
      'Ankete, komentari, klipovi s "bauštele" ili svakodnevice u Njemačkoj'
    ],
    icon: Picture
  },
  {
    title: 'Kanal kao platforma za monetizaciju',
    infos: [
      'Naplaćeni oglasi (mjesečne objave, video promidžba, istaknute objave)',
      'Affiliate marketing (preporuke usluga poput transfera novca, slanja paketa)',
      'Suradnje s firmama iz regije koje traže pristup dijaspori'
    ],
    icon: Share
  },
  {
    title: 'Platforma za nostrifikaciju i priznavanje diploma',
    infos: [
      'Zašto: mnogi se muče s priznavanjem kvalifikacija u Njemačkoj',
      'Kako: Detaljni vodiči + automatizirani "step-by-step" asistenti po zanimanju i pokrajini povezanost s prevoditeljima i agencijama'
    ],
    icon: DocumentChecked
  },
  {
    title: 'Dijaspora Invest',
    infos: [
      'Platforma za ulaganje u domovinu',
      'Zašto: Mnogi žele investirati u domovinu, ali ne znaju gdje i kako',
      'Kako: Projekt koji mapira sigurne projekte, nekretnine, startupe u BiH, Srbiji, Hrvatskoj i ostalima – s ocjenama, iskustvima i verifikacijom'
    ],
    icon: Money
  },
  {
    title: 'Reklamiranje',
    infos: [
      'Reklamiranje na našoj platformi',
      'Objava svojih oglasa, proizvoda ili reklama na našu web stranicu',
      'Dostupno pod uslugama "Poslovi", "Webshop" i "Reklamiranje"'
    ],
    icon: AdIcon
  }
]
</script>

<template>
  <div class="mb-12">
    <ElDivider style="padding-top: 24px" />
    <ElRow justify="center" align="middle" :gutter="12">
      <ElCol
        v-for="info in infoCardsData"
        :span="
          $viewport.isLessThan('tablet')
            ? 24
            : $viewport.isLessThan('desktopMedium')
              ? 8
              : 6
        "
      >
        <DashboardInfoCard :card-info="info" />
      </ElCol>
    </ElRow>
  </div>
</template>

<style lang="css" scoped></style>
