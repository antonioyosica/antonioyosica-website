<script setup lang="ts">
import { forms } from '#shared/forms'
const props = defineProps<{ type: 'sessao' | 'evento' }>()
const v = reactive<Record<string, string>>({ website: '' }), busy = ref(false), done = ref(false), err = ref('')
async function send() {
  busy.value = true; err.value = ''
  try { await $fetch('/api/lead', { method: 'POST', body: { type: props.type, ...v } }); done.value = true }
  catch (e: any) { err.value = e?.data?.statusMessage || 'Não foi possível enviar. Tenta outra vez.' }
  busy.value = false
}
</script>
<template>
  <p v-if="done" class="ok">Recebido. Respondo-te em breve.</p>
  <form v-else class="frm" @submit.prevent="send">
    <label v-for="f in forms[type]" :key="f.k" :class="{ w: f.t === 'textarea' }"><span>{{ f.l }}{{ f.req ? ' *' : '' }}</span>
      <select v-if="f.t === 'select'" v-model="v[f.k]" :required="f.req"><option value="" disabled>Escolhe…</option><option v-for="o in f.opts" :key="o">{{ o }}</option></select>
      <textarea v-else-if="f.t === 'textarea'" v-model="v[f.k]" rows="5" :required="f.req" maxlength="2000" />
      <input v-else v-model="v[f.k]" :type="f.t || 'text'" :required="f.req" maxlength="200"></label>
    <input v-model="v.website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
    <p v-if="err" class="er" role="alert">{{ err }}</p>
    <button class="cta" :disabled="busy">{{ busy ? 'A enviar…' : 'Enviar →' }}</button>
  </form>
</template>
