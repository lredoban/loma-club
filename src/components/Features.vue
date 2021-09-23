<template>
  <div class="py-12 bg-creme">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="feature in features" :key="feature.name">
          <dt>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-ocre text-white">
              <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="mt-5 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 text-base text-gray-700">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { DesktopComputerIcon, HeartIcon, ChatAlt2Icon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Groupe de parole en visio',
    description:
      'Les groupes de paroles s’effectuent sur zoom et ce peu importe là où vous vous trouvez dans le monde.',
    icon: DesktopComputerIcon,
  },
  {
    name: 'Communauté instagram',
    description:
      'Un compte Instagram privé sur lequel il est possible de retrouver tous les membres de l’armée pacifique et d’échanger librement.',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Des bons plans',
    description:
      'Contacts de gynéco, avis sur une marque, conseils sur la nourriture, conseils pour un trajet en voiture…',
    icon: HeartIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>