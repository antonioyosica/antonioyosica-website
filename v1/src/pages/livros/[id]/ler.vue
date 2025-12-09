<script setup lang="ts">
const route = useRoute()
const bookId = route.params.id as string
const chapterParam = route.query.chapter ? parseInt(route.query.chapter as string) : 1

// Reading state
const currentChapter = ref(chapterParam)
const fontSize = ref(18)
const isReaderMenuOpen = ref(false)
const readingProgress = ref(0)
const isFullscreen = ref(false)

// Book content (would come from API/CMS in production)
const bookContent: Record<string, any> = {
  'metodo-lee': {
    title: 'Método LEE: O Guia Definitivo para Dominar o SEO',
    author: 'António Yosica',
    chapters: [
      {
        number: 1,
        title: 'Introdução ao Método LEE',
        free: true,
        content: `
# Introdução ao Método LEE

## O Nascimento de uma Metodologia

Era uma noite fria de inverno em Lisboa quando tudo mudou. Depois de anos a trabalhar com centenas de empresas, a analisar milhares de dados e a testar incontáveis estratégias, finalmente consegui ver o padrão que sempre esteve lá, escondido à vista de todos.

O SEO não é apenas sobre palavras-chave e links. É sobre **liderança**, **execução** e **escalabilidade**. Três pilares que, quando alinhados, criam uma máquina de crescimento imparável.

---

## Por Que Este Livro?

Ao longo da minha carreira, vi empresas investirem milhões em estratégias digitais que falharam. Não por falta de recursos ou talento, mas por falta de uma metodologia clara e replicável.

> "O sucesso no digital não é um acidente. É o resultado de um sistema bem desenhado."

Este livro é o culminar de 15 anos de experiência, condensados num framework que qualquer pessoa pode aplicar, independentemente do tamanho do seu negócio ou orçamento.

---

## O Que Vai Aprender

Ao longo dos próximos capítulos, vamos explorar:

1. **Os fundamentos do Método LEE** — Compreender os três pilares e como se interligam
2. **Estratégias práticas** — Táticas que pode implementar imediatamente
3. **Casos de estudo reais** — Exemplos de empresas que transformaram os seus resultados
4. **Templates e ferramentas** — Recursos prontos a usar

---

## Como Usar Este Livro

Este não é um livro para ler passivamente. É um guia de trabalho. Cada capítulo inclui:

- **Conceitos fundamentais** explicados de forma clara
- **Exercícios práticos** para aplicar o que aprendeu
- **Checklists** para garantir que não esquece nada
- **Recursos adicionais** para aprofundar conhecimentos

Recomendo que leia com um caderno ao lado. Tome notas. Faça os exercícios. O conhecimento só se transforma em resultados quando é aplicado.

---

## Uma Promessa

Se seguir os princípios deste livro com dedicação e consistência, verá resultados. Não prometo sucesso da noite para o dia — isso não existe. Mas prometo que terá as ferramentas e o conhecimento para construir uma presença digital sólida e sustentável.

Vamos começar esta jornada juntos.

*António Yosica*
*Lisboa, 2024*
        `,
      },
      {
        number: 2,
        title: 'O Pilar da Liderança',
        free: true,
        content: `
# O Pilar da Liderança

## Definindo Liderança Digital

Quando falo de liderança no contexto do Método LEE, não me refiro a gestão de equipas ou hierarquias corporativas. Falo de **liderança de pensamento** — a capacidade de se posicionar como autoridade no seu setor.

A liderança digital é construída através de três elementos fundamentais:

### 1. Visão Clara

Antes de qualquer estratégia, precisa de uma visão. O que quer alcançar? Qual é a sua missão? Por que razão a sua empresa existe além do lucro?

> "As pessoas não compram o que você faz, compram o porquê de você fazer."
> — Simon Sinek

### 2. Posicionamento Único

Num mercado saturado, ser "mais um" é uma sentença de morte. Precisa de encontrar o seu ângulo único — aquilo que só você pode oferecer.

Pergunte-se:
- O que faço melhor do que qualquer outro?
- Que perspetiva única trago para o meu setor?
- Que problemas resolvo de forma diferente?

### 3. Consistência Inabalável

A liderança não se constrói com um artigo viral ou uma campanha de sucesso. Constrói-se dia após dia, publicação após publicação, interação após interação.

---

## Os 5 Pilares da Autoridade Digital

Para construir verdadeira autoridade, precisa de trabalhar em cinco frentes:

### Conteúdo de Valor

O conteúdo é a moeda da economia digital. Mas não qualquer conteúdo — conteúdo que educa, inspira e transforma.

**Características do conteúdo de autoridade:**
- Profundidade — Vai além do superficial
- Originalidade — Traz perspetivas novas
- Aplicabilidade — Pode ser usado imediatamente
- Consistência — Publicado regularmente

### Presença Estratégica

Não precisa de estar em todas as plataformas. Precisa de estar nas plataformas certas, com a mensagem certa, para a audiência certa.

### Networking Intencional

As relações que constrói são tão importantes quanto o conteúdo que cria. Conecte-se com outros líderes do seu setor. Colabore. Partilhe.

### Prova Social

Testemunhos, casos de estudo, números — tudo isto reforça a sua autoridade. Documente os seus sucessos e partilhe-os.

### Inovação Contínua

O mundo digital muda rapidamente. Os líderes não seguem tendências — antecipam-nas.

---

## Exercício Prático

Antes de avançar para o próximo capítulo, complete este exercício:

1. Escreva a sua declaração de missão em uma frase
2. Liste 3 coisas que faz melhor que a concorrência
3. Identifique 5 líderes do seu setor que admira
4. Defina o seu "conteúdo âncora" — o tema central da sua comunicação

---

## Resumo do Capítulo

- A liderança digital é sobre posicionamento, não hierarquia
- Precisa de visão clara, posicionamento único e consistência
- Os 5 pilares da autoridade: conteúdo, presença, networking, prova social e inovação
- A liderança constrói-se diariamente, não com ações pontuais

No próximo capítulo, vamos explorar como transformar esta liderança em autoridade digital mensurável.
        `,
      },
      {
        number: 3,
        title: 'Construindo Autoridade Digital',
        free: true,
        content: `
# Construindo Autoridade Digital

## Da Teoria à Prática

Nos capítulos anteriores, estabelecemos os fundamentos. Agora é hora de arregaçar as mangas e começar a construir.

A autoridade digital não é um destino — é uma jornada. E como qualquer jornada, começa com um primeiro passo.

---

## O Framework AIDA para Autoridade

Adaptei o clássico framework AIDA (Atenção, Interesse, Desejo, Ação) para a construção de autoridade:

### A — Awareness (Consciência)

Antes de ser uma autoridade, as pessoas precisam de saber que você existe. Esta fase é sobre visibilidade.

**Táticas para aumentar a consciência:**
- Guest posting em sites relevantes
- Participação em podcasts
- Presença ativa em redes sociais
- SEO para termos de marca

### I — Interest (Interesse)

Uma vez que as pessoas sabem que você existe, precisa de captar o seu interesse. Isto faz-se através de conteúdo de valor.

**Tipos de conteúdo que geram interesse:**
- Guias completos e aprofundados
- Estudos de caso detalhados
- Análises de tendências
- Tutoriais práticos

### D — Desire (Desejo)

O interesse transforma-se em desejo quando as pessoas veem resultados. Mostre o que é possível.

**Como criar desejo:**
- Partilhe transformações de clientes
- Mostre os bastidores do seu trabalho
- Demonstre expertise através de análises
- Ofereça amostras do seu conhecimento

### A — Action (Ação)

Finalmente, converta esse desejo em ação. Pode ser uma subscrição, uma compra, ou simplesmente um follow.

---

## O Calendário de Autoridade

A consistência é fundamental. Aqui está um exemplo de calendário semanal:

| Dia | Atividade |
|-----|-----------|
| Segunda | Artigo longo no blog |
| Terça | Engagement em redes sociais |
| Quarta | Newsletter |
| Quinta | Conteúdo em vídeo/podcast |
| Sexta | Networking e outreach |

---

## Métricas de Autoridade

Como saber se está a construir autoridade? Acompanhe estas métricas:

1. **Menções de marca** — Quantas vezes é mencionado online?
2. **Backlinks editoriais** — Sites a linkar para si naturalmente
3. **Convites** — Pedidos para palestras, podcasts, entrevistas
4. **Engagement qualitativo** — Comentários substantivos, não apenas likes
5. **Pesquisas de marca** — Pessoas a pesquisar o seu nome no Google

---

## O Efeito Composto

A autoridade funciona como juros compostos. No início, o crescimento é lento. Mas com o tempo, acelera exponencialmente.

> "A maioria das pessoas sobrestima o que pode fazer em um ano e subestima o que pode fazer em dez anos."
> — Bill Gates

Não desanime se os resultados não aparecerem imediatamente. Continue a plantar sementes. A colheita virá.

---

## Caso de Estudo: De Zero a Autoridade

Deixe-me partilhar a história de um cliente que chamarei de "Maria".

Maria era consultora de recursos humanos com 10 anos de experiência, mas zero presença digital. Em 18 meses, aplicando os princípios deste livro:

- Passou de 0 a 15.000 seguidores no LinkedIn
- Publicou 52 artigos no seu blog
- Foi convidada para 12 podcasts
- Triplicou o seu faturamento

O segredo? Consistência e paciência.

---

## Exercício Prático

Esta semana, comprometa-se a:

1. Publicar 1 peça de conteúdo de valor
2. Comentar em 5 publicações de líderes do seu setor
3. Enviar 3 emails de networking
4. Documentar 1 caso de sucesso

Pequenas ações, grandes resultados.

---

## Resumo do Capítulo

- Use o framework AIDA adaptado para autoridade
- Crie um calendário de conteúdo e cumpra-o
- Acompanhe métricas de autoridade, não apenas vanity metrics
- Confie no efeito composto — os resultados virão

No próximo capítulo, entramos no segundo pilar: Execução. É aqui que a magia acontece.

---

*Este é o fim da amostra gratuita. Para continuar a ler, adquira o livro completo.*
        `,
      },
      {
        number: 4,
        title: 'O Pilar da Execução',
        free: false,
        content: 'Conteúdo bloqueado. Adquira o livro para continuar.',
      },
    ],
  },
}

