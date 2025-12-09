<script setup lang="ts">
useSeoMeta({
  title: 'Contacto | António Yosica',
  description: 'Entre em contacto com António Yosica. Agende uma consulta gratuita sobre SEO e marketing digital.',
})

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
})

const subjects = [
  'Consultoria SEO',
  'Auditoria de Website',
  'Formação / Workshop',
  'Parceria',
  'Outro',
]

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
}

const contactInfo = [
  {
    icon: 'lucide:mail',
    label: 'Email',
    value: 'contacto@antonioyosica.com',
    href: 'mailto:contacto@antonioyosica.com',
  },
  {
    icon: 'lucide:phone',
    label: 'Telefone',
    value: '+351 912 345 678',
    href: 'tel:+351912345678',
  },
  {
    icon: 'lucide:map-pin',
    label: 'Localização',
    value: 'Lisboa, Portugal',
    href: null,
  },
]

const socialLinks = [
  { name: 'LinkedIn', icon: 'lucide:linkedin', href: 'https://linkedin.com/in/antonioyosica' },
  { name: 'Twitter', icon: 'lucide:twitter', href: 'https://twitter.com/antonioyosica' },
  { name: 'Instagram', icon: 'lucide:instagram', href: 'https://instagram.com/antonioyosica' },
  { name: 'YouTube', icon: 'lucide:youtube', href: 'https://youtube.com/@antonioyosica' },
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
          <span class="label text-gold-500 mb-4 block">Contacto</span>
          <h1 class="font-display text-display-xl text-neutral-900 dark:text-neutral-100 mb-6">
            Vamos conversar
          </h1>
          <p class="text-body-xl text-neutral-600 dark:text-neutral-400">
            Tem um projeto em mente? Quer saber mais sobre o Método LEE? 
            Entre em contacto e vamos explorar como posso ajudar.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         CONTACT FORM & INFO
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <div class="grid lg:grid-cols-3 gap-16">
        <!-- Contact Info -->
        <div class="lg:col-span-1">
          <h2 class="font-display text-display-sm text-neutral-900 dark:text-neutral-100 mb-8">
            Informações de Contacto
          </h2>

          <div class="space-y-6 mb-12">
            <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <Icon :name="info.icon" class="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <div class="text-body-sm text-neutral-500 mb-1">{{ info.label }}</div>
                <a
                  v-if="info.href"
                  :href="info.href"
                  class="text-heading-md text-neutral-900 dark:text-neutral-100 hover:text-gold-500 transition-colors"
                >
                  {{ info.value }}
                </a>
                <span v-else class="text-heading-md text-neutral-900 dark:text-neutral-100">
                  {{ info.value }}
                </span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h3 class="text-heading-md text-neutral-900 dark:text-neutral-100 mb-4">
              Redes Sociais
            </h3>
            <div class="flex gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-gold-500 hover:text-neutral-950 transition-all"
                :aria-label="social.name"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Calendar Booking -->
          <div class="mt-12 p-6 rounded-2xl bg-gold-500/10 border border-gold-500/20">
            <Icon name="lucide:calendar" class="w-8 h-8 text-gold-500 mb-4" />
            <h3 class="text-heading-lg text-neutral-900 dark:text-neutral-100 mb-2">
              Agendar Reunião
            </h3>
            <p class="text-body-md text-neutral-600 dark:text-neutral-400 mb-4">
              Prefere agendar diretamente? Use o meu calendário online.
            </p>
            <a href="https://calendly.com/antonioyosica" target="_blank" class="btn btn-primary btn-md w-full">
              <Icon name="lucide:external-link" class="w-4 h-4" />
              Abrir Calendário
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <UiCard variant="neu" padding="lg">
            <h2 class="font-display text-display-sm text-neutral-900 dark:text-neutral-100 mb-8">
              Enviar Mensagem
            </h2>

            <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <UiInput
                  v-model="form.name"
                  label="Nome"
                  placeholder="O seu nome"
                  required
                />
                <UiInput
                  v-model="form.email"
                  type="email"
                  label="Email"
                  placeholder="email@exemplo.com"
                  required
                />
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <UiInput
                  v-model="form.company"
                  label="Empresa"
                  placeholder="Nome da empresa (opcional)"
                />
                <UiInput
                  v-model="form.phone"
                  type="tel"
                  label="Telefone"
                  placeholder="+351 912 345 678 (opcional)"
                />
              </div>

              <div>
                <label class="block text-body-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Assunto <span class="text-gold-500">*</span>
                </label>
                <select v-model="form.subject" class="select" required>
                  <option value="" disabled>Selecione um assunto</option>
                  <option v-for="subject in subjects" :key="subject" :value="subject">
                    {{ subject }}
                  </option>
                </select>
              </div>

              <UiTextarea
                v-model="form.message"
                label="Mensagem"
                placeholder="Descreva o seu projeto ou questão..."
                :rows="6"
                required
              />

              <div class="flex items-start gap-3">
                <input
                  v-model="form.consent"
                  type="checkbox"
                  id="consent"
                  class="checkbox mt-1"
                  required
                />
                <label for="consent" class="text-body-sm text-neutral-600 dark:text-neutral-400">
                  Concordo com a <NuxtLink to="/politica-privacidade" class="link">Política de Privacidade</NuxtLink> 
                  e autorizo o tratamento dos meus dados para resposta a este contacto.
                </label>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-lg w-full"
                :disabled="isSubmitting"
              >
                <Icon v-if="isSubmitting" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
                <Icon v-else name="lucide:send" class="w-5 h-5" />
                {{ isSubmitting ? 'A enviar...' : 'Enviar Mensagem' }}
              </button>
            </form>

            <!-- Success Message -->
            <div v-else class="text-center py-12">
              <div class="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="lucide:check-circle" class="w-10 h-10 text-green-500" />
              </div>
              <h3 class="font-display text-display-sm text-neutral-900 dark:text-neutral-100 mb-4">
                Mensagem Enviada!
              </h3>
              <p class="text-body-lg text-neutral-600 dark:text-neutral-400 mb-8">
                Obrigado pelo seu contacto. Responderei o mais brevemente possível.
              </p>
              <button @click="isSubmitted = false" class="btn btn-secondary btn-md">
                Enviar nova mensagem
              </button>
            </div>
          </UiCard>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         FAQ SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection background="alt">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-6">
          Perguntas Frequentes
        </h2>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <UiCard variant="elevated" padding="md">
          <h3 class="text-heading-md text-neutral-900 dark:text-neutral-100 mb-2">
            Quanto tempo demora a ver resultados em SEO?
          </h3>
          <p class="text-body-md text-neutral-600 dark:text-neutral-400">
            Os resultados variam, mas tipicamente começam a ser visíveis entre 3 a 6 meses. 
            O SEO é um investimento a longo prazo que gera resultados sustentáveis.
          </p>
        </UiCard>

        <UiCard variant="elevated" padding="md">
          <h3 class="text-heading-md text-neutral-900 dark:text-neutral-100 mb-2">
            Trabalha com empresas de qualquer dimensão?
          </h3>
          <p class="text-body-md text-neutral-600 dark:text-neutral-400">
            Sim, trabalho com empresas de todas as dimensões, desde startups a grandes empresas. 
            O Método LEE é adaptável a diferentes contextos e orçamentos.
          </p>
        </UiCard>

        <UiCard variant="elevated" padding="md">
          <h3 class="text-heading-md text-neutral-900 dark:text-neutral-100 mb-2">
            A consulta inicial é mesmo gratuita?
          </h3>
          <p class="text-body-md text-neutral-600 dark:text-neutral-400">
            Sim, a primeira consulta de 30 minutos é completamente gratuita e sem compromisso. 
            É uma oportunidade para conhecer o seu projeto e avaliar como posso ajudar.
          </p>
        </UiCard>
      </div>
    </UiSection>
  </div>
</template>
