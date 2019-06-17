<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
            <v-flex xs12 sm5 md4 lg4 class="pa-2">
                <v-avatar
                    color="grey lighten-4"
                    size="200"
                >
                <img :src="require('@/assets/img/profile.jpg')" alt="avatar">
                </v-avatar>
                <!-- <v-img
                    :src="require('@/assets/img/profile.jpg')"
                    :lazy-src="require('@/assets/img/profile.jpg')"
                    class=""
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
                </v-img> -->
            </v-flex>
            <v-flex xs12 sm7 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:120%;">
                    Olá, meu nome é Edigleysson Silva - um programador muito entusiasta. Venho atuando no mercado de programação há seis anos e durante esse tempo todo minha empolgação só aumenta.<br /><br />
                    Esse blog é um produto desse entusiasmo, pois não me contentei só em criar apps, sistemas e sites, mas também compartilhar conhecimentos relevantes e que podem mudar a vida das pessoas.
                </p>

                <p class="google-font" style="font-size:120%;">
                    <i>Mas com o que eu trabalho realmente?</i> Bom, a maior parte do tempo eu sou um profissional liberal e trabalho e uma extensa variedade de projetos. Minhas maiores expertises são em <b>Desenvolvimento Web</b> e <b>Mobile</b>.
                </p>
                
                <p class="google-font" style="font-size:120%;">
                    Comecei com o famigerado <i>PHP</i> junto com o <i>MySQL</i> e essa foi o meu direcionamento por um bom tempo, até que tive meu primeiro contato com <i>JavaScript</i> e já me apaixonei de cara! A partir daí fui aprendendo tecnologias novas para abordagens distintas.
                </p>

                <p class="google-font" style="font-size:120%;">
                    <i>Qual o intuito com esse blog?</i> Tendemos a compartilhar aqui gostamos, é como um meme no Facebook, se você achou engraçado vai compartilhar. Bom, sei que essa não é a melhor analogia (hehe), mas você entendeu né? <br /><br />
                    Pretendo compartilhar conhecimento e é por isso que além desse blog possuo também um canal no <a href="http://bit.ly/youtube-edigleyssonsilva" target="_blank">YouTube</a> onde compartilho tutorias em vídeo.
                </p>    

                <p class="google-font" style="font-size:120%;">
                    Por último, mas não menos importante, sou um dos líderes do <a href="http://gdgfortaleza.com.br">GDG (Google Developers Group) Fortaleza</a> e também atuo na comunidade <a href="http://bytegirl.com.br">Byte Girl</a> onde sou responsável pelo desenvolvimento.
                </p>    

                <p class="google-font" style="font-size:120%;">
                    Se quiser mais informações sobre o que tenho feito e como são os meus projetos, acesse o meu PORTFOLIO.
                </p>    

                <v-btn to="/portfolio" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: uppercase;border-radius:5px;color:white">VER PORTFOLIO</v-btn> 
                &nbsp;

                <!-- <v-btn href="https://developers.google.com/groups" target="_blank" outline color="cyan" style="text-transform: capitalize;border-radius:5px"  class="ml-0" dark>Learn More</v-btn> -->
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
