<style>
   .theme--light.v-label {
        /* color: #fff; */
    }
</style>


<template>
    <v-container class="pa-0 white--text">
        <v-layout wrap align-center justify-center row fill-height class="my-3" >
           <v-flex xs12 md10 lg10 class="pa-2">
               <p class="google-font" style="font-size:150%">Fique por dentro das novidades</p>
               <p class="google-font" style="font-size:110%">
                   Increva-se em nossa newsletter e receba conteúdos semanais sobre linguagens de programação, infraestrutura e muito mais.
               </p>
               <div style="padding-right: 50px;">
                   <v-text-field
                        class="white-placeholder"
                        v-model="firstname"
                        :rules="nameRules"
                        label="Informe seu e-mail"
                        required
                        solo
                    ></v-text-field>
               </div>
            
               <v-btn outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: uppercase;">Quero receber as novidades</v-btn>
               <br />
               <br />


               <!-- <v-btn :href="chapterDetails.ChapterMeetupLink" target="_blank" outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">Meetup Page</v-btn>
               &nbsp;
               <v-btn :href="chapterDetails.socialLinks[0].link" target="_blank" outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">Facebook Page</v-btn>
                <br><br> -->
               <router-link to="/about" class="google-font" style="text-decoration:none;color:white">Saiba mais</router-link>
            </v-flex> 
            <v-flex xs12 md2 lg2 class="hidden-sm-and-down">
               <v-img
                    :src="require('@/assets/img/svg/svg1.svg')"
                    :lazy-src="require('@/assets/img/svg/svg1.svg')"
                    width="100%">
                    <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
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
