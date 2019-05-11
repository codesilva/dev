<template>
  <v-content class="pa-0">

    <v-container fluid class="pt-3 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="300px"
            >
            </v-img>
        <br />

        <div class="blog-post-container" style="padding: 20px;">
            <div class="post-info" style="margin-bottom: 30px;">
                <p class="google-font mb-0" style="font-size:290%;color:#0277bd">BlogSingle</p>
                <p class="google-font mt-0 mb-0" style="font-size:110%">
                    <b>Edigleysson Silva</b> em <i>20 de Maio de 2019</i>
                </p>
            </div>

            <p style="font-size:140%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta nesciunt qui tempore quia doloribus. Quae ipsum incidunt voluptatem error quis beatae exercitationem. Voluptate, non dolores? Quibusdam, laborum quam! Similique.</p>
            <p style="font-size:140%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta nesciunt qui tempore quia doloribus. Quae ipsum incidunt voluptatem error quis beatae exercitationem. Voluptate, non dolores? Quibusdam, laborum quam! Similique.</p>
            <p style="font-size:140%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta nesciunt qui tempore quia doloribus. Quae ipsum incidunt voluptatem error quis beatae exercitationem. Voluptate, non dolores? Quibusdam, laborum quam! Similique.</p>
            <br /><br />
            <v-img
                src="https://cdn-images-1.medium.com/max/1600/0*WW-iV1yoPWqUcd5H."
                height="300px"
            >
            </v-img>
            <br /><br />
            <p style="font-size:140%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta nesciunt qui tempore quia doloribus. Quae ipsum incidunt voluptatem error quis beatae exercitationem. Voluptate, non dolores? Quibusdam, laborum quam! Similique.</p>
            <p style="font-size:140%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta nesciunt qui tempore quia doloribus. Quae ipsum incidunt voluptatem error quis beatae exercitationem. Voluptate, non dolores? Quibusdam, laborum quam! Similique.</p>
            <p style="font-size:140%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta nesciunt qui tempore quia doloribus. Quae ipsum incidunt voluptatem error quis beatae exercitationem. Voluptate, non dolores? Quibusdam, laborum quam! Similique.</p>
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
  export default {
    components: {
      upcommingEvents,
      pastEvents
    },
    data() {
      return {
        ChapterDetails: ChapterDetails,
        id: window.location.href
      }
    },
  }
</script>


<script>

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
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

