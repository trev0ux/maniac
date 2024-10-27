<template>
  <div class="homepage">
    <NuxtLink class="homepage__whatsapp-icon" to="https://wa.me/5571992715102?text=Ol%C3%A1%2C%20tudo%20bem%3F%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20acerca%20de%20um%20servi%C3%A7o
" external>
      <NuxtImg src="/whatsapp.png" alt="Whatsapp para falar conosco"></NuxtImg>
    </NuxtLink>
    <div class="w-100">
      <HeroBanner />
      <HowItWorks />
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
import HowItWorks from "@/components/specify/HowItWorks";
import Projects from "@/components/specify/Projects";
import Services from "@/components/specify/Services";
import Plans from "@/components/specify/Plans";
import AnimateSection from "@/components/specify/AnimateSection.vue";

</script>

<style lang="sass">
@import "~/assets/styles/pages/home.scss"
</style>
