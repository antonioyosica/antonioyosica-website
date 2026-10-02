<script setup lang="ts">
useSeoMeta({ title: '', description: 'António Yosica, estrategista e engenheiro de software, criador do Método LEE: como transformar capacidade em reconhecimento.', ogTitle: 'António Yosica — Método LEE' })
const onLoja = useLoja().onHost
const lines = ['Sabem fazer.', 'Entregam resultados.', 'Têm experiência.', 'Têm potencial.', 'Mas continuam invisíveis.']
const el = ref<HTMLElement[]>([])
onMounted(() => { const f = () => el.value.forEach(e => { const r = e.getBoundingClientRect(); e.style.opacity = String(Math.min(1, Math.max(.12, 1 - Math.abs(r.top + r.height / 2 - innerHeight / 2) / (innerHeight * .4)))) }); addEventListener('scroll', f, { passive: true }); f() })
</script>
<template>
  <LojaHome v-if="onLoja" />
  <template v-else>
  <section class="hero g">
    <YMark class="hero-y" />
    <h1 class="big"><span>Você não precisa ser mais competente.</span><b>Precisa ser impossível de ignorar.</b></h1>
    <AskBox />
    <p class="by">António Yosica · Estrategista · Engenheiro de Software · Criador do Método LEE</p>
  </section>
  <section class="c man"><h2 class="mid">Existem pessoas extraordinárias que o mundo simplesmente não vê.</h2>
    <p v-for="l in lines" :key="l" ref="el" class="fx">{{ l }}</p>
    <p class="end">Foi tentando entender porquê que comecei a construir o meu trabalho.</p></section>
  <section class="g paths"><h2 class="mid">Para onde queres ir?</h2>
    <ul><li v-for="(p, k) in $pages" :key="k"><NuxtLink :to="'/' + k"><b>{{ p.title }}</b><span>{{ p.intro }}</span></NuxtLink></li></ul></section>
  </template>
</template>
