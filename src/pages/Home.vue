<template>
  <div id="app">
    <!-- Header -->
    <Navbar />

    <!-- Hero Section -->
    <section id="beranda" class="hero">
      <video 
        ref="heroVideoRef"
        class="hero-video" 
        autoplay 
        muted 
        playsinline
        @ended="handleVideoEnd"
      >
        <source :src="heroVideo" type="video/mp4">
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <div class="hero-simple fade-in" :class="{ 'visible': heroVisible }">
          <img :src="strategoLogo" alt="Stratigo" class="hero-logo" />
          <h1 class="hero-title-large">{{ $t('home.heroTitle') }}</h1>
          <p class="hero-description">{{ $t('home.heroDescription') }}</p>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary hero-cta"
            @click.prevent="handleWhatsAppClick('https://wa.me/6287881332121', 'Konsultasi Sekarang', 'hero')"
          >
            {{ $t('home.consultationFree') }}
          </a>
        </div>
      </div>
    </section>


    <!-- Digital Presence Section -->
    <section class="section digital-presence">
      <div class="container">
        <div class="digital-presence-content fade-in" :class="{ 'visible': digitalPresenceVisible }">
          <div class="digital-presence-number">Stand Out.</div>
          <div class="digital-presence-text">
            <p class="digital-presence-main-text" v-html="$t('home.digitalPresence.mainText')">
            </p>
            <p class="digital-presence-sub-text">
              {{ $t('home.digitalPresence.subText') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features-section">
      <div class="container">
        <h2 class="features-header fade-in" :class="{ 'visible': featuresVisible }">
          {{ $t('home.features.title') }}
        </h2>
        <div class="features-grid fade-in" :class="{ 'visible': featuresVisible }">
          <div class="feature-card">
            <div class="feature-icon">
              <img :src="whiteCrossIcon" alt="Custom" />
            </div>
            <h3 class="feature-card-title">{{ $t('home.features.customCrafted.title') }}</h3>
            <p class="feature-card-description">{{ $t('home.features.customCrafted.description') }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <img :src="whiteExploreIcon" alt="Analytics" />
            </div>
            <h3 class="feature-card-title">{{ $t('home.features.analytics.title') }}</h3>
            <p class="feature-card-description">{{ $t('home.features.analytics.description') }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <img :src="whiteProtectIcon" alt="Content Ownership" />
            </div>
            <h3 class="feature-card-title">{{ $t('home.features.contentOwnership.title') }}</h3>
            <p class="feature-card-description">{{ $t('home.features.contentOwnership.description') }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <img :src="whitePartnerIcon" alt="Maintenance & Education" />
            </div>
            <h3 class="feature-card-title">{{ $t('home.features.maintenance.title') }}</h3>
            <p class="feature-card-description">{{ $t('home.features.maintenance.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="section solution-section">
      <div class="container">
        <div class="solution-content fade-in" :class="{ 'visible': solutionVisible }">
          <h2 class="trusted-by-title">{{ $t('home.trustedBy') }}</h2>
        </div>
      </div>
      <div class="container">
        <div class="trusted-by-content fade-in" :class="{ 'visible': solutionVisible }">        
          <div class="trusted-by-carousel-wrapper">
            <div class="carousel-container">
              <div class="carousel-track">
                <div class="client-logo" v-for="(client, index) in [...clientLogos, ...clientLogos]" :key="`${client.name}-${index}`"
                     @click="handleClientLogoClick(client.name)">
                  <img :src="client.logo" :alt="client.name" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Testimonials Section -->
        <div class="testimonials-section fade-in" :class="{ 'visible': solutionVisible }">
          <div class="testimonials-grid">
            <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
              <div class="testimonial-content">
                <p class="testimonial-text">"{{ testimonial.text }}"</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar" v-if="testimonial.avatar">
                  <img :src="testimonial.avatar" :alt="testimonial.name" />
                </div>
                <div class="author-info">
                  <div class="author-name">{{ testimonial.name }}</div>
                  <div class="author-role">{{ testimonial.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="kontak" class="section contact">
      <div class="container">
        <div class="contact-content fade-in" :class="{ 'visible': contactVisible }">
          <h3>{{ $t('home.contact.title') }}</h3>
          <p>{{ $t('home.contact.description') }}</p>
          <div class="contact-methods">
            <div class="contact-method">
              <strong>{{ $t('home.contact.email') }}</strong> info@stratigo.co.id
            </div>
            <div class="contact-method">
              <strong>{{ $t('home.contact.phone') }}</strong> +6287881332121
            </div>
            <div class="contact-method">
              <strong>{{ $t('home.contact.address') }}</strong> {{ $t('home.contact.addressValue') }}
            </div>
          </div>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary"
            @click.prevent="handleWhatsAppClick('https://wa.me/6287881332121', 'Konsultasi', 'contact')"
          >
            {{ $t('home.consultationNow') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Showcase Section -->
    <section class="section showcase-section">
      <div class="container">
        <div class="showcase-header fade-in" :class="{ 'visible': solutionVisible }">
          <h2 class="products-header fade-in" :class="{ 'visible': productsVisible }">
          {{ $t('home.showcase.caseStudies') }}
        </h2>
          <router-link to="/case-studies" class="showcase-view-all">{{ $t('home.showcase.viewAll') }}</router-link>
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
          {{ $t('home.showcase.blog') }}
        </h2>
          <router-link to="/blog" class="showcase-view-all">{{ $t('home.showcase.viewAll') }}</router-link>
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

    <!-- Footer -->
    <Footer />

    <!-- WhatsApp Floating Button -->
    <a href="#" target="_blank" rel="noopener noreferrer" 
       class="whatsapp-float" 
       @click.prevent="handleWhatsAppClick('https://wa.me/6287881332121', 'WhatsApp', 'floating_button')"
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
import { useI18n } from 'vue-i18n'
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
const servicesVisible = ref(false)
const trustedByVisible = ref(false)
const digitalPresenceVisible = ref(false)
const featuresVisible = ref(false)

const solutionVisible = ref(false)
const contactVisible = ref(false)

// Video ref
const heroVideoRef = ref(null)

// Handle video end - pause on last frame
const handleVideoEnd = () => {
  if (heroVideoRef.value) {
    heroVideoRef.value.pause()
  }
}

import izyLogo from '../assets/logos/izy-logo.webp'
import johnLogo from '../assets/logos/john-logo.png'
import enosLogo from '../assets/logos/enos-logo.webp'
import delyaLogo from '../assets/logos/delya-logo.webp'
import temuLogo from '../assets/logos/temu-logo-1.webp'
import strategoLogo from '../assets/icon/white-cross.webp'
import heroVideo from '../assets/hero.mp4'
import whiteCrossIcon from '../assets/icon/white-cross.webp'
import whiteExploreIcon from '../assets/icon/white-explore.webp'
import whiteProtectIcon from '../assets/icon/white-protect.webp'
import whitePartnerIcon from '../assets/icon/white-partner.webp'

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
    name: 'John',
    logo: johnLogo
  }
])

// Testimonials data - will be populated from i18n
const { t } = useI18n()
const testimonials = computed(() => [
  {
    text: t('home.testimonials.delya.text'),
    name: t('home.testimonials.delya.name'),
    role: t('home.testimonials.delya.role'),
    avatar: null
  },
  {
    text: t('home.testimonials.izy.text'),
    name: t('home.testimonials.izy.name'),
    role: t('home.testimonials.izy.role'),
    avatar: null
  },
  {
    text: t('home.testimonials.temu.text'),
    name: t('home.testimonials.temu.name'),
    role: t('home.testimonials.temu.role'),
    avatar: null
  }
])

// Get 3 most recent case studies and blog posts
const recentCaseStudies = computed(() => caseStudies.slice(0, 3))
const recentBlogPosts = computed(() => blogPosts.slice(0, 3))

// Methods
const handleScroll = () => {
  // Intersection observer for animations
  const heroSection = document.querySelector('.hero')
  const servicesSection = document.querySelector('.services')
  const trustedBySection = document.querySelector('.trusted-by-header')
  const digitalPresenceSection = document.querySelector('.digital-presence')
  const solutionSection = document.querySelector('.solution-section')
  const contactSection = document.querySelector('.contact')
  
  if (heroSection && isInViewport(heroSection)) {
    heroVisible.value = true
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
  const featuresSection = document.querySelector('.features-section')
  if (featuresSection && isInViewport(featuresSection)) {
    featuresVisible.value = true
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

const handleWhatsAppClick = (url, buttonName, section) => {
  // Track button click
  trackButtonClick(buttonName, section)
  // Report conversion and redirect
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url)
  } else {
    // Fallback if function not loaded
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}


// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Hero Styles */
.hero {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light-bg);
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  text-align: center;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-content {
  width: 100%;
  position: relative;
  z-index: 2;
}

.hero-simple {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.hero-logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.hero-title-large {
  font-family: 'League Spartan', sans-serif;
  font-size: 8rem;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0;
}

.hero-description {
  font-size: 1.8rem;
  color: white;
  opacity: 0.6;
  line-height: 1.6;
  margin: 1.5rem 0 0 0;
  font-weight: 400;
  max-width: 700px;
}

.hero-cta {
  margin-top: 3rem;
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
  height: 50px;
  padding: 0 1.5rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}

.button-text {
  font-family: 'League Spartan', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: -0.01em;
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
  background: black;
  color: white;
  transform: translateX(4px);
  opacity: 1;
  pointer-events: auto;
}

.product-card:hover .product-button svg {
  stroke: white;
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

.trusted-by-content {
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: 8rem;
  gap: 4rem;
  align-items: start;
}

.trusted-by-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: left;
  margin-bottom: 0;
}

.trusted-by-number {
  color: white;
  text-align: left;
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.trusted-by-carousel-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1rem;
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

/* Testimonials Section */
.testimonials-section {
  margin-top: 5rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.testimonial-card {
  background: var(--light-secondary);
  border: 1px solid var(--light-tertiary);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  border-color: white;
  transform: translateY(-4px);
}

.testimonial-content {
  flex: 1;
  margin-bottom: 2rem;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 0;
  font-style: italic;
}

.testimonial-author {
  border-top: 1px solid var(--light-tertiary);
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--light-tertiary);
  border: 1px solid var(--light-tertiary);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  letter-spacing: -0.01em;
}

.author-role {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 400;
}

/* Digital Presence Section */
.digital-presence {
  background: #000;
  padding: 5rem 0;
}

/* Features Section */
.features-section {
  background: var(--light-bg);
  padding: 5rem 0;
}

.features-header {
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 3rem;
  text-align: left;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: stretch;
}

.feature-card {
  background: var(--light-secondary);
  border: 1px solid var(--light-tertiary);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card:nth-child(1) {
  margin-top: 0;
}

.feature-card:nth-child(2) {
  margin-top: 3rem;
}

.feature-card:nth-child(3) {
  margin-top: 6rem;
}

.feature-card:nth-child(4) {
  margin-top: 9rem;
}

.feature-card:hover {
  border-color: white;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.feature-card-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.feature-card-description {
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
  flex: 1;
}

.digital-presence-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  align-items: start;
}

.digital-presence-number {
  font-size: 12rem;
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
  font-size: 3.5rem;
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
  font-size: 1.3rem;
  opacity: 0.8;
  font-weight: 300;
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
    min-height: 100vh;
    height: 100vh;
    padding: 0 1.5rem;
  }
  
  .hero-simple {
    gap: 2rem;
  }
  
  .hero-logo {
    height: 40px;
  }
  
  .hero-title-large {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 1.1rem;
    margin: 1rem 0 0 0;
  }

  .hero-cta {
    margin-top: 2rem;
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
    display: flex !important;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    width: 44px;
    height: 44px;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    opacity: 1 !important;
    pointer-events: auto !important;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0;
  }
  
  .product-button .button-text {
    display: none;
  }
  
  .product-button svg {
    width: 20px;
    height: 20px;
  }
  
  .product-light .product-button {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .product-dark .product-button {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .product-button:hover {
    background: black;
    color: white;
    transform: translateX(4px);
  }
  
  .product-light .product-button:hover {
    background: black;
    color: white;
  }
  
  .product-dark .product-button:hover {
    background: white;
    color: black;
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
    font-size: 4rem;
  }

  .solution-section {
    padding: 2rem 0 3rem;
  }

  .trusted-by-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    padding: 1rem 0;
  }

  .trusted-by-title {
    text-align: center;
    width: 100%;
  }

  .trusted-by-number {
    text-align: center;
    width: 100%;
  }
  
  .digital-presence-main-text {
    font-size: 1.5rem;
    line-height: 1.4;
  }
  
  .digital-presence-sub-text {
    font-size: 1rem;
  }

  .trusted-by-carousel-wrapper {
    padding-top: 0;
  }

  .features-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem 1.5rem;
    min-height: auto;
    margin-top: 0 !important;
  }

  .feature-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 1.5rem;
  }

  .feature-card-title {
    font-size: 1.25rem;
  }

  .feature-card-description {
    font-size: 0.95rem;
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

  .testimonials-section {
    margin-top: 3rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .testimonial-card {
    padding: 2rem 1.5rem;
    min-height: auto;
  }

  .testimonial-text {
    font-size: 1rem;
  }

  .author-name {
    font-size: 0.9rem;
  }

  .author-role {
    font-size: 0.8rem;
  }

  .author-avatar {
    width: 50px;
    height: 50px;
  }

  .contact-content h3 {
    font-size: 2rem;
  }

  .contact-content p {
    font-size: 1rem;
  }

  .contact-method {
    font-size: 0.9rem;
  }

  .showcase-card-description {
    font-size: 0.85rem;
  }

  .products-header {
    font-size: 0.9rem;
  }

  .features-header {
    font-size: 0.9rem;
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