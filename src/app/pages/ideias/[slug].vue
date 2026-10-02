<script setup lang="ts">
import { posts } from '#shared/posts'
const slug = String(useRoute().params.slug), post = posts.find(p => p.slug === slug)
if (!post) throw createError({ statusCode: 404, statusMessage: 'Artigo não encontrado.', fatal: true })
const mins = Math.max(1, Math.round(post.body.join(' ').split(/\s+/).length / 200)), pct = ref(0)
const f = () => { const h = document.documentElement; pct.value = Math.min(100, Math.max(0, (scrollY / (h.scrollHeight - innerHeight)) * 100)) }
onMounted(() => { addEventListener('scroll', f, { passive: true }); f() }); onBeforeUnmount(() => removeEventListener('scroll', f))
useSeoMeta({ title: post.title, description: post.excerpt, ogTitle: post.title, ogDescription: post.excerpt, ogType: 'article' })
useHead({ script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, datePublished: post.date, author: { '@type': 'Person', name: 'António Yosica' } }) }] })
</script>
<template>
  <div class="prog" :style="{ width: pct + '%' }" aria-hidden="true" />
  <article class="page c post"><NuxtLink to="/ideias" class="tag">← Ideias</NuxtLink>
    <h1 class="mid">{{ post.title }}</h1><p class="tag">{{ post.cat }} · {{ mins }} min de leitura</p>
    <template v-for="(b, i) in post.body" :key="i"><h2 v-if="b.startsWith('## ')">{{ b.slice(3) }}</h2><p v-else>{{ b }}</p></template>
    <PostEngage :slug="post.slug" :title="post.title" /></article>
</template>
