<template>
  <div id="app">
    <!-- Header -->
    <header class="header" :class="{ 'scrolled': isScrolled }">
      <nav class="nav container">
        <div class="logo">
          <h2>Stratigo</h2>
        </div>
        <ul class="nav-links" :class="{ 'active': mobileMenuOpen }">
          <li>
            <a href="#beranda" @click="closeMobileMenu('beranda')">Beranda</a>
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
            <a href="#kontak" @click="closeMobileMenu('kontak')">Kontak</a>
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

    <!-- Hero Section -->
    <section id="beranda" class="hero">
      <div class="hero-content container">
        <div class="hero-text fade-in" :class="{ 'visible': heroVisible }">
          <p class="hero-content-text">
            Tingkatkan Brand Bisnis Anda dengan Website yang Profesional. Stratigo menghadirkan website profesional yang dirancang secara custom untuk menarik perhatian calon klien dan konsumen.
          </p>
       
          <div class="hero-buttons">
            <a href="https://wa.me/6287881332121" target="_blank" rel="noopener noreferrer" class="btn btn-primary" @click="trackButtonClick('Konsultasi Sekarang', 'hero')">
              Konsultasi Sekarang <span class="btn-arrow">></span>
            </a>
          </div>
        </div>
        <div class="hero-visual fade-in" :class="{ 'visible': heroVisible }">
          <div class="hero-typography">
            <div class="hero-word-large">We build</div>
            <div class="hero-word-large">{{ animatedText }}<span class="typing-cursor">|</span></div>
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
          <a href="#layanan" class="product-card product-blue" @click="trackButtonClick('Portfolio Website', 'products')">
            <div class="product-content">
              <h3 class="product-title">Portfolio Website</h3>
              <p class="product-description">Website profesional untuk menampilkan karya dan portofolio Anda dengan desain yang menarik dan modern.</p>
            </div>
            <div class="product-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 5l6 5-6 5"/>
              </svg>
            </div>
          </a>
          <a href="#layanan" class="product-card product-light" @click="trackButtonClick('E-Learning Apps', 'products')">
            <div class="product-content">
              <h3 class="product-title">E-Learning Apps</h3>
              <p class="product-description">Aplikasi pembelajaran online yang interaktif dan mudah digunakan untuk berbagai kebutuhan edukasi.</p>
            </div>
            <div class="product-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 5l6 5-6 5"/>
              </svg>
            </div>
          </a>
          <a href="#layanan" class="product-card product-dark" @click="trackButtonClick('Customer AI Chatbot', 'products')">
            <div class="product-content">
              <h3 class="product-title">Customer AI Chatbot</h3>
              <p class="product-description">Chatbot AI cerdas untuk customer service yang dapat menjawab pertanyaan pelanggan 24/7 secara otomatis.</p>
            </div>
            <div class="product-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 5l6 5-6 5"/>
              </svg>
            </div>
          </a>
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
              <strong>Masyarakat Indonesia menghabiskan lebih dari 7 jam setiap harinya di internet</strong>. Website bukan hanya pelengkap, melainkan <strong>kebutuhan vital</strong> bagi bisnis yang ingin berkembang.
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

    <!-- Contact Section -->
    <section id="kontak" class="section contact">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info fade-in" :class="{ 'visible': contactVisible }">
            <h3>Realisasikan ide bisnis Anda dengan kami.</h3>
            <p>Siap untuk mengembangkan bisnis Anda dengan website profesional? Hubungi tim Stratigo sekarang!</p>
            <div class="collaboration-points">
              <div class="collaboration-point">
                <svg class="checkmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <span>Booking Konsultasi gratis</span>
              </div>
              <div class="collaboration-point">
                <svg class="checkmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <span>Pertanyaan seputar jasa Stratigo</span>
              </div>
            </div>
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
          </div>
          <div class="contact-form fade-in" :class="{ 'visible': contactVisible }">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" v-model="form.name" placeholder="Nama Lengkap" required>
              </div>
              <div class="form-group">
                <input type="email" v-model="form.email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="tel" v-model="form.phone" placeholder="Nomor Telepon">
              </div>
              <div class="form-group">
                <input type="text" v-model="form.company" placeholder="Nama Perusahaan">
              </div>
              <div class="form-group">
                <select v-model="form.service" required>
                  <option value="" disabled>Pilih Layanan yang Diinginkan</option>
                  <option value="custom-website">Custom Website</option>
                  <option value="ai-chatbot">AI Chatbot</option>
                  <option value="custom-software">Custom Software</option>
                </select>
              </div>
              <div class="form-group">
                <textarea v-model="form.message" placeholder="Pesan Anda" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Stratigo</h3>
            <p>Tingkatkan Identitas Bisnis Anda Dengan Website yang Profesional</p>
          </div>
          <div class="footer-links">
            <div class="footer-section">
              <h4>Layanan</h4>
              <ul>
                <li><a href="#layanan">Custom Website</a></li>
                <li><a href="#layanan">AI Chatbot</a></li>
                <li><a href="#layanan">Custom Software</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Perusahaan</h4>
              <ul>
                <li><a href="#tentang">Tentang Kami</a></li>
                <li><a href="#kontak">Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Stratigo. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>

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
import { ref, onMounted, onUnmounted } from 'vue'
import caseStudy1Image from './assets/stratigo-ai-demo/demo-1.png'
import { useAnalytics } from './composables/useAnalytics.js'

