<script setup lang="ts">
const route = useRoute()

// In a real app, this would fetch from an API/CMS
const post = {
  slug: route.params.slug,
  title: 'Guia Completo de SEO para 2024: Tudo o que Precisa Saber',
  excerpt: 'Um guia abrangente sobre as melhores práticas de SEO para 2024.',
  category: 'SEO',
  date: '15 Nov 2024',
  readTime: '15 min',
  author: {
    name: 'António Yosica',
    role: 'SEO Specialist',
    avatar: '/images/antonio.jpg',
  },
  content: `
    <p>O SEO continua a evoluir rapidamente, e 2024 traz novas oportunidades e desafios para profissionais de marketing digital. Neste guia abrangente, vamos explorar as estratégias mais eficazes para melhorar o seu posicionamento nos motores de busca.</p>
    
    <h2>1. A Importância do E-E-A-T</h2>
    <p>O Google continua a valorizar Experience, Expertise, Authoritativeness e Trustworthiness. Em 2024, é mais importante do que nunca demonstrar estas qualidades no seu conteúdo.</p>
    
    <h3>Como demonstrar E-E-A-T:</h3>
    <ul>
      <li>Inclua biografias detalhadas dos autores</li>
      <li>Cite fontes credíveis</li>
      <li>Atualize regularmente o conteúdo</li>
      <li>Obtenha backlinks de sites de autoridade</li>
    </ul>
    
    <h2>2. Core Web Vitals</h2>
    <p>A experiência do utilizador continua a ser um fator de ranking crucial. Certifique-se de que o seu site:</p>
    <ul>
      <li>Carrega rapidamente (LCP < 2.5s)</li>
      <li>É interativo rapidamente (FID < 100ms)</li>
      <li>É visualmente estável (CLS < 0.1)</li>
    </ul>
    
    <blockquote>
      "O SEO não é apenas sobre rankings — é sobre conectar pessoas com as soluções que procuram, no momento exato em que precisam."
    </blockquote>
    
    <h2>3. Conteúdo de Qualidade</h2>
    <p>O conteúdo continua a ser rei. Foque-se em criar conteúdo que:</p>
    <ul>
      <li>Responda às perguntas dos utilizadores</li>
      <li>Seja original e aprofundado</li>
      <li>Inclua elementos visuais relevantes</li>
      <li>Seja fácil de ler e navegar</li>
    </ul>
    
    <h2>Conclusão</h2>
    <p>O SEO em 2024 requer uma abordagem holística que combine excelência técnica, conteúdo de qualidade e uma experiência de utilizador excepcional. Ao implementar estas estratégias, estará bem posicionado para alcançar e manter rankings elevados.</p>
  `,
}

useSeoMeta({
  title: `${post.title} | António Yosica`,
  description: post.excerpt,
})

const relatedPosts = [
  {
    slug: 'seo-tecnico-checklist',
    title: 'SEO Técnico: Checklist Completo para 2024',
    category: 'SEO',
    readTime: '12 min',
  },
  {
    slug: 'link-building-2024',
    title: 'Link Building em 2024: O que Funciona e o que Evitar',
    category: 'SEO',
    readTime: '11 min',
  },
  {
    slug: 'content-marketing-estrategias',
    title: '10 Estratégias de Content Marketing que Funcionam',
    category: 'Marketing Digital',
    readTime: '9 min',
  },
]
</script>

