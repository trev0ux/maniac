<template>
  <div class="homepage">
    <NuxtLink class="homepage__whatsapp-icon" to="https://wa.me/5571991178092" external>
      <NuxtImg src="/whatsapp.png" alt="Whatsapp para falar conosco"></NuxtImg>
    </NuxtLink>
    <div class="w-100">
      <HeroBanner />
    </div>
    <AnimateSection :fade-in-start="0.1" :fade-in-end="0.2">
      <Projects />
    </AnimateSection>
    <AnimateSection :fade-in-start="0.1" :fade-in-end="0.2">
      <Services />
    </AnimateSection>
    <AnimateSection :fade-in-start="0.1" :fade-in-end="0.2">
      <Plans />
    </AnimateSection>
  </div>
</template>

<script setup>
import { Icon } from "#components";
import HeroBanner from "@/components/specify/HeroBanner";
import Projects from "@/components/specify/Projects";
import Services from "@/components/specify/Services";
import Plans from "@/components/specify/Plans";
import AnimateSection from "@/components/specify/AnimateSection.vue";

</script>

<style lang="sass">
@import "~/assets/styles/pages/home.scss"
</style>
