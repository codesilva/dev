import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './style.css'
import './filters/truncate'
import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyD-tY0RcBuDx-1S--9nZp9wO-Adv_AnQok",
  authDomain: "blog-f3039.firebaseapp.com",
  databaseURL: "https://blog-f3039.firebaseio.com",
  projectId: "blog-f3039",
  storageBucket: "blog-f3039.appspot.com",
  messagingSenderId: "759168502770",
  appId: "1:759168502770:web:a2958dd64e7e558b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
  else document.title = 'CodeSilva';



  if(to.matched.slice()[0].name === 'blogsingleid') {
    if(!localStorage.readingPost) return;
    let postTitle = JSON.parse(localStorage.readingPost).title;
    document.title = postTitle + ' - CodeSilva';
  }

  next();
});

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
