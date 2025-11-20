<template>
  <div id="app">
    <!-- Header -->
    <header class="header" :class="{ 'scrolled': isScrolled }">
      <nav class="nav container">
        <div class="logo">
          <h2>Stratigo</h2>
        </div>
        <ul class="nav-links" :class="{ 'active': mobileMenuOpen }">
          <li><a href="#beranda" @click="closeMobileMenu('beranda')">Beranda</a></li>
          <li><a href="#layanan" @click="closeMobileMenu('layanan')">Layanan</a></li>
          <li><a href="#kontak" @click="closeMobileMenu('kontak')">Kontak</a></li>
        </ul>
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
          <h1 class="hero-title">
            Tingkatkan <span class="highlight">Brand Bisnis Anda</span> dengan Website yang<span class="highlight"> Profesional</span>
          </h1>
          <p class="hero-description">
            Stratigo menghadirkan website profesional yang dirancang secara custom untuk menarik perhatian calon klien dan konsumen
          </p>
          <div class="hero-buttons">
            <a href="https://wa.me/6287881332121" target="_blank" rel="noopener noreferrer" class="btn btn-primary" @click="trackButtonClick('Konsultasi Sekarang', 'hero')">Konsultasi Sekarang</a>
          </div>
        </div>
        <div class="hero-visual fade-in" :class="{ 'visible': heroVisible }">
          <div class="floating-card">
            <div class="card-content">
              <div class="code-lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line short"></div>
                <div class="line"></div>
                <div class="line short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>



    <!-- Digital Presence Section -->
    <section class="section digital-presence">
      <div class="container">
        <div class="digital-presence-content fade-in" :class="{ 'visible': digitalPresenceVisible }">
          <div class="digital-presence-text">
            <h2 class="digital-presence-title">
              Apakah bisnis Anda <span class="highlight-text">siap berkompetisi</span> di era digital?
            </h2>
            <div class="digital-presence-description">
              <p class="lead-text">
                Di era digital ini, <strong>masyarakat Indonesia menghabiskan lebih dari 7 jam setiap harinya di internet</strong>. 
                Website bukan hanya pelengkap—melainkan <strong>kebutuhan vital</strong> bagi bisnis yang ingin berkembang.
              </p>
              <p class="emphasis-text">
                Website adalah etalase digital bisnis Anda. Tempat pertama calon pelanggan mencari informasi dan menilai kredibilitas perusahaan Anda. Tanpa website profesional, bisnis Anda:
              </p>
              <ul class="challenge-list">
                <li>
                  <svg class="icon-cross" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                  <span>Sulit ditemukan calon pelanggan di mesin pencari</span>
                </li>
                <li>
                  <svg class="icon-cross" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                  <span>Terlihat kurang kredibel dan profesional</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="digital-presence-visual">
            <div class="stat-card">
              <div class="stat-content">
                <div class="stat-number">7+ Jam</div>
                <div class="stat-label">Waktu online rata-rata masyarakat Indonesia per hari</div>
                <div class="stat-note">Sumber: Data Penggunaan Internet Indonesia 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="section solution-section">
      <div class="container">
        <div class="solution-content fade-in" :class="{ 'visible': solutionVisible }">
          <h2 class="solution-title">
            Ingin website yang <span class="highlight-orange">profesional</span> dan <span class="highlight-orange">menarik pengunjung</span>?
          </h2>
          <p class="solution-subtitle">Di situlah Stratigo hadir untuk membantu Anda</p>
        </div>
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

    <!-- Packages Section Header -->
    <section id="layanan" class="section packages-header">
      <div class="container">
        <h2 class="section-title fade-in" :class="{ 'visible': packagesVisible }">Pilih Paket yang Sesuai untuk Bisnis Anda</h2>
        <p class="section-subtitle fade-in" :class="{ 'visible': packagesVisible }">
          Kami menawarkan tiga pilihan paket yang dirancang khusus untuk berbagai kebutuhan dan skala bisnis
        </p>
      </div>
    </section>

    <!-- Business Package -->
    <section class="section package-single business-package">
      <div class="container">
        <div class="package-content fade-in" :class="{ 'visible': businessVisible }">
          <div class="package-info">
            <div class="package-name-tag">Business</div>
            <h3 class="package-title">Paket Business</h3>
            <p class="package-description">Sempurna untuk bisnis yang baru membangun kehadiran digital</p>
            <div class="package-specs-list">
              <div class="spec-row">
                <span class="spec-label">Halaman</span>
                <span class="spec-value">1-5 Halaman</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Revisi</span>
                <span class="spec-value">Hingga 3x</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Desain</span>
                <span class="spec-value">Sederhana & Profesional</span>
              </div>
            </div>
          </div>
          <div class="package-features-box">
            <h4>Fitur Unggulan</h4>
            <ul class="features-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Desain responsif & menarik</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Blog untuk artikel & berita</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Galeri, slide, ikon & video</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>WhatsApp & form kontak</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Optimasi SEO dasar</span>
              </li>
            </ul>
            <a href="https://wa.me/6287881332121?text=Halo, saya tertarik dengan Paket Business" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn-package-cta"
               @click="trackButtonClick('Paket Business', 'packages')">
              Pilih Paket Business
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Prime Package -->
    <section class="section package-single prime-package">
      <div class="container">
        <div class="package-content fade-in" :class="{ 'visible': primeVisible }">
          <div class="package-info">
            <div class="package-name-tag popular">Prime <span class="badge-text">POPULER</span></div>
            <h3 class="package-title">Paket Prime</h3>
            <p class="package-description">Ideal untuk perusahaan berkembang dengan konten lebih lengkap</p>
            <div class="package-specs-list">
              <div class="spec-row">
                <span class="spec-label">Halaman</span>
                <span class="spec-value">5-10 Halaman</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Revisi</span>
                <span class="spec-value">Hingga 4x</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Desain</span>
                <span class="spec-value">Interaktif & Profesional</span>
              </div>
            </div>
          </div>
          <div class="package-features-box">
            <h4>Fitur Unggulan</h4>
            <ul class="features-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Semua fitur Business</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Katalog produk/portfolio</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Instagram Feed integration</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Newsletter subscription</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Live Chat support</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Animasi ringan</span>
              </li>
            </ul>
            <a href="https://wa.me/6287881332121?text=Halo, saya tertarik dengan Paket Prime" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn-package-cta"
               @click="trackButtonClick('Paket Prime', 'packages')">
              Pilih Paket Prime
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Package -->
    <section class="section package-single corporate-package">
      <div class="container">
        <div class="package-content fade-in" :class="{ 'visible': corporateVisible }">
          <div class="package-info">
            <div class="package-name-tag">Corporate</div>
            <h3 class="package-title">Paket Corporate</h3>
            <p class="package-description">Solusi premium untuk perusahaan besar dengan kebutuhan kompleks</p>
            <div class="package-specs-list">
              <div class="spec-row">
                <span class="spec-label">Halaman</span>
                <span class="spec-value">10-20+ Halaman</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Revisi</span>
                <span class="spec-value">Hingga 4x + Meeting</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Desain</span>
                <span class="spec-value">Advanced & Brand Identity</span>
              </div>
            </div>
          </div>
          <div class="package-features-box">
            <h4>Fitur Unggulan</h4>
            <ul class="features-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Semua fitur Prime</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Fokus identitas brand</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Animasi kompleks</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Fitur khusus custom</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Proses revisi lengkap</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Konsultasi via meeting</span>
              </li>
            </ul>
            <a href="https://wa.me/6287881332121?text=Halo, saya tertarik dengan Paket Corporate" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn-package-cta"
               @click="trackButtonClick('Paket Corporate', 'packages')">
              Pilih Paket Corporate
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="kontak" class="section contact">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info fade-in" :class="{ 'visible': contactVisible }">
            <h3>The world moves fast. Don't just keep pace. Stay ahead.</h3>
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
                <strong>Email:</strong> info@stratigo.id
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
const heroVisible = ref(false)
const servicesVisible = ref(false)
const trustedByVisible = ref(false)
const digitalPresenceVisible = ref(false)
const solutionVisible = ref(false)
const packagesVisible = ref(false)
const businessVisible = ref(false)
const primeVisible = ref(false)
const corporateVisible = ref(false)
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
  const servicesSection = document.querySelector('.services')
  const trustedBySection = document.querySelector('.trusted-by-header')
  const digitalPresenceSection = document.querySelector('.digital-presence')
  const solutionSection = document.querySelector('.solution-section')
  const packagesSection = document.querySelector('.packages-header')
  const businessSection = document.querySelector('.business-package')
  const primeSection = document.querySelector('.prime-package')
  const corporateSection = document.querySelector('.corporate-package')
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
  if (solutionSection && isInViewport(solutionSection)) {
    solutionVisible.value = true
  }
  if (packagesSection && isInViewport(packagesSection)) {
    packagesVisible.value = true
  }
  if (businessSection && isInViewport(businessSection)) {
    businessVisible.value = true
  }
  if (primeSection && isInViewport(primeSection)) {
    primeVisible.value = true
  }
  if (corporateSection && isInViewport(corporateSection)) {
    corporateVisible.value = true
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
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 100%);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
}

