<script setup>
const route = useRoute();
console.log(route.params.slug);


const nuxt = useNuxtApp();
console.log(nuxt);
</script>

<template>
  <div>
    Página: {{ $route.params.slug }}...
  </div>
</template>