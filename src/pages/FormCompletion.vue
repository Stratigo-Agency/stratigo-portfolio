<template>
  <div class="form-completion-page">
    <Navbar />
    
    <section class="completion-hero">
      <div class="container">
        <div class="completion-content fade-in" :class="{ 'visible': contentVisible }">
          <div class="completion-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="white"/>
              <path d="M25 40L35 50L55 30" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h1 class="completion-title">Terima Kasih!</h1>
          <p class="completion-message">
            Terima kasih telah mengisi formulir. Tim kami akan segera menghubungi Anda.
          </p>
          <div class="completion-actions">
            <router-link to="/" class="btn btn-primary">
              Kembali ke Beranda
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const contentVisible = ref(false)

onMounted(() => {
  // Trigger fade-in animation
  setTimeout(() => {
    contentVisible.value = true
  }, 100)
})
</script>

<style scoped>
.completion-hero {
  padding: 10rem 0 6rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-bg);
  text-align: center;
}

.completion-content {
  max-width: 600px;
  margin: 0 auto;
}

.completion-icon {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.completion-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.completion-message {
  font-size: 1.4rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 3rem;
  font-weight: 300;
}

.completion-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .completion-hero {
    padding: 120px 0 4rem 0;
    min-height: auto;
  }
  
  .completion-title {
    font-size: 2.5rem;
  }
  
  .completion-message {
    font-size: 1.2rem;
  }
  
  .completion-icon svg {
    width: 60px;
    height: 60px;
  }
}
</style>
