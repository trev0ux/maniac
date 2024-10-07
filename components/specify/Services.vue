<template>
    <section class="services container-fluid" id="servicos">
        <div class="services__info">
            <div>
                <span>02</span>
                <h3>
                    <WordAnimation content="Simples e eficiente - entregamos soluções fora da curva que deixam uma impressão duradoura nos seus clientes"/>
                </h3>
            </div>
            <h4>(Nossos serviços)</h4>
        </div>
        <article class="row">
            <div class="services__image">
                <NuxtImg src="/computer.png" alt="Team" />
            </div>
            <div>
                <div class="services__subtitle">
                    <h3>
                        <Icon name="ArrowIcon"></Icon> O que nós oferecemos
                    </h3>
                </div>
                <article class="services__accordion-container">
                    <div class="services__accordion-item">
                        <div v-for="(service, index) in services" :key="service.title"
                            :class="[index === currentIndex ? 'services__progress-bar services__progress-bar--active' : 'services__progress-bar']">
                            <h3 @click="toggleService(index)">
                                {{ service.title }}
                                <span :style="{
                                    width: index === currentIndex ? `${progress}%` : '0%',
                                }"></span>
                            </h3>
                        </div>
                        <section>
                            <article v-for="(service, index) in services" :key="service.title">
                                <transition-group name="slide-swap">
                                    <p v-if="index === currentIndex" class="services__content">
                                        {{ service.content }}
                                    </p>
                                </transition-group>
                            </article>
                        </section>
                    </div>
                </article>
            </div>
        </article>
    </section>
</template>

<script setup>
import WordAnimation from "./WordAnimation.vue";

const currentIndex = ref(0);
const progress = ref(null)
const interval = ref(null)

const services = ref([
    {
        title: "Design de interfaces",
        content:
            "Criamos interfaces únicas que capturam olhares, engajam usuários e deixam uma impressão duradoura. Garantindo que sua marca se destaque no mundo digital.",
    },
    {
        title: "Desenvolvimento de websites",
        content:
            "Construímos sites rápidos, seguros e escaláveis. Nossa equipe garante que seu site funcione perfeitamente e seja fácil de atualizar com nosso CMS intuitivo.",
    },
    {
        title: "Identidade visual",
        content:
            "Com atenção aos detalhes e foco no usuário, desenvolvemos sua identidade visual para se destacar e entregar uma experiência excepcional. Transformamos suas ideias em produtos prontos para o mercado, tão atraentes visualmente quanto fáceis de usar.",
    },
])

function toggleService(index) {
    currentIndex.value = index;
    progress.value = 0;
    startProgress();
}

function startProgress() {
    clearInterval(interval.value);
    interval.value = setInterval(() => {
        progress.value += 1;
        if (progress.value >= 100) {
            progress.value = 0;
            currentIndex.value = (currentIndex.value + 1) % services.value.length;
        }
    }, 80);
}


onMounted(() => {
    startProgress();
})

onBeforeMount(() => {
    clearInterval(interval.value);
})


</script>