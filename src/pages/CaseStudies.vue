<template>
  <div class="case-studies-page">
    <!-- Header -->
    <Navbar />

    <!-- Case Studies Section -->
    <section class="case-studies-hero">
      <div class="container">
        <h1 class="page-title">{{ $t('caseStudies.title') }}</h1>
        <p class="page-subtitle">{{ $t('caseStudies.subtitle') }}</p>
      </div>
    </section>

    <section class="case-studies-section">
      <div class="container">
        <div class="case-studies-grid">
          <CaseStudyCard
            v-for="(caseStudy, index) in caseStudiesData" 
            :key="index"
            :case-study="caseStudy"
            variant="showcase"
            @click="viewCaseStudy"
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
import CaseStudyCard from '../components/CaseStudyCard.vue'
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
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
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

