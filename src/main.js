import Vue from 'vue'
import App from './App.vue'
import Homepage from '@/components/Homepage.vue'
import EmployeeInfo from '@/components/EmployeeInfo.vue'
import NewEmployee from '@/components/NewEmployee.vue'
import Profile from '@/components/Profile.vue'
import Search from '@/components/Search.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "Homepage",
      component: Homepage
    },
    {
      path: '/EmployeeInfo',
      name: "EmployeeInfo",
      component: EmployeeInfo
    },
    {
      path: '/NewEmployee',
      name: "NewEmployee",
      component: NewEmployee
    },
    {
      path: '/Profile/:id',
      name: "Profile",
      component: Profile,
      props: true
    },
    {
      path: '/Search',
      name: "Search",
      component: Search
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
