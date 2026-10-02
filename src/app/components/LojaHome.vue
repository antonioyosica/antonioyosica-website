<script setup lang="ts">
import { products, types, kz } from '#shared/loja'
useSeoMeta({ title: 'Loja', description: 'Livros, cursos, ingressos e brindes (demonstração).', robots: 'noindex' })
const { to } = useLoja(), f = ref('todos')
const tabs: [string, string][] = [['todos', 'Tudo'], ['gratis', 'Grátis'], ...Object.entries(types)]
const list = computed(() => products.filter(p => f.value === 'todos' || (f.value === 'gratis' ? p.price === 0 : p.type === f.value)))
</script>
<template>
  <section class="page g"><h1 class="big">Loja</h1><p class="intro">Livros, cursos, ingressos e brindes. Os livros grátis lês aqui, sem sair do site.</p>
    <div class="sh" role="group" aria-label="Filtrar"><button v-for="[k, l] in tabs" :key="k" :aria-pressed="f === k" :class="{ on: f === k }" @click="f = k">{{ l }}</button></div>
    <ul class="lj"><li v-for="p in list" :key="p.slug"><NuxtLink :to="to('/produto/' + p.slug)" class="pt" :class="'t' + p.tone">
      <YMark :tone="p.tone === 'g' ? 'creme' : 'verde'" /><span class="tag">{{ types[p.type] }}{{ p.read ? ' · ler no site' : '' }}</span><h2>{{ p.name }}</h2><b>{{ kz(p.price) }}</b></NuxtLink></li></ul></section>
</template>
