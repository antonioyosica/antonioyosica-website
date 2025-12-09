<script setup lang="ts">
const route = useRoute()
const bookId = route.params.id as string

// Book data (would come from API/CMS in production)
const books: Record<string, any> = {
  'metodo-lee': {
    id: 'metodo-lee',
    title: 'Método LEE: O Guia Definitivo para Dominar o SEO',
    subtitle: 'Liderança, Execução, Escalabilidade',
    description: 'Neste livro, partilho mais de 15 anos de experiência em SEO e marketing digital, apresentando o Método LEE — uma abordagem sistemática e comprovada para construir autoridade digital e escalar resultados de forma sustentável.',
    longDescription: `O Método LEE nasceu de anos de experiência prática, trabalhando com centenas de empresas de diferentes setores e dimensões. Este livro é o resultado de uma jornada de descoberta, experimentação e refinamento contínuo.

Ao longo destas páginas, vou guiá-lo através dos três pilares fundamentais que transformam a presença digital de qualquer negócio: Liderança, Execução e Escalabilidade.

Não se trata apenas de teoria — cada capítulo está repleto de casos práticos, templates prontos a usar e estratégias que pode implementar imediatamente.`,
    price: '29,90€',
    pages: 320,
    freeChapters: 3,
    rating: 4.9,
    reviews: 127,
    publishDate: '2024',
    isbn: '978-989-XXXXX-XX-X',
    chapters: [
      { number: 1, title: 'Introdução ao Método LEE', pages: 24, free: true },
      { number: 2, title: 'O Pilar da Liderança', pages: 32, free: true },
      { number: 3, title: 'Construindo Autoridade Digital', pages: 28, free: true },
      { number: 4, title: 'O Pilar da Execução', pages: 36, free: false },
      { number: 5, title: 'SEO On-Page Avançado', pages: 30, free: false },
      { number: 6, title: 'SEO Técnico Essencial', pages: 28, free: false },
      { number: 7, title: 'Link Building Estratégico', pages: 26, free: false },
      { number: 8, title: 'O Pilar da Escalabilidade', pages: 32, free: false },
      { number: 9, title: 'Automatização e Processos', pages: 24, free: false },
      { number: 10, title: 'Métricas e KPIs', pages: 22, free: false },
      { number: 11, title: 'Casos de Estudo', pages: 28, free: false },
      { number: 12, title: 'O Futuro do SEO', pages: 20, free: false },
    ],
    testimonials: [
      {
        name: 'Maria Santos',
        role: 'CEO, TechStartup',
        text: 'Este livro transformou completamente a nossa estratégia digital. Resultados visíveis em semanas.',
        rating: 5,
      },
      {
        name: 'João Ferreira',
        role: 'Marketing Director',
        text: 'O Método LEE é prático, direto e funciona. Recomendo a todos os profissionais de marketing.',
        rating: 5,
      },
    ],
  },
  'seo-tecnico-avancado': {
    id: 'seo-tecnico-avancado',
    title: 'SEO Técnico Avançado',
    subtitle: 'Domine os Fundamentos que 90% Ignora',
    description: 'Um mergulho profundo nas técnicas avançadas de SEO técnico. Core Web Vitals, Schema Markup, JavaScript SEO e muito mais.',
    longDescription: `O SEO técnico é frequentemente negligenciado, mas é a fundação sobre a qual todo o sucesso digital é construído. Sem uma base técnica sólida, mesmo o melhor conteúdo pode falhar em alcançar o seu potencial.

Este livro foi escrito para profissionais que querem ir além do básico. Vamos explorar os aspectos mais técnicos do SEO, desde a arquitetura de informação até à otimização de JavaScript.`,
    price: '24,90€',
    pages: 280,
    freeChapters: 3,
    rating: 4.8,
    reviews: 89,
    publishDate: '2024',
    isbn: '978-989-XXXXX-XX-Y',
    chapters: [
      { number: 1, title: 'Fundamentos do SEO Técnico', pages: 28, free: true },
      { number: 2, title: 'Arquitetura de Informação', pages: 32, free: true },
      { number: 3, title: 'Core Web Vitals', pages: 30, free: true },
      { number: 4, title: 'Schema Markup Avançado', pages: 28, free: false },
      { number: 5, title: 'JavaScript SEO', pages: 32, free: false },
      { number: 6, title: 'Crawling e Indexação', pages: 26, free: false },
      { number: 7, title: 'Mobile-First Indexing', pages: 24, free: false },
      { number: 8, title: 'International SEO', pages: 28, free: false },
      { number: 9, title: 'Migração de Sites', pages: 26, free: false },
      { number: 10, title: 'Debugging e Auditoria', pages: 26, free: false },
    ],
    testimonials: [],
  },
  'content-marketing-autoridade': {
    id: 'content-marketing-autoridade',
    title: 'Content Marketing para Autoridade',
    subtitle: 'Crie Conteúdo que Converte',
    description: 'Como criar conteúdo que posiciona a sua marca como líder de pensamento e gera resultados mensuráveis.',
    longDescription: `O conteúdo é o coração de qualquer estratégia digital de sucesso. Mas não basta criar conteúdo — é preciso criar conteúdo que ressoa, que educa e que converte.

Neste livro, partilho as estratégias que usei para construir autoridade para dezenas de marcas, desde startups a multinacionais.`,
    price: '22,90€',
    pages: 240,
    freeChapters: 3,
    rating: 4.7,
    reviews: 64,
    publishDate: '2024',
    isbn: '978-989-XXXXX-XX-Z',
    chapters: [
      { number: 1, title: 'O Poder do Content Marketing', pages: 26, free: true },
      { number: 2, title: 'Estratégia de Conteúdo', pages: 28, free: true },
      { number: 3, title: 'Pesquisa de Tópicos', pages: 24, free: true },
      { number: 4, title: 'Copywriting para Conversão', pages: 30, free: false },
      { number: 5, title: 'Formatos de Conteúdo', pages: 26, free: false },
      { number: 6, title: 'Distribuição e Promoção', pages: 28, free: false },
      { number: 7, title: 'Repurposing de Conteúdo', pages: 22, free: false },
      { number: 8, title: 'Métricas de Conteúdo', pages: 26, free: false },
      { number: 9, title: 'Escalando a Produção', pages: 30, free: false },
    ],
    testimonials: [],
  },
}

