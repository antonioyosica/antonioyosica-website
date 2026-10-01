<script setup lang="ts">
const open = useState('ask', () => false), route = useRoute(), menu = ref(false)
watch(() => route.fullPath, () => { open.value = false; menu.value = false })
onMounted(() => addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open.value = !open.value } else if (e.key === 'Escape') open.value = false }))
const links = [['/lee', 'LEE'], ['/ideias', 'Ideias'], ['/experiencias', 'Experiências'], ['/sobre', 'Sobre']]
</script>
<template>
  <a class="skip" href="#main">Saltar para o conteúdo</a>
  <header class="nav" :class="{ m: menu }">
    <NuxtLink to="/" aria-label="António Yosica, início"><YMark class="nav-y" /></NuxtLink>
    <nav aria-label="Principal"><NuxtLink v-for="[to, t] in links" :key="to" :to="to">{{ t }}</NuxtLink><NuxtLink class="nw" to="/trabalhe-comigo">Trabalhe comigo →</NuxtLink></nav>
    <button class="menu" :aria-expanded="menu" @click="menu = !menu">{{ menu ? 'Fechar' : 'Menu' }}</button>
  </header>
  <main id="main"><NuxtPage /></main>
  <footer class="foot"><img src="/brand/nome-creme.png" alt="António Yosica" width="700" height="77"><span>Lembrado. Encontrado. Escolhido.</span></footer>
  <button class="sig" aria-label="Perguntar ao site (Ctrl/⌘ + K)" @click="open = !open"><YMark tone="verde" /></button>
  <Teleport to="body"><div v-if="open" class="ov" role="dialog" aria-modal="true" aria-label="Pergunta ao site" @click.self="open = false"><AskBox big @go="open = false" /></div></Teleport>
</template>
