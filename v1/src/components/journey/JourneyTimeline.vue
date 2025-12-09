<script setup lang="ts">
/**
 * Surreal Journey Timeline Component
 * An immersive, interactive timeline from 1997 to present
 */

const currentYear = new Date().getFullYear()
const startYear = 1997

// Journey milestones
const milestones = [
  {
    year: 1997,
    title: 'O Início',
    subtitle: 'Nascimento',
    description: 'Nasci em Angola, num mundo ainda a descobrir a internet. O destino já estava traçado.',
    icon: 'lucide:baby',
    color: 'from-pink-500 to-rose-500',
    type: 'birth',
  },
  {
    year: 2005,
    title: 'Primeiro Computador',
    subtitle: 'A Descoberta',
    description: 'O primeiro contacto com um computador. Horas a explorar, a questionar, a sonhar com as possibilidades.',
    icon: 'lucide:monitor',
    color: 'from-blue-500 to-cyan-500',
    type: 'milestone',
  },
  {
    year: 2008,
    title: 'Primeiras Linhas de Código',
    subtitle: 'O Despertar',
    description: 'HTML, CSS, e uma curiosidade insaciável. Cada linha de código era uma porta para um novo mundo.',
    icon: 'lucide:code',
    color: 'from-green-500 to-emerald-500',
    type: 'milestone',
  },
  {
    year: 2010,
    title: 'A Pergunta',
    subtitle: 'SEO Discovery',
    description: '"Como é que o Google decide quem aparece primeiro?" Esta pergunta mudou tudo.',
    icon: 'lucide:search',
    color: 'from-yellow-500 to-orange-500',
    type: 'turning-point',
  },
  {
    year: 2012,
    title: 'Primeiro Cliente',
    subtitle: 'O Salto',
    description: 'O primeiro cliente que confiou em mim. O primeiro projeto real. O primeiro de muitos.',
    icon: 'lucide:handshake',
    color: 'from-purple-500 to-violet-500',
    type: 'milestone',
  },
  {
    year: 2014,
    title: 'Mudança para Portugal',
    subtitle: 'Novo Capítulo',
    description: 'Lisboa tornou-se casa. Novos desafios, novas oportunidades, novos horizontes.',
    icon: 'lucide:plane',
    color: 'from-red-500 to-pink-500',
    type: 'turning-point',
  },
  {
    year: 2016,
    title: 'Consultoria Internacional',
    subtitle: 'Expansão',
    description: 'Clientes na Europa, América, Ásia. O mundo tornou-se o meu escritório.',
    icon: 'lucide:globe',
    color: 'from-teal-500 to-cyan-500',
    type: 'milestone',
  },
  {
    year: 2018,
    title: '100 Clientes',
    subtitle: 'Marco',
    description: 'Centenas de projetos, milhares de horas, incontáveis lições aprendidas.',
    icon: 'lucide:trophy',
    color: 'from-amber-500 to-yellow-500',
    type: 'achievement',
  },
  {
    year: 2019,
    title: 'Nasce o Método LEE',
    subtitle: 'A Síntese',
    description: 'Anos de experiência cristalizados num framework. Liderança, Execução, Escalabilidade.',
    icon: 'lucide:lightbulb',
    color: 'from-gold-500 to-amber-400',
    type: 'turning-point',
  },
  {
    year: 2021,
    title: 'Primeiro Livro',
    subtitle: 'Partilha',
    description: 'O conhecimento transformado em palavras. O início de uma nova missão: educar.',
    icon: 'lucide:book-open',
    color: 'from-indigo-500 to-purple-500',
    type: 'achievement',
  },
  {
    year: 2023,
    title: 'Ecossistema LEE',
    subtitle: 'Comunidade',
    description: 'Clube LEE, Podcast, Meet & Greets. Uma comunidade de mentes brilhantes.',
    icon: 'lucide:users',
    color: 'from-emerald-500 to-teal-500',
    type: 'milestone',
  },
  {
    year: 2024,
    title: 'Presente',
    subtitle: 'Agora',
    description: 'Continuo a aprender, a ensinar, a crescer. A jornada nunca termina.',
    icon: 'lucide:sparkles',
    color: 'from-gold-500 to-gold-400',
    type: 'present',
  },
  {
    year: 2025,
    title: 'O Futuro',
    subtitle: 'Em Construção',
    description: 'Novos projetos, novos sonhos, novas possibilidades. O melhor ainda está por vir.',
    icon: 'lucide:rocket',
    color: 'from-violet-500 to-purple-500',
    type: 'future',
  },
]

