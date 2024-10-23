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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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


let timeline

onMounted(async () => {

    const isDesktop = window.innerWidth > 768;

    if (!isDesktop) {
        // Clear console
        console.clear()

        // Initialize variables after DOM is ready
        const someOffset = 150
        const cardHeight = document.querySelector('.how-work__item--1').clientHeight

        gsap.set('.how-work__section > *', {
            y: (index) => someOffset * index,
            opacity: 1 // Ensure cards are visible
        })

        timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".how-work",
                pinReparent: false,
                pinSpacing: false,
                pin: true,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        })

        // Add animations
        timeline
            .to(".how-work__item--1", {
                ease: "none",
                y: -cardHeight * 0.2, // Moves up by 80% of card height
                duration: 2,
                onStart: () => {
                    startAnimation(0);
                },
                onComplete: () => {
                    reverseAnimation(0); // Call your animation function
                }
            })
            .to(".how-work__item--2", {
                ease: "none",
                y: -cardHeight * 1.21, // Moves up by 190% of card height
                duration: 4.5,
                onStart: () => {
                    startAnimation(1);
                },
                onComplete: () => {
                    reverseAnimation(1); // Call your animation function
                }
            }, "<") // Starts at the same time as the previous animation
            .to(".how-work__item--3", {
                ease: "none",
                y: -cardHeight * 2.28, // Moves up by 304% of card height
                duration: 6.5,
                onStart: () => {
                    startAnimation(2);
                },
                onComplete: () => {
                    reverseAnimation(2); // Call your animation function
                }
            }, "<") // Starts at the same time as the previous animation
            .to(".how-work__item--4", {
                ease: "none",
                y: -cardHeight * 3.25, // Moves up by 400% of card height
                duration: 8.5,
                onStart: () => {
                    startAnimation(3);
                },
                onComplete: () => {
                    reverseAnimation(3); // Call your animation function
                }
            }, "<"); // Starts at the same time as the previous animation

    }

    await nextTick();
    // observeElements();
})

// Clean up on component unmount
onBeforeUnmount(() => {
    if (timeline) {
        timeline.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
})

</script>