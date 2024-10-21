// DigitalMarketingBanner.vue
<template>
  <div class="banner-container" ref="container">
    <div class="banner-content" :style="{ transform: `translateX(${position}px)` }">
      <span v-for="(term, index) in displayedTerms" :key="index" class="term">
        {{ term }}<span class="middle-dot"> · </span>
      </span>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'DigitalMarketingBanner',
  setup() {
    const position = ref(0)
    const container = ref(null)
    let animationId = null

    const marketingTerms = [
      'E-commerce',
      'UX Design',
      'Web Design',
      'Landing Pages',
      'Site Institucional',
      'SEO',
      'Branding',
      'Design Gráfico'
    ]

    const displayedTerms = computed(() => [...marketingTerms, ...marketingTerms, ...marketingTerms, ...marketingTerms, ...marketingTerms, ...marketingTerms])

    const animate = () => {
      position.value -= 1
      
      animationId = requestAnimationFrame(animate)
    }

    onMounted(() => {
      animationId = requestAnimationFrame(animate)
    })

    onUnmounted(() => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    })

    return {
      position,
      displayedTerms,
      container
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_base/typography";
@import "~/assets/styles/_base/variables";
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";
@import "bootstrap/scss/mixins/_breakpoints";

.banner-container {
  width: 100%;
  overflow: hidden;
  background: $white;
  border-top: 1px solid $primary;
  border-bottom: 1px solid $primary;
  padding: 1rem 0;
  margin-top: 30px;

  @include media-breakpoint-down(md) {
    padding: 8px 0;
  }
}

.banner-content {
  display: inline-block;
  white-space: nowrap;
}

.term {
  display: inline-block;
  color: $primary;
  font-size: 1rem;
  @include font-size($font-regular);
  font-weight: 400;

  @include media-breakpoint-down(md) {
    @include font-size($font-small);
  }
}

.middle-dot {
  display: inline-block;
  font-weight: bold;
  margin: 0 .5rem;
}
</style>