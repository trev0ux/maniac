<template>
    <section class="how-work container-fluid">
        <div class="how-work__header">
            <h2><WordAnimation content="4 etapas para construir um site do jeitinho que você precisa"/> </h2>
            <p>Veja como nós tornamos uma ideia abstrata em resultados tangíveis</p>
        </div>
        <article>
            <div v-for="(item, itemIndex) in howWorkItems" :key="itemIndex" class="how-work__item"
                @mouseenter="startAnimation(itemIndex)" @mouseleave="reverseAnimation(itemIndex)"
                :class="{ 'how-work__item--change-color': item.firstItemComplete }">
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

const observeElements = () => {
  const elements = document.querySelectorAll('.how-work__item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const itemIndex = Array.from(elements).indexOf(entry.target);
        if (itemIndex !== -1) {
          startAnimation(itemIndex);
          setTimeout(()=> {
            reverseAnimation(itemIndex)
          }, 3000)
        }
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
};

function startAnimation(itemIndex) {
    animateCascade(itemIndex, true);
}

function reverseAnimation(itemIndex) {
    animateCascade(itemIndex, false);
}

function animateCascade(itemIndex, revealing) {
    const item = howWorkItems.value[itemIndex];
    cancelAnimationFrame(item.animationFrame);

    const totalSteps = 50;
    const duration = 850; // Total animation duration in ms
    const startTime = performance.now();

    const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const step = Math.min(
            (elapsedTime / duration) * totalSteps,
            totalSteps
        );

        for (let index = 0; index < item.cascadeEffect.length; index++) {
            const cascadeItem = item.cascadeEffect[index];
            const delay = index * (totalSteps / item.cascadeEffect.length);

            if (step >= delay) {
                const progress = Math.min(1, (step - delay) / (totalSteps - delay));
                cascadeItem.progress = revealing
                    ? progress * 100
                    : 100 - progress * 100;

                if (
                    index === 3 &&
                    !item.firstItemComplete &&
                    cascadeItem.progress >= 95
                ) {
                    item.firstItemComplete = true;
                } else if (
                    index === 3 &&
                    item.firstItemComplete &&
                    cascadeItem.progress < 95
                ) {
                    item.firstItemComplete = false;
                }
            }
        }

        if (step < totalSteps) {
            item.animationFrame = requestAnimationFrame(animate);
        }
    };

    item.animationFrame = requestAnimationFrame(animate);
}

onMounted(async () => {
  await nextTick();
  observeElements();
});

</script>