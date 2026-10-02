<script setup lang="ts">
import { timeline, career, education, businesses, SHOW_GAPS } from '#shared/about'
useSeoMeta({ title: 'Sobre', description: 'A história de António Yosica, de 1997 a 2026.' })
const rows = computed(() => {
  const ys = [...timeline].sort((a, b) => +a.year - +b.year), out: any[] = []
  ys.forEach((t, i) => { const p = ys[i - 1]; if (SHOW_GAPS && p && +t.year - +p.year > 1) { const a = +p.year + 1, b = +t.year - 1; out.push({ gap: a === b ? String(a) : `${a}–${b}` }) } out.push(t) })
  return out
})
</script>
<template>
  <section class="page c"><h1 class="mid" style="max-width:18ch">Eu passei anos tentando entender por que algumas pessoas são escolhidas e outras não.</h1>
    <ol class="tl"><li v-for="r in rows" :key="r.year || r.gap" :class="{ gp: r.gap }"><span class="yr">{{ r.year || r.gap }}</span>
      <div v-if="r.gap"><p>…</p></div><div v-else><h2>{{ r.title }}</h2><p v-if="r.text">{{ r.text }}</p><NuxtLink v-if="r.to" :to="r.to" class="tag">Ver mais →</NuxtLink></div></li></ol></section>
  <section class="g"><h2 class="big">Percurso</h2>
    <ul class="rows" style="margin-top:3rem"><li v-for="c in career" :key="c.org"><h2>{{ c.org }} <span class="tag">{{ c.period }}</span> <em v-if="c.now" class="tag">actual</em></h2><p v-if="c.role">{{ c.role }}</p><p v-if="c.note">{{ c.note }}</p><NuxtLink v-if="c.slug" :to="`/negocios/${c.slug}`" class="tag">Ver o negócio →</NuxtLink></li></ul></section>
  <section class="c"><h2 class="big">Formação</h2>
    <ul class="rows" style="margin-top:3rem"><li v-for="e in education" :key="e.course"><h2>{{ e.course }}</h2><p>{{ e.school }}</p><p class="tag">{{ e.note }}</p></li></ul></section>
  <section class="g"><h2 class="big">Negócios</h2>
    <ul class="rows" style="margin-top:3rem"><li v-for="b in businesses" :key="b.slug"><NuxtLink :to="`/negocios/${b.slug}`" class="pl"><h2>{{ b.name }}</h2><p>{{ b.role }} · {{ b.tagline }}</p></NuxtLink></li></ul></section>
</template>
