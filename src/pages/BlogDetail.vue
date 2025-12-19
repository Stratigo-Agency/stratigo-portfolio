<template>
  <div class="blog-detail-page">
    <Navbar />
    
    <article class="blog-detail">
      <div class="container">
        <div v-if="post" class="blog-detail-content">
          <div class="blog-detail-header">
            <div class="blog-detail-category">{{ post.category }}</div>
            <h1 class="blog-detail-title">{{ post.title }}</h1>
            <div class="blog-detail-meta">
              <span class="blog-detail-date">{{ post.date }}</span>
              <span class="blog-detail-read-time">{{ post.readTime }}</span>
            </div>
          </div>
          
          <div class="blog-detail-image">
            <img :src="post.image" :alt="post.title" />
          </div>
          
          <div class="blog-detail-body">
            <p class="blog-detail-excerpt">{{ post.excerpt }}</p>
            <DynamicContent v-if="post.content && post.content.length > 0" :content="post.content" />
          </div>
        </div>
        
        <div v-else class="blog-not-found">
          <h2>{{ $t('blog.notFound') }}</h2>
          <router-link to="/blog" class="btn btn-primary">{{ $t('blog.backToBlog') }}</router-link>
        </div>
      </div>
    </article>
    
    <Footer />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import DynamicContent from '../components/dynamic/DynamicContent.vue'
import { blogPosts } from '../data/blogPosts.js'

const route = useRoute()
const post = computed(() => {
  return blogPosts.find(p => p.id === route.params.id)
})

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

onMounted(() => {
  scrollToTop()
})

watch(() => route.params.id, () => {
  scrollToTop()
})
</script>

<style scoped>
.blog-detail-page {
  min-height: 100vh;
  background: var(--light-bg);
}

.blog-detail {
  padding: 8rem 0 4rem;
}

.blog-detail-content {
  max-width: 800px;
  margin: 0 auto;
}

.blog-detail-header {
  text-align: center;
  margin-bottom: 3rem;
}

.blog-detail-category {
  display: inline-block;
  background: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.blog-detail-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.blog-detail-meta {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1rem;
  color: var(--text-muted);
}

.blog-detail-image {
  width: 100%;
  height: 400px;
  margin-bottom: 3rem;
  overflow: hidden;
}

.blog-detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-detail-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.blog-detail-excerpt {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.blog-not-found {
  text-align: center;
  padding: 4rem 0;
}

.blog-not-found h2 {
  font-family: 'League Spartan', sans-serif;
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .blog-detail {
    padding: 6rem 0 3rem;
  }
  
  .blog-detail-title {
    font-size: 2rem;
  }
  
  .blog-detail-image {
    height: 250px;
  }
  
  .blog-detail-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>

