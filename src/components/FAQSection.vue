<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Foire Aux Questions
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-700" v-html="faq.answer"></p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline'

const faqs = [
  {
      question: 'Comment se déroule une session ?',
      answer: 'Les sessions du Loma Club durent une heure et comportent 3 ou 4 participantes en plus de Josépha qui anime la session.<br>Chaque participante commence par se présenter puis Josépha posent les premières questions habituelles qui permettent de lancer la session.<br>Après chaque session vous recevez un message groupé sur Instagram avec toutes les participantes de la session afin de pouvoir garder contact.'
  },
  {
      question: 'Comment s’inscrit-on ?',
      answer: 'Pour s’inscrire à une session du Loma Club il faut d’abord être membre.<br>Après avoir rempli le formulaire d’inscription vous recevez vos identifiants de membre sous 24h à 48h (le délai peut être un peu long les week-ends) <br>Vos identifiants vous permettent d’accéder librement au planning des sessions et vous pouvez ensuite sélectionner la ou les session(s) de votre choix.'
  },
  {
      question: 'Combien ça coûte ?',
      answer: 'Chaque session du Loma Club est au prix de 23€.<br>Vous avez la possibilité d\'être remboursées si vous annulez votre participation sous plus de 24h.'
  },
  {
    question: 'Les conditions d’adhésion au Loma Club',
    answer: 'Tous les profils de guerrières pacifiques sont les bienvenues au Loma Club.<br>Pour devenir membre il faut remplir le formulaire disponible sur le site et s’engager à respecter quelques règles comme la ponctualité lors des sessions, le respect des autres membres et une participation régulière aux sessions.'
    },
  {
    question: 'Josépha fait-elle partie des sessions ?',
    answer: 'Josépha anime chaque session du Loma Club. C’est également elle qui répond aux messages privé sur le compte Instagram ou aux mails sur l’adresse du Loma Club.'
  },
  {
    question: 'Comment se décide les thèmes des sessions ?',
    answer: 'Les thèmes des sessions sont pour la plupart récurrents, ils se sont décidés au cours de la première année du Loma Club durant laquelle Josépha demandait chaque mois aux membres les thèmes qu’elles souhaitaient aborder.<br>Il est également possible de demander un thème en envoyant un mail sur l’adresse du Loma Club.'
  },
  {
    question: 'Peut-on faire des sessions avec les mêmes participantes ?',
    answer: 'Certaines guerrières pacifiques aiment se retrouver lors de sessions récurrentes. Pour ça, il est préférable de vous organiser entre vous et de réserver la même session. Grâce au compte Instagram du Loma Club vous avez tous les contacts des autres guerrières pacifiques.'
  }
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      faqs,
    }
  },
}
</script>