// Active milestone state
const activeMilestone = ref<number | null>(null)
const timelineRef = ref<HTMLElement | null>(null)
const isInView = ref(false)

// Calculate position on timeline
const getPosition = (year: number) => {
  const totalYears = currentYear + 1 - startYear
  const yearOffset = year - startYear
  return (yearOffset / totalYears) * 100
}

// Intersection observer for animation trigger
onMounted(() => {
  if (!timelineRef.value) return
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInView.value = true
        }
      })
    },
    { threshold: 0.2 }
  )
  
  observer.observe(timelineRef.value)
  
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <div ref="timelineRef" class="relative py-16">
    <!-- Background Glow -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
    </div>

    <!-- Year Labels -->
    <div class="flex justify-between mb-8 px-4">
      <span class="text-display-sm font-display text-gold-500">{{ startYear }}</span>
      <span class="text-display-sm font-display text-gold-500">{{ currentYear + 1 }}</span>
    </div>

    <!-- Main Timeline -->
    <div class="relative h-4 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden mb-12">
      <!-- Progress Fill -->
      <div 
        class="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 rounded-full transition-all duration-1000 ease-out"
        :style="{ width: isInView ? `${getPosition(currentYear)}%` : '0%' }"
      >
        <!-- Shimmer Effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>

      <!-- Milestone Dots -->
      <div 
        v-for="(milestone, index) in milestones"
        :key="milestone.year"
        class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 transition-all duration-500"
        :style="{ 
          left: `${getPosition(milestone.year)}%`,
          transitionDelay: `${index * 100}ms`
        }"
      >
        <button
          @click="activeMilestone = activeMilestone === index ? null : index"
          @mouseenter="activeMilestone = index"
          class="relative group"
        >
          <!-- Dot -->
          <div 
            class="w-6 h-6 rounded-full border-4 border-neutral-0 dark:border-neutral-950 shadow-lg transition-all duration-300"
            :class="[
              milestone.year <= currentYear 
                ? `bg-gradient-to-br ${milestone.color}` 
                : 'bg-neutral-300 dark:bg-neutral-700',
              activeMilestone === index ? 'scale-150' : 'group-hover:scale-125'
            ]"
          >
            <!-- Pulse for current year -->
            <div 
              v-if="milestone.type === 'present'"
              class="absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-50"
            />
          </div>

          <!-- Year Label -->
          <div 
            class="absolute top-8 left-1/2 -translate-x-1/2 text-body-xs font-medium whitespace-nowrap transition-all duration-300"
            :class="activeMilestone === index ? 'text-gold-500 scale-110' : 'text-neutral-500'"
          >
            {{ milestone.year }}
          </div>
        </button>
      </div>
    </div>

    <!-- Milestone Cards -->
    <div class="relative min-h-[400px]">
      <TransitionGroup
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-8 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-4 scale-95"
      >
        <div
          v-for="(milestone, index) in milestones"
          v-show="activeMilestone === index"
          :key="milestone.year"
          class="absolute inset-x-0 top-0"
        >
          <div class="max-w-2xl mx-auto">
            <div 
              class="relative p-8 rounded-3xl bg-neutral-0 dark:bg-neutral-900 shadow-elegant-xl border border-neutral-100 dark:border-neutral-800 overflow-hidden"
            >
              <!-- Background Gradient -->
              <div 
                class="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                :class="`bg-gradient-to-br ${milestone.color}`"
              />

              <!-- Content -->
              <div class="relative z-10">
                <!-- Icon -->
                <div 
                  class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  :class="`bg-gradient-to-br ${milestone.color}`"
                >
                  <Icon :name="milestone.icon" class="w-8 h-8 text-white" />
                </div>

                <!-- Year Badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-4">
                  <span class="text-label-md text-gold-500 font-semibold">{{ milestone.year }}</span>
                  <span class="text-label-sm text-neutral-500">{{ milestone.subtitle }}</span>
                </div>

                <!-- Title -->
                <h3 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-4">
                  {{ milestone.title }}
                </h3>

                <!-- Description -->
                <p class="text-body-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {{ milestone.description }}
                </p>

                <!-- Type Badge -->
                <div class="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <span 
                    class="inline-flex items-center gap-2 text-body-sm"
                    :class="{
                      'text-gold-500': milestone.type === 'turning-point',
                      'text-green-500': milestone.type === 'achievement',
                      'text-blue-500': milestone.type === 'milestone',
                      'text-purple-500': milestone.type === 'future',
                      'text-pink-500': milestone.type === 'birth',
                      'text-amber-500': milestone.type === 'present',
                    }"
                  >
                    <Icon 
                      :name="milestone.type === 'turning-point' ? 'lucide:zap' : 
                             milestone.type === 'achievement' ? 'lucide:award' :
                             milestone.type === 'future' ? 'lucide:sparkles' :
                             milestone.type === 'present' ? 'lucide:radio' :
                             'lucide:flag'"
                      class="w-4 h-4"
                    />
                    {{ 
                      milestone.type === 'turning-point' ? 'Ponto de Viragem' :
                      milestone.type === 'achievement' ? 'Conquista' :
                      milestone.type === 'future' ? 'Futuro' :
                      milestone.type === 'present' ? 'Presente' :
                      milestone.type === 'birth' ? 'Origem' :
                      'Marco'
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>

      <!-- Default State -->
      <div 
        v-if="activeMilestone === null"
        class="text-center py-12"
      >
        <Icon name="lucide:mouse-pointer-click" class="w-8 h-8 text-gold-500 mx-auto mb-4 animate-bounce" />
        <p class="text-body-lg text-neutral-500">
          Clique num ponto da timeline para explorar a jornada
        </p>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="flex justify-center gap-4 mt-8">
      <button
        @click="activeMilestone = activeMilestone !== null && activeMilestone > 0 ? activeMilestone - 1 : milestones.length - 1"
        class="btn btn-ghost btn-icon"
      >
        <Icon name="lucide:chevron-left" class="w-6 h-6" />
      </button>
      <button
        @click="activeMilestone = activeMilestone !== null && activeMilestone < milestones.length - 1 ? activeMilestone + 1 : 0"
        class="btn btn-ghost btn-icon"
      >
        <Icon name="lucide:chevron-right" class="w-6 h-6" />
      </button>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      <div class="text-center p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <div class="text-display-md text-gold-500 font-display">{{ currentYear - startYear }}</div>
        <div class="text-body-sm text-neutral-500">Anos de Jornada</div>
      </div>
      <div class="text-center p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <div class="text-display-md text-gold-500 font-display">{{ milestones.filter(m => m.type === 'turning-point').length }}</div>
        <div class="text-body-sm text-neutral-500">Pontos de Viragem</div>
      </div>
      <div class="text-center p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <div class="text-display-md text-gold-500 font-display">{{ milestones.filter(m => m.type === 'achievement').length }}</div>
        <div class="text-body-sm text-neutral-500">Conquistas</div>
      </div>
      <div class="text-center p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <div class="text-display-md text-gold-500 font-display">∞</div>
        <div class="text-body-sm text-neutral-500">Possibilidades</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
