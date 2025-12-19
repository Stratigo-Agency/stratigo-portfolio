<template>
  <p :class="['dynamic-text', `text-size-${size}`]">
    {{ text }}
  </p>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium', // 'small', 'medium', 'large'
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})
</script>

<style scoped>
.dynamic-text {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.text-size-small {
  font-size: 0.95rem;
}

.text-size-medium {
  font-size: 1.1rem;
}

.text-size-large {
  font-size: 1.3rem;
}
</style>







