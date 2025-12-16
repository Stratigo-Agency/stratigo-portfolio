<template>
  <div id="app">
    <!-- Header -->
    <Navbar />

    <!-- Hero Section -->
    <section id="beranda" class="hero">
      <div class="hero-content container">
        <div class="hero-text fade-in" :class="{ 'visible': heroVisible }">
          <p class="hero-content-text ">
            Realisasikan ide bisnis anda dengan website dan software yang profesional. Stratigo menyediakan solusi digital yang dirancang secara custom untuk kebutuhan bisnis Anda.
          </p>
       
          <div class="hero-buttons">
            <a href="https://wa.me/6287881332121" target="_blank" rel="noopener noreferrer" class="btn btn-primary" @click="trackButtonClick('Konsultasi Sekarang', 'hero')">
              Konsultasi Sekarang <span class="btn-arrow">></span>
            </a>
          </div>
        </div>
        <div class="hero-visual fade-in" :class="{ 'visible': heroVisible }">
          <div class="hero-typography">
            <div class="hero-word-large hero-word-static">We build</div>
            <div class="hero-word-large hero-word-animated">
              <span class="animated-text-wrapper">{{ animatedText }}<span class="typing-cursor">|</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="section products">
      <div class="container">
        <h2 class="products-header fade-in" :class="{ 'visible': productsVisible }">
          ( LAYANAN KAMI )
        </h2>
        <div class="products-grid fade-in" :class="{ 'visible': productsVisible }">
          <router-link to="/portfolio-website" class="product-card product-dark" @click="trackButtonClick('Portfolio Website', 'products')">
            <div class="product-content">
              <h3 class="product-title">Portfolio Website</h3>
              <p class="product-description">Website profesional untuk menampilkan brand dan bisnis Anda dengan desain yang menarik dan modern. Dengan Stratigo, desain, keamanan, dan fungsionalitas website Anda menjadi prioritas utama. </p>
            </div>
            <div class="product-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 5l6 5-6 5"/>
              </svg>
            </div>
          </router-link>
          <router-link to="/unigo" class="product-card product-light" @click="trackButtonClick('E-Learning Apps', 'products')">
            <div class="product-content">
              <h3 class="product-title">E-Learning Platform</h3>
              <p class="product-description">Dengan Employee Learning Management System (LMS) kami, UniGo, kamu dapat meluncurkan platform pembelajaran karyawan dengan efisien dan efektif. </p>
            </div>
            <div class="product-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 5l6 5-6 5"/>
              </svg>
            </div>
          </router-link>
          <router-link to="/reservigo" class="product-card product-dark" @click="trackButtonClick('Booking System', 'products')">
            <div class="product-content">
              <h3 class="product-title">Booking System</h3>
              <p class="product-description">Luncurkan sistem booking dalam hitungan jam dengan Reservigo. Pengunjung dapat melakukan booking dalam hitungan detik dan dilengkapi dengan fitur notifikasi dan dashboard. </p>
            </div>
            <div class="product-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 5l6 5-6 5"/>
              </svg>
            </div>
          </router-link>
           <router-link to="/custom" class="product-card product-light" @click="trackButtonClick('Custom Software', 'products')">
            <div class="product-content">
              <h3 class="product-title">Custom Software</h3>
              <p class="product-description">Solusi khusus untuk kebutuhan bisnis Anda, kami membangun software yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda.</p>
            </div>
            <div class="product-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 5l6 5-6 5"/>
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Digital Presence Section -->
    <section class="section digital-presence">
      <div class="container">
        <div class="digital-presence-content fade-in" :class="{ 'visible': digitalPresenceVisible }">
          <div class="digital-presence-number">7+</div>
          <div class="digital-presence-text">
            <p class="digital-presence-main-text">
              <strong>Jam dihabiskan oleh masyarakat Indonesia setiap harinya di internet</strong>. Website bukan hanya pelengkap, melainkan <strong>kebutuhan vital</strong> bagi bisnis yang ingin berkembang.
            </p>
            <p class="digital-presence-sub-text">
              Website adalah etalase digital bisnis Anda. Tanpa website profesional, bisnis Anda sulit ditemukan dan terlihat kurang kredibel.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="section solution-section">
      <div class="container">
        <div class="solution-content fade-in" :class="{ 'visible': solutionVisible }">
        
        </div>
      </div>
      <div class="container">
        <h2 class="products-header fade-in" :class="{ 'visible': productsVisible }">
          ( DIPERCAYA OLEH )
        </h2>
        <div class="carousel-container">
          <div class="carousel-track">
            <div class="client-logo" v-for="(client, index) in [...clientLogos, ...clientLogos]" :key="`${client.name}-${index}`"
                 @click="handleClientLogoClick(client.name)">
              <img :src="client.logo" :alt="client.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Showcase Section -->
    <section class="section showcase-section">
      <div class="container">
        <div class="showcase-header fade-in" :class="{ 'visible': solutionVisible }">
          <h2 class="products-header fade-in" :class="{ 'visible': productsVisible }">
          ( Case studies )
        </h2>
          <router-link to="/case-studies" class="showcase-view-all">Lihat Semua →</router-link>
        </div>
        <div class="showcase-grid fade-in" :class="{ 'visible': solutionVisible }">
          <CaseStudyCard
            v-for="(caseStudy, index) in recentCaseStudies" 
            :key="index"
            :case-study="caseStudy"
            variant="showcase"
            @click="(cs) => handleCaseStudyClick(cs.title, cs.category)"
          />
        </div>
        
        <div class="showcase-header fade-in" :class="{ 'visible': solutionVisible }" style="margin-top: 4rem;">
          <h2 class="products-header fade-in" :class="{ 'visible': productsVisible }">
          ( Blog )
        </h2>
          <router-link to="/blog" class="showcase-view-all">Lihat Semua →</router-link>
        </div>
        <div class="showcase-grid fade-in" :class="{ 'visible': solutionVisible }">
          <BlogCard
            v-for="(post, index) in recentBlogPosts" 
            :key="index"
            :post="post"
            variant="showcase"
            @click="viewPost"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="kontak" class="section contact">
      <div class="container">
        <div class="contact-content fade-in" :class="{ 'visible': contactVisible }">
          <h3>Realisasikan ide bisnis Anda dengan kami.</h3>
          <p>Konsultasi dengan kami untuk mendapatkan solusi digital yang tepat untuk bisnis Anda.</p>
          <div class="contact-methods">
            <div class="contact-method">
              <strong>Email:</strong> info@stratigo.co.id
            </div>
            <div class="contact-method">
              <strong>Telepon:</strong> +6287881332121
            </div>
            <div class="contact-method">
              <strong>Alamat:</strong> Jakarta, Indonesia
            </div>
          </div>
          <a 
            href="https://wa.me/6287881332121" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary"
            @click="trackButtonClick('Konsultasi', 'contact')"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/6287881332121" target="_blank" rel="noopener noreferrer" 
       class="whatsapp-float" 
       @click="trackButtonClick('WhatsApp', 'floating_button')"
       aria-label="Chat on WhatsApp">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.832.744 5.604 2.154 8.048L.036 31.64l7.876-2.064A15.954 15.954 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0z" fill="#25D366"/>
        <path d="M25.31 22.776c-.344.968-1.704 1.776-2.788 2.012-.744.156-1.716.28-4.988-.972-4.196-1.604-6.908-5.86-7.116-6.128-.208-.268-1.688-2.244-1.688-4.284s1.068-3.04 1.448-3.456c.38-.416.828-.52 1.104-.52.276 0 .552.004.792.016.256.012.596-.096.932.712.344.828 1.164 2.84 1.268 3.048.104.208.172.452.036.72-.136.268-.208.436-.416.672-.208.236-.436.528-.624.708-.208.196-.424.408-.184.8.24.392 1.068 1.76 2.292 2.852 1.572 1.404 2.9 1.844 3.312 2.048.412.204.652.172.892-.104.24-.276 1.032-1.204 1.308-1.62.276-.416.552-.348.928-.208.376.14 2.388 1.128 2.8 1.332.412.204.684.308.784.476.1.168.1.968-.244 1.936z" fill="#fff"/>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import BlogCard from '../components/BlogCard.vue'
