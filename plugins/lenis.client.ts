import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 1, // Reduced from 1.2 for faster response
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    wheelMultiplier: 1.5, // Increased for faster scrolling
    lerp: 0.075, // Reduced for snappier response (default is 0.1)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  nuxtApp.vueApp.use({
    install(app) {
      app.config.globalProperties.$lenis = lenis
    },
  })

  return {
    provide: {
      lenis,
    },
  }
})