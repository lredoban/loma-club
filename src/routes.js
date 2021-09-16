import About from './views/About.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/josepha-raphard', component: About, meta: { title: 'Josépha Raphard' } },
  { path: '/:path(.*)', component: NotFound },
]
