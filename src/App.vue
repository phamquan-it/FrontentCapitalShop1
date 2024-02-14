<script setup lang="ts">
import { computed } from 'vue'
import Fashion from "./components/Fashion.vue";
import Home from './Home.vue';
import Footer from './components/Footer.vue';
import Login from './Login.vue';
import SignUp from './SignUp.vue'
import Cart from './Cart.vue'
import Contact from './Contact.vue';
import ProductDetails from './ProductDetails.vue';
import  Filter from './Filter.vue'
import Blog from './Blog.vue';
import BlogDetail from './BlogDetail.vue';

const routes = {
  '/': Home,
  '/about': Fashion,
  '/login': Login,
  '/register': SignUp,
  '/cart':Cart,
  '/contact':Contact,
  '/detail':ProductDetails,
  '/filter':Filter,
  '/blog':Blog,
  '/blogdetail': BlogDetail
}
console.log(location.pathname)
const currentView = computed(() => {
  const path = location.pathname;
  return routes[path || '/'] || Footer;
})
</script>

<template>
  <component :is="currentView" />
</template>
