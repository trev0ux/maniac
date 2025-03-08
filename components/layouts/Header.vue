<template>
  <header :class="'navbar ' + (isShrink ? 'navbar--shrink' : '')">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar__logo" aria-label="Miraisoft">
        <Icon name="LogoIcon"></Icon>
        miraisoft
      </NuxtLink>
      <div class="d-flex gap-3 align-items-center">
        <NuxtLink class="btn navbar__budget-mobile d-lg-none" to="https://wa.me/5571991178092" external>
          Pedir um orçamento
        </NuxtLink>
        <button class="navbar__burger-btn d-flex d-lg-none" @click="toggleMobileMenu" aria-label="Toggle mobile menu"
          :class="(isMobileMenuOpen ? 'navbar__burger-btn--open' : '')">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav :class="{ 'navbar__menu--active': isMobileMenuOpen }" class="d-none d-lg-block navbar__menu" ref="menu">
        <div>
          <ul>
            <li>
              <NuxtLink to="#projetos" @click="toggleMobileMenu">Projetos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#servicos" @click="toggleMobileMenu">Nosso trabalho</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#servicos-completo" @click="toggleMobileMenu">Serviços</NuxtLink>
            </li>
            <li class=" navbar__budget d-none d-lg-block">
              <NuxtLink class="btn" to="https://wa.me/5571992715102?text=Ol%C3%A1%2C%20tudo%20bem%3F%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20acerca%20de%20um%20servi%C3%A7o" external>
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
