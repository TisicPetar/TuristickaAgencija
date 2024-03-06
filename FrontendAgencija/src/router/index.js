import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../views/HelloWorld.vue"
import RegisterView from "../views/RegisterView.vue"
import LoginView from "../views/LoginView.vue"
import AllProductsView from "../views/AllProductsView.vue"
import MyProductsView from "../views/MyProductsView.vue"
import AboutView from "../views/AboutView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/signup",
    name: "Register",
    component: RegisterView,
  },
  {
    path:'/login',
    name:"Login",
    component: LoginView,
  },
  {
    path: "/allProducts",
    name: "AllProductsView",
    component: AllProductsView,
  },
  {
    path: "/myProducts",
    name: "MyProductsView",
    component: MyProductsView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