import CaseStudyCard from '../components/CaseStudyCard.vue'
import { caseStudies } from '../data/caseStudies.js'
import { blogPosts } from '../data/blogPosts.js'
import { useAnalytics } from '../composables/useAnalytics.js'

// Initialize analytics
const { trackEvent, trackFormSubmission, trackButtonClick, trackServiceInterest, trackNavigation } = useAnalytics()

// Reactive data
const heroVisible = ref(false)
const productsVisible = ref(false)
const servicesVisible = ref(false)
const trustedByVisible = ref(false)
const digitalPresenceVisible = ref(false)

// Typing animation for hero text
const animatedText = ref('Websites.')
const typingWords = ['Websites.', 'Softwares.']
let typingTimeout = null
let currentWordIndex = 0
let isDeleting = false
let currentCharIndex = 0

const typeText = () => {
  const currentWord = typingWords[currentWordIndex]
  
  if (isDeleting) {
    // Delete characters
    if (currentCharIndex > 0) {
      animatedText.value = currentWord.substring(0, currentCharIndex - 1)
      currentCharIndex--
      typingTimeout = setTimeout(typeText, 30) // Faster deletion
    } else {
      // Finished deleting, move to next word
      isDeleting = false
      currentWordIndex = (currentWordIndex + 1) % typingWords.length
      typingTimeout = setTimeout(typeText, 300) // Pause before typing next word
    }
  } else {
    // Type characters
    if (currentCharIndex < currentWord.length) {
      animatedText.value = currentWord.substring(0, currentCharIndex + 1)
      currentCharIndex++
      typingTimeout = setTimeout(typeText, 60) // Typing speed
    } else {
      // Finished typing, wait then start deleting
      isDeleting = true
      typingTimeout = setTimeout(typeText, 1000) // Pause before deleting
    }
  }
}
const solutionVisible = ref(false)
const contactVisible = ref(false)

