<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => locales.value)

const otherLocales = computed(() => {
  return availableLocales.value.filter(l => l.code !== locale.value)
})

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'pt' : 'en'
  setLocale(newLocale)
  
  // Save to localStorage for persistence
  if (import.meta.client) {
    localStorage.setItem('i18n_redirected', newLocale)
  }
}
</script>

<template>
  <div class="lang-switcher">
    <input 
      type="checkbox" 
      id="lang-toggle" 
      class="lang-switcher__input"
      :checked="locale === 'pt'"
      @change="toggleLanguage"
    />
    <label for="lang-toggle" class="lang-switcher__label">
      <span class="lang-switcher__text lang-switcher__text--en">
        <span class="lang-switcher__flag">🇺🇸</span>
        EN
      </span>
      <span class="lang-switcher__slider"></span>
      <span class="lang-switcher__text lang-switcher__text--pt">
        <span class="lang-switcher__flag">🇧🇷</span>
        PT
      </span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/_base/variables";
@import "bootstrap/scss/_functions";
@import "bootstrap/scss/_variables";
@import "bootstrap/scss/mixins/_breakpoints";

.lang-switcher {
  display: flex;
  align-items: center;
  
  &__input {
    display: none;
  }
  
  &__label {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, .6);
    border-radius: 25px;
    padding: 4px;
    transition: all 0.3s ease;
    min-width: 100px;
    height: 36px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, .6);
    }
    
    @include media-breakpoint-down(md) {
      padding: 3px;
    }
  }
  
  &__text {
    flex: 1;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    transition: color 0.3s ease;
    z-index: 2;
    position: relative;
    
    @include media-breakpoint-down(md) {
      font-size: 0.7rem;
    }
    
    &--en {
      .lang-switcher__input:not(:checked) ~ .lang-switcher__label & {
        color: #fff;
      }
    }
    
    &--pt {
      .lang-switcher__input:checked ~ .lang-switcher__label & {
        color: #fff;
      }
    }
  }
  
  &__slider {
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(50% - 2px);
    height: calc(100% - 4px);
    background: var(--white);
    border-radius: 20px;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    
    @include media-breakpoint-down(md) {
      top: 1px;
      left: 1px;
    }
  }
  
  &__input:checked ~ &__label &__slider {
    transform: translateX(100%);
  }
  
  &__input:checked ~ &__label &__text--en {
    color: rgba(255, 255, 255, 1);
  }
  
  &__input:not(:checked) ~ &__label &__text--pt {
    color: rgba(255, 255, 255, 1);
  }
}
</style>