<template>
  <div class="homepage">
    <NuxtImg class="homepage__whatsapp-icon" src="/whatsapp.png" alt="Whatsapp para falar conosco"></NuxtImg>
    <div class="w-100">
      <HeroBanner />
      <HowItWorks />
    </div>
    <AnimateSection>
      <Projects />
    </AnimateSection>
    <AnimateSection>
      <Services />
    </AnimateSection>
      <Plans />
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
