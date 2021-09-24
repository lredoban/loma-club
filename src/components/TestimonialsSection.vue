<template>
  <div class="bg-gray-100">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Témoignages mamas loma club</h2>

        <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li class="group" v-for="person in people" :key="person.name">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="h-0 aspect-w-3 aspect-h-2 rounded-lg bg-creme overflow-hidden sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover object-top shadow-lg transition duration-500 grayscale mix-blend-multiply sm:object-center group-hover:scale-110" :src="person.imageUrl" :alt="'Mama ' + person.name" />
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-lg leading-none font-medium space-y-1">
                    <h3 class="text-2xl">{{ person.name }}</h3>
                    <p class="text-ocre">{{ person.kids }}</p>
                    <p class="text-ocre font-light">{{ person.membership }}</p>
                  </div>
                  <div>
                    <p class="pl-4 text-gray-800 relative italic before:absolute before:top-0 before:left-0 before:-ml-7 before:-mt-3 before:text-9xl before:text-ocre before:font-virtual before:content-quote" v-html="person.quote"></p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Flora',
    kids: 'Mama de Lila 4 ans et Elio 1 an',
    membership: 'Membre depuis Novembre 2020',
    imageUrl: '/img/mamas/Flora.png',
    quote:
      'Une bienveillance et une entraide comme je n’en avais jamais connus précédemment.<br>Ce n’est pas rare que dans certaines situations difficiles du quotidien, je repense à des moments d’une session ou à des propos échangés. ',
  },
  {
    name: 'Julie',
    kids: 'Mama de Tsigo 5 ans & Sato 2 ans',
    membership: 'Membre depuis Octobre 2020',
    imageUrl: '/img/mamas/Julie.jpg',
    quote:
      'On vient au Loma Club pour apprendre des autres mais aussi vider son sac, vider ses peurs, j’y ai pleuré et je me suis sentie soutenue. C’est un rendez vous que je ne rate pour rien au monde. ',
  },
  {
    name: 'Syra',
    kids: 'Mama de Mariam Aicha 8 mois',
    membership: 'Membre depuis Mars 2021',
    imageUrl: '/img/mamas/Syra.jpg',
    quote:
      'Le Loma Club, c’est l’endroit où la moindre victoire, même infime, est célébrée. Quand je sors d’une session du Loma Club, je me sens parfois toujours aussi fatiguée mais souvent plus forte et apaisée. ',
  },
  {
    name: 'Océane',
    kids: 'Mama de Jim 6 mois',
    membership: 'Membre depuis Février 2021',
    imageUrl: '/img/mamas/Oceane.jpg',
    quote:
      'J’habite à l’autre bout du monde et même si je suis dans plein de groupes de mamans dans le pays où j’habite, le Loma Club c’est le meilleur ! C’est une super belle communauté de femmes, je suis hyper fière et heureuse d’en faire partie !',
  },
]
</script>