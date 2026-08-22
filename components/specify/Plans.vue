<template>
    <section class="plans container-fluid" id="servicos-completo">
        <div class="plans__info">
            <div>
                <span>03</span>
                <h3 aria-label="Soluções digitais de alto impacto - Impulsionamos seu negócio com estratégias personalizadas que geram resultados">
                    <WordAnimation
                        content="Soluções digitais de alto impacto - Impulsionamos seu negócio com estratégias personalizadas que geram resultados" />
                </h3>
            </div>
            <h4>(Nossos serviços)</h4>
        </div>
        <article>
            <div v-for="(item, index) in articlesList" :key="index + '_article'" class="plans__item">
                <div>
                    <h4>{{ item.title }}</h4>
                    <p class="plans__details"> {{ item.details }} </p>
                    <NuxtLink class="btn btn-primary w-100 d-flex align-items-center justify-content-between" external to="https://calendly.com/sua-empresa/30min">
                        {{ item.action }}
                        <div class="arrows-block">
                            <div class="arrows-icon">
                                <Icon name="ArrowIcon"></Icon>
                                <Icon name="ArrowIcon"></Icon>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
                <div>
                    <ul>
                        <li v-for="(bullet, bulletIndex) in item.itens" :key="bulletIndex + '_li'">
                            <Icon name="CheckIcon"></Icon>
                            {{ bullet }}
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import WordAnimation from "./WordAnimation.vue";
const articlesList = [
  {
    title: "Desenvolvimento Web Completo",
    details:
      "Sites institucionais, e-commerces e landing pages de alta conversão. Desenvolvemos plataformas responsivas e otimizadas que transformam visitantes em clientes e impulsionam seu negócio online.",
    action: "Ver preço",
    itens: [
      "Sites institucionais com design exclusivo",
      "E-commerces completos e seguros",
      "Landing pages de alta conversão",
      "CMS intuitivo para atualizações",
      "Otimização para motores de busca (SEO)",
      "Responsividade em todos os dispositivos",
      "Integrações com sistemas de pagamento",
    ],
  },
  {
    title: "Design e UX",
    details:
      "Identidade visual marcante e interfaces intuitivas que conectam sua marca com os usuários. Criamos experiências digitais memoráveis que geram engajamento e fortalecem sua presença no mercado.",
    action: "Ver preço",
    itens: [
      "Criação de logo e identidade visual",
      "Design de interfaces centrado no usuário",
      "Wireframes e protótipos interativos",
      "Pesquisa de usabilidade e testes com usuários",
      "Design system completo",
      "Manual de marca com aplicações",
      "Materiais para mídias sociais",
    ],
  },
  {
    title: "Marketing Digital e SEO",
    details:
      "Estratégias completas de SEO e tráfego pago que posicionam sua marca nos primeiros resultados. Atraia visitantes qualificados e maximize seu ROI com campanhas orientadas a resultados.",
    action: "Ver preço",
    itens: [
      "Análise completa de SEO on-page e off-page",
      "Otimização técnica para mecanismos de busca",
      "Estratégia de conteúdo para palavras-chave",
      "Campanhas de Google Ads e Meta Ads",
      "Análise de concorrência",
      "Relatórios mensais de performance",
      "Estratégias de remarketing",
    ],
  },
  {
    title: "Sistemas de Gestão (ERP e CRM)",
    details:
      "Automatize processos e potencialize o relacionamento com seus clientes. Nossas soluções integradas centralizam informações, organizam seu funil de vendas e otimizam todas as operações.",
    action: "Ver preço",
    itens: [
      "Análise de processos e necessidades",
      "Implementação personalizada",
      "Controle financeiro integrado",
      "Gestão de estoque e produtos",
      "Automação de funil de vendas",
      "Dashboards e relatórios personalizados",
      "Treinamento e suporte contínuo",
    ],
  },
]
</script>