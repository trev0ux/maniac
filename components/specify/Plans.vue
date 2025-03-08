<template>
    <section class="plans container-fluid" id="servicos-completo">
        <div class="plans__info">
            <div>
                <span>03</span>
                <h3>
                    <WordAnimation
                        :content="$t('services.title')" />
                </h3>
            </div>
            <h4>{{ $t('services.description') }}</h4>
        </div>
        <article>
            <div v-for="(item, index) in articlesList" :key="index + '_article'" class="plans__item">
                <div>
                    <h4>{{ item.title }}</h4>
                    <p class="plans__details"> {{ item.details }} </p>
                    <NuxtLink class="btn btn-primary w-100 d-flex align-items-center justify-content-between" external to="https://calendly.com/sua-empresa/30min">
                        {{ item.action }}
                        <div class="arrows-block">
                            <div class="arrows-icon">
                                <Icon name="ArrowIcon"></Icon>
                                <Icon name="ArrowIcon"></Icon>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
                <div>
                    <ul>
                        <li v-for="(bullet, index) in item.itens" :key="index + '_li'">
                            <Icon name="CheckIcon"></Icon>
                            {{bullet}}
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </section>
</template>
<script setup>
import WordAnimation from "./WordAnimation.vue";
import { useI18n } from 'vue-i18n';
const { locale, messages } = useI18n();
const articlesList = messages.value[locale.value].products.articles;
</script>