.header.scrolled {
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 100%);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo h2 {
  background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.8rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-orange);
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
  background: var(--primary-orange);
  transition: all 0.3s ease;
}

/* Hero Styles */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-card {
  background: var(--dark-secondary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--dark-tertiary);
  animation: float 6s ease-in-out infinite;
}

.code-lines {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.line {
  height: 8px;
  background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange));
  border-radius: 4px;
  width: 200px;
}

.line.short {
  width: 120px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Packages Header */
.packages-header {
  background: var(--dark-bg);
  padding: 4rem 0 2rem;
}

/* Package Single Styles */
.package-single {
  padding: 4rem 0;
  background: var(--dark-bg);
}

.business-package {
  background: var(--dark-bg);
}

.prime-package {
  background: var(--dark-bg);
}

.corporate-package {
  background: var(--dark-bg);
}

.package-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
}

.package-info {
  position: relative;
}

.package-name-tag {
  display: inline-block;
  background: transparent;
  color: var(--primary-orange);
  padding: 0;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.package-name-tag.popular {
  background: transparent;
  position: relative;
  padding-right: 0;
}

.badge-text {
  display: inline;
  background: transparent;
  color: var(--primary-orange);
  padding: 0 0 0 0.5rem;
  border-radius: 0;
  font-size: 0.75rem;
}

.package-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.package-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 3rem;
}

