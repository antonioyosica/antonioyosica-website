<script setup lang="ts">
interface Props {
  variant?: 'gold' | 'neutral'
}

withDefaults(defineProps<Props>(), {
  variant: 'gold',
})
</script>

<template>
  <span :class="variant === 'gold' ? 'badge-gold' : 'badge-neutral'">
    <slot />
  </span>
</template>
