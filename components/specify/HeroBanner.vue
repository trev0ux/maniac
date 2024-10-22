<template>
    <section>
        <div class="banner container">
            <h1>
                <WordAnimation content="Sites que não só resolvem problemas: criam novas oportunidades de vendas" />
            </h1>
            <p>
                Desenvolvemos sites fora da curva que trabalham 24/7 para expandir seu negócio com resultados mensuráveis!
            </p>
            <NuxtLink class="btn btn-primary" to="#precos">
                Conheça nossos preços
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
                    <NuxtImg ref="image1" src="/image-project.png" />
                </div>
                <div>
                    <NuxtImg ref="image2" src="/image-project.png" />
                </div>
            </article>
        </swiper-slide>
        <swiper-slide>
            <div class="container-fluid banner__image-project mt-5">
                <NuxtImg src="/zap-project.png" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="container-fluid banner__image-project mt-5">
                <NuxtImg src="/zap-project.png" />
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