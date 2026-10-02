<script setup lang="ts">
import { experiences } from '#shared/experiences'
useSeoMeta({ title: 'Entre no universo LEE', description: 'LEE CiLab, LEE Meet & Greet, Clube LEE e LEE Academy.' })
</script>
<template>
  <section class="page g"><h1 class="big">Entre no universo LEE</h1>
    <ul class="rows" style="margin-top:3rem"><li v-for="(x, k) in experiences" :key="k"><NuxtLink :to="`/experiencias/${k}`" class="pl"><h2>{{ x.name }}</h2><p>{{ x.tag }}</p><em v-if="x.soon" class="tag">em construção</em></NuxtLink></li></ul></section>
</template>
