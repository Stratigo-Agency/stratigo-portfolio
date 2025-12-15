<template>
  <div class="case-studies-page">
    <!-- Header -->
    <Navbar />

    <!-- Case Studies Section -->
    <section class="case-studies-hero">
      <div class="container">
        <h1 class="page-title">Case Studies</h1>
        <p class="page-subtitle">Lihat proyek-proyek yang telah kami selesaikan untuk klien kami</p>
      </div>
    </section>

    <section class="case-studies-section">
      <div class="container">
        <div class="case-studies-grid">
          <div 
            v-for="(caseStudy, index) in caseStudiesData" 
            :key="index"
            class="case-study-card"
            @click="viewCaseStudy(caseStudy)"
          >
            <div class="case-study-image">
              <img :src="caseStudy.image" :alt="caseStudy.title" />
            </div>
            <div class="case-study-content">
              <div class="case-study-category">{{ caseStudy.category }}</div>
              <h3 class="case-study-title">{{ caseStudy.title }}</h3>
              <p class="case-study-description">{{ caseStudy.description }}</p>
              <div class="case-study-tech">
                <span 
                  v-for="(tech, techIndex) in caseStudy.technologies" 
                  :key="techIndex"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="case-study-results">
                <div 
                  v-for="(result, resultIndex) in caseStudy.results" 
                  :key="resultIndex"
                  class="result-item"
                >
                  <div class="result-value">{{ result.value }}</div>
                  <div class="result-label">{{ result.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import { caseStudies } from '../data/caseStudies.js'

const router = useRouter()

const caseStudiesData = ref(caseStudies)

const viewCaseStudy = (caseStudy) => {
  // Could navigate to a detail page or show modal
  console.log('View case study:', caseStudy.title)
}
</script>

<style scoped>
.case-studies-page {
  min-height: 100vh;
  background: var(--light-bg);
}

.case-studies-hero {
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

.case-studies-section {
  padding: 4rem 0;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.case-study-card {
  background: var(--light-secondary);
  border-radius: 0;
  overflow: hidden;
  border: 1px solid var(--light-tertiary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.case-study-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.case-study-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.case-study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-study-content {
  padding: 2rem;
}

.case-study-category {
  display: inline-block;
  background: var(--electric-blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.case-study-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.case-study-description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.case-study-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: var(--light-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 500;
}

.case-study-results {
  display: flex;
  gap: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--light-tertiary);
}

.result-item {
  text-align: center;
}

.result-value {
  font-family: 'League Spartan', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--electric-blue);
  margin-bottom: 0.25rem;
}

.result-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.nav-links .active {
  color: var(--electric-blue);
  border-bottom: 1px solid var(--electric-blue);
}

@media (max-width: 768px) {
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
}
</style>
