<template>
  <div :class="['dynamic-image', `image-size-${size}`, { 'image-center': center }]">
    <img :src="src" :alt="alt" />
    <p v-if="caption" class="image-caption">{{ caption }}</p>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'medium', // 'small', 'medium', 'large', 'full'
    validator: (value) => ['small', 'medium', 'large', 'full'].includes(value)
  },
  center: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.dynamic-image {
  margin: 2rem 0;
}

.dynamic-image img {
  width: 100%;
  height: auto;
  display: block;
}

.image-size-small {
  max-width: 400px;
}

.image-size-medium {
  max-width: 600px;
}

.image-size-large {
  max-width: 800px;
}

.image-size-full {
  max-width: 100%;
}

.image-center {
  margin-left: auto;
  margin-right: auto;
}

.image-caption {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  font-style: italic;
  text-align: center;
}

@media (max-width: 768px) {
  .image-size-small,
  .image-size-medium,
  .image-size-large {
    max-width: 100%;
  }
}
</style>

