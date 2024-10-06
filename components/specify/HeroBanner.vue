<template>
    <section class="banner container">
        <h1>
            <WordAnimation content="Transformamos marcas no digital com criatividade dirigida a resultados."/>   
        </h1>
        <p>
            Criamos sites e experiências digitais que convertem visitantes em
            clientes fiéis e impulsionam o crescimento do seu negócio!
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
        <div class="banner__grid-block">
            <div class="banner__grid-background" ref="gridBackground"></div>
            <div class="banner__grid">
                <div v-for="(grid, index) in 14" :key="index">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import WordAnimation from "./WordAnimation.vue"
</script>