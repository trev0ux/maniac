<template>
    <section class="projects container-fluid" id="projetos">
        <div class="projects__info">
            <div>
                <span>01</span>
                <h3 aria-label="De projeto em projeto - ajudamos sua marca a crescer e mostrar seumelhor para o mundo">
                    <WordAnimation content="De projeto em projeto - ajudamos sua marca a crescer e mostrar seumelhor para o mundo" />
                </h3>
            </div>
            <h4>(Projetos desenvolvidos)</h4>
        </div>
        <article>
            <div>
                <NuxtImg src="/whatsapp-api.png" alt="WhatsApp API Project"                    format="webp" 
                    loading="lazy"
                    placeholder  />
                <div>
                    <h4>Whatsapp API - Volare Host</h4>
                    <h4>Landing Page</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/taxpay.png" alt="Taxpay Projeto"                    format="webp" 
                    loading="lazy"
                    placeholder  />
                <div>
                    <h4>Taxpay</h4>
                    <h4>Site institucional</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/remotando.png" alt="Remotando Project"                    format="webp" 
                    loading="lazy"
                    placeholder />
                <div>
                    <h4>Remotando</h4>
                    <h4>Site</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/ebookparking.png" alt="Ebookparking Projeto"                    format="webp" 
                    loading="lazy"
                    placeholder  />
                <div>
                    <h4>Ebookparking</h4>
                    <h4>Sistema de agendamento para estacionamento</h4>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import WordAnimation from "./WordAnimation.vue";
</script>