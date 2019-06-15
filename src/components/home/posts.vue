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

    props: ['max'],

    methods: {
      seePost(post) {
        localStorage.setItem('readingPost', JSON.stringify(post));
        this.$router.push(post.path);
      }
    },

    mounted() {
      let max = 6;
      let _posts = localStorage.getItem('posts');
      if(_posts) {
        _posts = JSON.parse(_posts);
        console.log(_posts);
        let today = new Date();
        const _datePosts = new Date(localStorage.getItem('date_posts'));
        _datePosts.setTime(_datePosts.getTime() + 1*24*60*60*1000);

        if(today.getTime() <= _datePosts.getTime()) {
          console.log('carregando do cache');
          for(let post of _posts) {
            this.posts.push(post);
          }
          return;
        }
        
      }
      
        // console.log(localStorage);
        // max = parseInt(this.max);
        // let hasPosts = localStorage.getItem('posts');
        // if(hasPosts) {
        //  let datePost = localStorage.getItem('date_posts');
        //  if(datePost) {
        //    const maxDate = new Date();
        //    maxDate.setHours(23);
        //    maxDate.setMinutes(59);
        //    maxDate.setMinutes(59);

        //    let datePosts = JSON.parse(datePost);

        //     // console.log(datePosts);
        //     // console.log(maxDate);

        //  }
        // }

       let posts = firebase.firestore().collection('posts');
        posts.limit(max).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let id = doc.id, data = doc.data();
            this.posts.push({
              id,
              ...data,
              path: 'post/'+data.slug
            });
          });

          // salvando posts no localstorage
          localStorage.setItem('posts', JSON.stringify(this.posts));
          localStorage.setItem('date_posts', new Date());
        })
        .catch(err => {
          alert("Falha ao buscar posts");
        });
    }
  };
</script>