import izyLogo from '../assets/logos/izy-logo.png'
import enosLogo from '../assets/logos/enos-logo.png'
import delyaLogo from '../assets/logos/delya-logo.png'
import temuLogo from '../assets/logos/temu-logo-1.png'
import patternImage from '../assets/pattern-2.png'

const clientLogos = ref([
  {
    name: 'IZY',
    logo: izyLogo
  },
  {
    name: 'ENOS',
    logo: enosLogo
  },
  {
    name: 'DELYA',
    logo: delyaLogo
  },
  {
    name: 'Temu',
    logo: temuLogo
  },
  {
    name: 'IZY',
    logo: izyLogo
  },
  {
    name: 'ENOS',
    logo: enosLogo
  },
  {
    name: 'Temu',
    logo: temuLogo
  },
  {
    name: 'DELYA',
    logo: delyaLogo
  },
])


// Get 3 most recent case studies and blog posts
const recentCaseStudies = computed(() => caseStudies.slice(0, 3))
const recentBlogPosts = computed(() => blogPosts.slice(0, 3))

// Methods
const handleScroll = () => {
  // Intersection observer for animations
  const heroSection = document.querySelector('.hero')
  const productsSection = document.querySelector('.products')
  const servicesSection = document.querySelector('.services')
  const trustedBySection = document.querySelector('.trusted-by-header')
  const digitalPresenceSection = document.querySelector('.digital-presence')
  const solutionSection = document.querySelector('.solution-section')
  const contactSection = document.querySelector('.contact')
  
  if (heroSection && isInViewport(heroSection)) {
    heroVisible.value = true
  }
  if (productsSection && isInViewport(productsSection)) {
    productsVisible.value = true
  }
  if (servicesSection && isInViewport(servicesSection)) {
    servicesVisible.value = true
  }
  if (trustedBySection && isInViewport(trustedBySection)) {
    trustedByVisible.value = true
  }
  if (digitalPresenceSection && isInViewport(digitalPresenceSection)) {
    digitalPresenceVisible.value = true
  }
  if (solutionSection && isInViewport(solutionSection)) {
    solutionVisible.value = true
  }
  if (contactSection && isInViewport(contactSection)) {
    contactVisible.value = true
  }
}

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

