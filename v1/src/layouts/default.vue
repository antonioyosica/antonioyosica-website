<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Pat Flynn style navigation
const navigation = [
  { name: 'Sobre', href: '/sobre-mim' },
  { name: 'Livros', href: '/livros' },
  { name: 'Cursos', href: '/metodo-lee' },
  { name: 'Palestras', href: '/contacto' },
  { name: 'Consultoria', href: '/contacto' },
  { name: 'Blog', href: '/blog' },
  { name: 'YouTube', href: '#' },
]

const socialLinks = [
  { name: 'LinkedIn', icon: 'lucide:linkedin', href: 'https://linkedin.com/in/antonioyosica' },
  { name: 'Twitter', icon: 'lucide:twitter', href: 'https://twitter.com/antonioyosica' },
  { name: 'Instagram', icon: 'lucide:instagram', href: 'https://instagram.com/antonioyosica' },
  { name: 'YouTube', icon: 'lucide:youtube', href: 'https://youtube.com/@antonioyosica' },
]

const ecosystem = [
  {
    name: 'LEE Meet & Greet',
    description: 'Eventos exclusivos de networking',
    icon: 'lucide:users',
    href: '#',
  },
  {
    name: 'Clube LEE',
    description: 'Comunidade premium de aprendizagem',
    icon: 'lucide:crown',
    href: '#',
  },
  {
    name: 'Podcast',
    description: 'Conversas sobre SEO e negócios',
    icon: 'lucide:mic',
    href: '#',
  },
]

const isMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-fixed transition-all duration-300"
      :class="[
        isScrolled
          ? 'bg-neutral-0/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800'
          : 'bg-transparent'
      ]"
    >
      <nav class="container-default">
        <div class="flex items-center justify-between h-20">
          <!-- Logo - Pat Flynn style: name with warm feel -->
          <NuxtLink to="/" class="group flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span class="text-lg font-bold text-neutral-950">AY</span>
            </div>
            <span class="text-heading-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-gold-500 transition-colors hidden sm:block">
              António Yosica
            </span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-8">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="nav-link"
              active-class="nav-link-active"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <!-- Theme Toggle -->
            <button
              @click="toggleColorMode"
              class="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              <Icon
                :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
                class="w-5 h-5 text-neutral-600 dark:text-neutral-400"
              />
            </button>

            <!-- Mobile Menu Button -->
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              <Icon
                :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'"
                class="w-6 h-6 text-neutral-600 dark:text-neutral-400"
              />
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMenuOpen"
          class="lg:hidden absolute top-full left-0 right-0 bg-neutral-0 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800"
        >
          <div class="container-default py-6 space-y-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="block py-3 text-body-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-gold-500 transition-colors"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
            <div class="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <NuxtLink
                to="/contacto"
                class="btn btn-primary btn-md w-full"
                @click="isMenuOpen = false"
              >
                Agendar Consulta
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <!-- Main Content -->
    <main class="flex-1 pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-100 dark:bg-neutral-925 border-t border-neutral-200 dark:border-neutral-800">
      <div class="container-default section-sm">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand -->
          <div class="lg:col-span-2">
            <NuxtLink to="/" class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                <span class="font-display text-xl font-bold text-neutral-950">AY</span>
              </div>
              <span class="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                António Yosica
              </span>
            </NuxtLink>
            <p class="text-body-md text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
              SEO Specialist, Software Engineer e criador do Método LEE. 
              Transformando negócios através de estratégias digitais comprovadas.
            </p>
            <div class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-icon hover:text-gold-500"
                :aria-label="social.name"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-heading-sm text-neutral-900 dark:text-neutral-100 mb-4">
              Links Rápidos
            </h4>
            <ul class="space-y-3">
              <li v-for="item in navigation" :key="item.name">
                <NuxtLink
                  :to="item.href"
                  class="text-body-sm text-neutral-600 dark:text-neutral-400 hover:text-gold-500 transition-colors"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h4 class="text-heading-sm text-neutral-900 dark:text-neutral-100 mb-4">
              Legal
            </h4>
            <ul class="space-y-3">
              <li>
                <NuxtLink
                  to="/politica-privacidade"
                  class="text-body-sm text-neutral-600 dark:text-neutral-400 hover:text-gold-500 transition-colors"
                >
                  Política de Privacidade
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/termos-condicoes"
                  class="text-body-sm text-neutral-600 dark:text-neutral-400 hover:text-gold-500 transition-colors"
                >
                  Termos e Condições
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/cookies"
                  class="text-body-sm text-neutral-600 dark:text-neutral-400 hover:text-gold-500 transition-colors"
                >
                  Política de Cookies
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Ecosystem Section -->
        <div class="mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <h4 class="text-heading-md text-neutral-900 dark:text-neutral-100 mb-6 text-center">
            Ecossistema António Yosica
          </h4>
          <div class="grid md:grid-cols-3 gap-6">
            <a
              v-for="item in ecosystem"
              :key="item.name"
              :href="item.href"
              class="group flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 hover:bg-gold-500/10 border border-transparent hover:border-gold-500/20 transition-all duration-300"
            >
              <div class="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <Icon :name="item.icon" class="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <div class="text-heading-sm text-neutral-900 dark:text-neutral-100 group-hover:text-gold-500 transition-colors">
                  {{ item.name }}
                </div>
                <div class="text-body-xs text-neutral-500">
                  {{ item.description }}
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-body-sm text-neutral-500">
            © {{ new Date().getFullYear() }} António Yosica. Todos os direitos reservados.
          </p>
          <p class="text-body-sm text-neutral-500">
            Feito com <span class="text-gold-500">♥</span> em Portugal
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
