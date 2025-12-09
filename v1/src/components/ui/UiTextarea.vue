<script setup lang="ts">
interface Props {
  modelValue?: string
  placeholder?: string
  label?: string
  error?: string
  hint?: string
  rows?: number
  disabled?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  rows: 4,
  disabled: false,
  required: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="space-y-2">
    <label v-if="label" class="block text-body-sm font-medium text-neutral-700 dark:text-neutral-300">
      {{ label }}
      <span v-if="required" class="text-gold-500">*</span>
    </label>
    
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :rows="rows"
      class="textarea"
      :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500/20': error }"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    
    <p v-if="error" class="text-body-sm text-red-500">
      {{ error }}
    </p>
    
    <p v-else-if="hint" class="text-body-sm text-neutral-500">
      {{ hint }}
    </p>
  </div>
</template>
