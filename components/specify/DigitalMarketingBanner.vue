<template>
  <div class="banner-container" ref="container">
    <div class="banner-content" :style="{ transform: `translateX(${position}px)` }">
      <span v-for="(term, index) in displayedTerms" :key="index" class="term">
        {{ rt(term) }}<span class="middle-dot"> · </span>
      </span>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'


export default {
  name: 'DigitalMarketingBanner',
  setup() {
    const { tm, rt } = useI18n()
    const position = ref(0)
    const container = ref(null)
    let animationId = null
    let contentWidth = 0
    let singleSetWidth = 0
    const SPEED = 1

    const marketingTerms = computed(() => {
      return tm('marketing_terms')
    })

    const displayedTerms = computed(() => {
      const terms = Array.isArray(marketingTerms.value) ? marketingTerms.value : []
      return [...terms, ...terms, ...terms]
    })

    const animate = () => {
      position.value -= SPEED
      
      if (-position.value >= singleSetWidth) {
        position.value = 0
      }
      
      animationId = requestAnimationFrame(animate)
    }

    const initializeAnimation = () => {
      const contentEl = container.value?.querySelector('.banner-content')
      if (contentEl) {
        contentWidth = contentEl.offsetWidth
        singleSetWidth = contentWidth / 3
        
        position.value = 0
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
        animate()
      }
    }

    onMounted(() => {
      nextTick(() => {
        initializeAnimation()
      })
    })

    watch(marketingTerms, () => {
      nextTick(() => {
        initializeAnimation()
      })
    })

    onUnmounted(() => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    })

    return {
      position,
      displayedTerms,
      container,
      marketingTerms,
      rt
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
  background: var(--white);
  border-top: 1px solid var(--card-border);
  border-bottom: 1px solid var(--card-border);
  padding: 1rem 0;
  margin-top: 30px;

  @include media-breakpoint-down(md) {
    padding: 8px 0;
  }
}

.banner-content {
  display: inline-block;
  white-space: nowrap;
  will-change: transform; // Optimize performance
}

.term {
  display: inline-block;
  color: var(--light-black);
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