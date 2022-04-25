import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62b4175d = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _1a44d74c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _45c3ee42 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _db778710 = () => interopDefault(import('..\\pages\\register-success.vue' /* webpackChunkName: "pages/register-success" */))
const _75ba3740 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _51a4a5cc = () => interopDefault(import('..\\pages\\dashboard\\transactions.vue' /* webpackChunkName: "pages/dashboard/transactions" */))
const _5f135549 = () => interopDefault(import('..\\pages\\transaction\\error.vue' /* webpackChunkName: "pages/transaction/error" */))
const _69143e22 = () => interopDefault(import('..\\pages\\transaction\\finish.vue' /* webpackChunkName: "pages/transaction/finish" */))
const _5e29408a = () => interopDefault(import('..\\pages\\transaction\\unfinish.vue' /* webpackChunkName: "pages/transaction/unfinish" */))
const _7b9c508a = () => interopDefault(import('..\\pages\\dashboard\\projects\\create.vue' /* webpackChunkName: "pages/dashboard/projects/create" */))
const _50c5d8d2 = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\index.vue' /* webpackChunkName: "pages/dashboard/projects/_id/index" */))
const _7872c0d5 = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\edit.vue' /* webpackChunkName: "pages/dashboard/projects/_id/edit" */))
const _ac911b1e = () => interopDefault(import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _2935f143 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _62b4175d,
    name: "dashboard"
  }, {
    path: "/login",
    component: _1a44d74c,
    name: "login"
  }, {
    path: "/register",
    component: _45c3ee42,
    name: "register"
  }, {
    path: "/register-success",
    component: _db778710,
    name: "register-success"
  }, {
    path: "/upload",
    component: _75ba3740,
    name: "upload"
  }, {
    path: "/dashboard/transactions",
    component: _51a4a5cc,
    name: "dashboard-transactions"
  }, {
    path: "/transaction/error",
    component: _5f135549,
    name: "transaction-error"
  }, {
    path: "/transaction/finish",
    component: _69143e22,
    name: "transaction-finish"
  }, {
    path: "/transaction/unfinish",
    component: _5e29408a,
    name: "transaction-unfinish"
  }, {
    path: "/dashboard/projects/create",
    component: _7b9c508a,
    name: "dashboard-projects-create"
  }, {
    path: "/dashboard/projects/:id",
    component: _50c5d8d2,
    name: "dashboard-projects-id"
  }, {
    path: "/dashboard/projects/:id?/edit",
    component: _7872c0d5,
    name: "dashboard-projects-id-edit"
  }, {
    path: "/projects/:id?",
    component: _ac911b1e,
    name: "projects-id"
  }, {
    path: "/",
    component: _2935f143,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
