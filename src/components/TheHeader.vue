<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ocre">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/">
              <img src="/img/logos/logo-nude.png"  alt="Loma Logo Nude" class="h-10"/>
            </router-link>
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
                <router-link
                  v-for="(link, i) in links"
                  :key="i"
                  :to="link.to"
                  custom
                  v-slot="{ navigate, href, isExactActive }"
                >
                  <a
                    :href="href"
                    @click="navigate"
                    class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    :class="[
                      isExactActive
                        ? 'border-ocre text-ocre'
                        : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-700'
                    ]"
                    >{{ link.text }}</a
                  >
                </router-link>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <router-link to="/planning" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-ocre shadow-sm hover:bg-ocre hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocre">
              Planning
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          custom
          v-slot="{ navigate, href, isExactActive }"
        >
          <a
            :href="href"
            @click="navigate"
            class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            :class="[
              isExactActive
                ? 'bg-gray-100 border-ocre text-ocre'
                : 'border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
            ]"
            >{{ link.text }}</a
          >
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const links = [
  { text: 'Accueil', to: '/' },
  { text: 'Accompagnement individuel', to: '/accompagnement-individuel' },
  // { text: 'Tarifs et packs', to: '/tarifs' },
  { text: 'À propos', to: '/a-propos' }
]
</script>