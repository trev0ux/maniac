import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 3.2,            // Aumentado de 2 para um efeito mais lento
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1.5,      // Reduzido de 2 para movimento mais suave em toque
    infinite: false,
    wheelMultiplier: 0.9,      // Reduzido de 1.5 para scrolling mais lento com mouse
    lerp: 0.095,
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