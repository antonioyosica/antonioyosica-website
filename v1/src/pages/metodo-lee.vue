<script setup lang="ts">
useSeoMeta({
  title: 'Método LEE | António Yosica',
  description: 'Descubra o Método LEE - Liderança, Execução, Escalabilidade. Uma abordagem sistemática para dominar o SEO e construir autoridade digital.',
})

const pillars = [
  {
    id: 'lideranca',
    letter: 'L',
    title: 'Liderança',
    subtitle: 'Posicione-se como autoridade',
    description: 'O primeiro pilar do Método LEE foca-se em estabelecer a sua marca como líder de pensamento no seu nicho. Através de estratégias de conteúdo, SEO semântico e construção de autoridade, posicionamos o seu negócio como a referência que os clientes procuram.',
    features: [
      'Análise de nicho e posicionamento',
      'Estratégia de conteúdo de autoridade',
      'Construção de backlinks de qualidade',
      'Personal branding digital',
    ],
    icon: 'lucide:crown',
  },
  {
    id: 'execucao',
    letter: 'E',
    title: 'Execução',
    subtitle: 'Implementação sistemática',
    description: 'O segundo pilar transforma estratégia em ação. Utilizamos processos comprovados e ferramentas avançadas para implementar cada tática de forma eficiente, garantindo resultados mensuráveis e consistentes.',
    features: [
      'SEO técnico avançado',
      'Otimização on-page e off-page',
      'Análise de concorrência',
      'Monitorização e ajustes contínuos',
    ],
    icon: 'lucide:zap',
  },
  {
    id: 'escalabilidade',
    letter: 'E',
    title: 'Escalabilidade',
    subtitle: 'Crescimento sustentável',
    description: 'O terceiro pilar garante que o seu sucesso seja sustentável. Criamos sistemas e processos que permitem escalar os resultados sem aumentar proporcionalmente os recursos, maximizando o ROI a longo prazo.',
    features: [
      'Automação de processos',
      'Sistemas de conteúdo escaláveis',
      'Formação de equipas internas',
      'Frameworks replicáveis',
    ],
    icon: 'lucide:trending-up',
  },
]

const successStories = [
  {
    company: 'TechStart Portugal',
    industry: 'Tecnologia',
    result: '+300% tráfego orgânico',
    description: 'Em 6 meses, triplicamos o tráfego orgânico e posicionamos a empresa como líder em inovação tecnológica.',
    logo: '/images/logos/techstart.svg',
  },
  {
    company: 'E-commerce Plus',
    industry: 'Comércio Eletrónico',
    result: '+400% ROI',
    description: 'Estratégia de SEO que gerou um retorno de 400% sobre o investimento no primeiro ano.',
    logo: '/images/logos/ecommerce.svg',
  },
  {
    company: 'Grupo Inovação',
    industry: 'Consultoria',
    result: 'Top 3 Google',
    description: 'Posicionamento nas 3 primeiras posições do Google para as principais keywords do setor.',
    logo: '/images/logos/inovacao.svg',
  },
]

const partners = [
  { name: 'Google Partner', logo: '/images/partners/google.svg' },
  { name: 'SEMrush', logo: '/images/partners/semrush.svg' },
  { name: 'Ahrefs', logo: '/images/partners/ahrefs.svg' },
  { name: 'Moz', logo: '/images/partners/moz.svg' },
  { name: 'HubSpot', logo: '/images/partners/hubspot.svg' },
]
</script>

