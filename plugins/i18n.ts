import PT from '../locales/pt';
import EN from '../locales/en';
import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(async (nuxtApp) => {
  const availableLanguages = ['pt', 'en'];

  const getUserLocale = async () => {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code?.toLowerCase(); 
    console.log(countryCode);
    return countryCode === 'br'? 'pt' : 'en';
  };

  const userLocale = await getUserLocale();

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: userLocale,
    fallbackLocale: 'en',
    messages: {
      en: EN,
      pt: PT
    }
  });

  nuxtApp.vueApp.use(i18n);
});