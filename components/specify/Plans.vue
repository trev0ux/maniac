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
            <div class="plans__item">
                <div>
                    <h4>{{ item.title.loc.source }}</h4>
                    <p class="plans__details"> {{ item.details.loc.source }} </p>
                    <NuxtLink class="btn btn-primary w-100 d-flex align-items-center justify-content-between" external to="https://calendly.com/sua-empresa/30min">
                        {{ item.action.loc.source }}
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
                        <li>
                            <Icon name="CheckIcon"></Icon>
                            {{bullet.loc.source}}
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import WordAnimation from "./WordAnimation.vue";
const { tm } = useI18n();

const articlesList = computed(() => {
  return tm('products.articles')
})
</script>