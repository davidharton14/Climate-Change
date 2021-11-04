import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import User from "../components/User";
import Home from "../components/Home";
import Form from "../components/Form";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/form',
    component: Form,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
