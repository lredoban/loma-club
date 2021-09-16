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
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f29a87ab-7706-458f-8162-71d9b03d07a8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210916T152718Z&X-Amz-Expires=86400&X-Amz-Signature=03a29f12c371798237fc1089e120a4143c642faf21054661b4ffcd418a1867b5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22',
    quote:
      'J’ai découvert le Loma Club en post-partum de mon 2ème enfant et pour moi ça a été une aide précieuse. J’y ai trouvé un cercle avec une bienveillance et une entraide comme je n’avais jamais connus précédemment.<br>Aucun jugement ni préjugés : que de l’amour et de l’empathie.<br>Ce n’est pas rare que dans certaines situations difficiles du quotidien, je repense à des moments d’une session ou à des propos échangés.<br>Merci au Loma Club pour ce feelgood permanent et cette possibilité qui nous est donnée de rencontrer des femmes si différentes et si enrichissantes.',
  },
  {
    name: 'Julie',
    kids: 'Mama de Tsigo 5 ans & Sato 2 ans',
    membership: 'Membre depuis Octobre 2020',
    imageUrl:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7fd679d3-f322-4747-a502-c3711af5d51c/Julie.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210916T152812Z&X-Amz-Expires=86400&X-Amz-Signature=60b5d571d23bc4ee88929a6dd5fd6fc12a184e037976d5c274c3a772715b176d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Julie.jpg%22',
    quote:
      'Le Loma Club c’est un espace où je me sens bien et à l’écoute. Je n’ai pas forcément envie de parler de maternité avec mes proches, car les avis peuvent diverger et je peux me sentir jugée. Josépha a réussi à créer cet espace.<br>Même quand je pense n’avoir rien à dire, nous passons avec les autres mamans un moment plein de bienveillance et de conseils, toujours sans jugement.<br>On vient pour apprendre des autres et aussi vider son sac, vider ses peurs, j’y ai pleuré et je me suis sentie soutenue. C’est un rendez vous que je ne rate pour rien au monde.',
  },
  {
    name: 'Syra',
    kids: 'Mama de Mariam Aicha 8 mois',
    membership: 'Membre depuis Mars 2021',
    imageUrl:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/355f5e2a-268a-4205-90c7-e77777e565ce/Syra.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210916T152836Z&X-Amz-Expires=86400&X-Amz-Signature=e314e5343da5db70a3e44e62efb5c84081af30413eb949059f21e2f418c6c7c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Syra.JPG.jpg%22',
    quote:
      'Le Loma Club c’est l’endroit où tu vas prendre ta dose de réconfort, de bienveillance et de conseils quand tu as un coup de moins bien. C’est une armée (le mot parfaitement choisi par Josepha) de mères qui se soutiennent et se protègent, sans forcément se connaître mais parce qu’elle partage une chose : être maman. Le Loma Club, c’est l’endroit où mes angoisses et mes doutes sont légitimes et ne sont pas remis en question. Le Loma Club, c’est l’endroit où la moindre victoire, même infime, est célébrée. Quand je sors d’une session du Loma Club, je me sens parfois toujours aussi fatiguée mais souvent plus forte et apaisée.',
  },
  {
    name: 'Océane',
    kids: 'Mama de Jim 6 mois',
    membership: 'Membre depuis Février 2021',
    imageUrl:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6617a428-e676-4f6b-9569-006011aec641/Oceane.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210916T152850Z&X-Amz-Expires=86400&X-Amz-Signature=abe6161eba4a61da594d1ba1c9d982042157a611717e03c9db2dad29876149f4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Oce%25CC%2581ane.JPG.jpg%22',
    quote:
      'J’habite à l’autre bout du monde et même si je suis dans plein de groupes de mamans dans le pays où j’habite, le Loma Club c’est le meilleur ! Aucun sujet n’est off-topic, on peut parler de tout. Ça m’a aidé dans mon couple, dans ma « maternité », pendant mon postpartum ...<br>On a trop souvent délaissé les femmes pendant la grossesse et dans leur rôle de maman et c’est agréable de se dire qu’on est enfin écoutées et comprises ! C’est une super belle communauté de femmes, je suis hyper fière et heureuse d’en faire partie !',
  },
]
</script>