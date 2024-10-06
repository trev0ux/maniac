<template>
  <header :class="'navbar ' + (isShrink ? 'navbar--shrink' : '')">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar__logo">
        <Icon name="LogoIcon"></Icon>
      </NuxtLink>
      <button class="navbar__burger-btn d-flex d-lg-none" @click="toggleMobileMenu" aria-label="Toggle mobile menu"
        :class="(isMobileMenuOpen ? 'navbar__burger-btn--open' : '')">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav :class="{ 'navbar__menu--active': isMobileMenuOpen }" class="d-none d-lg-block navbar__menu" ref="menu">
        <div>
          <ul>
            <li>
              <NuxtLink to="#projetos" @click="toggleMobileMenu">Projetos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#servicos" @click="toggleMobileMenu">Serviços</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#precos" @click="toggleMobileMenu">Preços</NuxtLink>
            </li>
            <li>
              <NuxtLink class="btn navbar__budget">
                Pedir um orçamento
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { Icon } from "#components";
import { onMounted, onUnmounted, ref } from "vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  setup() {
    const scrollY = ref(0);
    const isShrink = ref(false);

    const handleScroll = () => {
      scrollY.value = window.scrollY;
      if (scrollY.value > 85) {
        isShrink.value = true;
      } else {
        isShrink.value = false;
      }
    };

    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isShrink,
      toggleMobileMenu,
      isMobileMenuOpen
    };
  },
};
</script>

<style lang="sass">
@import "~/assets/styles/components/header"
</style>
