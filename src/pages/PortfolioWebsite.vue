<template>
  <div class="portfolio-website-page">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title fade-in" :class="{ 'visible': heroVisible }">Ciptakan Website yang Bekerja untuk Bisnis Anda.</h1>
        <p class="page-subtitle fade-in" :class="{ 'visible': heroVisible }">
          Dirancang khusus untuk brand Anda. Tanpa batasan template, tanpa kompromi kualitas.
        </p>
      </div>
    </section>

    <!-- Custom Design Section -->
    <section class="section feature-section feature-dark">
      <div class="container">
        <div class="feature-content fade-in" :class="{ 'visible': customVisible }">
          <div class="feature-text">
            <div class="feature-label">( DESAIN CUSTOM )</div>
            <h3 class="feature-title">Dibuat Khusus untuk Brand Anda</h3>
            <p class="feature-description">
              Website dibangun dari nol, sepenuhnya custom untuk brand Anda. <strong>Tanpa batasan template</strong>, tanpa kompromi kualitas. Dengan membangun website secara custom, Stratigo memastikan website terproteksi, bisa diakses dengan cepat, mobile-friendly, dan rentan terhadap error.
            </p>
            <div class="feature-highlight">
              <span>Manajemen konten mudah dengan <strong>Headless CMS</strong>. Update kapan saja tanpa coding.</span>
            </div>
            <div class="tools-section">
              <p class="tools-label">Tools we use</p>
              <div class="tools-logo">
                <svg width="452" height="160" viewBox="0 0 452 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2001_20)">
                  <path d="M46.6255 54.491C34.7181 45.5113 22.6571 38.5467 22.6571 28.4122C22.6571 22.3314 28.032 16.0975 35.4387 16.0975C48.799 16.0975 56.6428 30.0031 64.3448 47.3968H69.1408V7.40063H35.734C8.13908 7.40063 0 24.0637 0 37.109C0 54.2082 14.0928 64.3545 30.0638 76.2332C41.2506 84.494 50.6891 92.1774 50.6891 101.016C50.6891 110.585 44.1566 116.088 35.8757 116.088C27.0161 116.088 13.9392 104.492 4.79603 80.4402H0V124.785H38.2029C61.7341 124.785 73.4998 106.236 73.9368 91.3054C74.5157 73.9117 59.5606 64.2131 46.6255 54.5028V54.491Z" fill="#0B0B0B"/>
                  <path d="M150.626 111.009V64.2014C150.626 43.9087 137.986 38.5586 119.688 38.5586H87.1555L87.2972 71.602H92.6721C98.3423 57.5432 106.47 47.2555 115.187 47.2555C122.736 47.2555 126.079 53.7722 126.079 60.5836V66.9589C113.876 74.2063 81.3435 80.2871 81.3435 102.312C81.3435 115.063 90.2032 125.645 103.127 125.645C114.313 125.645 122.015 118.398 125.937 109.854C126.658 116.96 131.312 124.785 141.92 124.785H158.623V118.41C153.249 118.41 150.638 114.792 150.638 111.021L150.626 111.009ZM125.642 103.762C123.315 107.097 119.688 110.868 115.329 110.868C109.234 110.868 105.312 106.236 105.312 96.962C105.312 86.3796 119.546 79.5682 125.654 74.5009V103.773L125.642 103.762Z" fill="#0B0B0B"/>
                  <path d="M280.627 29.567C289.924 29.567 295.736 23.0502 295.736 14.6362C295.736 6.22216 289.924 0 280.627 0C271.33 0 265.377 6.23394 265.377 14.6362C265.377 23.0385 271.626 29.567 280.627 29.567Z" fill="#0B0B0B"/>
                  <path d="M425.016 38.5467V44.9221C434.171 44.9221 436.782 49.7065 432.281 62.5986L421.389 92.0124L407.45 56.2233C404.249 49.2705 405.997 44.9221 412.683 44.9221V38.5467H343.401V9.56891H336.868C334.978 19.4207 324.665 38.5467 307.088 38.5467V44.9221H318.416V104.48C318.416 114.473 321.759 125.786 341.227 125.786H371.444V93.0377H366.07C363.896 100.721 359.384 116.076 349.65 116.076C344.275 116.076 343.401 110.137 343.401 105.352V47.6796H371.149C374.492 47.6796 377.977 48.1156 379.714 52.1694L409.198 124.914C403.528 137.807 393.806 139.845 376.37 134.483V159.985C380.871 159.985 392.495 160.126 394.527 159.549C405.997 156.214 413.841 133.753 417.042 125.056L442.026 57.6727C444.791 50.2839 447.106 44.9221 451.902 44.9221V38.5467H425.028H425.016Z" fill="#0B0B0B"/>
                  <path d="M246.925 111.009V61.5969C246.925 46.0887 239.518 36.8144 224.846 36.8144C211.923 36.8144 204.434 45.7587 198.705 54.0785V38.5585H165.581V44.9338C171.251 44.9338 173.72 48.4102 173.72 52.464V111.009C173.72 114.921 170.814 118.398 165.581 118.398V124.773H206.832V118.398C201.599 118.398 198.693 114.921 198.693 111.009V61.9858C202.036 57.5431 205.899 52.7587 212.348 52.7587C218.444 52.7587 221.94 57.6845 221.94 63.6239V111.009C221.94 114.921 219.035 118.398 213.801 118.398V124.773H255.052V118.398C249.819 118.398 246.913 114.921 246.913 111.009H246.925Z" fill="#0B0B0B"/>
                  <path d="M295.157 111.009V38.5586H262.033V44.9339C267.704 44.9339 270.173 48.4103 270.173 52.4642V111.009C270.173 114.921 267.267 118.398 262.033 118.398V124.773H303.284V118.398C298.051 118.398 295.145 114.921 295.145 111.009H295.157Z" fill="#0B0B0B"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2001_20">
                  <rect width="452" height="160" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div class="cms-visual">
            <div class="cms-mockup">
              <div class="cms-header">
                <div class="cms-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="cms-title">Content Management</div>
              </div>
              <div class="cms-content">
                <div class="cms-sidebar">
                  <div class="sidebar-item active">
                    <div class="item-icon"></div>
                    <div class="item-text"></div>
                  </div>
                  <div class="sidebar-item">
                    <div class="item-icon"></div>
                    <div class="item-text"></div>
                  </div>
                  <div class="sidebar-item">
                    <div class="item-icon"></div>
                    <div class="item-text"></div>
                  </div>
                </div>
                <div class="cms-editor">
                  <div class="editor-field">
                    <div class="field-label"></div>
                    <div class="field-input"></div>
                  </div>
                  <div class="editor-field">
                    <div class="field-label"></div>
                    <div class="field-input large"></div>
                  </div>
                  <div class="editor-actions">
                    <div class="action-button"></div>
                    <div class="action-button primary"></div>
                  </div>
                </div>
              </div>
              <div class="cms-badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 1v14M1 8h14"/>
                </svg>
                Edit Anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Analytics Section -->
    <section class="section feature-section feature-light">
      <div class="container">
        <div class="feature-content reverse fade-in" :class="{ 'visible': analyticsVisible }">
          <div class="feature-visual-analytics">
            <div class="analytics-mockup">
              <div class="mockup-header">
                <div class="mockup-dot"></div>
                <div class="mockup-dot"></div>
                <div class="mockup-dot"></div>
              </div>
              <div class="mockup-content">
                <div class="analytics-stat">
                  <div class="stat-number">+247%</div>
                  <div class="stat-label">Peningkatan Traffic</div>
                </div>
                <div class="analytics-chart">
                  <div class="chart-bar" style="height: 40%"></div>
                  <div class="chart-bar" style="height: 60%"></div>
                  <div class="chart-bar" style="height: 80%"></div>
                  <div class="chart-bar" style="height: 100%"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="feature-text">
            <div class="feature-label">( ANALITIK REAL-TIME )</div>
            <h2 class="feature-title">Pantau Performa Website Setiap Saat</h2>
            <p class="feature-description">
              Setiap website dilengkapi <strong>Google Analytics yang dikonfigurasi khusus</strong> sesuai tujuan bisnis Anda.
            </p>
            <p class="feature-emphasis">
              Akses penuh ke dashboard analytics untuk memantau pengunjung, konversi, dan sumber traffic terbaik.
            </p>
            <div class="tools-section">
              <p class="tools-label">Tools we use</p>
              <div class="tools-logo">
                <img :src="googleAnalyticsLogo" alt="Google Analytics" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Empowerment Section -->
    <section class="section empowerment-section">
      <div class="container">
        <div class="empowerment-content fade-in" :class="{ 'visible': empowermentVisible }">
          <div class="empowerment-header">
            <div class="feature-label">( PEMBERDAYAAN PENUH )</div>
            <h2 class="empowerment-title">Maintenance Opsional.<br>Website Anda, Kendali Anda.</h2>
          </div>
          
          <div class="empowerment-grid">
            <div class="empowerment-card">
              <div class="empowerment-number">01</div>
              <h3>Pelatihan Lengkap</h3>
              <p>Kami melatih Anda mengelola website. Tidak perlu bergantung pada agensi selamanya.</p>
            </div>
            
            <div class="empowerment-card highlight">
              <div class="empowerment-number">02</div>
              <h3>Bebas Biaya Maintenance Bulanan</h3>
              <p>Setelah 6 bulan, kelola sendiri atau lanjut dengan layanan kami. Tidak ada biaya wajib.</p>
            </div>
            
            <div class="empowerment-card">
              <div class="empowerment-number">03</div>
              <h3>Full Ownership</h3>
              <p>Semua akses, tools, dan dokumentasi diserahkan ke Anda. Website adalah aset Anda.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section process-section">
      <div class="container">
        <div class="process-content fade-in" :class="{ 'visible': processVisible }">
          <div class="process-header">
            <div class="feature-label">( PROSES KERJA )</div>
            <h2 class="process-title">Proses Sederhana, Hasil Profesional</h2>
          </div>
          
          <div class="process-timeline">
            <div class="process-step">
              <div class="step-number">01</div>
              <h3>Isi Formulir Awal</h3>
              <p>Berikan informasi kebutuhan dasar Anda.</p>
            </div>
            
            <div class="process-connector"></div>
            
            <div class="process-step">
              <div class="step-number">02</div>
              <h3>Meeting Konsultasi</h3>
              <p>Diskusi solusi terbaik, scope, dan budget.</p>
            </div>
            
            <div class="process-connector"></div>
            
            <div class="process-step">
              <div class="step-number">03</div>
              <h3>Proposal</h3>
              <p>Kami kirimkan proposal detail untuk Anda.</p>
            </div>
            
            <div class="process-connector"></div>
            
            <div class="process-step">
              <div class="step-number">04</div>
              <h3>Finalisasi</h3>
              <p>Konfirmasi kesepakatan dan detail proyek.</p>
            </div>
            
            <div class="process-connector"></div>
            
            <div class="process-step">
              <div class="step-number">05</div>
              <h3>Pembayaran & Mulai</h3>
              <p>Payment untuk memulai pengerjaan proyek.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="empowerment-cta fade-in" :class="{ 'visible': ctaVisible }">
          <p class="cta-text">
            <strong>Dengan Stratigo, Anda tidak hanya mendapatkan website.</strong><br>
            Anda mendapatkan pengetahuan dan aset digital yang mendukung pertumbuhan bisnis Anda dalam jangka panjang.
          </p>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary"
            @click.prevent="handleWhatsAppClick('https://wa.me/6287881332121')"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import googleAnalyticsLogo from '../assets/logos/google-analytics.png'

