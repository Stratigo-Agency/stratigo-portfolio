<template>
  <div class="blog-page">
    <!-- Header -->
    <Navbar />

    <!-- Blog Hero Section -->
    <section class="blog-hero">
      <div class="container">
        <h1 class="page-title">Blog</h1>
        <p class="page-subtitle">Artikel dan tips tentang website, software, dan teknologi digital</p>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="blog-section">
      <div class="container">
        <div class="blog-grid">
          <article 
            v-for="(post, index) in blogPostsData" 
            :key="index"
            class="blog-card"
            @click="viewPost(post)"
          >
            <div class="blog-image">
              <img :src="post.image" :alt="post.title" />
              <div class="blog-category">{{ post.category }}</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ post.date }}</span>
                <span class="blog-read-time">{{ post.readTime }}</span>
              </div>
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <div class="blog-footer">
                <a href="#" class="read-more">Baca Selengkapnya →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import { blogPosts } from '../data/blogPosts.js'

const router = useRouter()

const blogPostsData = ref(blogPosts)

const viewPost = (post) => {
  // Could navigate to a detail page
  console.log('View post:', post.title)
}
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  background: var(--light-bg);
}

.blog-hero {
  padding: 8rem 0 4rem;
  text-align: center;
}

.page-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.blog-section {
  padding: 4rem 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

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

.blog-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.blog-date,
.blog-read-time {
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

.nav-links .active {
  color: var(--electric-blue);
  border-bottom: 1px solid var(--electric-blue);
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
}
</style>
