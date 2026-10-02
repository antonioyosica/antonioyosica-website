<script setup lang="ts">
import { kz } from '#shared/loja'
definePageMeta({ alias: ['/checkout'] })
useSeoMeta({ title: 'Finalizar', robots: 'noindex' })
const cart = useCart(), { to } = useLoja(), { items, total } = cart
const f = reactive({ nome: '', email: '', telefone: '', local: '', website: '' }), busy = ref(false), err = ref(''), order = ref<any>(null)
const physical = computed(() => items.value.some(i => i.p.fmt === 'fisico'))
async function send() {
  busy.value = true; err.value = ''
  try { order.value = await $fetch('/api/loja/pedido', { method: 'POST', body: { items: cart.lines.value, cliente: f } }); cart.clear() }
  catch (e: any) { err.value = e?.data?.statusMessage || 'Não foi possível criar o pedido.' }
  busy.value = false
}
</script>
<template>
  <section class="page c"><h1 class="big">Finalizar</h1>
    <div v-if="order"><p class="ok">Pedido de demonstração {{ order.id }} registado.</p><p class="intro">Total {{ kz(order.total) }}. Nenhum pagamento foi feito. <NuxtLink :to="to('/')" class="tag">Voltar à loja →</NuxtLink></p></div>
    <p v-else-if="!items.length" class="intro">Não há nada no carrinho. <NuxtLink :to="to('/')" class="tag">Ver a loja →</NuxtLink></p>
    <div v-else class="co"><form class="frm" @submit.prevent="send">
      <label><span>Nome *</span><input v-model="f.nome" required minlength="2" maxlength="100"></label>
      <label><span>E-mail *</span><input v-model="f.email" type="email" required maxlength="150"></label>
      <label><span>Telefone / WhatsApp</span><input v-model="f.telefone" maxlength="40"></label>
      <label v-if="physical"><span>Província e morada de entrega</span><input v-model="f.local" maxlength="200"></label>
      <fieldset class="w"><legend>Pagamento</legend><label class="rd2"><input type="radio" disabled> Multicaixa Express</label><label class="rd2"><input type="radio" disabled> Referência Multicaixa</label><p class="tag">Disponíveis quando a loja sair do modo demonstração.</p></fieldset>
      <input v-model="f.website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true"><p v-if="err" class="er" role="alert">{{ err }}</p><button class="cta" :disabled="busy">{{ busy ? 'A criar…' : 'Criar pedido de demonstração →' }}</button></form>
      <aside><h2>Resumo</h2><ul class="cl"><li v-for="i in items" :key="i.id + i.v">{{ i.q }} × {{ i.p.name }}{{ i.vl ? ' (' + i.vl + ')' : '' }} <b>{{ kz(i.unit * i.q) }}</b></li></ul><p class="pr">Total: {{ kz(total) }}</p></aside></div></section>
</template>
