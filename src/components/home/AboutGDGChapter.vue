<style>
   .v-messages__message {

    color: orange;
    font-weight: bold;
    font-size: 120%;

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

                 <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >

                <div style="padding-right: 50px;">
                    <v-text-field
                            class="white-placeholder"
                            v-model="subscriber.email"
                            :rules="emailRules"
                            label="Informe seu e-mail"
                            required
                            solo
                        ></v-text-field>
                </div>
                <v-btn outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: uppercase;" @click="subscribe(subscriber.email)">Quero receber as novidades</v-btn>
                    </v-form>
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
import ChapterDetails from '@/assets/data/chapterDetails.json';
import firebase from 'firebase';
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
            subscriber: {
                email: ''
            },
            emailRules: [
                v => !!v || '* O campo é obrigatório',
                v => /.+@.+/.test(v) || '* O e-mail informado deve ser válido'
            ],
            valid: true
        }
    },

    methods: {
        subscribe(email) {

            if (!this.$refs.form.validate()) return;

            let subscribersCollection = firebase.firestore().collection('subscribers');
            if(email.length > 0) {
                subscribersCollection.add({
                    name: '',
                    email: email,
                    listening: true,
                    topics: ['general']
                }).then(d => {
                    alert('Obrigado por se inscrever em nossa Newsletter');
                }).catch(err => {
                    alert('Houve um erro inesperado! Não foi possível fazer a inscrição. Tente novamente.')
                });
            }
        }
    }
}
</script>
