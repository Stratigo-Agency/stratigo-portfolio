<template>
  <div class="custom-page">
    <Navbar />
    
    <!-- CTA Section -->
    <section class="section cta-section pattern-bg">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Butuh Solusi Software Khusus?</h2>
          <p class="cta-text">
            Hubungi kami untuk mendiskusikan kebutuhan bisnis Anda. Kami siap membantu mewujudkan solusi software yang dirancang khusus untuk tantangan unik bisnis Anda.
          </p>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary"
            @click.prevent="handleWhatsAppClick('https://wa.me/6287881332121')"
          >
            Konsultasi Gratis <span class="btn-arrow">></span>
          </a>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const handleWhatsAppClick = (url) => {
  // Report conversion and redirect
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url)
  } else {
    // Fallback if function not loaded
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
</script>

<style scoped>
/* CTA Section */
.cta-section {
  background: var(--light-secondary);
  padding: 10rem 0 5rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
}

.cta-content {
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: black;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.cta-text {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0;
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.btn-primary {
  background: black;
  color: white;
  border: 2px solid black;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

.btn-primary:hover {
  background: transparent;
  color: black;
  border-color: black;
}

.btn-arrow {
  margin-left: 0.5rem;
  display: inline-block;
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .cta-section {
    padding: 8rem 0 3rem 0;
  }

  .cta-content {
    padding: 2rem 1.5rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-text {
    font-size: 1.05rem;
  }
}
</style>
