import About from './views/About.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Planning from './views/Planning.vue'
import Coaching from './views/Coaching.vue'
import Tarifs from './views/Tarifs.vue'
import CGV from './views/CGV.vue'
import CGU from './views/CGU.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' }, name: 'home' },
  { path: '/planning', component: Planning, meta: { title: 'Planning' }, name: 'planning' },
  { path: '/a-propos', component: About, meta: { title: 'À propos du Loma Club' }, name: 'about' },
  { path: '/accompagnement-individuel', component: Coaching, meta: { title: 'Accompagnement individuel' }, name: 'coaching' },
  { path: '/tarifs', component: Tarifs, meta: { title: 'Tarifs et sessions' }, name: 'tarifs' },
  { path: '/conditions-generales-de-vente', component: CGV, meta: { title: 'Conditions générales de vente' }, name: 'CGV' },
  { path: '/conditions-generales-d-utilisation', component: CGU, meta: { title: 'Conditions générales d\'utilisation' }, name: 'CGU' },
  { path: '/:path(.*)', component: NotFound, name: '404' }
]
