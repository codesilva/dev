<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="(item,i) in items" :key="`1${i}`" xs1 md4>
        

          <v-card 
                    flat
                    class="ma-1 pa-1 my-0 elevation-1" 
                    style="">

                    <v-img
                    :src="item.img"
                    aspect-ratio="1.75"
                    ></v-img>

                    <v-card-title class="mb-0">
                        <div>
                            <p class="google-font mb-2" style="font-size:140%;color:#0277bd">{{ item.title }}</p>
                            <p class="google-font mt-2 mb-1"><span v-html="$options.filters.summery(item.description,180)" style="font-size:110%"></span></p>
                        </div>
                    </v-card-title>

                   
                     <v-card-actions class="mt-0">
                        <v-spacer></v-spacer>
                        <v-btn flat color="#4C4A78" :href="item.link" target="_blank" class="mb-0 ml-0 mt-0 google-font" style="border-radius:7px;text-transform: capitalize;">Mais informações</v-btn> 
                    </v-card-actions>
                    
                </v-card>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        title: 'App: Olha a Água',
                        description: 'App que localiza pontos de venda água mineral na cidade de Fortaleza. Foi um dos projetos apresentados na <a href="">Clinton Foundation</a> em Chicago.',
                        img: require('@/assets/img/portfolio/app-olha-a-agua.png')
                    },

                    {
                        title: 'Site: Chinelos Peggy',
                        description: 'E-commerce de venda de brindes de casamento. Uma loja que vende brindes para todos Brasil e é lider do mercado.',
                        img: require('@/assets/img/portfolio/chinelos-peggy.jpg')
                    },

                    {
                        title: 'Site: GDG Fortaleza',
                        description: 'Website desenvolvido para o <b>GDG (Google Developers Group) Fortaleza</b>. Este site é um canal onde pessoas interessadas na comunidade podem encontrar mais informações.',
                        img: require('@/assets/img/portfolio/gdg-fortaleza.png')
                    },

                    // {
                    //     title: 'E-commerce: Westfall',
                    //     description: 'Loja de moda desenvolvida com o CMS Magento. Possui diversar integrações como <b>Google Analytics</b>, <b>Paypal</b> e mais.',
                    //     img: require('@/assets/img/portfolio/gdg-fortaleza.png')
                    // },

                    {
                        title: 'Site: Loja Mundo da Arte',
                        description: 'Loja virtual para empresa de artesanato. Projeto desenvolvido com <b>Woocommerce</b> e <b>Wordpress</b>. Loja mundo da arte é referência em artigos artesanais na cidade de Fortaleza.',
                        img: require('@/assets/img/portfolio/loja-mundo-da-arte.jpg')
                    },

                    {
                        title: 'Site: Byte Girl',
                        description: 'Site da comunidade Byte Girl, que tem como foco a inclusão de mulheres na área de exatas e no mundo da tecnologia em si. É o maior evento com foco noo Público Feminio do Ceará.',
                        img: require('@/assets/img/portfolio/bytegirl-black.jpg')
                    },
                ],

                talks: [

                ],

                personalProjects: []
            };
        },

        filters:{
        summery: (val,num)=>{
            if(val.length < num) return val;
            return val.substring(0,num)+"..."
        }
    }
    }
</script>