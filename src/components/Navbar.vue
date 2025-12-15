<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <nav class="nav container">
      <div class="logo">
        <router-link to="/" style="text-decoration: none; color: inherit;">
          <h2>Stratigo</h2>
        </router-link>
      </div>
      <ul class="nav-links" :class="{ 'active': mobileMenuOpen }">
        <li>
          <router-link to="/" @click="closeMobileMenu()">Beranda</router-link>
        </li>
        <li class="nav-item-dropdown" 
            @mouseenter="showDropdown = 'layanan'"
            @mouseleave="showDropdown = null">
          <a href="#layanan" @click="closeMobileMenu('layanan')">
            Layanan
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 4.5l3 3 3-3"/>
            </svg>
          </a>
          <div class="dropdown-menu" v-if="showDropdown === 'layanan'">
            <div class="dropdown-grid">
              <a href="#layanan" class="dropdown-card card-blue" @click="closeMobileMenu('layanan')">
                <span class="dropdown-card-text">Service Option 1</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </a>
              <a href="#layanan" class="dropdown-card card-light" @click="closeMobileMenu('layanan')">
                <span class="dropdown-card-text">Service Option 2</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </a>
              <a href="#layanan" class="dropdown-card card-dark" @click="closeMobileMenu('layanan')">
                <span class="dropdown-card-text">Service Option 3</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </a>
              <a href="#layanan" class="dropdown-card card-white" @click="closeMobileMenu('layanan')">
                <span class="dropdown-card-text">Service Option 4</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </a>
              <a href="#layanan" class="dropdown-card card-dark" @click="closeMobileMenu('layanan')">
                <span class="dropdown-card-text">Service Option 5</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </a>
              <a href="#layanan" class="dropdown-card card-dark" @click="closeMobileMenu('layanan')">
                <span class="dropdown-card-text">Service Option 6</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li>
          <router-link to="/case-studies" @click="closeMobileMenu()">Case Studies</router-link>
        </li>
        <li>
          <router-link to="/blog" @click="closeMobileMenu()">Blog</router-link>
        </li>
       
        <li class="mobile-nav-buttons">
          <a href="#kontak" class="btn-nav-secondary" @click="closeMobileMenu('kontak')">Hubungi Kami</a>
          <a href="https://wa.me/6287881332121" target="_blank" rel="noopener noreferrer" class="btn-nav-primary" @click="trackButtonClick('Konsultasi Sekarang', 'navbar'); closeMobileMenu()">
            Konsultasi Sekarang
          </a>
        </li>
      </ul>
      <div class="nav-cta">
        <a href="#kontak" class="btn-nav-secondary">Hubungi Kami</a>
        <a href="https://wa.me/6287881332121" target="_blank" rel="noopener noreferrer" class="btn-nav-primary" @click="trackButtonClick('Konsultasi Sekarang', 'navbar')">
          Konsultasi Sekarang
        </a>
      </div>
      <div class="mobile-menu-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAnalytics } from '../composables/useAnalytics.js'

const router = useRouter()
const { trackButtonClick } = useAnalytics()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const showDropdown = ref(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = (section) => {
  mobileMenuOpen.value = false
  if (section && router.currentRoute.value.path === '/') {
    // Only scroll if we're on the home page
    setTimeout(() => {
      const element = document.querySelector(`#${section}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Navbar styles are in Home.vue - they'll be shared via global styles */
</style>
