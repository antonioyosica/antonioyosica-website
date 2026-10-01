<script setup lang="ts">
import { pages } from '#shared/site'
const slug = String(useRoute().params.slug)
const page = pages[slug]
if (!page) throw createError({ statusCode: 404, statusMessage: 'Esta página não existe.', fatal: true })
useSeoMeta({ title: page.title, description: page.intro, ogTitle: page.title, ogDescription: page.intro })
const email = useRuntimeConfig().public.contactEmail
</script>
<template>
  <section class="page" :class="page.tone === 'g' ? 'g' : 'c'">
    <h1 class="big">{{ page.title }}</h1>
    <p class="intro">{{ page.intro }}</p>
    <ul v-if="page.blocks.length" class="rows"><li v-for="b in page.blocks" :key="b.h"><h2>{{ b.h }}</h2><p>{{ b.p }}</p><em v-if="b.tag" class="tag">{{ b.tag }}</em></li></ul>
    <a v-if="slug === 'contacto'" class="cta" :href="email ? `mailto:${email}` : '#'">Entrar em contacto →</a>
    <NuxtLink v-else-if="slug === 'trabalhe-comigo'" class="cta" to="/contacto">Começar a conversa →</NuxtLink>
    <button v-else class="cta" @click="useState('ask').value = true">Perguntar ao site →</button>
  </section>
</template>
