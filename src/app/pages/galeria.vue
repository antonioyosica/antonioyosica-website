<script setup lang="ts">
import { gallery, type Item } from '#shared/gallery'
useSeoMeta({ title: 'Galeria', description: 'Fotografias e vídeos.' })
const tab = ref<'todos' | 'foto' | 'video'>('todos'), cur = ref<Item | null>(null), dlg = ref<HTMLDialogElement>()
const list = computed(() => gallery.filter(i => tab.value === 'todos' || i.type === tab.value))
const yt = (s: string) => s.startsWith('yt:') ? `https://www.youtube-nocookie.com/embed/${s.slice(3)}?autoplay=1` : ''
function show(i: Item) { cur.value = i; nextTick(() => dlg.value?.showModal()) }
</script>
<template>
  <section class="page g"><h1 class="big">Galeria</h1>
    <div v-if="gallery.length"><div class="sh"><button v-for="[k, l] in [['todos', 'Tudo'], ['foto', 'Fotografias'], ['video', 'Vídeos']]" :key="k" :aria-pressed="tab === k" :class="{ on: tab === k }" @click="tab = k as any">{{ l }}</button></div>
      <ul class="gal"><li v-for="i in list" :key="i.src"><button @click="show(i)"><img :src="i.type === 'foto' ? i.src : i.poster" :alt="i.alt || i.title" loading="lazy"><span>{{ i.type === 'video' ? '▶ ' : '' }}{{ i.title }}</span></button></li></ul></div>
    <p v-else class="intro">Em breve: fotografias e vídeos de eventos e experiências.</p>
    <dialog ref="dlg" class="lb" @close="cur = null" @click.self="dlg?.close()"><template v-if="cur">
      <img v-if="cur.type === 'foto'" :src="cur.src" :alt="cur.alt || cur.title"><iframe v-else-if="yt(cur.src)" :src="yt(cur.src)" :title="cur.title" allow="autoplay; encrypted-media" allowfullscreen /><video v-else :src="cur.src" controls autoplay />
      <button class="cta" @click="dlg?.close()">Fechar</button></template></dialog></section>
</template>
