<template>
  <div class="case-study-detail-page">
    <Navbar />
    
    <article class="case-study-detail">
      <div class="container">
        <div v-if="caseStudy" class="case-study-detail-content">
          <div class="case-study-detail-header">
            <div class="case-study-detail-category">{{ caseStudy.category }}</div>
            <h1 class="case-study-detail-title">{{ caseStudy.title }}</h1>
            <p class="case-study-detail-description">{{ caseStudy.description }}</p>
          </div>
          
          <div class="case-study-detail-image">
            <img :src="caseStudy.image" :alt="caseStudy.title" />
          </div>
          
          <div class="case-study-detail-body">
            <div v-if="caseStudy.technologies && caseStudy.technologies.length > 0" class="case-study-tech-section">
              <h3 class="section-subtitle">Technologies Used</h3>
              <div class="case-study-tech">
                <span 
                  v-for="(tech, index) in caseStudy.technologies" 
                  :key="index"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div v-if="caseStudy.results && caseStudy.results.length > 0" class="case-study-results-section">
              <h3 class="section-subtitle">Results</h3>
              <div class="case-study-results">
                <div 
                  v-for="(result, index) in caseStudy.results" 
                  :key="index"
                  class="result-item"
                >
                  <div class="result-value">{{ result.value }}</div>
                  <div class="result-label">{{ result.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="case-study-not-found">
          <h2>Case study tidak ditemukan</h2>
          <router-link to="/case-studies" class="btn btn-primary">Kembali ke Case Studies</router-link>
        </div>
      </div>
    </article>
    
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { caseStudies } from '../data/caseStudies.js'

const route = useRoute()
const caseStudy = computed(() => {
  return caseStudies.find(cs => cs.id === route.params.id)
})
</script>

<style scoped>
.case-study-detail-page {
  min-height: 100vh;
  background: var(--light-bg);
}

.case-study-detail {
  padding: 8rem 0 4rem;
}

.case-study-detail-content {
  max-width: 900px;
  margin: 0 auto;
}

.case-study-detail-header {
  text-align: center;
  margin-bottom: 3rem;
}

.case-study-detail-category {
  display: inline-block;
  background: var(--electric-blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.case-study-detail-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.case-study-detail-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

.case-study-detail-image {
  width: 100%;
  height: 500px;
  margin-bottom: 4rem;
  overflow: hidden;
}

.case-study-detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-study-detail-body {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.case-study-tech-section,
.case-study-results-section {
  padding: 2rem 0;
}

.section-subtitle {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.case-study-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-tag {
  background: var(--light-tertiary);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.95rem;
  font-weight: 500;
}

.case-study-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.result-item {
  text-align: center;
  padding: 2rem;
  background: var(--light-secondary);
  border: 1px solid var(--light-tertiary);
}

.result-value {
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--electric-blue);
  margin-bottom: 0.5rem;
}

.result-label {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.case-study-not-found {
  text-align: center;
  padding: 4rem 0;
}

.case-study-not-found h2 {
  font-family: 'League Spartan', sans-serif;
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .case-study-detail {
    padding: 6rem 0 3rem;
  }
  
  .case-study-detail-title {
    font-size: 2rem;
  }
  
  .case-study-detail-image {
    height: 300px;
  }
  
  .case-study-results {
    grid-template-columns: 1fr;
  }
}
</style>

