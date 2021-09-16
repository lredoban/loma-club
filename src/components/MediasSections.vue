<template>
  <div class="bg-indigo-700">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white">
        On parle du Loma Club
      </h2>
      <div class="flow-root mt-8 lg:mt-10">
        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
          <a v-for="{name, imageSrc, link} in medias" :key="name" :href="link" target="_blank" ref="noopener" class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
            <img class="h-12" :src="imageSrc" :alt="name" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const medias = [
    {
      name: 'Rouje',
      imageSrc: 'https://media.cdn-rouje.com/pub/media/logo/default/logo_3.png',
      link: 'https://fr.rouje.com/rencontre-josepha.html'
    },
    {
      name: 'TALM',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0554/6174/0738/files/logo_transparent_noir-21_120x@2x.png?v=1629803396',
      link: 'https://talm.co/blogs/talks/a-nos-corps-magiques-par-josepha'
    },
    {
      name: 'Popote Bébé',
      imageSrc: 'https://www.popote-bebe.fr/wp-content/uploads/2019/01/logo.png',
      link: 'https://www.popote-bebe.fr/lemag/josepha-raphard/'
    },
    {
      name: 'AuFeminin',
      imageSrc: 'https://assets.afcdn.com/brand/aufeminin/icon.png',
      link: 'https://www.aufeminin.com/bebe/elle-sera-toujours-la-meuf-la-plus-cool-qu-elle-mette-une-robe-ou-un-costume-de-spider-man-le-message-fort-de-cette-maman-sur-la-maniere-d-habiller-sa-fille-s4020888.html'
    },
    {
      name: 'Period Studio',
      imageSrc: 'https://period.studio/img/logo.png',
      link: 'https://www.instagram.com/tv/CPgTOgVo76R/'
    }
  ]
</script>
