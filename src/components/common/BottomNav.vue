<template>
  <v-card color="white" height="60px" class="white hidden-sm-and-up" flat>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      app
      color="white"
      class="elevation-2"
      
    >
      <v-btn
        color="#518FF5"
        flat
        value="Home"
        router
        to="/home"
      >
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

       <v-btn
        color="#518FF5"
        flat
        value="about"
        router
        to="/about"
      >
        <span>Sobre</span>
        <v-icon>toc</v-icon>
      </v-btn>
<!-- 
      <v-btn
        color="#518FF5"
        flat
        value="events"
        router
        to="/about"
      >
        <span>Sobre</span>
        <v-icon>rounded_corner</v-icon>
      </v-btn> -->

      <v-btn
        color="#518FF5"
        flat
        value="blog"
        router
        to="/blog"
      >
        <span>Blog</span>
        <v-icon>dashboard</v-icon>
      </v-btn>

      <v-btn
        color="#518FF5"
        flat
        value="portfolio"
        router
        to="/portfolio"
      >
        <span>Portfolio</span>
        <v-icon>book</v-icon>
      </v-btn>

      <v-btn
        color="#518FF5"
        flat
        value="contact"
        router
        to="/contact"
      >
        <span>Contato</span>
        <v-icon>message</v-icon>
      </v-btn>

     

      

      <!-- <v-btn
        color="#518FF5"
        flat
        value="contact"
        router
        to="/contact"
      >
        <span>Contant</span>
        <v-icon>person</v-icon>
      </v-btn> -->

    </v-bottom-nav>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        bottomNav: 'recent',
        items: [
            { title: 'Home', icon: 'dashboard', route:"/home" },
            { title: 'Attending', icon: 'rounded_corner', route:"/attending" },
            { title: 'Sessions', icon: 'toc', route:"/sessions" },
            { title: 'Speakers', icon: 'group', route:"/speakers" }
        ],
      }
    }
  }
</script>