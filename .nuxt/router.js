import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61a1fd78 = () => interopDefault(import('../pages/2019-09-20.vue' /* webpackChunkName: "pages/2019-09-20" */))
const _6115126e = () => interopDefault(import('../pages/2019-09-25.vue' /* webpackChunkName: "pages/2019-09-25" */))
const _60f8e36c = () => interopDefault(import('../pages/2019-09-26.vue' /* webpackChunkName: "pages/2019-09-26" */))
const _60c08568 = () => interopDefault(import('../pages/2019-09-28.vue' /* webpackChunkName: "pages/2019-09-28" */))
const _47ee84ab = () => interopDefault(import('../pages/config.vue' /* webpackChunkName: "pages/config" */))
const _6d6da479 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/blog/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/2019-09-20",
      component: _61a1fd78,
      name: "2019-09-20"
    }, {
      path: "/2019-09-25",
      component: _6115126e,
      name: "2019-09-25"
    }, {
      path: "/2019-09-26",
      component: _60f8e36c,
      name: "2019-09-26"
    }, {
      path: "/2019-09-28",
      component: _60c08568,
      name: "2019-09-28"
    }, {
      path: "/config",
      component: _47ee84ab,
      name: "config"
    }, {
      path: "/",
      component: _6d6da479,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
