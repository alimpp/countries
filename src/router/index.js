import { createRouter, createWebHistory } from "vue-router";
import countries from '@/pages/countries/index.vue'
import detailCountries from '@/pages/detailCountries/index.vue'
const routes = [
  {
    path : '/countries' ,
    name : 'countries' ,
    component : countries
  } ,
  {
    path : '/countries/:id' ,
    name : 'detailCountries' ,
    component : detailCountries
  } ,
]; 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
