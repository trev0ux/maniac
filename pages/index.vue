<template>
  <div class="homepage">
    <NuxtImg
      class="homepage__whatsapp-icon"
      src="/whatsapp.png"
      alt="Whatsapp para falar conosco"
    ></NuxtImg>
    <section class="banner container">
      <h1>
        Transformamos marcas no digital com criatividade dirigida a resultados.
      </h1>
      <p>
        Criamos sites e experiências digitais que convertem visitantes em
        clientes fiéis e impulsionam o crescimento do seu negócio!
      </p>
      <button class="btn btn-primary">
        Conheça nossos preços
        <div class="arrows-block">
          <div class="arrows-icon">
            <Icon name="ArrowIcon"></Icon><Icon name="ArrowIcon"></Icon>
          </div>
        </div>
      </button>
    </section>
    <section class="how-work container-fluid">
      <div class="how-work__header">
        <h2>4 etapas para construir um site do jeitinho que você precisa</h2>
        <p>Veja como nós tornamos uma ideia abstrata em resultados tangíveis</p>
      </div>
      <article>
        <div
          v-for="(item, itemIndex) in howWorkItems"
          :key="itemIndex"
          class="how-work__item"
          @mouseenter="startAnimation(itemIndex)"
          @mouseleave="reverseAnimation(itemIndex)"
          :class="{ 'how-work__item--change-color': item.firstItemComplete }"
        >
          <span>{{ item.number }}</span>
          <h3>{{ item.title }}</h3>
          <NuxtImg :src="item.imageSrc" :alt="item.imageAlt"></NuxtImg>
          <div class="how-work__animation-block">
            <div
              v-for="(cascadeItem, cascadeIndex) in item.cascadeEffect"
              :key="cascadeIndex"
              class="how-work__item--cascate-effect"
              :style="{
                transform: `translateY(${100 - cascadeItem.progress}%)`,
              }"
            ></div>
          </div>
        </div>
      </article>
    </section>
    <section class="projects container-fluid">
      <div class="projects__info">
        <div>
          <span>01</span>
          <h3>
            De projeto em projeto - ajudamos sua marca a crescer e mostrar seu
            melhor para o mundo
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
    <section class="services container-fluid">
      <div class="services__info">
        <div>
          <span>02</span>
          <h3>
            Simples e eficiente - entregamos soluções fora da curva que deixam
            uma impressão duradoura nos seus clientes
          </h3>
        </div>
        <h4>(Nossos serviços)</h4>
      </div>
      <article class="row">
        <div class="services__image">
          <NuxtImg src="/whatsapp-api.png" alt="Team" />
        </div>
        <div>
          <div class="services__subtitle">
            <h3><Icon name="ArrowIcon"></Icon> O que nós oferecemos</h3>
          </div>
          <article class="services__accordion-container">
            <div class="services__accordion-item">
              <div
                v-for="(service, index) in services"
                :key="service.title"
                class="services__progress-bar"
              >
                <h3 @click="toggleService(index)">
                  {{ service.title }}
                  <span
                    :style="{
                      width: index === currentIndex ? `${progress}%` : '0%',
                    }"
                  ></span>
                </h3>
                <transition name="accordion">
                  <p v-show="index === currentIndex" class="services__content">
                    {{ service.content }}
                  </p>
                </transition>
              </div>
            </div>
          </article>
        </div>
      </article>
    </section>
    <section class="plans container-fluid">
      <div class="plans__info">
        <div>
          <span>03</span>
          <h3>
            Preços claros, sua combinação perfeita - Estamos dispostos a te
            ajudar a conquistar seu espaço na internet
          </h3>
        </div>
        <h4>(Nossos planos)</h4>
      </div>
      <article>
        <div class="plans__item">
          <div>
            <h4>Landing Page</h4>
            <p class="plans__details">
              Landing page de alto impacto entregue em tempo recorde. Transforme
              visitantes em clientes com uma página que impressiona e converte!
            </p>
            <div class="plans__investment">
              <p>Investimento estimado</p>
              <h5>R$800 - R$3,000</h5>
              <p>dependendo da complexidade e das necessidades específicas</p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Icon name="CheckIcon"></Icon>
                Rápido desenvolvimento: 1-2 semanas
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Design personalizado e responsivo
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                CMS incluído
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Formulário de captura de leads
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Integração com ferramentas de análise
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Otimização para SEO on-page
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                E muito mais+
              </li>
            </ul>
          </div>
        </div>
        <div class="plans__item">
          <div>
            <h4>Site Institucional</h4>
            <p class="plans__details">
              Site personalizado completo, com tudo que você precisa e mais.
              Renove sua presença online ou crie do zero - seu negócio merece
              destaque!
            </p>
            <div class="plans__investment">
              <p>Investimento estimado</p>
              <h5>R$2,000 - R$5,000+</h5>
              <p>dependendo da complexidade e das necessidades específicas</p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Icon name="CheckIcon"></Icon>
                Design de site exclusivo
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Estratégia conceitual
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Direção visual
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                CMS e hospedagens inclusos
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Otimização para SEO
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Revisões disponíveis
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                E muito mais+
              </li>
            </ul>
          </div>
        </div>
        <div class="plans__item">
          <div>
            <h4>E-commerce</h4>
            <p class="plans__details">
              Loja virtual poderosa e intuitiva, pronta para impulsionar suas
              vendas online. Do design à gestão de pedidos, criamos sua
              plataforma de e-commerce completa!
            </p>
            <div class="plans__investment">
              <p>Investimento estimado</p>
              <h5>R$4,500 - R$10,000+</h5>
              <p>dependendo da complexidade e das necessidades específicas</p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Icon name="CheckIcon"></Icon>
                Design responsivo e personalizado
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Catálogo de produtos otimizado
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Sistema de pagamento seguro
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Painel administrativo intuitivo
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Otimização para SEO
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Integração com múltiplos meios de pagamento
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                E muito mais+
              </li>
            </ul>
          </div>
        </div>
        <div class="plans__item">
          <div>
            <h4>Identidade Visual</h4>
            <p class="plans__details">
              Identidade visual única que reflete a essência da sua marca. Do
              logotipo às aplicações, criamos a imagem que fará seu negócio se
              destacar!
            </p>
            <div class="plans__investment">
              <p>Investimento estimado</p>
              <h5>R$300 - R$600+</h5>
              <p>dependendo da complexidade e das necessidades específicas</p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Icon name="CheckIcon"></Icon>
                Criação de logotipo exclusivo
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Paleta de cores e tipografia personalizadas
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Manual de identidade visual completo
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Design de materiais impressos básicos
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                Versões digitais para web e redes sociais
              </li>
              <li>
                <Icon name="CheckIcon"></Icon>
                E muito mais+
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { Icon, NuxtImg } from "#components";

