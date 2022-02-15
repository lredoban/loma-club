import About from './views/About.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Planning from './views/Planning.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' }, name: 'home' },
  { path: '/planning', component: Planning, meta: { title: 'Planning' }, name: 'planning' },
  { path: '/a-propos', component: About, meta: { title: 'À propos du Loma Club' }, name: 'about' },
  { path: '/:path(.*)', component: NotFound, name: '404' }
]
