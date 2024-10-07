<template>
  <section ref="sectionRef" class="animated-section" :style="sectionStyle">
    <slot></slot>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useAnimation } from '~/composables/useAnimation'

const props = defineProps({
  threshold: {
    type: Number,
    default: 0.2
  },
  fadeInStart: {
    type: Number,
    default: 0.3
  },
  fadeInEnd: {
    type: Number,
    default: 0.7
  }
})

const { lenis } = useAnimation()
const sectionRef = ref(null)
const scrollProgress = ref(0)

const sectionStyle = computed(() => {
  const opacity = Math.min(1, Math.max(0, (scrollProgress.value - props.fadeInStart) / (props.fadeInEnd - props.fadeInStart)))
  const translateY = Math.max(0, 50 - scrollProgress.value * 100)
  return {
    opacity: opacity,
    transform: `translateY(${translateY}px)`,
    transition: 'opacity 0.3s ease, transform 0.3s ease'
  }
})

const updateScrollProgress = () => {
  if (!sectionRef.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const sectionHeight = rect.height

  const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
  const progress = visibleHeight / sectionHeight

  scrollProgress.value = Math.max(0, Math.min(1, progress))
}

onMounted(() => {
  lenis.on('scroll', updateScrollProgress)
  updateScrollProgress() // Initial check
})

onUnmounted(() => {
  lenis.off('scroll', updateScrollProgress)
})
</script>

<style scoped>
.animated-section {
  will-change: opacity, transform;
}
</style>