<script setup lang="ts">
useSeoMeta({
  title: 'Blog | António Yosica',
  description: 'Artigos sobre SEO, marketing digital, estratégia empresarial e o Método LEE.',
})

const categories = [
  { name: 'Todos', slug: 'all', count: 24 },
  { name: 'SEO', slug: 'seo', count: 12 },
  { name: 'Marketing Digital', slug: 'marketing-digital', count: 6 },
  { name: 'Estratégia', slug: 'estrategia', count: 4 },
  { name: 'Método LEE', slug: 'metodo-lee', count: 2 },
]

const selectedCategory = ref('all')

const featuredPost = {
  slug: 'guia-completo-seo-2024',
  title: 'Guia Completo de SEO para 2024: Tudo o que Precisa Saber',
  excerpt: 'Um guia abrangente sobre as melhores práticas de SEO para 2024, incluindo as últimas atualizações do algoritmo do Google e estratégias comprovadas.',
  category: 'SEO',
  date: '15 Nov 2024',
  readTime: '15 min',
  image: '/images/blog/seo-2024.jpg',
}

const posts = [
  {
    slug: 'como-construir-autoridade-digital',
    title: 'Como Construir Autoridade Digital no Seu Nicho',
    excerpt: 'Estratégias práticas para se posicionar como líder de pensamento e referência no seu setor.',
    category: 'Estratégia',
    date: '10 Nov 2024',
    readTime: '8 min',
  },
  {
    slug: 'seo-tecnico-checklist',
    title: 'SEO Técnico: Checklist Completo para 2024',
    excerpt: 'Uma lista abrangente de verificações técnicas para garantir que o seu site está otimizado.',
    category: 'SEO',
    date: '5 Nov 2024',
    readTime: '12 min',
  },
  {
    slug: 'metodo-lee-introducao',
    title: 'Introdução ao Método LEE: Os 3 Pilares do Sucesso Digital',
    excerpt: 'Descubra os fundamentos do Método LEE e como pode aplicá-lo ao seu negócio.',
    category: 'Método LEE',
    date: '1 Nov 2024',
    readTime: '10 min',
  },
  {
    slug: 'content-marketing-estrategias',
    title: '10 Estratégias de Content Marketing que Funcionam',
    excerpt: 'Táticas comprovadas para criar conteúdo que atrai, envolve e converte.',
    category: 'Marketing Digital',
    date: '25 Out 2024',
    readTime: '9 min',
  },
  {
    slug: 'link-building-2024',
    title: 'Link Building em 2024: O que Funciona e o que Evitar',
    excerpt: 'Estratégias éticas e eficazes para construir backlinks de qualidade.',
    category: 'SEO',
    date: '20 Out 2024',
    readTime: '11 min',
  },
  {
    slug: 'analytics-metricas-importantes',
    title: 'As Métricas de SEO que Realmente Importam',
    excerpt: 'Foque-se nos KPIs certos para medir o sucesso das suas estratégias de SEO.',
    category: 'SEO',
    date: '15 Out 2024',
    readTime: '7 min',
  },
]
</script>

<template>
  <div>
    <!-- ═══════════════════════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-925 dark:to-neutral-950" />

      <div class="container-default relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <span class="label text-gold-500 mb-4 block">Blog</span>
          <h1 class="font-display text-display-xl text-neutral-900 dark:text-neutral-100 mb-6">
            Artigos & Insights
          </h1>
          <p class="text-body-xl text-neutral-600 dark:text-neutral-400">
            Partilho conhecimento sobre SEO, marketing digital e estratégia empresarial. 
            Conteúdo prático para impulsionar o seu negócio.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         CATEGORIES
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection size="sm" background="alt">
      <div class="flex flex-wrap justify-center gap-3">
        <button
          v-for="category in categories"
          :key="category.slug"
          @click="selectedCategory = category.slug"
          class="px-4 py-2 rounded-full text-body-sm font-medium transition-all duration-200"
          :class="selectedCategory === category.slug
            ? 'bg-gold-500 text-neutral-950'
            : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700'"
        >
          {{ category.name }}
          <span class="ml-1 opacity-60">({{ category.count }})</span>
        </button>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         FEATURED POST
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <NuxtLink :to="`/blog/${featuredPost.slug}`" class="block group">
        <UiCard variant="elevated" padding="none" class="overflow-hidden">
          <div class="grid lg:grid-cols-2">
            <!-- Image -->
            <div class="aspect-video lg:aspect-auto bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon name="lucide:image" class="w-16 h-16 text-neutral-400" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <!-- Content -->
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-4 mb-4">
                <UiBadge variant="gold">{{ featuredPost.category }}</UiBadge>
                <span class="text-body-sm text-neutral-500">{{ featuredPost.date }}</span>
                <span class="text-body-sm text-neutral-500">{{ featuredPost.readTime }} leitura</span>
              </div>
              
              <h2 class="font-display text-display-sm text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-gold-500 transition-colors">
                {{ featuredPost.title }}
              </h2>
              
              <p class="text-body-lg text-neutral-600 dark:text-neutral-400 mb-6">
                {{ featuredPost.excerpt }}
              </p>
              
              <span class="inline-flex items-center gap-2 text-gold-500 font-medium">
                Ler artigo
                <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </UiCard>
      </NuxtLink>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         POSTS GRID
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection background="alt">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group"
        >
          <UiCard variant="elevated" padding="none" class="h-full overflow-hidden">
            <!-- Image -->
            <div class="aspect-video bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon name="lucide:image" class="w-12 h-12 text-neutral-400" />
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <UiBadge variant="neutral">{{ post.category }}</UiBadge>
                <span class="text-body-xs text-neutral-500">{{ post.readTime }}</span>
              </div>
              
              <h3 class="text-heading-lg text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
              
              <p class="text-body-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4">
                {{ post.excerpt }}
              </p>
              
              <div class="flex items-center justify-between">
                <span class="text-body-xs text-neutral-500">{{ post.date }}</span>
                <Icon name="lucide:arrow-right" class="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </UiCard>
        </NuxtLink>
      </div>

      <!-- Load More -->
      <div class="text-center mt-12">
        <button class="btn btn-secondary btn-lg">
          Carregar mais artigos
          <Icon name="lucide:chevron-down" class="w-5 h-5" />
        </button>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         NEWSLETTER CTA
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <UiCard variant="gold" padding="lg" class="text-center max-w-2xl mx-auto">
        <Icon name="lucide:mail" class="w-12 h-12 text-gold-500 mx-auto mb-4" />
        <h2 class="font-display text-display-sm text-neutral-900 dark:text-neutral-100 mb-4">
          Receba os novos artigos por email
        </h2>
        <p class="text-body-md text-neutral-600 dark:text-neutral-400 mb-6">
          Subscreva a newsletter e receba conteúdo exclusivo sobre SEO e marketing digital.
        </p>
        <NuxtLink to="/newsletter" class="btn btn-primary btn-md">
          Subscrever Newsletter
        </NuxtLink>
      </UiCard>
    </UiSection>
  </div>
</template>
