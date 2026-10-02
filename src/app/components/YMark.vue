<script setup lang="ts">defineProps<{ tone?: 'verde' | 'creme' | 'laranja' }>()</script>
<template><img :src="`/brand/y-${tone ?? 'creme'}.png`" alt="" width="320" height="334" class="ymark" decoding="async"></template>
