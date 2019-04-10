<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-flex xs12 md3 lg3 class="pa-2">
               <p class="google-font" style="font-size:180%">O que encontrará aqui?</p>
               <p class="google-font" style="font-size:110%">Atuando na área há 7 anos, tenho focado mais no desenvolvimento de aplicações mobile e web.</p>

               <p class="google-font" style="font-size:110%">Algumas tecnologias com que trabalhp</p>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <img src="@/assets/img/svg/angular.svg" width="30vh" alt="" srcset="" dark v-on="on"> &nbsp;&nbsp;&nbsp;
                    </template>
                    <span>Angular</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <img src="@/assets/img/svg/gcp.svg" width="30vh" alt="" srcset="" dark v-on="on">&nbsp;&nbsp;&nbsp;
                    </template>
                    <span>Google Cloud Platform</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <img src="@/assets/img/svg/android.svg" width="30vh" alt="" srcset="" dark v-on="on">&nbsp;&nbsp;&nbsp;
                    </template>
                    <span>Android</span>
                </v-tooltip>
              
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <img src="@/assets/img/svg/firebase.svg" width="30vh" alt="" srcset="" dark v-on="on">&nbsp;&nbsp;&nbsp;
                    </template>
                    <span>Firebase</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <img src="@/assets/img/svg/laravel.png" width="36vh" alt="" srcset="" dark v-on="on">&nbsp;&nbsp;&nbsp;
                    </template>
                    <span>Laravel</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <img src="@/assets/img/svg/nodejs.png" width="40vh" alt="" srcset="" dark v-on="on">&nbsp;&nbsp;&nbsp;
                    </template>
                    <span>NodeJS</span>
                </v-tooltip>
               
                <br><br>

                <v-btn :href="chapterDetails.GDGProgramWebsite" outline target="_blank" round color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" flat  class="ml-0 google-font hidden-md-and-down" dark>Ver mais</v-btn>

            </v-flex> 
            <v-flex xs12 md9 lg9 class="">
                <v-layout row wrap>

                    <v-flex xs6 sm6 md4 lg4 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">chat_bubble</v-icon>
                        <p class="google-font" style="font-size:130%">Palestras</p>
                        <p class="google-font" style="font-size:110%">Get updated with the latest news and announcements</p>
                    </v-flex>

                    <v-flex xs6 sm6 md4 lg4 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">code</v-icon>
                        <p class="google-font" style="font-size:130%">Exemplos de código</p>
                        <p class="google-font" style="font-size:110%">Get hands-on experience and guidance from the community members</p>
                    </v-flex>
<!-- 
                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">school</v-icon>
                        <p class="google-font" style="font-size:130%">Campus Roadshows</p>
                        <p class="google-font" style="font-size:110%">Share knowledge in different Companies, colleges and universities</p>
                    </v-flex> -->

                    <v-flex xs6 sm6 md4 lg4 class="text-xs-center pa-2">
                        <v-icon large style="font-size:300%">airplay</v-icon>
                        <p class="google-font" style="font-size:130%">Tutoriais em vídeo</p>
                        <p class="google-font" style="font-size:110%">Share knowledge in different Companies, colleges and universities</p>
                    </v-flex>

                </v-layout>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails
        }
    },
}
</script>
