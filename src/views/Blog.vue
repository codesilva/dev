<template>
  <v-content class="pa-0">
    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10 >
          <homeStartBlog />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10 >
          <posts max="100" />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#4C4A78" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <AboutGDGChapter />
        </v-flex>
      </v-layout>
    </v-container>

    


  </v-content>
</template>

<script>
  import homeStartBlog from '@/components/home/homeStartBlog'
  import whatWeDo from '@/components/home/whatWeDo'
  import posts from '@/components/home/posts'
  import AboutGDGChapter from '@/components/home/AboutGDGChapter'


  import Router from 'vue-router';
  import firebase from 'firebase';
  
  export default {
    components: {
      homeStartBlog,
      whatWeDo,
      posts,
      AboutGDGChapter
    },

    data() {
      return {
        posts: []
      };
    },

    mounted() {
      let path = localStorage.getItem('path');
      console.log(path);
      if(path) {
        localStorage.removeItem('path');
        this.$router.push(path);
      }
    }
  }
</script>

