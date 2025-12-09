<script setup lang="ts">
interface Props {
  modelValue?: string
  type?: string
  placeholder?: string
  label?: string
  error?: string
  hint?: string
  variant?: 'default' | 'neu'
  disabled?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  variant: 'default',
  disabled: false,
  required: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputClasses = computed(() => [
  props.variant === 'neu' ? 'input-neu' : 'input',
  { 'border-red-500 focus:border-red-500 focus:ring-red-500/20': props.error },
])
</script>

<template>
  <div class="space-y-2">
    <label v-if="label" class="block text-body-sm font-medium text-neutral-700 dark:text-neutral-300">
      {{ label }}
      <span v-if="required" class="text-gold-500">*</span>
    </label>
    
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="inputClasses"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    
    <p v-if="error" class="text-body-sm text-red-500">
      {{ error }}
    </p>
    
    <p v-else-if="hint" class="text-body-sm text-neutral-500">
      {{ hint }}
    </p>
  </div>
</template>
