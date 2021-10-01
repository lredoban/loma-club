import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { routes, authRoutes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import Toaster from "@meforma/vue-toaster"
import useUser from './user'

let app = createApp(App)
let router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
})


router.beforeEach((to, from, next) => {
  const { isAuth } = useUser()
  if (authRoutes.includes(to.name) && !isAuth.value) {
    next({ name: 'home' })
  }
  else next()
})

if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.accept('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)
app.use(Toaster)

app.mount('#app')
