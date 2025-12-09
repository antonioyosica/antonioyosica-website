<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
  container?: 'narrow' | 'default' | 'wide' | 'none'
  background?: 'default' | 'alt' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  container: 'default',
  background: 'default',
})

const sectionClasses = computed(() => ({
  'section-sm': props.size === 'sm',
  'section': props.size === 'md',
  'section-lg': props.size === 'lg',
  'bg-neutral-50 dark:bg-neutral-950': props.background === 'default',
  'bg-neutral-100 dark:bg-neutral-925': props.background === 'alt',
  'bg-neutral-900 dark:bg-neutral-950': props.background === 'dark',
}))

const containerClasses = computed(() => ({
  'container-narrow': props.container === 'narrow',
  'container-default': props.container === 'default',
  'container-wide': props.container === 'wide',
}))
</script>

<template>
  <section :class="sectionClasses">
    <div v-if="container !== 'none'" :class="containerClasses">
      <slot />
    </div>
    <slot v-else />
  </section>
</template>