// Initialize analytics
const { trackEvent, trackFormSubmission, trackButtonClick, trackServiceInterest, trackNavigation } = useAnalytics()

// Reactive data
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const showDropdown = ref(null)
const heroVisible = ref(false)
const productsVisible = ref(false)
const servicesVisible = ref(false)
const trustedByVisible = ref(false)
const digitalPresenceVisible = ref(false)

// Typing animation for hero text
const animatedText = ref('Websites.')
const typingWords = ['Websites.', 'Software.']
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

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

const clientLogos = ref([
  {
    name: 'IZY',
    logo: new URL('./assets/logos/izy-logo.png', import.meta.url).href
  },
  {
    name: 'ENOS',
    logo: new URL('./assets/logos/enos-logo.png', import.meta.url).href
  },
  {
    name: 'DELYA',
    logo: new URL('./assets/logos/delya-logo.png', import.meta.url).href
  },
  {
    name: 'Temu',
    logo: new URL('./assets/logos/temu-logo-1.png', import.meta.url).href
  },
  {
    name: 'IZY',
    logo: new URL('./assets/logos/izy-logo.png', import.meta.url).href
  },
  {
    name: 'ENOS',
    logo: new URL('./assets/logos/enos-logo.png', import.meta.url).href
  },
  {
    name: 'Temu',
    logo: new URL('./assets/logos/temu-logo-1.png', import.meta.url).href
  }
])

const techStack = ref([
  'Vue.js', 'React', 'Python', 'Node.js', 'TypeScript', 'JavaScript', 'SQL', 'NoSQL'
])

const caseStudies = ref([
  {
    title: 'Travel Agency Website',
    category: 'Custom Website',
    description: 'Membangun website modern untuk travel agency yang menampilkan paket wisata, booking system, dan galeri destinasi.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'TypeScript', 'API'],
    results: [
      { value: '50+', label: 'Paket Wisata' },
      { value: '3x', label: 'Peningkatan Booking' }
    ]
  },
  {
    title: 'Company Website untuk Brand Otomotif',
    category: 'Custom Website',
    description: 'Membangun website perusahaan untuk brand otomotif yang menjual berbagai produk kendaraan.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'TypeScript'],
    results: [
      { value: '20+', label: 'Foto produk' },
      { value: '4+', label: 'Tahun pengalaman' }
    ]
  },
  {
    title: 'AI untuk Financial Reporting',
    category: 'Custom Software',
    description: 'Membangun sistem Artificial Intelligence yang secara otomatis menghasilkan laporan keuangan dari berbagai sumber data.',
    image: caseStudy1Image,
    technologies: ['Python', 'SQL', 'Vue', 'AI'],
    results: [
      { value: '90%', label: 'Pengurangan Waktu Manual' },
      { value: '99%', label: 'Akurasi Data' }
    ]
  }
])

