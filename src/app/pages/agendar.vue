<script setup lang="ts">
useSeoMeta({ title: 'Agendar uma sessão', description: 'Marca uma sessão com António Yosica.' })
const url = useRuntimeConfig().public.bookingUrl
</script>
<template>
  <section class="page g"><h1 class="big">Agendar uma sessão</h1><p class="intro">Diz-me o que queres resolver. Eu respondo com um horário.</p>
    <iframe v-if="url" :src="url" title="Calendário de marcações" class="bk" loading="lazy" /><LeadForm v-else type="sessao" /></section>
</template>
