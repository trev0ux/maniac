<template>
    <section>
        <div class="banner container">
            <h1 aria-label="Sites e sistemas que não só resolvem problemas: impressionam seu cliente e te fazem vender mais.">
                <WordAnimation content="Sites e sistemas que não só resolvem problemas: impressionam seu cliente e te fazem vender mais." />
            </h1>
            <h2>
                Criamos experiências digitais fora da curva com o objetivo de expandir seu negócio com resultados mensuráveis!
            </h2>
            <NuxtLink class="btn btn-primary" to="#servicos-completo">
                Conheça nossos serviços
                <div class="arrows-block">
                    <div class="arrows-icon">
                        <Icon name="ArrowIcon"></Icon>
                        <Icon name="ArrowIcon"></Icon>
                    </div>
                </div>
            </NuxtLink>
            <div class="banner__roll">
                <p></p>
            </div>
        </div>
    </section>
    <DigitalMarketingBanner />
    <swiper :slides-per-view="1" :space-between="50" loop :autoplay="{ delay: 3000 }"
        :modules="modules">
        <swiper-slide>
            <article class="banner__images container-fluid mt-5">
                <div>
                <NuxtImg     
                    format="webp" 
                    loading="lazy"
                    placeholder 
                    ref="image1" 
                    src="/mbaile2.webp" 
                    alt="mobile"/>
                </div>
                <div>
                    <NuxtImg ref="image2" src="/image-project.webp" alt="mobile"                     format="webp" 
                    loading="lazy"
 />
                </div>
            </article>
        </swiper-slide>
        <swiper-slide>
            <div class="container-fluid banner__image-project mt-5">
                <NuxtImg src="/mockupdesk2.webp" 
                            alt="desktop"
                            format="webp" 
                    loading="lazy"
                    placeholder />
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import DigitalMarketingBanner from "./DigitalMarketingBanner.vue"
import WordAnimation from "./WordAnimation.vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css'
import {
  A11y,
  Autoplay,
} from "swiper/modules";

defineComponent({
    Swiper,
    SwiperSlide
})

const modules = [Autoplay, A11y];

</script>