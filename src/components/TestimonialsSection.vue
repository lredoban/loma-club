<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Témoignages mamas loma club</h2>

        <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" :alt="'Mama ' + person.name" />
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="text-2xl">{{ person.name }}</h3>
                    <p class="text-indigo-600">{{ person.kids }}</p>
                    <p class="font-light">{{ person.membership }}</p>
                  </div>
                  <div class="">
                    <p class="text-gray-500" v-html="person.quote"></p>
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
    imageUrl:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f29a87ab-7706-458f-8162-71d9b03d07a8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T122222Z&X-Amz-Expires=86400&X-Amz-Signature=6de37ed56cd10ba4be68d419f23e90e1c579d7f686916d679815d4f934da1356&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22',
    quote:
      'Une bienveillance et une entraide comme je n’en avais jamais connus précédemment.<br>Ce n’est pas rare que dans certaines situations difficiles du quotidien, je repense à des moments d’une session ou à des propos échangés. ',
  },
  {
    name: 'Julie',
    kids: 'Mama de Tsigo 5 ans & Sato 2 ans',
    membership: 'Membre depuis Octobre 2020',
    imageUrl:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7fd679d3-f322-4747-a502-c3711af5d51c/Julie.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T122244Z&X-Amz-Expires=86400&X-Amz-Signature=abec0e133de1ea120d78684af6afe16461815bcd0ed32968e2e4e24e1e934849&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Julie.jpg%22',
    quote:
      'On vient au Loma Club pour apprendre des autres mais aussi vider son sac, vider ses peurs, j’y ai pleuré et je me suis sentie soutenue. C’est un rendez vous que je ne rate pour rien au monde. ',
  },
  {
    name: 'Syra',
    kids: 'Mama de Mariam Aicha 8 mois',
    membership: 'Membre depuis Mars 2021',
    imageUrl:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/355f5e2a-268a-4205-90c7-e77777e565ce/Syra.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T122316Z&X-Amz-Expires=86400&X-Amz-Signature=8272d331084f9ed91acf2cbca1a9c77aa3cb49078e5948be144507d0cbb7a24a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Syra.JPG.jpg%22',
    quote:
      'Le Loma Club, c’est l’endroit où la moindre victoire, même infime, est célébrée. Quand je sors d’une session du Loma Club, je me sens parfois toujours aussi fatiguée mais souvent plus forte et apaisée. ',
  },
  {
    name: 'Océane',
    kids: 'Mama de Jim 6 mois',
    membership: 'Membre depuis Février 2021',
    imageUrl:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6617a428-e676-4f6b-9569-006011aec641/Oceane.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T122334Z&X-Amz-Expires=86400&X-Amz-Signature=e9faa3005edd8ff4fa0c56805fe92ec7d714605283b00e2b496281b3703f7bcc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Oce%25CC%2581ane.JPG.jpg%22',
    quote:
      'J’habite à l’autre bout du monde et même si je suis dans plein de groupes de mamans dans le pays où j’habite, le Loma Club c’est le meilleur ! C’est une super belle communauté de femmes, je suis hyper fière et heureuse d’en faire partie !',
  },
]
</script>