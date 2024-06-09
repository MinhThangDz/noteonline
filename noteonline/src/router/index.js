import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import MyApp from '../components/MyApp.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';

const routes = [
   { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/myapp', component: MyApp },
  { path: '/register',component: Register, },
  { path: '/login',component: Login, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;