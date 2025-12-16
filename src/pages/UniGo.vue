<template>
  <div class="unigo-page">
    <Navbar />
    
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">UniGo</h1>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.page-hero {
  padding: 8rem 0 2rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: var(--light-bg);
}

.page-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 2rem 0;
    min-height: auto;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>
