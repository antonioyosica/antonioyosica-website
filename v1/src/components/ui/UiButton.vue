<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  icon?: boolean
  loading?: boolean
  disabled?: boolean
  href?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  icon: false,
  loading: false,
  disabled: false,
})

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  text: 'btn-text',
}

const sizeClasses = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
}

const classes = computed(() => [
  'btn',
  variantClasses[props.variant],
  props.icon ? 'btn-icon' : sizeClasses[props.size],
  { 'opacity-50 cursor-not-allowed': props.disabled || props.loading },
])

const component = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="component"
    :class="classes"
    :disabled="disabled || loading"
    :href="href"
    :to="to"
    v-bind="$attrs"
  >
    <Icon v-if="loading" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
    <slot v-else />
  </component>
</template>
