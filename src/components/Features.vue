<template>
  <div class="py-12 bg-white shadow">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="{ Titre, Texte, Icon } in features" :key="Titre">
          <dt>
            <div class="flex items-center justify-center h-14 w-14">
              <img :src="Icon.filename" :alt="Titre" />
            </div>
            <p class="mt-5 text-ocre text-lg leading-6 font-semibold tracking-widest">{{ Titre }}</p>
          </dt>
          <dd class="mt-2 text-base text-gray-800">
            {{ Texte }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
const features = [
  {
    name: 'Groupe de parole en visio',
    description:
      'Les groupes de paroles s’effectuent sur zoom et durent 1 heure. Les sessions s\'articulent autour de thèmes tels que le post-partum, la sexualité, l\'envie de changer de voie professionnelle etc ... ',
    iconUrl: '/img/pictoOrdi.png',
  },
  {
    name: 'Communauté instagram',
    description:
      'Un compte Instagram privé sur lequel il est possible de retrouver tous les membres de l’armée pacifique et d’échanger librement.',
    iconUrl: '/img/pictoChat.png',
  },
  {
    name: 'Des bons plans',
    description:
      'Contacts de gynéco, avis sur une marque, conseils sur la nourriture, conseils pour un trajet en voiture…',
    iconUrl: '/img/pictoCoeur.png',
  },
]

export default {
  props: {
    features: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.shadow
  background-image: radial-gradient(#f4dfce9e 1px,  #faf7f5 1px)
  background-size: 5px 5px
</style>