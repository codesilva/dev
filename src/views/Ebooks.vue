<template>
  <v-content class="pa-0">

    <v-container fluid class="pt-3 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#0277bd">Ebooks</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">Busque e faça o download do ebook desejado {{ChapterDetails.ChapterEmail}}.</p>
        </v-flex>
      </v-layout>
    </v-container>

  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import upcommingEvents from '@/components/events/upcomingEvents'
import pastEvents from '@/components/events/pastEvents'
  export default {
    components: {
      upcommingEvents,
      pastEvents
    },
    data() {
      return {
        ChapterDetails: ChapterDetails
      }
    },
  }
</script>
