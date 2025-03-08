<template>
    <section class="services container-fluid" id="servicos">
        <div class="services__info">
            <div>
                <span>02</span>
                <h3 :aria-label="$t('services.title')">
                    <WordAnimation :content="$t('services.title')"/>
                </h3>
            </div>
            <h4>{{ $t('services.description') }}</h4>
        </div>
        <article class="row">
            <div class="services__image">
                <NuxtImg src="/computer.webp" alt="Team"                    format="webp" 
                    loading="lazy"
                    placeholder  />
            </div>
            <div>
                <div class="services__subtitle">
                    <h3>
                        <Icon name="ArrowIcon"></Icon> {{ $t('services.subtitle') }}
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
import { useI18n } from 'vue-i18n';

const { locale, messages } = useI18n(); 
const currentIndex = ref(0);
const progress = ref(null)
const interval = ref(null)
const serviceList = messages.value[locale.value].services.list;
const services = ref(serviceList)

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