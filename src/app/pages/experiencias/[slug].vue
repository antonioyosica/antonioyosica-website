<script setup lang="ts">
import { experiences } from '#shared/experiences'
const x = experiences[String(useRoute().params.slug)]
if (!x) throw createError({ statusCode: 404, statusMessage: 'Experiência não encontrada.', fatal: true })
useSeoMeta({ title: x.name, description: x.tag, ogTitle: x.name })
</script>
<template>
  <section class="page g"><NuxtLink to="/experiencias" class="tag">← Experiências</NuxtLink><h1 class="big">{{ x.name }}</h1><p class="intro">{{ x.tag }}</p>
    <ul v-if="x.keys.length" class="kw"><li v-for="k in x.keys" :key="k">{{ k }}</li></ul>
    <ul v-if="x.blocks.length" class="rows"><li v-for="b in x.blocks" :key="b.h"><h2>{{ b.h }}</h2><p>{{ b.p }}</p></li></ul>
    <p v-if="x.soon" class="tag">Em construção.</p>
    <NuxtLink v-if="x.cta" :to="x.cta[1]" class="cta">{{ x.cta[0] }} →</NuxtLink></section>
</template>