// Animation visibility refs
const heroVisible = ref(false)
const customVisible = ref(false)
const analyticsVisible = ref(false)
const empowermentVisible = ref(false)
const processVisible = ref(false)
const ctaVisible = ref(false)

// Handle scroll animations
const handleScroll = () => {
  const checkVisibility = (selector, visibilityRef) => {
    const element = document.querySelector(selector)
    if (element && isInViewport(element)) {
      visibilityRef.value = true
    }
  }

  checkVisibility('.page-hero', heroVisible)
  checkVisibility('.feature-dark', customVisible)
  checkVisibility('.feature-light', analyticsVisible)
  checkVisibility('.empowerment-section', empowermentVisible)
  checkVisibility('.process-section', processVisible)
  checkVisibility('.cta-section', ctaVisible)
}

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

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
/* Hero Section */
.page-hero {
  padding: 10rem 0 4rem 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-bg);
  text-align: center;
}

.page-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  margin-bottom: 2rem;
  line-height: 1.1;
}

.page-subtitle {
  font-size: 1.6rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 300;
}

/* Feature Sections */
.feature-section {
  padding: 6rem 0;
}

.feature-dark {
  background: var(--light-secondary);
}

.feature-light {
  background: var(--light-bg);
}

.feature-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.feature-content.reverse {
  direction: rtl;
}