<template>
  <div>
    <!-- ═══════════════════════════════════════════════════════════════════════
         ARTICLE HEADER
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-925 dark:to-neutral-950" />

      <div class="container-narrow relative z-10">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-body-sm text-neutral-500 mb-8">
          <NuxtLink to="/" class="hover:text-gold-500 transition-colors">Home</NuxtLink>
          <Icon name="lucide:chevron-right" class="w-4 h-4" />
          <NuxtLink to="/blog" class="hover:text-gold-500 transition-colors">Blog</NuxtLink>
          <Icon name="lucide:chevron-right" class="w-4 h-4" />
          <span class="text-neutral-700 dark:text-neutral-300">{{ post.category }}</span>
        </nav>

        <!-- Meta -->
        <div class="flex flex-wrap items-center gap-4 mb-6">
          <UiBadge variant="gold">{{ post.category }}</UiBadge>
          <span class="text-body-sm text-neutral-500">{{ post.date }}</span>
          <span class="text-body-sm text-neutral-500">{{ post.readTime }} leitura</span>
        </div>

        <!-- Title -->
        <h1 class="font-display text-display-lg md:text-display-xl text-neutral-900 dark:text-neutral-100 mb-8">
          {{ post.title }}
        </h1>

        <!-- Author -->
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
            <Icon name="lucide:user" class="w-6 h-6 text-neutral-400" />
          </div>
          <div>
            <div class="text-heading-sm text-neutral-900 dark:text-neutral-100">
              {{ post.author.name }}
            </div>
            <div class="text-body-sm text-neutral-500">
              {{ post.author.role }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         FEATURED IMAGE
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="container-default -mt-8 mb-16">
      <div class="aspect-video rounded-2xl bg-neutral-200 dark:bg-neutral-800 overflow-hidden shadow-elegant-xl">
        <div class="w-full h-full flex items-center justify-center">
          <Icon name="lucide:image" class="w-24 h-24 text-neutral-400" />
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         ARTICLE CONTENT
         ═══════════════════════════════════════════════════════════════════════ -->
    <article class="container-narrow">
      <div class="prose" v-html="post.content" />
    </article>

    <!-- ═══════════════════════════════════════════════════════════════════════
         SHARE & TAGS
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection size="sm" container="narrow">
      <div class="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-b border-neutral-200 dark:border-neutral-800">
        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span class="text-body-sm text-neutral-500 mr-2">Tags:</span>
          <span class="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-body-sm text-neutral-600 dark:text-neutral-400">
            SEO
          </span>
          <span class="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-body-sm text-neutral-600 dark:text-neutral-400">
            Marketing Digital
          </span>
          <span class="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-body-sm text-neutral-600 dark:text-neutral-400">
            2024
          </span>
        </div>

        <!-- Share -->
        <div class="flex items-center gap-3">
          <span class="text-body-sm text-neutral-500">Partilhar:</span>
          <button class="btn btn-ghost btn-icon">
            <Icon name="lucide:twitter" class="w-5 h-5" />
          </button>
          <button class="btn btn-ghost btn-icon">
            <Icon name="lucide:linkedin" class="w-5 h-5" />
          </button>
          <button class="btn btn-ghost btn-icon">
            <Icon name="lucide:facebook" class="w-5 h-5" />
          </button>
          <button class="btn btn-ghost btn-icon">
            <Icon name="lucide:link" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         AUTHOR BOX
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection size="sm" container="narrow">
      <UiCard variant="neu" padding="lg">
        <div class="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div class="w-20 h-20 rounded-full bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 flex items-center justify-center">
            <Icon name="lucide:user" class="w-10 h-10 text-neutral-400" />
          </div>
          <div class="text-center sm:text-left">
            <h3 class="text-heading-lg text-neutral-900 dark:text-neutral-100 mb-2">
              {{ post.author.name }}
            </h3>
            <p class="text-body-md text-neutral-600 dark:text-neutral-400 mb-4">
              SEO Specialist, Software Engineer e criador do Método LEE. 
              Com mais de 15 anos de experiência em marketing digital.
            </p>
            <div class="flex justify-center sm:justify-start gap-3">
              <a href="https://linkedin.com/in/antonioyosica" target="_blank" class="btn btn-ghost btn-icon">
                <Icon name="lucide:linkedin" class="w-5 h-5" />
              </a>
              <a href="https://twitter.com/antonioyosica" target="_blank" class="btn btn-ghost btn-icon">
                <Icon name="lucide:twitter" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </UiCard>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         RELATED POSTS
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection background="alt">
      <div class="text-center mb-12">
        <h2 class="font-display text-display-sm text-neutral-900 dark:text-neutral-100">
          Artigos Relacionados
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <NuxtLink
          v-for="relatedPost in relatedPosts"
          :key="relatedPost.slug"
          :to="`/blog/${relatedPost.slug}`"
          class="group"
        >
          <UiCard variant="elevated" padding="none" class="h-full overflow-hidden">
            <div class="aspect-video bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <Icon name="lucide:image" class="w-12 h-12 text-neutral-400" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <UiBadge variant="neutral">{{ relatedPost.category }}</UiBadge>
                <span class="text-body-xs text-neutral-500">{{ relatedPost.readTime }}</span>
              </div>
              <h3 class="text-heading-md text-neutral-900 dark:text-neutral-100 group-hover:text-gold-500 transition-colors">
                {{ relatedPost.title }}
              </h3>
            </div>
          </UiCard>
        </NuxtLink>
      </div>
    </UiSection>
  </div>
</template>
