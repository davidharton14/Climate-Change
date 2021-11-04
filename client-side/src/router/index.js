import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import User from "../components/User";
import Home from "../components/Home";
import Form from "../components/Form";
import List from "../components/List";
import Contact from "../components/Contact";
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
    name:"Login",
    path: '/login',
    component: Login,
  },
  {
    path: '/form',
    component: Form,
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/contact',
    component: Contact,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
