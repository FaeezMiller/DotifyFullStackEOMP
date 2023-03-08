import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/yourlibrary',
    name: 'yourlibrary',
    component: function () {
      return import( '../views/LibraryView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import( '../views/LoginView.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import( '../views/RegisterView.vue')
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import( '../views/AdminView.vue')
    }
  },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
