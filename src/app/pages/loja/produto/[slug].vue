<script setup lang="ts">
import { products, types, kz } from '#shared/loja'
definePageMeta({ alias: ['/produto/:slug'] })
const p = products.find(x => x.slug === String(useRoute().params.slug))
if (!p) throw createError({ statusCode: 404, statusMessage: 'Produto não encontrado.', fatal: true })
const { to } = useLoja(), cart = useCart(), v = ref(p.variants?.[0]?.id ?? ''), added = ref(false)
const price = computed(() => p.variants?.find(x => x.id === v.value)?.price ?? p.price)
function add() { cart.add(p!.slug, v.value); added.value = true; setTimeout(() => (added.value = false), 2000) }
useSeoMeta({ title: p.name, description: p.desc, robots: 'noindex' })
</script>
<template>
  <section class="page c pd"><NuxtLink :to="to('/')" class="tag">← Loja</NuxtLink>
    <div class="pg"><div class="pt big-t" :class="'t' + p.tone"><YMark :tone="p.tone === 'g' ? 'creme' : 'verde'" /></div>
      <div><span class="tag">{{ types[p.type] }}{{ p.fmt ? ' · ' + p.fmt : '' }}</span><h1 class="mid">{{ p.name }}</h1><p class="intro">{{ p.desc }}</p>
        <div v-if="p.variants" class="sh" role="group"><button v-for="x in p.variants" :key="x.id" :aria-pressed="v === x.id" :class="{ on: v === x.id }" @click="v = x.id">{{ x.label }}</button></div>
        <p class="pr">{{ kz(price) }}</p><p v-if="p.stock" class="tag">Em stock</p>
        <NuxtLink v-if="p.read" :to="to('/ler/' + p.slug)" class="cta">Ler agora, grátis →</NuxtLink>
        <template v-else><button class="cta" @click="add">{{ added ? 'Adicionado ✓' : 'Adicionar ao carrinho' }}</button> <NuxtLink :to="to('/carrinho')" class="tag">Ver carrinho</NuxtLink></template></div></div></section>
</template>
