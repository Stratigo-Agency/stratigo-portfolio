<template>
  <component 
    :is="ordered ? 'ol' : 'ul'" 
    :class="['dynamic-list', `list-size-${size}`]"
  >
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </component>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  },
  ordered: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'medium', // 'small', 'medium', 'large'
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})
</script>

<style scoped>
.dynamic-list {
  margin: 1.5rem 0;
  padding-left: 2rem;
  color: var(--text-secondary);
}

.dynamic-list li {
  margin-bottom: 0.75rem;
  line-height: 1.8;
}

.list-size-small {
  font-size: 0.95rem;
}

.list-size-medium {
  font-size: 1.1rem;
}

.list-size-large {
  font-size: 1.3rem;
}
</style>


