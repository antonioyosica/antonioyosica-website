<script setup lang="ts">
useSeoMeta({
  title: 'Sobre Mim | António Yosica',
  description: 'Conheça a história de António Yosica, SEO Specialist e Software Engineer com mais de 15 anos de experiência.',
})

// Timeline data moved to JourneyTimeline component

const values = [
  {
    icon: 'lucide:target',
    title: 'Missão',
    description: 'Democratizar o acesso a estratégias de SEO de alta qualidade, capacitando empresas de todas as dimensões a competir no mercado digital.',
  },
  {
    icon: 'lucide:eye',
    title: 'Visão',
    description: 'Ser a referência em SEO e marketing digital em Portugal e nos mercados lusófonos, reconhecido pela excelência e resultados.',
  },
  {
    icon: 'lucide:heart',
    title: 'Valores',
    description: 'Transparência, resultados mensuráveis, inovação constante e compromisso genuíno com o sucesso dos clientes.',
  },
]
</script>

<template>
  <div>
    <!-- ═══════════════════════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <section class="relative py-32 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-925 dark:to-neutral-950">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />
      </div>

      <div class="container-default relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <span class="label text-gold-500 mb-4 block">Sobre Mim</span>
            <h1 class="font-display text-display-xl text-neutral-900 dark:text-neutral-100 mb-6">
              António Yosica
            </h1>
            <p class="text-body-xl text-neutral-600 dark:text-neutral-400 mb-8">
              SEO Specialist, Software Engineer e criador do Método LEE. 
              Com mais de 15 anos de experiência, dedico a minha carreira a 
              transformar a presença digital de empresas e profissionais.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/contacto" class="btn btn-primary btn-md">
                <Icon name="lucide:mail" class="w-5 h-5" />
                Entrar em Contacto
              </NuxtLink>
              <a href="https://linkedin.com/in/antonioyosica" target="_blank" class="btn btn-secondary btn-md">
                <Icon name="lucide:linkedin" class="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <!-- Portrait -->
          <div class="relative">
            <div class="aspect-[3/4] rounded-2xl bg-neutral-200 dark:bg-neutral-800 overflow-hidden shadow-elegant-xl">
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon name="lucide:user" class="w-32 h-32 text-neutral-400" />
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl" />
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════════
         STORYTELLING SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection background="alt">
      <div class="max-w-3xl mx-auto">
        <h2 class="font-display text-display-md text-neutral-900 dark:text-neutral-100 mb-8 text-center">
          A Minha História
        </h2>
        
        <div class="prose mx-auto">
          <p>
            Tudo começou em 2008, quando ainda era um jovem desenvolvedor web fascinado 
            pela forma como os motores de busca funcionavam. Enquanto os meus colegas se 
            focavam apenas no código, eu questionava-me: "Como é que o Google decide 
            quem aparece primeiro?"
          </p>
          
          <p>
            Esta curiosidade transformou-se numa obsessão saudável. Passei noites a estudar 
            algoritmos, a testar teorias e a analisar resultados. Cada projeto era uma 
            oportunidade de aprender algo novo, cada falha uma lição valiosa.
          </p>
          
          <blockquote>
            "O SEO não é apenas sobre rankings — é sobre conectar pessoas com as soluções 
            que procuram, no momento exato em que precisam."
          </blockquote>
          
          <p>
            Ao longo dos anos, trabalhei com centenas de empresas, desde startups a 
            multinacionais. Vi padrões emergirem, estratégias funcionarem e outras 
            falharem. Foi desta experiência que nasceu o Método LEE — uma síntese de 
            tudo o que aprendi sobre o que realmente funciona no mundo digital.
          </p>
          
          <p>
            Hoje, a minha missão é clara: partilhar este conhecimento e ajudar outros 
            a alcançar o sucesso que merecem. Porque acredito que todos têm direito a 
            uma presença digital forte, independentemente do tamanho do seu negócio.
          </p>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         MISSION/VISION/VALUES
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="value in values" :key="value.title">
          <UiCard variant="gold" padding="lg" class="h-full text-center">
            <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold-500/10 flex items-center justify-center">
              <Icon :name="value.icon" class="w-8 h-8 text-gold-500" />
            </div>
            <h3 class="text-heading-xl text-neutral-900 dark:text-neutral-100 mb-4">
              {{ value.title }}
            </h3>
            <p class="text-body-md text-neutral-600 dark:text-neutral-400">
              {{ value.description }}
            </p>
          </UiCard>
        </div>
      </div>
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         MINHA JORNADA - SURREAL TIMELINE
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection background="alt">
      <div class="text-center max-w-3xl mx-auto mb-8">
        <span class="label text-gold-500 mb-4 block">1997 — Presente</span>
        <h2 class="font-display text-display-lg text-neutral-900 dark:text-neutral-100 mb-6">
          Minha Jornada
        </h2>
        <p class="text-body-xl text-neutral-600 dark:text-neutral-400">
          Uma viagem através do tempo. Cada ponto representa um momento que moldou quem sou hoje.
        </p>
      </div>

      <JourneyTimeline />
    </UiSection>

    <!-- ═══════════════════════════════════════════════════════════════════════
         CTA SECTION
         ═══════════════════════════════════════════════════════════════════════ -->
    <UiSection>
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="font-display text-display-lg text-neutral-900 dark:text-neutral-100 mb-6">
          Vamos trabalhar juntos?
        </h2>
        <p class="text-body-xl text-neutral-600 dark:text-neutral-400 mb-10">
          Estou sempre disponível para novos desafios e parcerias. 
          Entre em contacto e vamos conversar sobre o seu projeto.
        </p>
        <NuxtLink to="/contacto" class="btn btn-primary btn-lg">
          <Icon name="lucide:mail" class="w-5 h-5" />
          Entrar em Contacto
        </NuxtLink>
      </div>
    </UiSection>
  </div>
</template>
