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
      
      // Reset position when the first set of terms has moved out of view
      if (-position.value >= container.value.offsetWidth) {
        position.value += container.value.offsetWidth / 3
      }
      
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

<style scoped>
.banner-container {
  width: 100%;
  overflow: hidden;
  background: white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1rem 0;
  margin-top: 30px;
}

.banner-content {
  display: inline-block;
  white-space: nowrap;
}

.term {
  display: inline-block;
  color: black;
  font-size: 1rem;
  font-weight: 400;
}

.middle-dot {
  display: inline-block;
  font-weight: bold;
  margin: 0 .5rem;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style>