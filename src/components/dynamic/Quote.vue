<template>
  <blockquote :class="['dynamic-quote', `quote-size-${size}`]">
    <p>{{ text }}</p>
    <cite v-if="author">{{ author }}</cite>
  </blockquote>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'medium', // 'small', 'medium', 'large'
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})
</script>

<style scoped>
.dynamic-quote {
  border-left: 4px solid var(--electric-blue);
  padding-left: 2rem;
  margin: 2rem 0;
  color: var(--text-secondary);
  font-style: italic;
}

.dynamic-quote p {
  margin: 0;
  line-height: 1.8;
}

.quote-size-small {
  font-size: 1rem;
}

.quote-size-medium {
  font-size: 1.2rem;
}

.quote-size-large {
  font-size: 1.4rem;
}

.dynamic-quote cite {
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  font-style: normal;
}

.dynamic-quote cite::before {
  content: '— ';
}
</style>







