<script setup lang="ts">
import { kz } from '#shared/loja'
definePageMeta({ alias: ['/carrinho'] })
useSeoMeta({ title: 'Carrinho', robots: 'noindex' })
const cart = useCart(), { to } = useLoja(), { items, total } = cart
</script>
<template>
  <section class="page c"><h1 class="big">Carrinho</h1>
    <p v-if="!items.length" class="intro">O carrinho está vazio. <NuxtLink :to="to('/')" class="tag">Ver a loja →</NuxtLink></p>
    <template v-else><ul class="rows"><li v-for="i in items" :key="i.id + i.v" class="cr"><div><h2>{{ i.p.name }}</h2><p v-if="i.vl">{{ i.vl }}</p><p>{{ kz(i.unit) }}</p></div>
      <div class="sh"><button aria-label="Menos" @click="cart.setQty(i.id, i.v, i.q - 1)">−</button><span class="qt">{{ i.q }}</span><button aria-label="Mais" @click="cart.setQty(i.id, i.v, i.q + 1)">+</button><button @click="cart.remove(i.id, i.v)">Remover</button></div><b>{{ kz(i.unit * i.q) }}</b></li></ul>
      <p class="pr">Total: {{ kz(total) }}</p><NuxtLink :to="to('/checkout')" class="cta">Finalizar →</NuxtLink></template></section>
</template>
