<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <nav class="nav container">
      <div class="logo">
        <router-link to="/" style="text-decoration: none; color: inherit;">
          <img :src="strategoLogo" alt="Stratigo" class="logo-img" />
        </router-link>
      </div>
      <ul class="nav-links" :class="{ 'active': mobileMenuOpen }">
        <li>
          <router-link to="/" @click="closeMobileMenu()">Beranda</router-link>
        </li>
        <li class="nav-item-dropdown" 
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave">
          <a href="#layanan" @click.prevent="toggleDropdown('layanan')">
            Layanan
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 4.5l3 3 3-3"/>
            </svg>
          </a>
          <div class="dropdown-menu" v-if="showDropdown === 'layanan'">
            <div class="dropdown-grid">
              <router-link to="/portfolio-website" class="dropdown-card card-dark" @click="closeMobileMenu()">
                <span class="dropdown-card-text">Portfolio Website</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </router-link>
              <router-link to="/unigo" class="dropdown-card card-light" @click="closeMobileMenu()">
                <span class="dropdown-card-text">E-Learning Apps</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </router-link>
              <router-link to="/reservigo" class="dropdown-card card-light" @click="closeMobileMenu()">
                <span class="dropdown-card-text">Booking System</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </router-link>
              <router-link to="/custom" class="dropdown-card card-dark" @click="closeMobileMenu()">
                <span class="dropdown-card-text">Custom Software</span>
                <div class="dropdown-card-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 4l4 4-4 4"/>
                  </svg>
                </div>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <router-link to="/case-studies" @click="closeMobileMenu()">Case Studies</router-link>
        </li>
        <li>
          <router-link to="/blog" @click="closeMobileMenu()">Blog</router-link>
        </li>
       
    
      </ul>
     
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
import strategoLogo from '../assets/logos/stratigo-logo-white.webp'

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
  // Close dropdown when mobile menu is closed
  if (!mobileMenuOpen.value) {
    showDropdown.value = null
  }
}

const handleMouseEnter = () => {
  // Only show dropdown on hover for desktop
  if (window.innerWidth > 768) {
    showDropdown.value = 'layanan'
  }
}

const handleMouseLeave = () => {
  // Only hide dropdown on mouse leave for desktop
  if (window.innerWidth > 768) {
    showDropdown.value = null
  }
}

const toggleDropdown = (dropdownName) => {
  // Check if we're on mobile (window width <= 768px)
  const isMobile = window.innerWidth <= 768
  
  if (isMobile) {
    // On mobile, toggle dropdown on click
    if (showDropdown.value === dropdownName) {
      showDropdown.value = null
    } else {
      showDropdown.value = dropdownName
    }
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  showDropdown.value = null
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

