<template>
    <section class="projects container-fluid" id="projetos">
        <div class="projects__info">
            <div>
                <span>01</span>
                <h3>
                    <WordAnimation content="De projeto em projeto - ajudamos sua marca a crescer e mostrar seumelhor para o mundo" />
                </h3>
            </div>
            <h4>(Projetos desenvolvidos)</h4>
        </div>
        <article>
            <div>
                <NuxtImg src="/whatsapp-api.png" alt="WhatsApp API Project" />
                <div>
                    <h4>Whatsapp API - Volare Host</h4>
                    <h4>Landing Page</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/whatsapp-api.png" />
                <div>
                    <h4>Whatsapp API - Volare Host</h4>
                    <h4>Landing Page</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/whatsapp-api.png" alt="WhatsApp API Project" />
                <div>
                    <h4>Whatsapp API - Volare Host</h4>
                    <h4>Landing Page</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/whatsapp-api.png" />
                <div>
                    <h4>Whatsapp API - Volare Host</h4>
                    <h4>Landing Page</h4>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import WordAnimation from "./WordAnimation.vue";
</script>