const handleServiceClick = (serviceName) => {
  trackServiceInterest(serviceName)
}

const handleCaseStudyClick = (caseStudyTitle, category) => {
  trackEvent('case_study_view', {
    title: caseStudyTitle,
    category: category
  })
}

const handleClientLogoClick = (clientName) => {
  trackEvent('client_logo_click', {
    client_name: clientName
  })
}

const viewPost = (post) => {
  trackEvent('blog_post_view', {
    title: post.title
  })
  // Could navigate to detail page
}


// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
  
  // Start typing animation after a delay
  setTimeout(() => {
    typeText()
  }, 1000) // Wait 1 second before starting animation
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  
  // Clean up typing animation
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
})
</script>

<style scoped>
/* Hero Styles */
.hero {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--light-bg);
  position: relative;
  overflow: hidden;
  padding: 8rem 0 2rem 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  align-items: center;
  position: relative;
  z-index: 1;
  flex: 1;
}

.hero-content > * {
  min-width: 0;
}

.hero-text {
  min-width: 0;
  overflow: hidden;
}

.hero-clients {
  width: 100%;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-clients .carousel-container {
  margin-top: 0;
}

.hero-content-text {
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.9;
  margin-bottom: 3rem;
  color: white;
  letter-spacing: 0.02em;
  max-width: 65%;
}

.hero-subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.9;
  margin-bottom: 2rem;
  color: var(--text-primary);
  letter-spacing: 0.02em;
  max-width: 90%;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.9;
  letter-spacing: 0.02em;
  max-width: 90%;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn-arrow {
  margin-left: 0.5rem;
  display: inline-block;
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

.hero-visual {
  display: flex;
  align-items: center;
  position: relative;
  min-width: 0;
  overflow: visible;
}

.hero-typography {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0;
  min-width: 0;
  overflow: visible;
}

.hero-word-large {
  font-family: 'League Spartan', sans-serif;
  font-size: 9rem;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 0.9;
  opacity: 0.85;
  flex-shrink: 0;
}

.hero-word-static {
  white-space: nowrap;
}

.hero-word-animated {
  position: relative;
  width: 100%;
  min-width: 700px;
  overflow: hidden;
}

.animated-text-wrapper {
  display: inline-block;
  white-space: nowrap;
  min-width: 700px;
  text-align: left;
}

.typing-cursor {
  display: inline-block;
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Products Section */
.products {
  background: var(--light-bg);
  padding: 5rem 0;
}

.products-header {
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 3rem;
  text-align: left;
}

.products-grid {
  display: flex;
  gap: 1.5rem;
  align-items: stretch;
}

.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  padding: 2rem;
  text-decoration: none;
  transition: flex-grow 0.5s ease, min-width 0.5s ease;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  border-radius: 0;
}

.products-grid:hover .product-card {
  flex: 0.3;
  min-width: 80px;
}

.products-grid:hover .product-card .product-content,
.products-grid:hover .product-card .product-button {
  opacity: 0;
  pointer-events: none;
}

.products-grid .product-card:hover {
  flex: 2;
  min-width: 400px;
}

.products-grid .product-card:hover .product-content,
.products-grid .product-card:hover .product-button {
  opacity: 1;
  pointer-events: auto;
}

.product-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  transition: opacity 0.3s ease;
}

.product-button {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.product-blue {
  background: var(--electric-blue);
}

.product-light {
  background: #e8e8e8;
}

.product-dark {
  background: #1a1a1a;
}

.product-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-align: left;
  white-space: nowrap;
}

.product-description {
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.4s ease 0.2s, max-height 0.4s ease 0.2s;
}

.product-card:hover .product-description {
  opacity: 1;
  max-height: 200px;
}

.product-blue .product-title,
.product-dark .product-title {
  color: white;
}

.product-light .product-title {
  color: #1a1a1a;
}

.product-blue .product-description,
.product-dark .product-description {
  color: rgba(255, 255, 255, 0.9);
}

.product-light .product-description {
  color: rgba(26, 26, 26, 0.8);
}

.product-button {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.product-blue .product-button {
  background: rgba(0, 0, 0, 0.2);
  color: white;
}

.product-light .product-button {
  background: rgba(0, 0, 0, 0.1);
  color: #1a1a1a;
}

.product-dark .product-button {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.product-card:hover .product-button {
  transform: translateX(4px);
}

/* Packages Header */
/* Trusted By Header Styles */
.trusted-by-header {
  background: var(--light-bg);
  padding: 3rem 0 1rem;
}

.trusted-by-header .section-title {
  text-align: center;
  margin-bottom: 1rem;
}

.trusted-by-header .section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 10px 0;
  mask: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.carousel-track {
  display: flex;
  gap: 3rem;
  animation: scroll-infinite 30s linear infinite;
  width: fit-content;
}

.client-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0;
  border: 1px solid transparent;
  min-width: 180px;
  height: 100px;
}

.client-logo img {
  max-width: 100%;
  max-height: 90px;
  object-fit: contain;
  filter: brightness(0) invert(1) opacity(0.4);
}

@keyframes scroll-infinite {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}


/* Digital Presence Section */
.digital-presence {
  background: #000;
  padding: 5rem 0;
}

.digital-presence-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  align-items: start;
}

.digital-presence-number {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 16rem;
  font-weight: 400;
  color: #fff;
  line-height: 1;
  white-space: nowrap;
}

.digital-presence-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1rem;
}

