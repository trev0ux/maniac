<template>
  <header :class="'navbar ' + (isShrink ? 'navbar--shrink' : '')">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar__logo">
        <Icon name="LogoIcon"></Icon>
        maniac.
      </NuxtLink>
      <button class="navbar__burger-btn d-block d-lg-none" @click="toggleMenu">
        <Icon name="BurgerIcon"></Icon>
      </button>
      <nav
        :class="{ 'navbar__menu--active': showMenu }"
        class="d-none d-lg-block navbar__menu"
        ref="menu"
      >
        <div>
          <button
            class="navbar__close-btn d-block d-lg-none"
            @click="toggleMenu"
          >
            <Icon name="CloseIcon"></Icon>
          </button>
          <ul>
            <li>
              <NuxtLink>Projetos</NuxtLink>
            </li>
            <li>
              <NuxtLink>Serviços</NuxtLink>
            </li>
            <li>
              <NuxtLink>Preços</NuxtLink>
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

      console.log(scrollY.value);
      if (scrollY.value > 85) {
        isShrink.value = true;
      } else {
        isShrink.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isShrink,
    };
  },
  methods: {
    handleScroll() {
      let scroll = window.scrollY;

      console.log(scroll);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style lang="sass">
@import "~/assets/styles/components/header"
</style>
