import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _59133e47 = () => interopDefault(import('../pages/2019-09-20.vue' /* webpackChunkName: "pages/2019-09-20" */))
const _5959b3cc = () => interopDefault(import('../pages/2019-09-25.vue' /* webpackChunkName: "pages/2019-09-25" */))
const _5967cb4d = () => interopDefault(import('../pages/2019-09-26.vue' /* webpackChunkName: "pages/2019-09-26" */))
const _5983fa4f = () => interopDefault(import('../pages/2019-09-28.vue' /* webpackChunkName: "pages/2019-09-28" */))
const _432daeb6 = () => interopDefault(import('../pages/2019-10-03.vue' /* webpackChunkName: "pages/2019-10-03" */))
const _433bc637 = () => interopDefault(import('../pages/2019-10-04.vue' /* webpackChunkName: "pages/2019-10-04" */))
const _d3b089a4 = () => interopDefault(import('../pages/config.vue' /* webpackChunkName: "pages/config" */))
const _ac7bdcd4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/blog/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/2019-09-20",
      component: _59133e47,
      name: "2019-09-20"
    }, {
      path: "/2019-09-25",
      component: _5959b3cc,
      name: "2019-09-25"
    }, {
      path: "/2019-09-26",
      component: _5967cb4d,
      name: "2019-09-26"
    }, {
      path: "/2019-09-28",
      component: _5983fa4f,
      name: "2019-09-28"
    }, {
      path: "/2019-10-03",
      component: _432daeb6,
      name: "2019-10-03"
    }, {
      path: "/2019-10-04",
      component: _433bc637,
      name: "2019-10-04"
    }, {
      path: "/config",
      component: _d3b089a4,
      name: "config"
    }, {
      path: "/",
      component: _ac7bdcd4,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
