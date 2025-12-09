<script setup lang="ts">
useSeoMeta({
  title: 'António Yosica | SEO Specialist, Autor & Criador do Método LEE',
  description: 'Transformo sonhadores em realizadores. SEO Specialist, Software Engineer, autor e criador do Método LEE.',
})

// Blog categories (Pat Flynn style)
const blogCategories = [
  {
    title: 'SEO & Marketing Digital',
    description: 'Com mais de 15 anos de experiência, partilho as minhas vitórias, falhas e lições aprendidas para te ajudar na tua jornada digital.',
    icon: 'lucide:search',
    link: '/blog?categoria=seo',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Empreendedorismo',
    description: 'Estratégias práticas para construir e escalar negócios online. Do zero aos seis dígitos.',
    icon: 'lucide:rocket',
    link: '/blog?categoria=empreendedorismo',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Tecnologia',
    description: 'A minha opinião honesta sobre as últimas tendências tech. O que vale o teu tempo, dinheiro e atenção.',
    icon: 'lucide:cpu',
    link: '/blog?categoria=tecnologia',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Desenvolvimento Pessoal',
    description: 'Mindset, produtividade e crescimento pessoal. As ferramentas que uso para evoluir todos os dias.',
    icon: 'lucide:brain',
    link: '/blog?categoria=desenvolvimento-pessoal',
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Bastidores',
    description: 'O que se passa nos bastidores dos meus projetos. Transparência total sobre o que funciona e o que não funciona.',
    icon: 'lucide:video',
    link: '/blog?categoria=bastidores',
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'Atualizações',
    description: 'Novidades, lançamentos e atualizações sobre os meus projetos e a comunidade.',
    icon: 'lucide:bell',
    link: '/blog?categoria=atualizacoes',
    color: 'from-indigo-500 to-violet-500',
  },
]

// Books
const books = [
  {
    title: 'Método LEE',
    subtitle: 'O guia definitivo para dominar o SEO e construir autoridade digital.',
    cover: '/images/books/metodo-lee.jpg',
    amazonLink: '#',
    learnMoreLink: '/livros/metodo-lee',
  },
  {
    title: 'SEO Descomplicado',
    subtitle: 'Como posicionar o teu site no topo do Google sem complicações.',
    cover: '/images/books/seo-descomplicado.jpg',
    amazonLink: '#',
    learnMoreLink: '/livros/seo-descomplicado',
  },
  {
    title: 'Autoridade Digital',
    subtitle: 'Transforma a tua presença online numa máquina de oportunidades.',
    cover: '/images/books/autoridade-digital.jpg',
    amazonLink: '#',
    learnMoreLink: '/livros/autoridade-digital',
  },
]

// Featured course
const featuredCourse = {
  title: 'Masterclass SEO',
  description: 'Um curso passo-a-passo para dominar o SEO e fazer crescer a tua marca online.',
  videoThumbnail: '/images/courses/masterclass-seo.jpg',
  link: '/metodo-lee',
}

// Speaking events
const upcomingEvents = [
  {
    date: 'Mar 2025',
    title: 'Web Summit Lisboa',
    location: 'Lisboa, Portugal',
    link: '#',
  },
  {
    date: 'Abr 2025',
    title: 'Digital Marketing Conference',
    location: 'Porto, Portugal',
    link: '#',
  },
]

// Latest blog post
const latestPost = {
  title: 'Como Construí uma Audiência de 100K em 12 Meses',
  excerpt: 'A estratégia completa que usei para crescer a minha presença digital do zero. Sem atalhos, sem truques — apenas trabalho consistente e estratégico.',
  category: 'SEO & Marketing Digital',
  link: '/blog/como-construi-audiencia-100k',
}
</script>

