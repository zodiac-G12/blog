import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0cd788bd = () => interopDefault(import('../pages/content1.vue' /* webpackChunkName: "pages/content1" */))
const _e3d5ed7a = () => interopDefault(import('../pages/content10.vue' /* webpackChunkName: "pages/content10" */))
const _e3b9be78 = () => interopDefault(import('../pages/content11.vue' /* webpackChunkName: "pages/content11" */))
const _0ce5a03e = () => interopDefault(import('../pages/content2.vue' /* webpackChunkName: "pages/content2" */))
const _0cf3b7bf = () => interopDefault(import('../pages/content3.vue' /* webpackChunkName: "pages/content3" */))
const _0d01cf40 = () => interopDefault(import('../pages/content4.vue' /* webpackChunkName: "pages/content4" */))
const _0d0fe6c1 = () => interopDefault(import('../pages/content5.vue' /* webpackChunkName: "pages/content5" */))
const _0d1dfe42 = () => interopDefault(import('../pages/content6.vue' /* webpackChunkName: "pages/content6" */))
const _0d2c15c3 = () => interopDefault(import('../pages/content7.vue' /* webpackChunkName: "pages/content7" */))
const _0d3a2d44 = () => interopDefault(import('../pages/content8.vue' /* webpackChunkName: "pages/content8" */))
const _0d4844c5 = () => interopDefault(import('../pages/content9.vue' /* webpackChunkName: "pages/content9" */))
const _3b89ebbc = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _08f8f386 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0cd788bd,
    name: "content1"
  }, {
    path: "/content10",
    component: _e3d5ed7a,
    name: "content10"
  }, {
    path: "/content11",
    component: _e3b9be78,
    name: "content11"
  }, {
    path: "/content2",
    component: _0ce5a03e,
    name: "content2"
  }, {
    path: "/content3",
    component: _0cf3b7bf,
    name: "content3"
  }, {
    path: "/content4",
    component: _0d01cf40,
    name: "content4"
  }, {
    path: "/content5",
    component: _0d0fe6c1,
    name: "content5"
  }, {
    path: "/content6",
    component: _0d1dfe42,
    name: "content6"
  }, {
    path: "/content7",
    component: _0d2c15c3,
    name: "content7"
  }, {
    path: "/content8",
    component: _0d3a2d44,
    name: "content8"
  }, {
    path: "/content9",
    component: _0d4844c5,
    name: "content9"
  }, {
    path: "/privacy-policy",
    component: _3b89ebbc,
    name: "privacy-policy"
  }, {
    path: "/",
    component: _08f8f386,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
