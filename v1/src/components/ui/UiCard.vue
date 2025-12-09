<script setup lang="ts">
interface Props {
  variant?: 'default' | 'elevated' | 'neu' | 'glass' | 'gold'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hover: true,
})

const variantClasses = {
  default: 'card',
  elevated: 'card-elevated',
  neu: 'card-neu',
  glass: 'card-glass',
  gold: 'card-gold',
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const classes = computed(() => [
  variantClasses[props.variant],
  paddingClasses[props.padding],
  { 'hover:scale-[1.02] cursor-pointer': props.hover },
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
