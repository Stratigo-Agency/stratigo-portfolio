<template>
  <component 
    :is="tag" 
    :class="['dynamic-heading', `heading-size-${size}`]"
  >
    {{ text }}
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'h2', // 'h1', 'h2', 'h3', 'h4'
    validator: (value) => ['h1', 'h2', 'h3', 'h4'].includes(value)
  }
})

const tag = computed(() => props.size)
</script>

<style scoped>
.dynamic-heading {
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  margin-top: 2rem;
  letter-spacing: -0.02em;
}

.heading-size-h1 {
  font-size: 2.5rem;
  line-height: 1.2;
}

.heading-size-h2 {
  font-size: 2rem;
  line-height: 1.3;
}

.heading-size-h3 {
  font-size: 1.5rem;
  line-height: 1.4;
}

.heading-size-h4 {
  font-size: 1.25rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .heading-size-h1 {
    font-size: 2rem;
  }
  
  .heading-size-h2 {
    font-size: 1.75rem;
  }
  
  .heading-size-h3 {
    font-size: 1.35rem;
  }
  
  .heading-size-h4 {
    font-size: 1.15rem;
  }
}
</style>

