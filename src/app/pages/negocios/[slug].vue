<script setup lang="ts">
import { businesses } from '#shared/about'
const b = businesses.find(x => x.slug === String(useRoute().params.slug))
if (!b) throw createError({ statusCode: 404, statusMessage: 'Negócio não encontrado.', fatal: true })
useSeoMeta({ title: b.name, description: b.tagline })
</script>
<template>
  <section class="page c"><NuxtLink to="/sobre" class="tag">← Sobre</NuxtLink><h1 class="big">{{ b.name }}</h1><p class="intro">{{ b.tagline }}</p><p class="tag">{{ b.role }}</p>
    <p v-if="b.text" class="prose">{{ b.text }}</p><a v-if="b.url" :href="b.url" class="cta" target="_blank" rel="noopener">Visitar {{ b.name }} →</a></section>
</template>