.feature-content.reverse > * {
  direction: ltr;
}

.feature-label {
  font-family: 'League Spartan', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}

.feature-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 2rem;
}

.feature-description {
  font-size: 1.3rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.feature-description strong {
  color: var(--text-primary);
  font-weight: 600;
}

.feature-highlight {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: var(--light-bg);
  border-left: 3px solid white;
}

.feature-highlight svg {
  flex-shrink: 0;
  color: white;
  margin-top: 0.2rem;
}

.feature-highlight span {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.feature-highlight strong {
  color: var(--text-primary);
}

.tools-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--light-tertiary);
}

.tools-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  font-weight: 400;
}

.tools-logo {
  display: flex;
  align-items: center;
}

.tools-logo svg,
.tools-logo img {
  max-width: 120px;
  max-height: 96px;
  filter: brightness(0) invert(1) opacity(0.4);
  transition: opacity 0.3s ease;
  object-fit: contain;
}

.tools-logo svg:hover,
.tools-logo img:hover {
  opacity: 0.6;
}

/* CMS Visualization */
.cms-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cms-mockup {
  width: 100%;
  max-width: 500px;
  background: var(--light-bg);
  border: 1px solid var(--light-tertiary);
  position: relative;
}

.cms-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--light-tertiary);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cms-dots {
  display: flex;
  gap: 0.4rem;
}

