<template>
    <div>
        <section class="how-work container-fluid" id="comoFunciona">
            <div class="how-work__header">
                <h2>
                    <WordAnimation content="4 etapas para construir um site do jeitinho que você precisa" />
                </h2>
                <p>Veja como nós tornamos uma ideia abstrata em resultados tangíveis</p>
            </div>
            <article class="how-work__section">
                <div v-for="(item, itemIndex) in howWorkItems" :key="itemIndex" :class="[
                    itemIndex === 0 ? 'how-work__item--1' : '',
                    itemIndex === 1 ? 'how-work__item--2' : '',
                    itemIndex === 2 ? 'how-work__item--3' : '',
                    itemIndex === 3 ? 'how-work__item--4' : '',
                    { 'how-work__item--change-color': item.firstItemComplete },
                    'how-work__item'
                ]">
                    <span>{{ item.number }}</span>
                    <h3>{{ item.title }}</h3>
                    <NuxtImg :src="item.imageSrc" :alt="item.imageAlt"></NuxtImg>
                    <div class="how-work__animation-block">
                        <div v-for="(cascadeItem, cascadeIndex) in item.cascadeEffect" :key="cascadeIndex"
                            class="how-work__item--cascate-effect" :style="{
                                transform: `translateY(${100 - cascadeItem.progress}%)`,
                            }"></div>
                    </div>
                </div>
            </article>
        </section>
    </div>

</template>

<script setup>
import WordAnimation from "./WordAnimation.vue";

const howWorkItems = ref([
    {
        number: "01",
        title: "Design centrado no usuário com Figma",
        imageSrc: "/figma.png",
        imageAlt: "Tela do Figma com o Icone da marca",
        cascadeEffect: Array(5)
            .fill()
            .map(() => ({ progress: 0 })),
        firstItemComplete: false,
        animationFrame: null,
    },
    {
        number: "02",
        title: "Website escalável desenvolvido com código e CMS",
        imageSrc: "/code.png",
        imageAlt: "Tela da IDE VsCode e logo com simbolo de programação",
        cascadeEffect: Array(5)
            .fill()
            .map(() => ({ progress: 0 })),
        firstItemComplete: false,
        animationFrame: null,
    },
    {
        number: "03",
        title: "Presença online inigualável com SEO e boa performance",
        imageSrc: "/seo.png",
        imageAlt: "Tela simulando o Google Lighthouse",
        cascadeEffect: Array(5)
            .fill()
            .map(() => ({ progress: 0 })),
        firstItemComplete: false,
        animationFrame: null,
    },
    {
        number: "04",
        title: "Coloque seu site no ar com confiança",
        imageSrc: "/hosted.png",
        imageAlt: "Tela com indicadores de publicação do site",
        cascadeEffect: Array(5)
            .fill()
            .map(() => ({ progress: 0 })),
        firstItemComplete: false,
        animationFrame: null,
    },
])



onMounted(async () => {
})


</script>