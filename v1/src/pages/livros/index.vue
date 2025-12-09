<script setup lang="ts">
useSeoMeta({
  title: 'Livros | António Yosica',
  description: 'Descubra os e-books de António Yosica sobre SEO, marketing digital e o Método LEE. Leia os primeiros capítulos gratuitamente.',
})

const books = [
  {
    id: 'metodo-lee',
    title: 'Método LEE: O Guia Definitivo para Dominar o SEO',
    subtitle: 'Liderança, Execução, Escalabilidade',
    description: 'Neste livro, partilho mais de 15 anos de experiência em SEO e marketing digital, apresentando o Método LEE — uma abordagem sistemática e comprovada para construir autoridade digital.',
    cover: '/images/books/metodo-lee-cover.jpg',
    price: '29,90€',
    pages: 320,
    freeChapters: 3,
    totalChapters: 12,
    rating: 4.9,
    reviews: 127,
    featured: true,
    categories: ['SEO', 'Marketing Digital', 'Estratégia'],
  },
  {
    id: 'seo-tecnico-avancado',
    title: 'SEO Técnico Avançado',
    subtitle: 'Domine os Fundamentos que 90% Ignora',
    description: 'Um mergulho profundo nas técnicas avançadas de SEO técnico. Core Web Vitals, Schema Markup, JavaScript SEO e muito mais.',
    cover: '/images/books/seo-tecnico-cover.jpg',
    price: '24,90€',
    pages: 280,
    freeChapters: 3,
    totalChapters: 10,
    rating: 4.8,
    reviews: 89,
    featured: false,
    categories: ['SEO Técnico', 'Performance', 'Desenvolvimento'],
  },
  {
    id: 'content-marketing-autoridade',
    title: 'Content Marketing para Autoridade',
    subtitle: 'Crie Conteúdo que Converte',
    description: 'Como criar conteúdo que posiciona a sua marca como líder de pensamento e gera resultados mensuráveis.',
    cover: '/images/books/content-marketing-cover.jpg',
    price: '22,90€',
    pages: 240,
    freeChapters: 3,
    totalChapters: 9,
    rating: 4.7,
    reviews: 64,
    featured: false,
    categories: ['Content Marketing', 'Copywriting', 'Branding'],
  },
]

const selectedCategory = ref('Todos')
const categories = ['Todos', 'SEO', 'Marketing Digital', 'SEO Técnico', 'Content Marketing']

const filteredBooks = computed(() => {
  if (selectedCategory.value === 'Todos') return books
  return books.filter(book => book.categories.includes(selectedCategory.value))
})
</script>

<template>
  <div>
    <!-- ═══════════════════════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-925 dark:to-neutral-950">
        <div class="absolute inset-0 bg-[linear-gradient(rgba(201,163,78,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,163,78,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div class="container-default relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <span class="label text-gold-500 mb-4 block">Biblioteca Digital</span>
          <h1 class="font-display text-display-xl text-neutral-900 dark:text-neutral-100 mb-6">
            E-Books
          </h1>
          <p class="text-body-xl text-neutral-600 dark:text-neutral-400 mb-8">
            Conhecimento transformado em palavras. Leia os primeiros 3 capítulos 
            gratuitamente e descubra estratégias que transformam negócios.
          </p>
          
          <!-- Category Filter -->
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              class="px-4 py-2 rounded-full text-body-sm font-medium transition-all duration-300"
              :class="selectedCategory === category 
                ? 'bg-gold-500 text-neutral-950' 
                : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-gold-500/20'"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         BOOKS GRID
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="book in filteredBooks"
          :key="book.id"
          :to="`/livros/${book.id}`"
          class="group"
        >
          <article class="h-full">
            <!-- Book Cover -->
            <div class="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-elegant-lg group-hover:shadow-elegant-xl transition-all duration-500">
              <!-- Placeholder Cover -->
              <div class="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
                <div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div class="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Icon name="lucide:book-open" class="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 class="font-display text-heading-lg text-neutral-100 mb-1">{{ book.title.split(':')[0] }}</h3>
                  <p class="text-body-xs text-neutral-400">António Yosica</p>
                </div>
              </div>
              
              <!-- Featured Badge -->
              <div v-if="book.featured" class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full bg-gold-500 text-neutral-950 text-label-sm font-semibold">
                  Bestseller
                </span>
              </div>
              
              <!-- Free Preview Badge -->
              <div class="absolute bottom-4 left-4 right-4">
                <div class="px-4 py-2 rounded-xl bg-neutral-950/80 backdrop-blur-sm text-center">
                  <span class="text-body-sm text-gold-500 font-medium">
                    {{ book.freeChapters }} capítulos grátis
                  </span>
                </div>
              </div>
              
              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-500" />
            </div>
            
            <!-- Book Info -->
            <div>
              <div class="flex items-center gap-2 mb-2">
                <div class="flex items-center gap-1">
                  <Icon name="lucide:star" class="w-4 h-4 text-gold-500 fill-gold-500" />
                  <span class="text-body-sm text-neutral-600 dark:text-neutral-400">{{ book.rating }}</span>
                </div>
                <span class="text-neutral-400">•</span>
                <span class="text-body-sm text-neutral-500">{{ book.reviews }} reviews</span>
              </div>
              
              <h3 class="text-heading-lg text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-gold-500 transition-colors">
                {{ book.title }}
              </h3>
              
              <p class="text-body-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                {{ book.description }}
              </p>
              
              <div class="flex items-center justify-between">
                <span class="text-heading-lg text-gold-500 font-display">{{ book.price }}</span>
                <span class="text-body-sm text-neutral-500">{{ book.pages }} páginas</span>
              </div>
            </div>
          </article>
        </NuxtLink>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         READING EXPERIENCE CTA
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection background="alt">
      <div class="text-center max-w-3xl mx-auto">
        <Icon name="lucide:sparkles" class="w-12 h-12 text-gold-500 mx-auto mb-6" />
        <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-6">
          Experiência de Leitura Imersiva
        </h2>
        <p class="text-body-xl text-neutral-600 dark:text-neutral-400 mb-8">
          Cada livro foi desenhado para proporcionar uma experiência de leitura única. 
          Modo noturno, tipografia otimizada, progresso sincronizado e muito mais.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <div class="flex items-center gap-2 text-body-md text-neutral-600 dark:text-neutral-400">
            <Icon name="lucide:moon" class="w-5 h-5 text-gold-500" />
            Modo Noturno
          </div>
          <div class="flex items-center gap-2 text-body-md text-neutral-600 dark:text-neutral-400">
            <Icon name="lucide:bookmark" class="w-5 h-5 text-gold-500" />
            Marcadores
          </div>
          <div class="flex items-center gap-2 text-body-md text-neutral-600 dark:text-neutral-400">
            <Icon name="lucide:type" class="w-5 h-5 text-gold-500" />
            Tipografia Ajustável
          </div>
          <div class="flex items-center gap-2 text-body-md text-neutral-600 dark:text-neutral-400">
            <Icon name="lucide:smartphone" class="w-5 h-5 text-gold-500" />
            Leitura Offline
          </div>
        </div>
      </div>
    </UiSection>
  </div>
</template>
