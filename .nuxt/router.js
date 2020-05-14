import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fdffd6fa = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _276a62a8 = () => interopDefault(import('../pages/step0.vue' /* webpackChunkName: "pages/step0" */))
const _27787a29 = () => interopDefault(import('../pages/step1.vue' /* webpackChunkName: "pages/step1" */))
const _70db7552 = () => interopDefault(import('../pages/step10.vue' /* webpackChunkName: "pages/step10" */))
const _278691aa = () => interopDefault(import('../pages/step2.vue' /* webpackChunkName: "pages/step2" */))
const _2794a92b = () => interopDefault(import('../pages/step3.vue' /* webpackChunkName: "pages/step3" */))
const _27a2c0ac = () => interopDefault(import('../pages/step4.vue' /* webpackChunkName: "pages/step4" */))
const _27b0d82d = () => interopDefault(import('../pages/step5.vue' /* webpackChunkName: "pages/step5" */))
const _27beefae = () => interopDefault(import('../pages/step6.vue' /* webpackChunkName: "pages/step6" */))
const _27cd072f = () => interopDefault(import('../pages/step7.vue' /* webpackChunkName: "pages/step7" */))
const _27db1eb0 = () => interopDefault(import('../pages/step8.vue' /* webpackChunkName: "pages/step8" */))
const _27e93631 = () => interopDefault(import('../pages/step9.vue' /* webpackChunkName: "pages/step9" */))
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
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/privacy-policy",
    component: _fdffd6fa,
    name: "privacy-policy"
  }, {
    path: "/step0",
    component: _276a62a8,
    name: "step0"
  }, {
    path: "/step1",
    component: _27787a29,
    name: "step1"
  }, {
    path: "/step10",
    component: _70db7552,
    name: "step10"
  }, {
    path: "/step2",
    component: _278691aa,
    name: "step2"
  }, {
    path: "/step3",
    component: _2794a92b,
    name: "step3"
  }, {
    path: "/step4",
    component: _27a2c0ac,
    name: "step4"
  }, {
    path: "/step5",
    component: _27b0d82d,
    name: "step5"
  }, {
    path: "/step6",
    component: _27beefae,
    name: "step6"
  }, {
    path: "/step7",
    component: _27cd072f,
    name: "step7"
  }, {
    path: "/step8",
    component: _27db1eb0,
    name: "step8"
  }, {
    path: "/step9",
    component: _27e93631,
    name: "step9"
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