<template>
  <div>
    <!-- ═══════════════════════════════════════════════════════════════════════
         HERO SECTION - Pat Flynn Style
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="py-20 md:py-32 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
      <div class="container-default">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Content -->
          <div>
            <p class="text-body-xl text-neutral-600 dark:text-neutral-400 mb-4">
              Olá! Eu sou o
            </p>
            <h1 class="text-display-xl md:text-display-2xl text-neutral-900 dark:text-neutral-100 mb-6">
              António Yosica
            </h1>
            
            <!-- Fun personality traits (Pat Flynn style) -->
            <p class="text-body-lg text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
              Pai, marido, empreendedor em série e apaixonado por SEO. 
              <span class="text-gold-500">Amante de café forte</span>, 
              <span class="text-gold-500">fã de tecnologia</span>, 
              <span class="text-gold-500">leitor compulsivo</span> e 
              <span class="text-gold-500">eterno aprendiz</span>.
            </p>

            <p class="text-heading-lg text-neutral-700 dark:text-neutral-300 mb-8">
              Transformo sonhadores em realizadores. Vamos criar algo extraordinário juntos, e divertir-nos a fazê-lo.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/sobre-mim" class="btn btn-primary btn-lg">
                Mais Sobre Mim
              </NuxtLink>
              <NuxtLink to="#comecar" class="btn btn-secondary btn-lg">
                Começar Aqui
              </NuxtLink>
            </div>
          </div>

          <!-- Photo -->
          <div class="relative">
            <div class="aspect-square rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600 p-2">
              <div class="w-full h-full rounded-2xl bg-neutral-200 dark:bg-neutral-800 overflow-hidden flex items-center justify-center">
                <!-- Placeholder for photo -->
                <Icon name="lucide:user" class="w-32 h-32 text-neutral-400" />
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-gold-500/20 rounded-2xl -z-10" />
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         START HERE SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section id="comecar" class="py-20 md:py-28 border-b border-neutral-200 dark:border-neutral-800">
      <div class="container-default">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-block px-4 py-2 rounded-full bg-gold-500/10 text-gold-500 text-label-lg mb-6">
            Novo por aqui?
          </span>
          <h2 class="text-display-md md:text-display-lg text-neutral-900 dark:text-neutral-100 mb-6">
            Começa Aqui
          </h2>
          <p class="text-body-xl text-neutral-600 dark:text-neutral-400 mb-10">
            Se és novo no meu mundo, aqui está o melhor caminho para começares a tua jornada.
          </p>

          <div class="grid sm:grid-cols-3 gap-6">
            <NuxtLink to="/sobre-mim" class="group p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 hover:bg-gold-500 transition-all duration-300">
              <Icon name="lucide:user" class="w-10 h-10 text-gold-500 group-hover:text-neutral-950 mb-4 mx-auto transition-colors" />
              <h3 class="text-heading-md text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 mb-2 transition-colors">Conhece-me</h3>
              <p class="text-body-sm text-neutral-500 group-hover:text-neutral-800 transition-colors">A minha história e jornada</p>
            </NuxtLink>

            <NuxtLink to="/metodo-lee" class="group p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 hover:bg-gold-500 transition-all duration-300">
              <Icon name="lucide:graduation-cap" class="w-10 h-10 text-gold-500 group-hover:text-neutral-950 mb-4 mx-auto transition-colors" />
              <h3 class="text-heading-md text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 mb-2 transition-colors">Aprende</h3>
              <p class="text-body-sm text-neutral-500 group-hover:text-neutral-800 transition-colors">O Método LEE explicado</p>
            </NuxtLink>

            <NuxtLink to="/livros" class="group p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 hover:bg-gold-500 transition-all duration-300">
              <Icon name="lucide:book-open" class="w-10 h-10 text-gold-500 group-hover:text-neutral-950 mb-4 mx-auto transition-colors" />
              <h3 class="text-heading-md text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 mb-2 transition-colors">Lê</h3>
              <p class="text-body-sm text-neutral-500 group-hover:text-neutral-800 transition-colors">Os meus livros</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         BLOG SECTION - Categories Grid
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28">
      <div class="container-default">
        <!-- Latest Post Feature -->
        <div class="mb-16">
          <h2 class="text-display-sm md:text-display-md text-neutral-900 dark:text-neutral-100 mb-4">
            Partilho a minha jornada, atualizações e outros interesses aqui no blog.
          </h2>
          <p class="text-body-xl text-neutral-600 dark:text-neutral-400 mb-8">
            Dá uma vista de olhos!
          </p>

          <!-- Featured Post -->
          <NuxtLink :to="latestPost.link" class="group block p-8 rounded-3xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 hover:border-gold-500/40 transition-all">
            <span class="text-label-md text-gold-500 mb-2 block">Último Artigo</span>
            <h3 class="text-heading-xl md:text-display-sm text-neutral-900 dark:text-neutral-100 group-hover:text-gold-500 transition-colors mb-4">
              {{ latestPost.title }}
            </h3>
            <p class="text-body-lg text-neutral-600 dark:text-neutral-400 mb-4">
              {{ latestPost.excerpt }}
            </p>
            <span class="text-gold-500 font-medium inline-flex items-center gap-2">
              Ler mais
              <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </NuxtLink>
        </div>

        <!-- Categories Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink 
            v-for="category in blogCategories" 
            :key="category.title"
            :to="category.link"
            class="group p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 hover:shadow-lg transition-all duration-300"
          >
            <div 
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              :class="`bg-gradient-to-br ${category.color}`"
            >
              <Icon :name="category.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-heading-lg text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-gold-500 transition-colors">
              {{ category.title }}
            </h3>
            <p class="text-body-md text-neutral-600 dark:text-neutral-400 mb-4">
              {{ category.description }}
            </p>
            <span class="text-gold-500 text-body-sm font-medium inline-flex items-center gap-1">
              Ver artigos
              <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </NuxtLink>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/blog" class="btn btn-secondary btn-lg">
            Ver Todos os Artigos
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         BOOKS SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28 bg-neutral-100 dark:bg-neutral-900">
      <div class="container-default">
        <div class="text-center mb-12">
          <h2 class="text-display-sm md:text-display-md text-neutral-900 dark:text-neutral-100 mb-4">
            Escrevo livros que te inspiram a sonhar e oferecem estratégias para realizares.
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div 
            v-for="book in books" 
            :key="book.title"
            class="group text-center"
          >
            <!-- Book Cover -->
            <div class="aspect-[3/4] rounded-xl bg-neutral-200 dark:bg-neutral-800 mb-6 overflow-hidden shadow-lg group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
              <div class="w-full h-full flex items-center justify-center">
                <Icon name="lucide:book" class="w-16 h-16 text-neutral-400" />
              </div>
            </div>

            <h3 class="text-heading-xl text-neutral-900 dark:text-neutral-100 mb-2">
              {{ book.title }}
            </h3>
            <p class="text-body-md text-neutral-600 dark:text-neutral-400 mb-4">
              {{ book.subtitle }}
            </p>

            <div class="flex justify-center gap-3">
              <a :href="book.amazonLink" class="btn btn-primary btn-sm">
                Comprar
              </a>
              <NuxtLink :to="book.learnMoreLink" class="btn btn-secondary btn-sm">
                Saber mais
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/livros" class="btn btn-secondary btn-lg">
            Ver Todos os Livros
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         COURSES SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28">
      <div class="container-default">
        <div class="text-center mb-12">
          <h2 class="text-display-sm md:text-display-md text-neutral-900 dark:text-neutral-100 mb-4">
            Os meus cursos eliminam a confusão, reduzem o tempo de aprendizagem e dão-te resultados.
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Video Thumbnail -->
            <div class="relative aspect-video rounded-2xl bg-neutral-200 dark:bg-neutral-800 overflow-hidden group cursor-pointer">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="lucide:play" class="w-8 h-8 text-neutral-950 ml-1" />
                </div>
              </div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="px-3 py-1 rounded-full bg-neutral-900/80 text-neutral-100 text-body-sm">
                  Ver Trailer
                </span>
              </div>
            </div>

            <!-- Course Info -->
            <div>
              <span class="text-label-md text-gold-500 mb-2 block">Curso mais popular</span>
              <h3 class="text-heading-xl md:text-display-sm text-neutral-900 dark:text-neutral-100 mb-4">
                {{ featuredCourse.title }}
              </h3>
              <p class="text-body-lg text-neutral-600 dark:text-neutral-400 mb-6">
                {{ featuredCourse.description }}
              </p>
              <NuxtLink :to="featuredCourse.link" class="btn btn-primary btn-lg">
                Saber Mais
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/metodo-lee" class="btn btn-secondary btn-lg">
            Ver Todos os Cursos
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         SPEAKING SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28 bg-neutral-900 dark:bg-neutral-950">
      <div class="container-default">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Video/Image -->
          <div class="relative aspect-video rounded-2xl bg-neutral-800 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Icon name="lucide:play" class="w-8 h-8 text-neutral-950 ml-1" />
              </div>
            </div>
            <div class="absolute bottom-4 left-4">
              <span class="px-3 py-1 rounded-full bg-neutral-900/80 text-neutral-100 text-body-sm">
                Ver em Ação
              </span>
            </div>
          </div>

          <!-- Content -->
          <div>
            <h2 class="text-display-sm md:text-display-md text-neutral-100 mb-6">
              Vê-me a Falar
            </h2>
            <p class="text-body-xl text-neutral-400 mb-8">
              Adoro falar, organizar workshops e criar eventos memoráveis!
            </p>

            <!-- Upcoming Events -->
            <div class="space-y-4 mb-8">
              <h3 class="text-heading-md text-neutral-300">Próximos Eventos:</h3>
              <div 
                v-for="event in upcomingEvents" 
                :key="event.title"
                class="flex items-center gap-4 p-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <div class="text-center">
                  <div class="text-gold-500 font-bold">{{ event.date }}</div>
                </div>
                <div class="flex-1">
                  <div class="text-neutral-100 font-medium">{{ event.title }}</div>
                  <div class="text-neutral-400 text-body-sm">{{ event.location }}</div>
                </div>
                <Icon name="lucide:arrow-right" class="w-5 h-5 text-neutral-500" />
              </div>
            </div>

            <NuxtLink to="/contacto" class="btn btn-primary btn-lg">
              Convida-me para Falar
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         NEWSLETTER SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28">
      <div class="container-default">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-display-sm md:text-display-md text-neutral-900 dark:text-neutral-100 mb-4">
            Subscreve a minha newsletter semanal
          </h2>
          <p class="text-body-xl text-neutral-600 dark:text-neutral-400 mb-8">
            Garantida para te motivar como nunca...
          </p>

          <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="O teu email"
              class="flex-1 px-6 py-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button type="submit" class="btn btn-primary btn-lg whitespace-nowrap">
              Subscrever
            </button>
          </form>

          <p class="text-body-sm text-neutral-500 mt-4">
            Sem spam. Cancela quando quiseres.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
