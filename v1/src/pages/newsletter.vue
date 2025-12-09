<script setup lang="ts">
useSeoMeta({
  title: 'Newsletter | António Yosica',
  description: 'Subscreva a newsletter de António Yosica e receba conteúdo exclusivo sobre SEO, marketing digital e o Método LEE.',
})

const email = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
}

const benefits = [
  {
    icon: 'lucide:mail',
    title: 'Conteúdo Exclusivo',
    description: 'Artigos e insights que não partilho em mais nenhum lugar.',
  },
  {
    icon: 'lucide:gift',
    title: 'Recursos Gratuitos',
    description: 'Templates, checklists e ferramentas para impulsionar o seu SEO.',
  },
  {
    icon: 'lucide:zap',
    title: 'Dicas Práticas',
    description: 'Estratégias que pode implementar imediatamente no seu negócio.',
  },
  {
    icon: 'lucide:users',
    title: 'Comunidade',
    description: 'Acesso a uma comunidade de profissionais focados em crescimento.',
  },
]
</script>

<template>
  <div>
    <!-- ═══════════════════════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="relative min-h-[80vh] flex items-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-925 to-neutral-950">
        <div class="absolute inset-0 bg-[linear-gradient(rgba(201,163,78,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,163,78,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div class="container-default relative z-10 py-32">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Lead Magnet Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8">
            <Icon name="lucide:gift" class="w-4 h-4 text-gold-500" />
            <span class="text-label-md text-gold-500">Oferta Especial: Guia SEO 2024 Gratuito</span>
          </div>

          <h1 class="font-display text-display-xl md:text-display-2xl text-neutral-100 mb-6">
            Domine o SEO com insights
            <span class="text-gold-gradient">exclusivos</span>
          </h1>

          <p class="text-body-xl text-neutral-400 mb-10">
            Junte-se a mais de 5.000 profissionais que recebem semanalmente 
            as melhores estratégias de SEO e marketing digital diretamente na caixa de entrada.
          </p>

          <!-- Subscribe Form -->
          <div v-if="!isSubmitted" class="max-w-xl mx-auto">
            <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-4">
              <input
                v-model="email"
                type="email"
                placeholder="O seu melhor email"
                required
                class="flex-1 px-6 py-4 bg-neutral-800/50 border border-neutral-700 rounded-xl text-neutral-100 placeholder:text-neutral-500 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-all"
              />
              <button
                type="submit"
                class="btn btn-primary btn-lg whitespace-nowrap"
                :disabled="isSubmitting"
              >
                <Icon v-if="isSubmitting" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
                <Icon v-else name="lucide:arrow-right" class="w-5 h-5" />
                {{ isSubmitting ? 'A subscrever...' : 'Subscrever' }}
              </button>
            </form>
            <p class="text-body-sm text-neutral-500 mt-4">
              Sem spam. Cancele a qualquer momento. 
              <NuxtLink to="/politica-privacidade" class="text-gold-500 hover:underline">
                Política de Privacidade
              </NuxtLink>
            </p>
          </div>

          <!-- Success Message -->
          <div v-else class="max-w-xl mx-auto">
            <div class="p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
              <Icon name="lucide:check-circle" class="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h2 class="text-heading-xl text-neutral-100 mb-2">
                Subscrição confirmada!
              </h2>
              <p class="text-body-lg text-neutral-400">
                Verifique o seu email para receber o Guia SEO 2024 gratuito.
              </p>
            </div>
          </div>

          <!-- Social Proof -->
          <div class="flex flex-wrap justify-center items-center gap-8 mt-12 pt-12 border-t border-neutral-800">
            <div class="text-center">
              <div class="text-display-sm text-gold-500 font-display">5.000+</div>
              <div class="text-body-sm text-neutral-500">Subscritores</div>
            </div>
            <div class="text-center">
              <div class="text-display-sm text-gold-500 font-display">48%</div>
              <div class="text-body-sm text-neutral-500">Taxa de Abertura</div>
            </div>
            <div class="text-center">
              <div class="text-display-sm text-gold-500 font-display">4.9/5</div>
              <div class="text-body-sm text-neutral-500">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         BENEFITS SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-6">
          O que vai receber
        </h2>
        <p class="text-body-xl text-neutral-600 dark:text-neutral-400">
          Conteúdo de valor entregue semanalmente para impulsionar o seu negócio.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="benefit in benefits" :key="benefit.title">
          <UiCard variant="neu" padding="lg" class="h-full text-center">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-500/10 flex items-center justify-center">
              <Icon :name="benefit.icon" class="w-7 h-7 text-gold-500" />
            </div>
            <h3 class="text-heading-lg text-neutral-900 dark:text-neutral-100 mb-2">
              {{ benefit.title }}
            </h3>
            <p class="text-body-sm text-neutral-600 dark:text-neutral-400">
              {{ benefit.description }}
            </p>
          </UiCard>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         LEAD MAGNET PREVIEW
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection background="alt">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Preview -->
        <div class="relative">
          <div class="aspect-[4/5] rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-elegant-xl overflow-hidden">
            <div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <Icon name="lucide:file-text" class="w-16 h-16 text-gold-500 mb-6" />
              <h3 class="font-display text-display-sm text-neutral-100 mb-2">
                Guia SEO 2024
              </h3>
              <p class="text-body-md text-neutral-400">
                50+ páginas de estratégias
              </p>
            </div>
          </div>
          <div class="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500/30 rounded-2xl -z-10" />
        </div>

        <!-- Content -->
        <div>
          <UiBadge variant="gold" class="mb-4">Oferta de Boas-Vindas</UiBadge>
          <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-6">
            Guia Completo de SEO para 2024
          </h2>
          <p class="text-body-lg text-neutral-600 dark:text-neutral-400 mb-8">
            Ao subscrever a newsletter, recebe gratuitamente o meu guia mais completo 
            sobre SEO, com mais de 50 páginas de estratégias práticas e atualizadas.
          </p>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-3">
              <Icon name="lucide:check-circle" class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
              <span class="text-body-md text-neutral-600 dark:text-neutral-400">
                Estratégias de SEO que funcionam em 2024
              </span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:check-circle" class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
              <span class="text-body-md text-neutral-600 dark:text-neutral-400">
                Checklists e templates prontos a usar
              </span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:check-circle" class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
              <span class="text-body-md text-neutral-600 dark:text-neutral-400">
                Casos de estudo com resultados reais
              </span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:check-circle" class="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
              <span class="text-body-md text-neutral-600 dark:text-neutral-400">
                Ferramentas recomendadas e como usá-las
              </span>
            </li>
          </ul>

          <a href="#top" class="btn btn-primary btn-lg">
            <Icon name="lucide:download" class="w-5 h-5" />
            Obter Guia Gratuito
          </a>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         TESTIMONIALS
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-6">
          O que dizem os subscritores
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <UiCard variant="elevated" padding="lg">
          <div class="flex gap-1 mb-4">
            <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-5 h-5 text-gold-500 fill-gold-500" />
          </div>
          <p class="text-body-md text-neutral-600 dark:text-neutral-400 mb-6">
            "A melhor newsletter de SEO que já subscrevi. Conteúdo prático e sem fluff."
          </p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div>
              <div class="text-heading-sm text-neutral-900 dark:text-neutral-100">Maria S.</div>
              <div class="text-body-xs text-neutral-500">Marketing Manager</div>
            </div>
          </div>
        </UiCard>

        <UiCard variant="elevated" padding="lg">
          <div class="flex gap-1 mb-4">
            <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-5 h-5 text-gold-500 fill-gold-500" />
          </div>
          <p class="text-body-md text-neutral-600 dark:text-neutral-400 mb-6">
            "Implementei as dicas e vi resultados em semanas. Altamente recomendado!"
          </p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div>
              <div class="text-heading-sm text-neutral-900 dark:text-neutral-100">João F.</div>
              <div class="text-body-xs text-neutral-500">Founder, Startup</div>
            </div>
          </div>
        </UiCard>

        <UiCard variant="elevated" padding="lg">
          <div class="flex gap-1 mb-4">
            <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-5 h-5 text-gold-500 fill-gold-500" />
          </div>
          <p class="text-body-md text-neutral-600 dark:text-neutral-400 mb-6">
            "O guia gratuito vale mais do que muitos cursos pagos. Conteúdo de qualidade."
          </p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div>
              <div class="text-heading-sm text-neutral-900 dark:text-neutral-100">Ana C.</div>
              <div class="text-body-xs text-neutral-500">SEO Specialist</div>
            </div>
          </div>
        </UiCard>
      </div>
    </UiSection>
  </div>
</template>