.digital-presence-main-text {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6;
  color: #fff;
  margin: 0;
}

.digital-presence-main-text strong {
  font-weight: 600;
  color: #fff;
}

.digital-presence-sub-text {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #fff;
  margin: 0;
}

.source-text {
  font-weight: 600;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--electric-blue);
}

.stat-content {
  text-align: center;
}

.stat-number {
  font-family: 'League Spartan', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: var(--electric-blue);
  margin-bottom: 1rem;
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  color: var(--text-primary);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.stat-note {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-style: italic;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--light-tertiary);
}

/* Solution Section */
.solution-section {
  padding: 3rem 0 4rem;
  overflow: hidden;
}

.solution-content {
  text-align: center;
  margin-bottom: 3rem;
}

.solution-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.highlight-orange {
  color: var(--electric-blue);
}

.solution-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.8;
  letter-spacing: 0.02em;
}

/* Case Studies Styles */
.case-studies {
  background: var(--light-bg);
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  letter-spacing: 0.02em;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(34, 81, 255, 0.1);
}

.case-study-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.case-study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.case-study-card:hover .case-study-image img {
  transform: scale(1.05);
}

.case-study-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.case-study-category {
  background: var(--electric-blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 600;
}

.case-study-content {
  padding: 2rem;
}

.case-study-content h3 {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.case-study-content p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

.case-study-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: var(--dark-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 500;
}

.case-study-results {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.result-item {
  text-align: center;
  padding: 1rem;
  background: var(--light-bg);
  border-radius: 0;
  border: 1px solid var(--light-tertiary);
}

.result-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--electric-blue);
  margin-bottom: 0.25rem;
}

.result-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* About Styles */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--electric-blue);
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: var(--text-secondary);
  font-weight: 500;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.tech-item {
  background: var(--light-secondary);
  padding: 1rem;
  border-radius: 0;
  text-align: center;
  font-weight: 500;
  border: 1px solid var(--light-tertiary);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: var(--electric-blue);
  transform: translateY(-2px);
}

/* Showcase Section */
.showcase-section {
  background: var(--light-bg);
  padding: 5rem 0;
}

.showcase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.showcase-header .products-header {
  margin-bottom: 0;
  flex: 1;
}

