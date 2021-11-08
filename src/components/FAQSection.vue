<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Foire Aux Questions
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="{ question, reponse } in cleanedQuestions" :key="question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-700" v-html="reponse"></p>
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
import { resolver } from '../storyblok'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  computed: {
    cleanedQuestions() {
      return this.questions.map(q => ({ ...q, reponse: resolver.render(q.reponse ) }))
    }
  }
}
</script>