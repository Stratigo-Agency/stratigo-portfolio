<template>
  <article 
    :class="['blog-card', { 'showcase-card': variant === 'showcase' }]"
    @click="handleClick"
  >
    <div :class="['blog-image', { 'showcase-card-image': variant === 'showcase' }]">
      <img :src="post.image" :alt="post.title" />
      <div 
        v-if="variant === 'showcase'" 
        class="showcase-card-category-overlay"
      >
        {{ post.category }}
      </div>
      <div 
        v-else 
        class="blog-category"
      >
        {{ post.category }}
      </div>
    </div>
    <div :class="['blog-content', { 'showcase-card-content': variant === 'showcase' }]">
      <div 
        v-if="variant === 'showcase' || variant === 'full'" 
        class="showcase-card-meta blog-meta"
      >
        <span>{{ post.date }}</span>
        <span>{{ post.readTime }}</span>
      </div>
      <h3 :class="['blog-title', { 'showcase-card-title': variant === 'showcase' }]">
        {{ post.title }}
      </h3>
      <p :class="['blog-excerpt', { 'showcase-card-description': variant === 'showcase' }]">
        {{ post.excerpt }}
      </p>
      <div v-if="variant === 'full'" class="blog-footer">
        <a href="#" class="read-more" @click.prevent="handleClick">Baca Selengkapnya →</a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'full', // 'showcase' or 'full'
    validator: (value) => ['showcase', 'full'].includes(value)
  }
})

const emit = defineEmits(['click'])
const router = useRouter()

const handleClick = () => {
  emit('click', props.post)
  if (props.post.id) {
    router.push(`/blog/${props.post.id}`)
  }
}
</script>

<style scoped>
.blog-card {
  background: var(--light-secondary);
  border-radius: 0;
  overflow: hidden;
  border: 1px solid var(--light-tertiary);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.blog-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--electric-blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 600;
}

.showcase-card-category-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 600;
}

.blog-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.blog-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.blog-excerpt {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  flex: 1;
}

.blog-footer {
  margin-top: auto;
}

.read-more {
  color: var(--electric-blue);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: var(--cyan-blue);
}

/* Showcase variant styles */
.showcase-card {
  background: var(--light-secondary);
  border-radius: 0;
  overflow: hidden;
  border: 1px solid var(--light-tertiary);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.showcase-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.showcase-card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.showcase-card-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.showcase-card-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