.cms-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--text-muted);
}

.cms-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.cms-content {
  display: grid;
  grid-template-columns: 120px 1fr;
  min-height: 300px;
  
}

.cms-sidebar {
  background: var(--light-secondary);
  border-right: 1px solid var(--light-tertiary);
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  
  gap: 0.75rem;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0;
  transition: all 0.3s ease;
  cursor: pointer;
}

.sidebar-item:hover {
  background: var(--light-bg);
}

.sidebar-item.active {
  background: var(--light-bg);
  border: 1px solid white;
}

.item-icon {
  width: 16px;
  height: 16px;
  background: var(--text-muted);
  border-radius: 2px;
  flex-shrink: 0;
}

.sidebar-item.active .item-icon {
  background: white;
}

.item-text {
  flex: 1;
  height: 8px;
  background: var(--text-muted);
  border-radius: 2px;
}

.sidebar-item.active .item-text {
  background: white;
}

.cms-editor {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.editor-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  width: 80px;
  height: 10px;
  background: var(--text-muted);
  border-radius: 2px;
}

.field-input {
  width: 100%;
  height: 35px;
  background: var(--light-secondary);
  border: 1px solid var(--light-tertiary);
  border-radius: 2px;
}

.field-input.large {
  height: 100px;
}

.editor-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.action-button {
  width: 80px;
  height: 35px;
  background: var(--light-secondary);
  border: 1px solid var(--light-tertiary);
  border-radius: 2px;
}

.action-button.primary {
  background: white;
  border-color: white;
}

.cms-badge {
  position: absolute;
  bottom: -15px;
  right: 1.5rem;
  background: white;
  color: black;
  padding: 0.5rem 1rem;
  font-family: 'League Spartan', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.01em;
}

.cms-badge svg {
  stroke: black;
}

/* Analytics Visual */
.feature-visual-analytics {
  display: flex;
  align-items: center;
  justify-content: center;
}

.analytics-mockup {
  width: 100%;
  max-width: 450px;
  background: var(--light-secondary);
  border: 1px solid var(--light-tertiary);
  padding: 2rem;
}

.mockup-header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--light-tertiary);
}

.mockup-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--text-muted);
}

.mockup-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.analytics-stat {
  text-align: center;
}

