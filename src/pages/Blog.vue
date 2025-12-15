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
          <BlogCard
            v-for="(post, index) in blogPostsData" 
            :key="index"
            :post="post"
            variant="showcase"
            @click="viewPost"
          />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import BlogCard from '../components/BlogCard.vue'
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
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
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
