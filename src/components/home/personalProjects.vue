<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="(item,i) in items" :key="`1${i}`" xs1 md4>
        

          <v-card 
                    flat
                    class="ma-1 pa-1 my-0 elevation-1" 
                    style="">

                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
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
                        title: 'Plataforma de análise',
                        description: 'App que localiza pontos de venda água mineral na cidade de Fortaleza. Foi um dos projetos apresentados na <a href="">Clinton Foundation</a> em Chicago.'
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