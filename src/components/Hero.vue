<template>
  <div class="relative bg-creme">
    <main ref="target" class="transition duration-300 lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-10 text-center lg:py-36 lg:text-left xl:py-72">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl lg:text-3xl xl:text-4xl">
            <span class="block xl:inline">Aussi appelé armée pacifique, <span class="block lg:inline">le <span class="text-ocre">Loma Club</span>,</span> est un club de parole privé autour de la maternité.</span>
          </h1>
          <!-- <p class="mt-3 max-w-md mx-auto text-lg text-gray-800 sm:text-xl md:mt-5 md:max-w-3xl">
            Les sessions durent une heure et s’articulent autour de thèmes tels que le post-partum, la reprise du travail, être mère quand on a des relations difficiles avec la sienne, la sexualité, avoir envie de changer de voie professionnelle, etc.
          </p> -->
        </div>
      </div>
      <div class="relative w-full p-6 grid grid-cols-3 grid-rows-3 sm:h-72 md:h-[48rem] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <div class="absolute inset-0 flex justify-center items-center">
          <div class="w-full h-full rounded-full" :style="shadowStyle"></div>
        </div>
        <img src="/img/hero-illu/MamaLeft.svg" alt="Maman allaitant pendant une visio" class="row-start-2" :style="styleMamaLeft"/>
        <img src="/img/hero-illu/MamaTop.svg" alt="Maman croisant les bras pendant une visio" class="col-start-2" :style="styleMamaTop"/>
        <img src="/img/hero-illu/MamaRight.svg" alt="Maman portant son bébé pendant une visio" class="row-start-2 col-start-3" :style="styleMamaRight"/>
        <img src="/img/hero-illu/Josepha.svg" alt="Josépha Raphard" class="col-start-2 row-span-2 self-center scale-110 translate-y-8 mix-blend-darken" :style="styleJosepha"/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useParallax } from '@vueuse/core'
import { computed, reactive, ref } from 'vue'
import {
  map,
} from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.0"

const target = ref(null)
const parallax = reactive(useParallax(target))

const styleBase = {
  transition: '.4s ease-out all'
}

const styleMamaLeft = computed(() => ({
  ...styleBase,
  transform: `translateX(${parallax.tilt * 30}px) translateY(${
    parallax.roll * 30
  }px)`,
}))
const styleMamaTop = computed(() => ({
  ...styleBase,
  transform: `translateX(${parallax.tilt * 60}px) translateY(${
    parallax.roll * 60
  }px)`
}))
const styleMamaRight = computed(() => ({
  ...styleBase,
  transform: `translateX(${parallax.tilt * 45}px) translateY(${
    parallax.roll * 45
  }px)`
}))
const styleJosepha = computed(() => ({
  ...styleBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(${map(parallax.tilt + parallax.roll, -0.25, 0.25, 0.97, 1.03)})`
}))
const shadowStyle = computed(() => {
  const gradientSize = map(parallax.tilt + parallax.roll, -0.25, 0.25, 4, 5)
  const backgroundSize = map(parallax.tilt + parallax.roll, -0.25, 0.25, 8, 10)
  return {
  transition: '.4s ease-out all',
  opacity: 0.02,
  backgroundImage: `radial-gradient(transparent ${gradientSize}px, black ${gradientSize}px)`,
  backgroundSize: `${backgroundSize}px ${backgroundSize}px`,
  backgroundColor: 'transparent',
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(0.88)`
}})
</script>