<template>
  <div>
    <!-- ═══════════════════════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="relative py-32 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-925 to-neutral-950">
        <div class="absolute inset-0 bg-[linear-gradient(rgba(201,163,78,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,163,78,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div class="container-default relative z-10 text-center">
        <span class="label text-gold-500 mb-4 block">O Método</span>
        
        <!-- LEE Letters -->
        <div class="flex justify-center gap-4 md:gap-8 mb-8">
          <div v-for="(pillar, index) in pillars" :key="pillar.id" class="text-center">
            <div 
              class="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-2 hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group cursor-pointer"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <span class="font-display text-display-lg md:text-display-xl text-gold-500 group-hover:text-neutral-950 transition-colors">
                {{ pillar.letter }}
              </span>
            </div>
            <span class="text-body-sm text-neutral-400">{{ pillar.title }}</span>
          </div>
        </div>

        <h1 class="font-display text-display-xl md:text-display-2xl text-neutral-100 mb-6">
          Método LEE
        </h1>
        <p class="text-body-xl text-neutral-400 max-w-2xl mx-auto mb-10">
          Uma abordagem sistemática e comprovada para dominar o SEO, 
          construir autoridade digital e escalar resultados de forma sustentável.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/contacto" class="btn btn-primary btn-lg">
            <Icon name="lucide:calendar" class="w-5 h-5" />
            Agendar Consulta
          </NuxtLink>
          <a href="#pillars" class="btn btn-secondary btn-lg !border-neutral-700 !text-neutral-300 hover:!border-gold-500 hover:!text-gold-500">
            Conhecer os Pilares
            <Icon name="lucide:arrow-down" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         PILLARS SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection id="pillars">
      <div class="space-y-24">
        <div
          v-for="(pillar, index) in pillars"
          :key="pillar.id"
          class="grid lg:grid-cols-2 gap-16 items-center"
          :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
        >
          <!-- Content -->
          <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center shadow-gold-glow">
                <span class="font-display text-display-md text-neutral-950">{{ pillar.letter }}</span>
              </div>
              <div>
                <span class="label text-gold-500 block">Pilar {{ index + 1 }}</span>
                <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100">
                  {{ pillar.title }}
                </h2>
              </div>
            </div>
            
            <p class="text-heading-lg text-neutral-700 dark:text-neutral-300 mb-4">
              {{ pillar.subtitle }}
            </p>
            
            <p class="text-body-lg text-neutral-600 dark:text-neutral-400 mb-8">
              {{ pillar.description }}
            </p>

            <ul class="space-y-3">
              <li v-for="feature in pillar.features" :key="feature" class="flex items-center gap-3">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span class="text-body-md text-neutral-600 dark:text-neutral-400">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Visual -->
          <div :class="index % 2 === 1 ? 'lg:order-1' : ''">
            <UiCard variant="neu" padding="lg" class="aspect-square flex items-center justify-center">
              <div class="text-center">
                <Icon :name="pillar.icon" class="w-24 h-24 text-gold-500 mb-6" />
                <div class="font-display text-display-2xl text-gold-500/20">0{{ index + 1 }}</div>
              </div>
            </UiCard>
          </div>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         SUCCESS STORIES
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection background="alt">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="label text-gold-500 mb-4 block">Casos de Sucesso</span>
        <h2 class="font-display text-display-lg text-neutral-900 dark:text-neutral-100 mb-6">
          Resultados Comprovados
        </h2>
        <p class="text-body-xl text-neutral-600 dark:text-neutral-400">
          Empresas que transformaram a sua presença digital com o Método LEE.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="story in successStories" :key="story.company">
          <UiCard variant="elevated" padding="lg" class="h-full">
            <!-- Logo placeholder -->
            <div class="w-16 h-16 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6">
              <Icon name="lucide:building-2" class="w-8 h-8 text-neutral-400" />
            </div>
            
            <!-- Result badge -->
            <UiBadge variant="gold" class="mb-4">{{ story.result }}</UiBadge>
            
            <h3 class="text-heading-xl text-neutral-900 dark:text-neutral-100 mb-2">
              {{ story.company }}
            </h3>
            
            <p class="text-body-sm text-neutral-500 mb-4">{{ story.industry }}</p>
            
            <p class="text-body-md text-neutral-600 dark:text-neutral-400">
              {{ story.description }}
            </p>
          </UiCard>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         VIDEO/TESTIMONIAL GALLERY
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="label text-gold-500 mb-4 block">Em Vídeo</span>
        <h2 class="font-display text-display-lg text-neutral-900 dark:text-neutral-100 mb-6">
          Testemunhos em Vídeo
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="group cursor-pointer">
          <div class="aspect-video rounded-xl bg-neutral-900 overflow-hidden relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-gold-500/80 flex items-center justify-center group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300">
                <Icon name="lucide:play" class="w-6 h-6 text-neutral-950 ml-1" />
              </div>
            </div>
          </div>
          <div class="mt-4">
            <h4 class="text-heading-md text-neutral-900 dark:text-neutral-100">
              Testemunho Cliente {{ i }}
            </h4>
            <p class="text-body-sm text-neutral-500">Empresa Exemplo</p>
          </div>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         PARTNERS
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection background="alt" size="sm">
      <div class="text-center mb-12">
        <span class="label text-neutral-500">Parceiros & Ferramentas</span>
      </div>
      
      <div class="flex flex-wrap justify-center items-center gap-12">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
        >
          <span class="text-body-lg text-neutral-500 font-medium">{{ partner.name }}</span>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         CTA SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="relative py-32 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900">
        <div class="absolute inset-0 bg-[linear-gradient(rgba(201,163,78,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,163,78,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div class="container-default relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="font-display text-display-lg text-neutral-100 mb-6">
              Pronto para aplicar o Método LEE ao seu negócio?
            </h2>
            <p class="text-body-xl text-neutral-400 mb-8">
              Agende uma consulta gratuita e descubra como podemos transformar 
              a sua presença digital em resultados reais.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/contacto" class="btn btn-primary btn-lg">
                <Icon name="lucide:calendar" class="w-5 h-5" />
                Agendar Consulta Gratuita
              </NuxtLink>
            </div>
          </div>
          
          <div class="hidden lg:block">
            <UiCard variant="glass" padding="lg" class="text-center">
              <div class="text-display-2xl text-gold-500 font-display mb-4">LEE</div>
              <div class="space-y-2 text-body-lg text-neutral-300">
                <p><strong class="text-gold-500">L</strong>iderança</p>
                <p><strong class="text-gold-500">E</strong>xecução</p>
                <p><strong class="text-gold-500">E</strong>scalabilidade</p>
              </div>
            </UiCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