.stat-number {
  font-family: 'League Spartan', sans-serif;
  font-size: 3.5rem;
  font-weight: 400;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.analytics-chart {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  height: 150px;
  padding: 1rem;
  background: var(--light-bg);
}

.chart-bar {
  flex: 1;
  background: white;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.chart-bar:hover {
  opacity: 1;
}

/* Feature List */
.feature-list {
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
}

.feature-list li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1rem;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.feature-list svg {
  flex-shrink: 0;
  color: white;
  margin-top: 0.2rem;
}

.feature-emphasis {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--light-secondary);
  border-left: 3px solid white;
  font-size: 1.3rem;
  color: var(--text-primary);
  font-weight: 300;
  line-height: 1.7;
}

/* Empowerment Section */
.empowerment-section {
  background: var(--light-secondary);
  padding: 6rem 0;
}

.empowerment-content {
  max-width: 1200px;
  margin: 0 auto;
}

.empowerment-header {
  text-align: center;
  margin-bottom: 4rem;
}

.empowerment-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.empowerment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.empowerment-card {
  background: var(--light-bg);
  padding: 2.5rem 2rem;
  border: 1px solid var(--light-tertiary);
  transition: all 0.3s ease;
}

.empowerment-card:hover {
  transform: translateY(-8px);
  border-color: white;
}

.empowerment-card.highlight {
  background: white;
  border-color: white;
}

.empowerment-card.highlight h3,
.empowerment-card.highlight p,
.empowerment-card.highlight .empowerment-number {
  color: black;
}

.empowerment-number {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1;
}

.empowerment-card h3 {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.empowerment-card p {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

.empowerment-cta {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--light-bg);
  border: 1px solid var(--light-tertiary);
  max-width: 900px;
  margin: 0 auto;
}

.cta-text {
  font-size: 1.4rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .cta-text {
  color: #333;
}

.cta-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

.cta-section .cta-text strong {
  color: black;
}

.btn-arrow {
  margin-left: 0.5rem;
  display: inline-block;
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

/* CTA Section */
.cta-section {
  background: var(--light-secondary);
  padding: 5rem 0;
}

.cta-section .empowerment-cta {
  background: white;
  border: none;
}

.cta-section .btn-primary {
  background: black;
  color: white;
  border-color: black;
}

.cta-section .btn-primary:hover {
  background: transparent;
  color: black;
  border-color: black;
}

/* Process Section */
.process-section {
  background: var(--light-bg);
  padding: 6rem 0;
}

.process-content {
  max-width: 1200px;
  margin: 0 auto;
}

.process-header {
  text-align: center;
  margin-bottom: 4rem;
}

.process-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  align-items: start;
  max-width: 1000px;
  margin: 0 auto;
}

.process-step {
  text-align: center;
  padding: 1.5rem 1rem;
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 auto 1rem;
  position: relative;
  z-index: 2;
}

.process-step h3 {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.process-step p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

.process-connector {
  align-self: start;
  height: 2px;
  background: var(--light-tertiary);
  margin-top: calc(1.5rem + 25px);
  position: relative;
}

.process-connector::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile Responsive */
@media (max-width: 968px) {
  .feature-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .feature-content.reverse {
    direction: ltr;
  }

  .feature-content.reverse .feature-visual-analytics {
    order: 2;
  }

  .feature-content.reverse .feature-text {
    order: 1;
  }

  .empowerment-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .process-timeline {
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }

  .process-step h3 {
    font-size: 0.9rem;
  }

  .process-step p {
    font-size: 0.8rem;
  }

  .step-number {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 3rem 0;
    min-height: auto;
  }
  
  .page-title {
    font-size: 3rem;
  }

  .page-subtitle {
    font-size: 1.3rem;
  }

  .feature-section {
    padding: 3rem 0;
  }

  .feature-title {
    font-size: 2.5rem;
  }

  .feature-description {
    font-size: 1.15rem;
  }

  .cms-mockup {
    max-width: 100%;
  }

  .cms-content {
    grid-template-columns: 80px 1fr;
    min-height: 250px;
  }

  .cms-sidebar {
    padding: 0.75rem 0.5rem;
  }

  .sidebar-item {
    padding: 0.5rem;
  }

  .cms-editor {
    padding: 1rem;
  }

  .cms-badge {
    font-size: 0.75rem;
    padding: 0.4rem 0.75rem;
    right: 1rem;
  }

  .analytics-mockup {
    max-width: 100%;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .empowerment-section {
    padding: 3rem 0;
  }

  .empowerment-title {
    font-size: 2.5rem;
  }

  .empowerment-header {
    margin-bottom: 2rem;
  }

  .empowerment-cta {
    padding: 2rem 1.5rem;
  }

  .cta-text {
    font-size: 1.2rem;
  }

  .cta-section {
    padding: 3rem 0;
  }

  .process-section {
    padding: 3rem 0;
  }

  .process-header {
    margin-bottom: 2rem;
  }

  .process-title {
    font-size: 2.5rem;
  }

  .process-timeline {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .process-connector {
    width: 2px;
    height: 40px;
    margin: 0 auto;
    margin-top: 0;
  }

  .process-connector::after {
    bottom: 0;
    top: auto;
    left: 50%;
    transform: translateX(-50%);
  }

  .step-number {
    width: 45px;
    height: 45px;
    font-size: 0.9rem;
  }

  .process-step {
    padding: 1rem;
  }

  .process-step h3 {
    font-size: 1rem;
  }

  .process-step p {
    font-size: 0.85rem;
  }
}
</style>

