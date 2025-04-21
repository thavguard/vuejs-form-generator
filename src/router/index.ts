import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Register from '@/views/Register.vue';
import Contact from '@/views/Contact.vue';
import Profile from '@/views/Profile.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/register', name: 'Register', component: Register },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/profile', name: 'Profile', component: Profile }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
