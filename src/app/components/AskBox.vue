<script setup lang="ts">
import { stages } from '#shared/site'
const props = defineProps<{ big?: boolean }>()
const emit = defineEmits<{ go: [] }>()
const q = ref(''), busy = ref(false), shown = ref(''), res = ref<any>(null), listening = ref(false)
const chips = ['Sinto que ninguém repara no meu trabalho', 'Quero que a minha empresa seja encontrada', 'Quero o António no meu evento', 'O que é o Método LEE?']
let timer: any
async function ask(text = q.value) {
  text = text.trim(); if (!text || busy.value) return
  q.value = text; busy.value = true; res.value = null; shown.value = ''
  try {
    res.value = await $fetch('/api/ask', { method: 'POST', body: { q: text } })
    const full = res.value.answer; let i = 0; clearInterval(timer)
    timer = setInterval(() => { shown.value = full.slice(0, ++i); if (i >= full.length) clearInterval(timer) }, 18)
  } catch { res.value = { stage: null, answer: 'Não consegui responder agora. Vai directo ao método.', links: [{ to: '/lee', label: 'O Método LEE' }] }; shown.value = res.value.answer }
  busy.value = false
}
function listen() {
  const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition; if (!SR) return
  const r = new SR(); r.lang = 'pt-PT'; listening.value = true
  r.onresult = (e: any) => { q.value = e.results[0][0].transcript; ask() }; r.onend = () => (listening.value = false); r.start()
}
onBeforeUnmount(() => clearInterval(timer))
</script>
<template>
  <div class="ask" :class="{ big: props.big }">
    <form @submit.prevent="ask()" role="search">
      <label for="q" class="ask-l">O que te trouxe aqui?</label>
      <div class="ask-f"><input id="q" v-model="q" autocomplete="off" placeholder="Escreve ou fala o que precisas…" maxlength="400">
        <button type="button" class="mic" :class="{ on: listening }" @click="listen" aria-label="Falar">●</button>
        <button class="go" :disabled="busy">{{ busy ? '…' : 'Perguntar' }}</button></div>
    </form>
    <div v-if="!res && !busy" class="chips"><button v-for="c in chips" :key="c" @click="ask(c)">{{ c }}</button></div>
    <div v-if="res || busy" class="res" aria-live="polite">
      <ol class="stg"><li v-for="s in stages" :key="s" :class="{ on: res?.stage === s, dim: res && res.stage && res.stage !== s }">{{ s }}</li></ol>
      <p class="ans">{{ busy ? 'A pensar…' : shown }}</p>
      <nav v-if="res" class="lk"><NuxtLink v-for="l in res.links" :key="l.to" :to="l.to" class="cta" @click="emit('go')">{{ l.label }} →</NuxtLink></nav>
    </div>
  </div>
</template>
