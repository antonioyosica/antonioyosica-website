<script setup lang="ts">
import { books } from '#shared/loja'
definePageMeta({ alias: ['/ler/:slug'] })
const slug = String(useRoute().params.slug), book = books[slug]
if (!book) throw createError({ statusCode: 404, statusMessage: 'Livro não encontrado.', fatal: true })
const { to } = useLoja(), ch = ref(0), fs = ref(1.25), n = book.chapters.length
const go = (d: number) => { ch.value = Math.max(0, Math.min(n - 1, ch.value + d)) }
const key = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
onMounted(() => { try { const s = JSON.parse(localStorage.getItem('ler:' + slug) || '{}'); ch.value = Math.min(s.ch ?? 0, n - 1); fs.value = s.fs ?? 1.25 } catch {} addEventListener('keydown', key) })
watch([ch, fs], () => { localStorage.setItem('ler:' + slug, JSON.stringify({ ch: ch.value, fs: fs.value })); scrollTo({ top: 0 }) })
onBeforeUnmount(() => removeEventListener('keydown', key))
useSeoMeta({ title: book.title, robots: 'noindex' })
</script>
<template>
  <div class="prog" :style="{ width: ((ch + 1) / n) * 100 + '%' }" aria-hidden="true" />
  <section class="page c rd"><NuxtLink :to="to('/produto/' + slug)" class="tag">← {{ book.title }}</NuxtLink>
    <div class="sh"><button aria-label="Diminuir letra" @click="fs = Math.max(1, fs - .1)">A−</button><button aria-label="Aumentar letra" @click="fs = Math.min(1.9, fs + .1)">A+</button>
      <select v-model.number="ch" aria-label="Capítulo"><option v-for="(c, i) in book.chapters" :key="i" :value="i">{{ c.t }}</option></select></div>
    <article :style="{ fontSize: fs + 'rem' }"><p class="tag">Capítulo {{ ch + 1 }} de {{ n }}</p><h1 class="mid">{{ book.chapters[ch].t }}</h1>
      <template v-for="(t, i) in book.chapters[ch].p" :key="i"><h3 v-if="/^[IVX]+$/.test(t)">{{ t }}</h3><p v-else>{{ t }}</p></template></article>
    <div class="sh"><button :disabled="ch === 0" @click="go(-1)">← Anterior</button><button :disabled="ch === n - 1" @click="go(1)">Seguinte →</button></div></section>
</template>
