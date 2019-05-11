<style>
  .post-content p{
    font-size: 120%;
  }
</style>


<template>
  <v-content class="pa-0">
    <v-container fluid class="pt-3 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
          <v-img
            :src="post.single.thumb"
            height="300px"
          >

          </v-img>
            <!-- <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="300px"
            >
            </v-img> -->
        <br />

        <div class="blog-post-container" style="padding: 20px;">
            <div class="post-info" style="margin-bottom: 30px;">
                <p class="google-font mb-0" style="font-size:290%;color:#0277bd">{{ post.single.title }}</p>
                <p class="google-font mt-0 mb-0" style="font-size:110%" v-if="post.single.author && post.single.publishedAt">
                    <b>{{ post.single.author.name }}</b> em <i>{{ post.single.publishedAt.toDate().toLocaleDateString() }}</i>
                </p>
            </div>

            <div class="post-content" v-html="post.single.content"></div>
        </div>

        <div id="disqus_thread"></div>

        </v-flex>
      </v-layout>
    </v-container>

  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import upcommingEvents from '@/components/events/upcomingEvents'
import pastEvents from '@/components/events/pastEvents'
import firebase from 'firebase';

  export default {
    components: {
      upcommingEvents,
      pastEvents
    },
    data() {
      return {
        ChapterDetails: ChapterDetails,
        post: {
          single: {
            author: {
              name: ''
            }
          }
        }
      }
    },

    mounted() {
      
      let id = this.$route.params.id;
      let posts = firebase.firestore().collection('posts');

      posts.where('slug', '==', id).limit(1).get().then(querySnapshot => {
        if(querySnapshot.docs.length > 0) {
          let doc = querySnapshot.docs[0];
          let id = doc.id, data = doc.data();
          let single = {
            id,
            ...data,
            path: 'post/'+data.slug,
            content: ''
          };

          posts.doc(id).collection('content').get()
            .then(query => {
              single.content = query.docs[0].data().postContent;
              console.log({single});
              this.$set(this.post, 'single', single);
            });
        }
      });

      /**
      *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
      *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

      var disqus_config = function () {
          this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
          this.page.identifier = window.location.href; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
          console.log(this.page);
          //this.page.identifier = (new Date()).getTime();
      };

      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://codesilva.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
    }
  }
</script>




