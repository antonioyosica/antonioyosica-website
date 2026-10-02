<script setup lang="ts">
const open = useState('ask', () => false), route = useRoute(), menu = ref(false), cart = useCart(), { count } = cart, { isLoja, to } = useLoja()
const cfg = useRuntimeConfig().public, site = cfg.mainHost ? `https://${cfg.mainHost}` : '/'
watch(() => route.fullPath, () => { open.value = false; menu.value = false; nextTick(tone) })
function tone() { const h = [...document.querySelectorAll('main section')].find(x => { const r = x.getBoundingClientRect(); return r.top <= 40 && r.bottom > 40 }); document.body.dataset.tone = h?.classList.contains('c') ? 'c' : 'g' }
onMounted(() => {
  try { cart.lines.value = JSON.parse(localStorage.getItem('cart') || '[]') } catch {}
  watch(cart.lines, l => localStorage.setItem('cart', JSON.stringify(l)), { deep: true })
  addEventListener('scroll', tone, { passive: true }); tone()
  addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open.value = !open.value } else if (e.key === 'Escape') open.value = false })
})
// Item de menu activo (laranja) também nas subpáginas: cada item agrupa as suas rotas.
const on = (re: RegExp) => re.test(route.path)
const links: [string, string, RegExp][] = [['/lee', 'LEE', /^\/lee/], ['/ideias', 'Ideias', /^\/ideias/], ['/experiencias', 'Experiências', /^\/experiencias/], ['/galeria', 'Galeria', /^\/galeria/], ['/sobre', 'Sobre', /^\/(sobre|negocios)/]]
const onCat = computed(() => route.path === '/' || /^\/(loja\/?$|loja\/(produto|ler)\/|produto\/|ler\/)/.test(route.path))
const onCart = computed(() => /^\/(loja\/)?(carrinho|checkout)/.test(route.path))
</script>
<template>
  <a class="skip" href="#main">Saltar para o conteúdo</a>
  <header class="nav" :class="{ m: menu }">
    <NuxtLink :to="isLoja ? to('/') : '/'" aria-label="António Yosica, início"><img class="nav-logo" src="/brand/logo-nav.png" alt="António Yosica" width="520" height="231"></NuxtLink>
    <nav v-if="isLoja" aria-label="Loja"><NuxtLink :to="to('/')" :class="{ on: onCat }">Catálogo</NuxtLink><NuxtLink :to="to('/carrinho')" :class="{ on: onCart }">Carrinho ({{ count }})</NuxtLink><a class="nw" :href="site">← antonioyosica.com</a></nav>
    <nav v-else aria-label="Principal"><NuxtLink v-for="[p, t, re] in links" :key="p" :to="p" :class="{ on: on(re) }">{{ t }}</NuxtLink><NuxtLink to="/loja">Loja</NuxtLink><NuxtLink class="nw" to="/trabalhe-comigo" :class="{ on: on(/^\/(trabalhe-comigo|agendar|convidar|contacto)/) }">Trabalhe comigo →</NuxtLink></nav>
    <button class="menu" :aria-expanded="menu" @click="menu = !menu">{{ menu ? 'Fechar' : 'Menu' }}</button>
  </header>
  <div v-if="isLoja" class="demo" role="note">Modo demonstração: dados fictícios, sem pagamentos reais</div>
  <main id="main"><NuxtPage /></main>
  <footer class="foot"><img src="/brand/nome-creme.png" alt="António Yosica" width="700" height="77"><span>Lembrado. Encontrado. Escolhido.</span></footer>
  <button class="sig" aria-label="Perguntar ao site (Ctrl/⌘ + K)" @click="open = !open"><YMark tone="verde" /></button>
  <Teleport to="body"><div v-if="open" class="ov" role="dialog" aria-modal="true" aria-label="Pergunta ao site" @click.self="open = false"><AskBox big @go="open = false" /></div></Teleport>
</template>
