<template>
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
</template>

<script setup>
// Footer component - no props needed
</script>

<style scoped>
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

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>

