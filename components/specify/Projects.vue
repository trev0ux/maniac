<template>
    <section class="projects container-fluid" id="projetos">
        <div class="projects__info">
            <div>
                <span>01</span>
                <h3 aria-label="De projeto em projeto - ajudamos sua marca a crescer e mostrar seumelhor para o mundo">
                    <WordAnimation content="De projeto em projeto - ajudamos sua marca a crescer e mostrar seumelhor para o mundo" />
                </h3>
            </div>
            <h4>{{ $t('projects.description') }}</h4>
        </div>
        <article>
            <div>
                <NuxtImg src="/whatsapp-api.webp" alt="WhatsApp API Project"                    format="webp" 
                    loading="lazy"
                    placeholder  />
                <div>
                    <h4>{{ $t('projects.whatsapp.name') }}</h4>
                    <h4>{{ $t('projects.whatsapp.type') }}</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/taxpay.webp" alt="Taxpay Projeto"                    format="webp" 
                    loading="lazy"
                    placeholder  />
                <div>
                    <h4>{{ $t('projects.taxpay.name') }}</h4>
                    <h4>{{ $t('projects.taxpay.type') }}</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/remotando.webp" alt="Remotando Project"                    format="webp" 
                    loading="lazy"
                    placeholder />
                <div>
                    <h4>{{ $t('projects.remotando.name') }}</h4>
                    <h4>{{ $t('projects.remotando.type') }}</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/ebookparking.webp" alt="Ebookparking Projeto"                    format="webp" 
                    loading="lazy"
                    placeholder  />
                <div>
                    <h4>{{ $t('projects.ebookparking.name') }}</h4>
                    <h4>{{ $t('projects.ebookparking.type') }}</h4>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import WordAnimation from "./WordAnimation.vue";
</script>