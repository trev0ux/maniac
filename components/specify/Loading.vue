<!-- components/PreLoader.vue -->
<template>
    <Transition name="fade">
      <div v-if="loading" class="preloader-wrapper">
        <div class="preloader">
          <svg class="logo-svg" viewBox="0 0 54.25 57.5">
            <path
              class="logo-path"
              d="M.24,46.49c-.05-2.2-.11-4.39-.16-6.59l7.23-.24c.05-10.9.1-21.81.15-32.71-2.49-.03-4.98-.05-7.46-.08V.03c4.82-.01,9.64-.02,14.46-.03,3.97,5.41,7.94,10.82,11.91,16.23C30.5,10.85,34.63,5.47,38.75.09c2.38-.02,4.76-.03,7.14-.05.19,17.17.38,34.35.56,51.52,2.6-.08,5.2-.16,7.8-.24-.03,2.06-.05,4.13-.08,6.19-5.48-.15-10.95-.31-16.43-.46-.21-13.6-.42-27.21-.63-40.81-2.17,3.51-4.35,7.01-6.52,10.52h-5.89c-2.73-3.44-5.47-6.87-8.2-10.31-.14,9.96-.28,19.91-.42,29.87-5.28.06-10.55.12-15.83.18Z"
            />
          </svg>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const loading = ref(true)
  
  onMounted(() => {
    // Listen for when all resources are loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        loading.value = false
      }, 500) // Small delay to ensure smooth transition
    })
  })
  </script>
  
  <style scoped>
  .preloader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .preloader {
    text-align: center;
  }
  
  .logo-svg {
    width: 100px;
    height: 100px;
  }
  
  .logo-path {
    fill: #00d179;
    stroke: #00d179;
    stroke-width: 1;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    fill-opacity: 0;
    animation: drawAndFill 2s linear forwards infinite;
  }
  
  .loading-text {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
    opacity: 0;
    animation: fadeIn 0.5s ease-in forwards 0.5s;
  }
  
  @keyframes drawAndFill {
    0% {
      stroke-dashoffset: 500;
      fill-opacity: 0;
    }
    70% {
      stroke-dashoffset: 0;
      fill-opacity: 0.5;
    }
    100% {
      stroke-dashoffset: 0;
      fill-opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  /* Transition for showing/hiding the preloader */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>