// Methods
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
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

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
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

const closeMobileMenu = (destination = '') => {
  mobileMenuOpen.value = false
  if (destination) {
    trackNavigation(destination)
  }
}

const submitForm = () => {
  // Validate form
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Mohon lengkapi semua field yang wajib diisi.')
    return
  }
  
  // Track form submission
  trackFormSubmission('contact_form', {
    service: form.value.service,
    has_company: !!form.value.company,
    has_phone: !!form.value.phone
  })
  
  // Create email content
  const subject = `Inquiry dari ${form.value.name} - ${form.value.service || 'Layanan Umum'}`
  const body = `Halo Tim Stratigo,

Saya ${form.value.name} dari ${form.value.company || 'perusahaan'}.

Layanan yang diminati: ${form.value.service || 'Belum ditentukan'}

Pesan:
${form.value.message}

Kontak saya:
Email: ${form.value.email}${form.value.phone ? `
Telepon: ${form.value.phone}` : ''}

Terima kasih,
${form.value.name}`

  // Create mailto URL
  const mailtoUrl = `mailto:info@stratigo.co.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  
  // Open email client
  window.location.href = mailtoUrl
  
  // Show success message
  alert('Email client Anda akan terbuka dengan pesan yang sudah diisi. Silakan kirim email tersebut.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  }
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
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  backdrop-filter: none;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header.scrolled {
  background: transparent;
  box-shadow: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  gap: 3rem;
}

.logo h2 {
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 700;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.nav-links li {
  position: relative;
}

.mobile-nav-buttons {
  display: none;
}

.nav-item-dropdown::after {
  content: '';
  position: absolute;
  top: 100%;
  left: -20px;
  right: -20px;
  height: 0.5rem;
  background: transparent;
}

.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  font-family: 'League Spartan', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.01em;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-item-dropdown a {
  position: relative;
}

.nav-item-dropdown:hover a {
  border-bottom: 1px solid var(--text-primary);
}

.dropdown-arrow {
  transition: transform 0.3s ease;
}

.nav-item-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: rgba(128, 128, 128, 0.3);
  backdrop-filter: blur(80px) saturate(200%);
  -webkit-backdrop-filter: blur(80px) saturate(200%);
  border: none;
  min-width: 600px;
  z-index: 1001;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.dropdown-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.dropdown-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  aspect-ratio: 1;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 1.5rem;
  min-width: 180px;
  min-height: 180px;
}

.dropdown-card:hover {
  transform: translateY(-2px);
}

.card-blue {
  background: var(--electric-blue);
}

.card-light {
  background: #e8e8e8;
}

.card-dark {
  background: #1a1a1a;
}

.card-white {
  background: #ffffff;
}

.dropdown-card-text {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: left;
}

.card-blue .dropdown-card-text,
.card-dark .dropdown-card-text {
  color: white;
}

.card-light .dropdown-card-text,
.card-white .dropdown-card-text {
  color: #1a1a1a;
}

.dropdown-card-button {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.card-blue .dropdown-card-button {
  background: white;
  color: var(--electric-blue);
}

.card-light .dropdown-card-button {
  background: #d0d0d0;
  color: #1a1a1a;
}

.card-dark .dropdown-card-button {
  background: #2a2a2a;
  color: white;
}

.card-white .dropdown-card-button {
  background: #f0f0f0;
  color: #1a1a1a;
}

.dropdown-card:hover .dropdown-card-button {
  transform: translateX(4px);
}

.nav-cta {
  display: flex;
  gap: 1rem;
  align-items: center;
  white-space: nowrap;
}

.btn-nav-secondary {
  padding: 0.75rem 1.5rem;
  background: var(--light-secondary);
  color: var(--text-primary);
  text-decoration: none;
  font-family: 'League Spartan', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: 1px solid var(--light-tertiary);
}

.btn-nav-secondary:hover {
  background: var(--light-tertiary);
}

.btn-nav-primary {
  padding: 0.75rem 1.5rem;
  background: var(--electric-blue);
  color: white;
  text-decoration: none;
  font-family: 'League Spartan', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.btn-nav-primary:hover {
  background: var(--cyan-blue);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--electric-blue);
  transition: all 0.3s ease;
}

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
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  position: relative;
  z-index: 1;
  flex: 1;
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
  max-width: 90%;
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
  justify-content: flex-end;
  align-items: center;
  position: relative;
}

.hero-typography {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0;
}

.hero-word-large {
  font-family: 'League Spartan', sans-serif;
  font-size: 8rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 0.9;
  letter-spacing: -0.02em;
  white-space: nowrap;
  opacity: 0.95;
}

.hero-word-large:first-child {
  margin-right: -2rem;
}

.hero-word-large:last-child {
  margin-left: -1rem;
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
  background: #1a1a1a;
  border-radius: 0;
  border: 1px solid transparent;
  min-width: 180px;
  height: 100px;
}

.client-logo img {
  max-width: 100%;
  max-height: 60px;
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
  background: var(--light-secondary);
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

/* Contact Styles */
.contact {
  background: var(--light-secondary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h3 {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--electric-blue);
  letter-spacing: -0.02em;
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
  letter-spacing: 0.02em;
}

.collaboration-points {
  margin-bottom: 2rem;
}

.collaboration-point {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.collaboration-point:last-child {
  margin-bottom: 0;
}

.collaboration-point .checkmark {
  color: var(--electric-blue);
  flex-shrink: 0;
}

.collaboration-point span {
  font-size: 1rem;
  line-height: 1.4;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-method {
  color: var(--text-secondary);
}

.contact-method strong {
  color: var(--text-primary);
}

.contact-form {
  background: var(--light-bg);
  padding: 2rem;
  border-radius: 0;
  border: 1px solid var(--light-tertiary);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 1rem;
  background: var(--light-secondary);
  border: 1px solid var(--light-tertiary);
  border-radius: 0;
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-orange);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.form-group select option {
  background: var(--light-secondary);
  color: var(--text-primary);
}

.form-group select option:disabled {
  color: var(--text-muted);
}

/* Footer Styles */
.footer {
  background: var(--light-bg);
  border-top: 1px solid var(--light-tertiary);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  font-family: 'League Spartan', sans-serif;
  color: var(--electric-blue);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.footer-brand p {
  color: var(--text-secondary);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.footer-section h4 {
  font-family: 'League Spartan', sans-serif;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--electric-blue);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--light-tertiary);
  color: var(--text-muted);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .nav {
    flex-wrap: nowrap;
    gap: 1rem;
    align-items: center;
  }
  
  .nav-cta {
    display: none;
  }
  
  .nav-links {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--light-bg);
    flex-direction: column;
    padding: 2rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    gap: 0;
    align-items: stretch;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }
  
  .nav-links.active {
    display: flex;
    transform: translateX(0);
  }
  
  .nav-links li {
    width: 100%;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid var(--light-tertiary);
  }
  
  .nav-links li.mobile-nav-buttons {
    border-bottom: none;
  }
  
  .nav-links li a {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .mobile-nav-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem 0 0 0 !important;
    border-bottom: none !important;
    margin-top: 1rem;
  }
  
  .mobile-nav-buttons a {
    width: 100%;
    text-align: center;
    padding: 0.75rem 1rem !important;
    border-radius: 0;
    display: block;
  }
  
  .nav-item-dropdown {
    width: 100%;
  }
  
  .dropdown-menu {
    position: static;
    margin-top: 0.5rem;
    width: 100%;
    min-width: auto;
    background: transparent;
    backdrop-filter: none;
    padding: 0;
    box-shadow: none;
  }
  
  .dropdown-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  .dropdown-card {
    min-width: auto;
    min-height: 120px;
    padding: 1.25rem;
  }
  
  .dropdown-card-text {
    font-size: 0.95rem;
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
    padding-top: 80px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
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
  
  .hero-visual {
    justify-content: center;
  }
  
  .hero-word-large {
    font-size: 4rem;
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
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
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