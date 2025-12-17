<template>
  <div class="portfolio-website-page">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title fade-in" :class="{ 'visible': heroVisible }">Portfolio Website</h1>
        <p class="page-subtitle fade-in" :class="{ 'visible': heroVisible }">
          Website yang dirancang khusus untuk brand Anda. Tanpa batasan template, tanpa kompromi kualitas.
        </p>
      </div>
    </section>

    <!-- Custom Design Section -->
    <section class="section feature-section feature-dark">
      <div class="container">
        <div class="feature-content fade-in" :class="{ 'visible': customVisible }">
          <div class="feature-text">
            <div class="feature-label">( DESAIN CUSTOM )</div>
            <h2 class="feature-title">Dibuat Khusus untuk Brand Anda</h2>
            <p class="feature-description">
              Website Anda dibangun dari nol, sepenuhnya disesuaikan dengan identitas brand dan kebutuhan bisnis Anda. Tidak seperti platform builder yang terikat template, kami memberikan <strong>kebebasan penuh dalam desain dan fungsionalitas</strong>.
            </p>
            <p class="feature-description">
              Hasilnya? Website yang <strong>lebih cepat, lebih efisien</strong>, dan mencerminkan keunikan brand Anda. Tanpa bloatware dari software pihak ketiga yang memperlambat performa.
            </p>
            <div class="feature-highlight">
              <span>Manajemen konten tetap mudah dengan <strong>Headless CMS</strong>. Update website Anda kapan saja tanpa perlu coding</span>
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
              Setiap website yang kami buat dilengkapi dengan <strong>Google Analytics yang dikonfigurasi khusus</strong> sesuai tujuan bisnis Anda - apakah itu untuk meningkatkan penjualan, mengumpulkan leads, atau membangun brand awareness.
            </p>
            <p class="feature-description">
              Anda mendapatkan akses penuh ke dashboard analytics untuk memantau:
            </p>
            <ul class="feature-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 10l3 3 7-7"/>
                </svg>
                Jumlah pengunjung dan perilaku mereka
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 10l3 3 7-7"/>
                </svg>
                Konversi dan ROI dari setiap halaman
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 10l3 3 7-7"/>
                </svg>
                Sumber traffic terbaik untuk bisnis Anda
              </li>
            </ul>
            <p class="feature-emphasis">
              Dengan data yang jelas, Anda bisa membuat keputusan yang tepat untuk mengoptimalkan website dan mencapai tujuan bisnis.
            </p>
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
              <p>Kami melatih Anda cara mengelola website - dari update konten hingga monitoring performa. Tidak perlu bergantung pada agensi selamanya.</p>
            </div>
            
            <div class="empowerment-card highlight">
              <div class="empowerment-number">02</div>
              <h3>Bebas Biaya Maintenance Bulanan</h3>
              <p>Setelah 6 bulan, Anda punya pilihan: kelola sendiri atau lanjut dengan layanan kami. Tidak ada biaya maintenance wajib yang menguras kas Anda setiap bulan.</p>
            </div>
            
            <div class="empowerment-card">
              <div class="empowerment-number">03</div>
              <h3>Full Ownership</h3>
              <p>Semua akses, tools, dan dokumentasi diserahkan ke Anda. Website adalah aset Anda, bukan ketergantungan kepada kami.</p>
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
            href="https://wa.me/6287881332121" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary"
          >
            Konsultasi Gratis Sekarang <span class="btn-arrow">></span>
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
  font-size: 4.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.page-subtitle {
  font-size: 1.3rem;
  color: var(--text-secondary);
  max-width: 700px;
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
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 2rem;
}

.feature-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
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
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.feature-highlight strong {
  color: var(--text-primary);
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
  font-weight: 700;
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
  font-size: 1.05rem;
  color: var(--text-primary);
  font-weight: 500;
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
  font-size: 3rem;
  font-weight: 700;
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
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.empowerment-card p {
  font-size: 1rem;
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
  font-size: 1.2rem;
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
  font-weight: 700;
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
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.process-step p {
  font-size: 0.85rem;
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
    gap: 3rem;
  }

  .feature-content.reverse {
    direction: ltr;
  }

  .cms-visual {
    order: -1;
  }

  .feature-visual-analytics {
    order: -1;
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
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .feature-section {
    padding: 3rem 0;
  }

  .feature-title {
    font-size: 2rem;
  }

  .feature-description {
    font-size: 1rem;
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
    font-size: 2rem;
  }

  .empowerment-header {
    margin-bottom: 2rem;
  }

  .empowerment-cta {
    padding: 2rem 1.5rem;
  }

  .cta-text {
    font-size: 1.05rem;
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
    font-size: 2rem;
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
