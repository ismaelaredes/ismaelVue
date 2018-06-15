import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome.vue'
import Applogin from '@/components/AppLogin.vue'
import AppContact from '@/components/AppContact.vue'


import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'appHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'Applogin',
      component: Applogin
    },
    {
      path: '/contact',
      name: 'AppContact',
      component: AppContact
    }
  ]
})