.showcase-section-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.showcase-view-all {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.showcase-view-all:hover {
  color: var(--cyan-blue);
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

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

.showcase-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.showcase-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.showcase-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.showcase-card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.showcase-card-category {
  display: inline-block;
  background: var(--electric-blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  width: fit-content;
}

.showcase-card-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-muted);
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

/* Contact Styles */
.contact {
  background: var(--light-secondary);
}

.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 2rem;
  border-radius: 0;
}

.contact-content h3 {
  font-family: 'League Spartan', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  letter-spacing: -0.02em;
}

.contact-content p {
  color: white;
  margin-bottom: 2rem;
  line-height: 1.8;
  letter-spacing: 0.02em;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-method {
  color: white;
}

.contact-method strong {
  color: white;
}

.contact-content .btn {
  margin-top: 1rem;
}


/* Mobile Responsive */
@media (max-width: 768px) {
  
  .products-header {
    text-align: center;
  }
  
  .dropdown-card-button {
    width: 36px;
    height: 36px;
    bottom: 1.25rem;
    right: 1.25rem;
  }
  
  .mobile-menu-toggle {
    display: flex;
    order: 2;
    margin-left: auto;
  }
  
  .hero {
    min-height: auto;
    padding-top: 120px;
    padding-bottom: 1rem;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-clients {
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
  
  .hero-content-text {
    font-size: 1.1rem;
    text-align: left;
    max-width: 100%;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    text-align: left;
  }
  
  .hero-description {
    max-width: 100%;
    text-align: left;
  }
  
  .hero-buttons {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  
  .hero-text {
    order: 2;
  }
  
  .hero-visual {
    order: 1;
    justify-content: flex-start;
  }
  
  .hero-typography {
    align-items: flex-start;
  }
  
  .hero-word-large {
    font-size: 4rem;
  }
  
  .hero-word-animated {
    min-width: 350px;
  }
  
  .animated-text-wrapper {
    min-width: 350px;
  }
  
  .hero-word-large:first-child {
    margin-right: 0;
  }
  
  .hero-word-large:last-child {
    margin-left: 0;
  }
  
  .products-grid {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .products-grid:hover .product-card {
    flex: 1;
    min-width: auto;
  }
  
  .products-grid .product-card:hover {
    flex: 1;
    min-width: auto;
  }
  
  .products-grid:hover .product-card .product-content,
  .products-grid:hover .product-card .product-button {
    opacity: 1;
    pointer-events: auto;
  }
  
  .product-card {
    min-height: 250px;
    padding: 1.5rem;
  }
  
  .product-title {
    font-size: 1.25rem;
    white-space: normal;
  }
  
  .product-description {
    opacity: 1;
    max-height: none;
  }
  
  .product-button {
    width: 44px;
    height: 44px;
    bottom: 1.5rem;
    right: 1.5rem;
  }
  
  
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .tech-stack {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .digital-presence-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .digital-presence-number {
    font-size: 6rem;
  }
  
  .digital-presence-main-text {
    font-size: 1.2rem;
  }
  
  .digital-presence-sub-text {
    font-size: 0.9rem;
  }
  
  .solution-title {
    font-size: 1.8rem;
  }
  
  .solution-subtitle {
    font-size: 1rem;
  }
  
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .showcase-header {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .showcase-section-title {
    font-size: 2rem;
  }
  
  .showcase-card-image {
    height: 180px;
  }
  
  .showcase-card-title {
    font-size: 1.1rem;
  }
  
  
  
  .carousel-track {
    gap: 2rem;
  }
  
  .client-logo {
    min-width: 150px;
    height: 80px;
    padding: 0.75rem 1.5rem;
  }
  
  .client-logo img {
    max-height: 50px;
  }
  
  .whatsapp-float {
    bottom: 20px;
    right: 20px;
  }
}

/* WhatsApp Floating Button */
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  z-index: 999;
  transition: all 0.3s ease;
  text-decoration: none;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

.whatsapp-float svg {
  width: 36px;
  height: 36px;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7), 0 0 0 10px rgba(37, 211, 102, 0.1);
  }
}

.whatsapp-float {
  animation: pulse 2s infinite;
}

.whatsapp-float:hover {
  animation: none;
}
</style> 