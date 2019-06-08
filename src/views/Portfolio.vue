<template>
  <v-content class="pa-0">

    <v-container fluid class="pt-3 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#0277bd">Portfolio</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">Alguns trabalhos que já desenvolvi. Trabalhando com as mais diversas tecnologias de desenvolvimento web e mobile.</p>
        </v-flex>
      </v-layout>
    </v-container>


     <v-container fluid>
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10 >
          <portfolio />
        </v-flex>
      </v-layout>
    </v-container>

<!-- 
<v-container fluid class="pt-3 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#0277bd">Talks</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">Busque e faça o download do ebook desejado {{ChapterDetails.ChapterEmail}}.</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10 >
          <talks />
        </v-flex>
      </v-layout>
    </v-container> -->
<!-- 

    <v-container fluid class="pt-3 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#0277bd">Projetos Pessoais</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">Busque e faça o download do ebook desejado {{ChapterDetails.ChapterEmail}}.</p>
        </v-flex>
      </v-layout>
    </v-container>


     <v-container fluid>
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10 >
          <personalProjects />
        </v-flex>
      </v-layout>
    </v-container>  -->

  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json';
import upcommingEvents from '@/components/events/upcomingEvents';
import pastEvents from '@/components/events/pastEvents';
import portfolio from '@/components/home/portfolio';
import talks from '@/components/home/talks';
import personalProjects from '@/components/home/personalProjects';
  export default {
    components: {
      upcommingEvents,
      pastEvents,
      portfolio,
      talks,
      personalProjects,
    },
    data() {
      return {
        ChapterDetails: ChapterDetails
      }
    },
  }
</script>
