import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#app'

export function useAnimation() {
  const { $lenis } = useNuxtApp()
  const scrollY = ref(0)
  const velocity = ref(0)

  const onScroll = (e) => {
    scrollY.value = e.scroll
    velocity.value = e.velocity
  }

  onMounted(() => {
    $lenis.on('scroll', onScroll)
  })

  onBeforeUnmount(() => {
    $lenis.off('scroll', onScroll)
  })

  return {
    scrollY,
    velocity,
    lenis: $lenis,
  }
}