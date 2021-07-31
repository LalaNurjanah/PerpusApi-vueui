import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/anggota/Home.vue'
import Createanggota from '../views/anggota/Createanggota.vue'
import Editanggota from '../views/anggota/Editanggota.vue'
import Detailanggota from '../views/anggota/Detailanggota.vue'
import Buku from '../views/buku/Index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createanggota',
    name: 'Createanggota',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createanggota
  },
  {
    path: '/editanggota/:id',
    name: 'Editanggota',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editanggota
  },
  {
    path: '/detailanggota/:id',
    name: 'Detailanggota',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailanggota
  },
  {
    path: '/buku',
    name: 'buku.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Buku
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