export default {
  components: {
    Icon,
    NuxtImg,
  },
  data() {
    return {
      services: [
        {
          title: "Design de websites",
          content:
            "Criamos sites únicos que capturam olhares, engajam usuários e deixam uma impressão duradoura. Nosso design premium garante que sua marca se destaque no mundo digital.",
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
      ],
      howWorkItems: [
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
      ],
      currentIndex: 0,
      progress: 0,
      interval: null,
    };
  },
  methods: {
    startAnimation(itemIndex) {
      this.animateCascade(itemIndex, true);
    },
    reverseAnimation(itemIndex) {
      this.animateCascade(itemIndex, false);
    },
    animateCascade(itemIndex, revealing) {
      const item = this.howWorkItems[itemIndex];
      cancelAnimationFrame(item.animationFrame);

      const totalSteps = 50;
      const duration = 350; // Total animation duration in ms
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
    },
    toggleService(index) {
      this.currentIndex = index;
      this.progress = 0;
      this.startProgress();
    },
    startProgress() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.progress += 1;
        if (this.progress >= 100) {
          this.progress = 0;
          this.currentIndex = (this.currentIndex + 1) % this.services.length;
        }
      }, 30);
    },
  },
  mounted() {
    this.startProgress();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="sass">
@import "~/assets/styles/pages/home.scss"
</style>