const book = computed(() => books[bookId] || null)

useSeoMeta({
  title: () => book.value ? `${book.value.title} | António Yosica` : 'Livro não encontrado',
  description: () => book.value?.description || '',
})
</script>

<template>
  <div v-if="book">
    <!-- ═══════════════════════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-925 dark:to-neutral-950" />

      <div class="container-default relative z-10">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center gap-2 text-body-sm">
            <li>
              <NuxtLink to="/" class="text-neutral-500 hover:text-gold-500 transition-colors">Home</NuxtLink>
            </li>
            <li class="text-neutral-400">/</li>
            <li>
              <NuxtLink to="/livros" class="text-neutral-500 hover:text-gold-500 transition-colors">Livros</NuxtLink>
            </li>
            <li class="text-neutral-400">/</li>
            <li class="text-neutral-900 dark:text-neutral-100">{{ book.title.split(':')[0] }}</li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <!-- Book Cover -->
          <div class="relative lg:sticky lg:top-32">
            <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant-xl">
              <div class="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
                <div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div class="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center mb-6">
                    <Icon name="lucide:book-open" class="w-10 h-10 text-gold-500" />
                  </div>
                  <h3 class="font-display text-display-sm text-neutral-100 mb-2">{{ book.title.split(':')[0] }}</h3>
                  <p class="text-body-sm text-neutral-400">António Yosica</p>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500/30 rounded-2xl -z-10" />
          </div>

          <!-- Book Info -->
          <div>
            <UiBadge variant="gold" class="mb-4">E-Book</UiBadge>
            
            <h1 class="font-display text-display-lg text-neutral-900 dark:text-neutral-100 mb-2">
              {{ book.title }}
            </h1>
            
            <p class="text-heading-lg text-gold-500 mb-6">
              {{ book.subtitle }}
            </p>

            <!-- Rating -->
            <div class="flex items-center gap-4 mb-6">
              <div class="flex items-center gap-1">
                <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-5 h-5 text-gold-500 fill-gold-500" />
              </div>
              <span class="text-body-md text-neutral-600 dark:text-neutral-400">
                {{ book.rating }} ({{ book.reviews }} reviews)
              </span>
            </div>
            
            <p class="text-body-lg text-neutral-600 dark:text-neutral-400 mb-8 whitespace-pre-line">
              {{ book.longDescription }}
            </p>

            <!-- Book Details -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div class="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-center">
                <div class="text-heading-lg text-gold-500 font-display">{{ book.pages }}</div>
                <div class="text-body-xs text-neutral-500">Páginas</div>
              </div>
              <div class="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-center">
                <div class="text-heading-lg text-gold-500 font-display">{{ book.chapters.length }}</div>
                <div class="text-body-xs text-neutral-500">Capítulos</div>
              </div>
              <div class="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-center">
                <div class="text-heading-lg text-gold-500 font-display">{{ book.freeChapters }}</div>
                <div class="text-body-xs text-neutral-500">Grátis</div>
              </div>
              <div class="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-center">
                <div class="text-heading-lg text-gold-500 font-display">{{ book.publishDate }}</div>
                <div class="text-body-xs text-neutral-500">Publicação</div>
              </div>
            </div>

            <!-- Price & CTA -->
            <div class="flex flex-wrap items-center gap-6 mb-8 p-6 rounded-2xl bg-gold-500/5 border border-gold-500/20">
              <div>
                <div class="text-display-md text-gold-500 font-display">{{ book.price }}</div>
                <div class="text-body-sm text-neutral-500">IVA incluído</div>
              </div>
              <div class="flex-1 flex flex-wrap gap-4">
                <NuxtLink :to="`/livros/${book.id}/ler`" class="btn btn-primary btn-lg flex-1">
                  <Icon name="lucide:book-open" class="w-5 h-5" />
                  Ler Amostra Grátis
                </NuxtLink>
                <button class="btn btn-secondary btn-lg">
                  <Icon name="lucide:shopping-cart" class="w-5 h-5" />
                  Comprar
                </button>
              </div>
            </div>

            <!-- ISBN -->
            <p class="text-body-sm text-neutral-500">
              ISBN: {{ book.isbn }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         CHAPTERS
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <div class="max-w-4xl mx-auto">
        <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-8 text-center">
          Índice
        </h2>

        <div class="space-y-3">
          <div
            v-for="chapter in book.chapters"
            :key="chapter.number"
            class="group"
          >
            <NuxtLink
              v-if="chapter.free"
              :to="`/livros/${book.id}/ler?chapter=${chapter.number}`"
              class="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 hover:bg-gold-500/10 border border-transparent hover:border-gold-500/20 transition-all duration-300"
            >
              <div class="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                <span class="text-heading-sm text-gold-500 font-display">{{ chapter.number }}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-heading-md text-neutral-900 dark:text-neutral-100 group-hover:text-gold-500 transition-colors">
                  {{ chapter.title }}
                </h3>
                <p class="text-body-sm text-neutral-500">{{ chapter.pages }} páginas</p>
              </div>
              <span class="px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-label-sm font-medium">
                Grátis
              </span>
              <Icon name="lucide:arrow-right" class="w-5 h-5 text-neutral-400 group-hover:text-gold-500 transition-colors" />
            </NuxtLink>

            <div
              v-else
              class="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 opacity-60"
            >
              <div class="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <span class="text-heading-sm text-neutral-500 font-display">{{ chapter.number }}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-heading-md text-neutral-700 dark:text-neutral-300">
                  {{ chapter.title }}
                </h3>
                <p class="text-body-sm text-neutral-500">{{ chapter.pages }} páginas</p>
              </div>
              <Icon name="lucide:lock" class="w-5 h-5 text-neutral-400" />
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <p class="text-body-md text-neutral-600 dark:text-neutral-400 mb-4">
            Desbloqueie todos os {{ book.chapters.length }} capítulos
          </p>
          <button class="btn btn-primary btn-lg">
            <Icon name="lucide:unlock" class="w-5 h-5" />
            Comprar Livro Completo — {{ book.price }}
          </button>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         TESTIMONIALS
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection v-if="book.testimonials.length > 0" background="alt">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-4">
          O que dizem os leitores
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <UiCard v-for="testimonial in book.testimonials" :key="testimonial.name" variant="elevated" padding="lg">
          <div class="flex gap-1 mb-4">
            <Icon v-for="i in testimonial.rating" :key="i" name="lucide:star" class="w-5 h-5 text-gold-500 fill-gold-500" />
          </div>
          <p class="text-body-lg text-neutral-600 dark:text-neutral-400 mb-6 italic">
            "{{ testimonial.text }}"
          </p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div>
              <div class="text-heading-sm text-neutral-900 dark:text-neutral-100">{{ testimonial.name }}</div>
              <div class="text-body-xs text-neutral-500">{{ testimonial.role }}</div>
            </div>
          </div>
        </UiCard>
      </div>
    </UiSection>
  </div>

  <!-- 404 -->
  <div v-else class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center">
      <Icon name="lucide:book-x" class="w-16 h-16 text-neutral-400 mx-auto mb-6" />
      <h1 class="text-display-md text-neutral-900 dark:text-neutral-100 mb-4">Livro não encontrado</h1>
      <NuxtLink to="/livros" class="btn btn-primary btn-md">
        Ver todos os livros
      </NuxtLink>
    </div>
  </div>
</template>
