<template>
    <div class="content-container" ref="containerRef">
      <div v-for="(word, index) in words" :key="index" class="word" :style="wordStyle(index)">
        {{ word }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  
  const props = defineProps({
    content: {
      type: String,
      required: false
    },
    threshold: {
      type: Number,
      default: 0.1
    },
    triggerAnimation: {
      type: Boolean,
      default: false
    }
  })
  
  const containerRef = ref(null)
  const isVisible = ref(false)
  const words = computed(() => props.content.split(' '))
  const observer = ref(null)
  
  const wordStyle = (index) => {
    const delay = index * 0.1
    return {
      transition: `transform 0.5s ${delay}s, opacity 0.5s ${delay}s`,
      transform: isVisible.value ? 'translateY(0)' : 'translateY(100%)',
      opacity: isVisible.value ? 1 : 0
    }
  }
  
  const animateWords = () => {
    isVisible.value = true
  }
  
  const createObserver = () => {
    const options = {
      root: null,
      threshold: props.threshold
    }
  
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateWords()
          observer.value.disconnect()
        }
      })
    }, options)
  
    if (containerRef.value) {
      observer.value.observe(containerRef.value)
    }
  }
  
  onMounted(() => {
    createObserver()
  })
  
  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })
  
  // Watch for external trigger
  watch(() => props.triggerAnimation, (newValue) => {
    if (newValue) {
      animateWords()
    }
  })
  </script>
  
  <style scoped>
  .content-container {
    overflow: hidden;
    padding: 10px 0;
  }
  
  .word {
    display: inline-block;
    margin-right: 0.3em;
    will-change: transform, opacity;
  }
  </style>