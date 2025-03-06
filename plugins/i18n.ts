import PT from '../locales/pt';
import EN from '../locales/en';
import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    locales: ['pt','en'],
    defaultLocale: 'pt',
    fallbackLocale: 'pt',
    messages: {
      en: EN,
      pt: PT
    }
  })
  vueApp.use(i18n)
})