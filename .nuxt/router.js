import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d3192c4 = () => interopDefault(import('../pages/content1.vue' /* webpackChunkName: "pages/content1" */))
const _0d3faa45 = () => interopDefault(import('../pages/content2.vue' /* webpackChunkName: "pages/content2" */))
const _fdffd6fa = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _ac7bdcd4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/blog/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/content1",
    component: _0d3192c4,
    name: "content1"
  }, {
    path: "/content2",
    component: _0d3faa45,
    name: "content2"
  }, {
    path: "/privacy-policy",
    component: _fdffd6fa,
    name: "privacy-policy"
  }, {
    path: "/",
    component: _ac7bdcd4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