.package-specs-list {
  background: transparent;
  border-radius: 0;
  padding: 0;
  border: none;
  border-top: 1px solid var(--dark-tertiary);
  padding-top: 2rem;
}

.prime-package .package-specs-list {
  background: transparent;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.spec-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.spec-row:first-child {
  padding-top: 0;
}

.spec-label {
  color: var(--text-secondary);
  font-weight: 400;
  font-size: 0.95rem;
}

.spec-value {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
}

.package-features-box {
  background: transparent;
  border-radius: 0;
  padding: 0;
  border: none;
  border-top: 1px solid var(--dark-tertiary);
  padding-top: 2rem;
  position: sticky;
  top: 100px;
}

.prime-package .package-features-box {
  background: transparent;
  border-color: var(--dark-tertiary);
}

.package-features-box h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  letter-spacing: 0;
  text-transform: uppercase;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.875rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.features-list li svg {
  color: var(--primary-orange);
  flex-shrink: 0;
  margin-top: 0.25rem;
  width: 18px;
  height: 18px;
}

.btn-package-cta {
  display: inline-block;
  width: auto;
  padding: 1rem 2.5rem;
  background: var(--primary-orange);
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-package-cta:hover {
  background: var(--secondary-orange);
  transform: translateY(-1px);
}

/* Trusted By Header Styles */
.trusted-by-header {
  background: var(--dark-bg);
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
  padding: 1rem 2rem;
  background: transparent;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  min-width: 180px;
  height: 100px;
  cursor: pointer;
}

.client-logo:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 107, 53, 0.2);
  border-color: var(--primary-orange);
}

