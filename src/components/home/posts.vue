<template>
  <v-layout row justify-space-between>
    <v-flex xs12 sm4 style="padding:10px;" v-for="(post, i) in posts" :key="i">
      <v-card>

        <v-img :src="post.thumb" height="200px"></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{ post.title }}</div>
            <span class="grey--text">
                {{ post.short }}
            </span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat @click="seePost(post)" color="primary">Continuar lendo</v-btn>
          <v-spacer></v-spacer>
          <!-- <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn> -->
        </v-card-actions>

        <!-- <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import firebase from 'firebase';

  export default  {
    data() {
      return  {
        medium: 'https://medium.com/@edigleyssonsilva',
        posts: []
      };
    },

    methods: {
      seePost(post) {
        localStorage.setItem('readingPost', JSON.stringify(post));
        this.$router.push(post.path);
      }
    },

    mounted() {

       let posts = firebase.firestore().collection('posts');
        posts.limit(6).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let id = doc.id, data = doc.data();
            this.posts.push({
              id,
              ...data,
              path: 'post/'+data.slug
            });
          });
        })
        .catch(err => {
          alert("Falha ao buscar posts");
        });
    }
  };
</script>