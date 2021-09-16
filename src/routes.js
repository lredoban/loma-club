import About from './views/About.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Sessions from './views/Sessions.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/sessions', component: Sessions, meta: { title: 'Sessions' } },
  { path: '/josepha-raphard', component: About, meta: { title: 'Josépha Raphard' } },
  { path: '/:path(.*)', component: NotFound },
]
