import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import OverviewPage from '../views/OverviewPage.vue'
import EcommercePage from '../views/EcommercePage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'

const routes = [
  { path: '/', redirect: '/overview' },
  { path: '/overview', component: OverviewPage },
  { path: '/ecommerce', component: EcommercePage },
  { path: '/projects', component: ProjectsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     // {
//     //   path: '/about',
//     //   name: 'about',
//     //   // route level code-splitting
//     //   // this generates a separate chunk (About.[hash].js) for this route
//     //   // which is lazy-loaded when the route is visited.
//     //   component: () => import('../views/AboutView.vue'),
//     // },
//   ],
// })

export default router
