import About from './views/About.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Planning from './views/Planning.vue'
import User from './views/User.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/planning', component: Planning, meta: { title: 'Planning' } },
  { path: '/a-propos', component: About, meta: { title: 'À propos du Loma Club' } },
  { path: '/profil', component: User, meta: { title: 'Profil' } },
  { path: '/:path(.*)', component: NotFound },
]
