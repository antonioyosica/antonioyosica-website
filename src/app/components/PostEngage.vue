<script setup lang="ts">
const props = defineProps<{ slug: string; title: string }>()
const RACI = ['Raiva', 'Admiração', 'Curiosidade', 'Inspiração']
const { data } = await useFetch<{ comments: any[]; reactions: Record<string, number> }>(`/api/blog/${props.slug}`)
const comments = ref(data.value?.comments ?? []), re = ref<Record<string, number>>({ ...(data.value?.reactions ?? {}) })
const mine = ref<string[]>([]), url = ref(''), name = ref(''), text = ref(''), hp = ref(''), err = ref(''), busy = ref(false), copied = ref(false)
onMounted(() => { mine.value = JSON.parse(localStorage.getItem('re:' + props.slug) || '[]'); url.value = location.href })
async function react(r: string) {
  const on = mine.value.includes(r), d = on ? -1 : 1
  re.value[r] = Math.max(0, (re.value[r] || 0) + d); mine.value = on ? mine.value.filter(x => x !== r) : [...mine.value, r]
  localStorage.setItem('re:' + props.slug, JSON.stringify(mine.value))
  try { re.value = await $fetch(`/api/blog/${props.slug}/react`, { method: 'POST', body: { r, d } }) } catch {}
}
async function send() {
  busy.value = true; err.value = ''
  try { comments.value.unshift(await $fetch(`/api/blog/${props.slug}/comment`, { method: 'POST', body: { name: name.value, text: text.value, website: hp.value } })); text.value = '' }
  catch (e: any) { err.value = e?.data?.statusMessage || 'Não foi possível comentar.' }
  busy.value = false
}
const nets = computed(() => { const u = encodeURIComponent(url.value), t = encodeURIComponent(props.title); return [
  ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${u}`], ['X', `https://twitter.com/intent/tweet?url=${u}&text=${t}`], ['WhatsApp', `https://wa.me/?text=${t}%20${u}`],
  ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${u}`], ['Telegram', `https://t.me/share/url?url=${u}&text=${t}`], ['E-mail', `mailto:?subject=${t}&body=${u}`]] })
async function copy() { await navigator.clipboard?.writeText(url.value); copied.value = true; setTimeout(() => (copied.value = false), 1800) }
const share = () => navigator.share({ title: props.title, url: url.value })
const canShare = computed(() => import.meta.client && !!navigator.share)
const fmt = (t: number) => new Date(t).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
</script>
<template>
  <div class="eng">
    <h2>O que sentiste?</h2>
    <div class="rx"><button v-for="r in RACI" :key="r" :aria-pressed="mine.includes(r)" :class="{ on: mine.includes(r) }" @click="react(r)">{{ r }} <b>{{ re[r] || 0 }}</b></button></div>
    <h2>Partilha</h2>
    <div class="sh"><a v-for="[n, h] in nets" :key="n" :href="h" target="_blank" rel="noopener noreferrer">{{ n }}</a>
      <button @click="copy">{{ copied ? 'Copiado ✓' : 'Copiar link' }}</button><button v-if="canShare" @click="share">Mais…</button></div>
    <h2>Comentários <span>({{ comments.length }})</span></h2>
    <form class="frm cm" @submit.prevent="send">
      <label><span>Nome</span><input v-model="name" required minlength="2" maxlength="60"></label>
      <label class="w"><span>Comentário</span><textarea v-model="text" rows="4" required maxlength="1500" /></label>
      <input v-model="hp" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <p v-if="err" class="er" role="alert">{{ err }}</p><button class="cta" :disabled="busy">Comentar →</button>
    </form>
    <ul class="cl"><li v-for="c in comments" :key="c.id"><b>{{ c.name }}</b> <time>{{ fmt(c.at) }}</time><p>{{ c.text }}</p></li></ul>
  </div>
</template>
