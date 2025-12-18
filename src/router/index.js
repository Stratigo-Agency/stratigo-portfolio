import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CaseStudies from '../pages/CaseStudies.vue'
import CaseStudyDetail from '../pages/CaseStudyDetail.vue'
import Blog from '../pages/Blog.vue'
import BlogDetail from '../pages/BlogDetail.vue'
import UniGo from '../pages/UniGo.vue'
import Reservigo from '../pages/Reservigo.vue'
import PortfolioWebsite from '../pages/PortfolioWebsite.vue'
import Custom from '../pages/Custom.vue'
import FormCompletion from '../pages/FormCompletion.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies
  },
  {
    path: '/case-studies/:id',
    name: 'CaseStudyDetail',
    component: CaseStudyDetail
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/unigo',
    name: 'UniGo',
    component: UniGo
  },
  {
    path: '/reservigo',
    name: 'Reservigo',
    component: Reservigo
  },
  {
    path: '/portfolio-website',
    name: 'PortfolioWebsite',
    component: PortfolioWebsite
  },
  {
    path: '/custom',
    name: 'Custom',
    component: Custom
  },
  {
    path: '/form-completion',
    name: 'FormCompletion',
    component: FormCompletion
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