.client-logo img {
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  filter: brightness(0) invert(1) opacity(0.4);
  transition: all 0.3s ease;
}

.client-logo:hover img {
  filter: brightness(0) invert(1) opacity(0.8);
}

@keyframes scroll-infinite {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.carousel-container:hover .carousel-track {
  animation-play-state: paused;
}

/* Digital Presence Section */
.digital-presence {
  background: var(--dark-bg);
  padding: 5rem 0;
}

.digital-presence-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.digital-presence-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 2rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.highlight-text {
  color: var(--primary-orange);
  position: relative;
}

.digital-presence-description {
  color: var(--text-secondary);
  line-height: 1.8;
}

.lead-text {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.lead-text strong {
  color: var(--primary-orange);
  font-weight: 600;
}

.emphasis-text {
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.challenge-list {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.challenge-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: var(--dark-secondary);
  border-radius: 0.5rem;
  border-left: 3px solid #ef4444;
}

.challenge-list li span {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.icon-cross {
  color: #ef4444;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.digital-presence-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.stat-card {
  background: linear-gradient(135deg, var(--dark-secondary), var(--dark-tertiary));
  border-radius: 1.5rem;
  padding: 3rem 2.5rem;
  border: 2px solid var(--primary-orange);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange));
}

.stat-content {
  text-align: center;
}

.stat-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: var(--primary-orange);
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
  border-top: 1px solid var(--dark-tertiary);
}

/* Solution Section */
.solution-section {
  background: var(--dark-secondary);
  padding: 3rem 0 4rem;
  overflow: hidden;
}

.solution-content {
  text-align: center;
  margin-bottom: 3rem;
}

.solution-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.highlight-orange {
  color: var(--primary-orange);
}

.solution-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Case Studies Styles */
.case-studies {
  background: var(--dark-bg);
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.case-study-card {
  background: var(--dark-secondary);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--dark-tertiary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.case-study-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
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
  background: var(--primary-orange);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.case-study-content {
  padding: 2rem;
}

.case-study-content h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.case-study-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
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
  border-radius: 1rem;
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
  background: var(--dark-bg);
  border-radius: 0.5rem;
  border: 1px solid var(--dark-tertiary);
}

.result-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-orange);
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
  color: var(--primary-orange);
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
  background: var(--dark-secondary);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 500;
  border: 1px solid var(--dark-tertiary);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: var(--primary-orange);
  transform: translateY(-2px);
}

/* Contact Styles */
.contact {
  background: var(--dark-secondary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--primary-orange);
  letter-spacing: -0.02em;
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
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
  color: var(--primary-orange);
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
  background: var(--dark-bg);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--dark-tertiary);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 1rem;
  background: var(--dark-secondary);
  border: 1px solid var(--dark-tertiary);
  border-radius: 0.5rem;
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
  background: var(--dark-secondary);
  color: var(--text-primary);
}

.form-group select option:disabled {
  color: var(--text-muted);
}

/* Footer Styles */
.footer {
  background: var(--dark-bg);
  border-top: 1px solid var(--dark-tertiary);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  font-family: 'Space Grotesk', sans-serif;
  color: var(--primary-orange);
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
  font-family: 'Space Grotesk', sans-serif;
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
  color: var(--primary-orange);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--dark-tertiary);
  color: var(--text-muted);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--dark-bg);
    flex-direction: column;
    padding: 2rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .nav-links.active {
    transform: translateX(0);
  }
  
  .hero {
    padding-top: 80px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .package-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .package-title {
    font-size: 2rem;
  }
  
  .package-features-box {
    position: static;
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
  
  .digital-presence-title {
    font-size: 2rem;
  }
  
  .stat-number {
    font-size: 3rem;
  }
  
  .stat-card {
    padding: 2rem 1.5rem;
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
  border-radius: 50%;
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