<template>
    <section class="plans container-fluid" id="servicos-completo">
        <div class="plans__info">
            <div>
                <span>03</span>
                <h3 aria-label="Soluções digitais de alto impacto - Impulsionamos seu negócio com estratégias personalizadas que geram resultados">
                    <WordAnimation
                        content="Soluções digitais de alto impacto - Impulsionamos seu negócio com estratégias personalizadas que geram resultados" />
                </h3>
            </div>
            <h4>(Nossos serviços)</h4>
        </div>
        <article>
            <div v-for="(item, index) in articlesList" :key="index + '_article'" class="plans__item">
                <div>
                    <h4>{{ rt(item.title) }}</h4>
                    <p class="plans__details"> {{ rt(item.details) }} </p>
                    <NuxtLink class="btn btn-primary w-100 d-flex align-items-center justify-content-between" external to="https://calendly.com/sua-empresa/30min">
                        {{ rt(item.action) }}
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
                        <li v-for="(bullet, bulletIndex) in item.itens" :key="bulletIndex + '_li'">
                            <Icon name="CheckIcon"></Icon>
                            {{ rt(bullet) }}
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import WordAnimation from "./WordAnimation.vue";
const { tm, rt } = useI18n()

const articlesList = computed(() => {
  const articles = tm('products.articles')
  return Array.isArray(articles) ? articles : []
})
</script>