const book = computed(() => bookContent[bookId] || null)
const chapter = computed(() => book.value?.chapters.find((c: any) => c.number === currentChapter.value))
const canRead = computed(() => chapter.value?.free || false)

// Handle scroll progress
const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  readingProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Navigation
const goToChapter = (num: number) => {
  currentChapter.value = num
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const nextChapter = () => {
  if (book.value && currentChapter.value < book.value.chapters.length) {
    goToChapter(currentChapter.value + 1)
  }
}

const prevChapter = () => {
  if (currentChapter.value > 1) {
    goToChapter(currentChapter.value - 1)
  }
}

useSeoMeta({
  title: () => chapter.value ? `${chapter.value.title} | ${book.value?.title}` : 'Leitura',
})
</script>

<template>
  <div v-if="book" class="min-h-screen bg-neutral-50 dark:bg-neutral-950">
    <!-- Reading Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-neutral-200 dark:bg-neutral-800 z-50">
      <div 
        class="h-full bg-gradient-to-r from-gold-500 to-gold-400 transition-all duration-150"
        :style="{ width: `${readingProgress}%` }"
      />
    </div>

    <!-- Reader Header -->
    <header class="fixed top-1 left-0 right-0 z-40 transition-all duration-300">
      <div class="container-default">
        <div class="flex items-center justify-between h-16 px-4 rounded-xl bg-neutral-0/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-elegant-sm">
          <!-- Back -->
          <NuxtLink :to="`/livros/${bookId}`" class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-gold-500 transition-colors">
            <Icon name="lucide:arrow-left" class="w-5 h-5" />
            <span class="hidden sm:inline">Voltar</span>
          </NuxtLink>

          <!-- Title -->
          <div class="text-center flex-1 px-4">
            <h1 class="text-heading-sm text-neutral-900 dark:text-neutral-100 truncate">
              {{ chapter?.title }}
            </h1>
            <p class="text-body-xs text-neutral-500">
              Capítulo {{ currentChapter }} de {{ book.chapters.length }}
            </p>
          </div>

          <!-- Settings -->
          <div class="flex items-center gap-2">
            <button 
              @click="isReaderMenuOpen = !isReaderMenuOpen"
              class="btn btn-ghost btn-icon"
            >
              <Icon name="lucide:settings" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Settings Panel -->
      <Transition
        enter-active-class="transition-all duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isReaderMenuOpen" class="container-default mt-2">
          <div class="p-4 rounded-xl bg-neutral-0 dark:bg-neutral-900 shadow-elegant-md">
            <div class="flex items-center justify-between gap-8">
              <!-- Font Size -->
              <div class="flex items-center gap-4">
                <span class="text-body-sm text-neutral-500">Tamanho</span>
                <div class="flex items-center gap-2">
                  <button 
                    @click="fontSize = Math.max(14, fontSize - 2)"
                    class="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
                  >
                    <Icon name="lucide:minus" class="w-4 h-4" />
                  </button>
                  <span class="w-8 text-center text-body-sm">{{ fontSize }}</span>
                  <button 
                    @click="fontSize = Math.min(28, fontSize + 2)"
                    class="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
                  >
                    <Icon name="lucide:plus" class="w-4 h-4" />
                  </button>
                </div>
              </div>

              <!-- Chapter Select -->
              <div class="flex items-center gap-4">
                <span class="text-body-sm text-neutral-500">Capítulo</span>
                <select 
                  v-model="currentChapter"
                  class="px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-body-sm"
                >
                  <option 
                    v-for="ch in book.chapters" 
                    :key="ch.number" 
                    :value="ch.number"
                    :disabled="!ch.free"
                  >
                    {{ ch.number }}. {{ ch.title }} {{ !ch.free ? '🔒' : '' }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <!-- Content -->
    <main class="pt-24 pb-32">
      <div class="container-narrow">
        <article 
          v-if="canRead"
          class="prose prose-lg mx-auto"
          :style="{ fontSize: `${fontSize}px` }"
        >
          <div v-html="chapter?.content.replace(/\n/g, '<br>').replace(/^# (.*$)/gm, '<h1>$1</h1>').replace(/^## (.*$)/gm, '<h2>$1</h2>').replace(/^### (.*$)/gm, '<h3>$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>').replace(/^- (.*$)/gm, '<li>$1</li>').replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>').replace(/---/g, '<hr>')" />
        </article>

        <!-- Locked Content -->
        <div v-else class="text-center py-24">
          <div class="w-24 h-24 mx-auto mb-8 rounded-full bg-gold-500/10 flex items-center justify-center">
            <Icon name="lucide:lock" class="w-12 h-12 text-gold-500" />
          </div>
          <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-4">
            Capítulo Bloqueado
          </h2>
          <p class="text-body-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
            Este capítulo faz parte do conteúdo premium. Adquira o livro completo para continuar a leitura.
          </p>
          <button class="btn btn-primary btn-lg">
            <Icon name="lucide:shopping-cart" class="w-5 h-5" />
            Comprar Livro Completo
          </button>
        </div>
      </div>
    </main>

    <!-- Navigation Footer -->
    <footer class="fixed bottom-0 left-0 right-0 z-40 p-4">
      <div class="container-default">
        <div class="flex items-center justify-between p-4 rounded-xl bg-neutral-0/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-elegant-lg">
          <button 
            @click="prevChapter"
            :disabled="currentChapter <= 1"
            class="btn btn-ghost btn-md"
            :class="{ 'opacity-50 cursor-not-allowed': currentChapter <= 1 }"
          >
            <Icon name="lucide:chevron-left" class="w-5 h-5" />
            Anterior
          </button>

          <div class="flex items-center gap-2">
            <button
              v-for="ch in book.chapters.slice(0, 5)"
              :key="ch.number"
              @click="ch.free && goToChapter(ch.number)"
              class="w-8 h-8 rounded-full flex items-center justify-center text-body-sm transition-all"
              :class="[
                currentChapter === ch.number 
                  ? 'bg-gold-500 text-neutral-950' 
                  : ch.free 
                    ? 'bg-neutral-100 dark:bg-neutral-800 hover:bg-gold-500/20' 
                    : 'bg-neutral-100 dark:bg-neutral-800 opacity-50 cursor-not-allowed'
              ]"
            >
              {{ ch.number }}
            </button>
            <span v-if="book.chapters.length > 5" class="text-neutral-400">...</span>
          </div>

          <button 
            @click="nextChapter"
            :disabled="currentChapter >= book.chapters.length || !book.chapters[currentChapter]?.free"
            class="btn btn-ghost btn-md"
            :class="{ 'opacity-50 cursor-not-allowed': currentChapter >= book.chapters.length || !book.chapters[currentChapter]?.free }"
          >
            Próximo
            <Icon name="lucide:chevron-right" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  </div>

  <!-- Book not found -->
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

<style scoped>
.prose h1 {
  @apply font-display text-display-lg text-neutral-900 dark:text-neutral-100 mb-8 mt-12;
}

.prose h2 {
  @apply font-display text-display-sm text-neutral-900 dark:text-neutral-100 mb-6 mt-10;
}

.prose h3 {
  @apply font-display text-heading-xl text-neutral-900 dark:text-neutral-100 mb-4 mt-8;
}

.prose p {
  @apply text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed;
}

.prose blockquote {
  @apply border-l-4 border-gold-500 pl-6 py-2 my-8 italic text-neutral-600 dark:text-neutral-400 bg-gold-500/5 rounded-r-lg;
}

.prose strong {
  @apply text-neutral-900 dark:text-neutral-100 font-semibold;
}

.prose em {
  @apply italic;
}

.prose li {
  @apply text-neutral-700 dark:text-neutral-300 mb-2 ml-6;
}

.prose hr {
  @apply border-neutral-200 dark:border-neutral-800 my-12;
}

.prose table {
  @apply w-full my-8;
}

.prose th,
.prose td {
  @apply border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-left;
}

.prose th {
  @apply bg-neutral-100 dark:bg-neutral-900 font-semibold;
}
</style>
