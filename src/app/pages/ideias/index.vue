<script setup lang="ts">
import { posts } from '#shared/posts'
useSeoMeta({ title: 'Ideias', description: 'Carreira, visibilidade, estratégia, tecnologia, marca pessoal, LEE e liderança.' })
const fmt = (d: string) => new Date(d).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
</script>
<template>
  <section class="page c"><h1 class="big">Ideias</h1><p class="intro">Ser competente não é suficiente. Visibilidade não é fama.</p>
    <ul class="rows"><li v-for="p in posts" :key="p.slug"><NuxtLink :to="`/ideias/${p.slug}`" class="pl"><span class="tag">{{ p.cat }} · {{ fmt(p.date) }}</span><h2>{{ p.title }}</h2><p>{{ p.excerpt }}</p></NuxtLink></li></ul></section>
</template>
