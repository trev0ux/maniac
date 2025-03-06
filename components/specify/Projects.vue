<template>
    <section class="projects container-fluid" id="projetos">
        <div class="projects__info">
            <div>
                <span>01</span>
                <h3>
                    <WordAnimation :content="$t('projects.title')" />
                </h3>
            </div>
            <h4>{{ $t('projects.description') }}</h4>
        </div>
        <article>
            <div>
                <NuxtImg src="/whatsapp-api.png" alt="WhatsApp API Project" />
                <div>
                    <h4>{{ $t('projects.whatsapp.name') }}</h4>
                    <h4>{{ $t('projects.whatsapp.type') }}</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/taxpay.png" alt="Taxpay Projeto" />
                <div>
                    <h4>{{ $t('projects.taxpay.name') }}</h4>
                    <h4>{{ $t('projects.taxpay.type') }}</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/remotando.png" alt="Remotando Project" />
                <div>
                    <h4>{{ $t('projects.remotando.name') }}</h4>
                    <h4>{{ $t('projects.remotando.type') }}</h4>
                </div>
            </div>
            <div>
                <NuxtImg src="/ebookparking.png" alt="Ebookparking Projeto" />
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