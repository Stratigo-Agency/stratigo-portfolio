<template>
  <section class="section features-section">
    <div class="container">
      <h2 class="features-header fade-in" :class="{ 'visible': visible }">
        {{ $t('home.features.title') }}
      </h2>
      <div class="features-grid fade-in" :class="{ 'visible': visible }">
        <div class="feature-card" :style="{ backgroundImage: `url(${consultationImage})` }">
          <div class="feature-icon">
            <img :src="whiteCrossIcon" alt="Consultation" />
          </div>
          <h3 class="feature-card-title">{{ $t('home.features.consultation.title') }}</h3>
          <p class="feature-card-description">{{ $t('home.features.consultation.description') }}</p>
        </div>
        
        <div class="feature-card" :style="{ backgroundImage: `url(${collaborationImage})` }">
          <div class="feature-icon">
            <img :src="whiteExploreIcon" alt="Planning" />
          </div>
          <h3 class="feature-card-title">{{ $t('home.features.planning.title') }}</h3>
          <p class="feature-card-description">{{ $t('home.features.planning.description') }}</p>
        </div>
        
        <div class="feature-card" :style="{ backgroundImage: `url(${designImage})` }">
          <div class="feature-icon">
            <img :src="whiteProtectIcon" alt="Collaboration" />
          </div>
          <h3 class="feature-card-title">{{ $t('home.features.collaboration.title') }}</h3>
          <p class="feature-card-description">{{ $t('home.features.collaboration.description') }}</p>
        </div>
        
        <div class="feature-card" :style="{ backgroundImage: `url(${developmentImage})` }">
          <div class="feature-icon">
            <img :src="whitePartnerIcon" alt="Development" />
          </div>
          <h3 class="feature-card-title">{{ $t('home.features.development.title') }}</h3>
          <p class="feature-card-description">{{ $t('home.features.development.description') }}</p>
        </div>
        
        <div class="feature-card" :style="{ backgroundImage: `url(${agreementImage})` }">
          <div class="feature-icon">
            <img :src="whiteCrossIcon" alt="Shipment" />
          </div>
          <h3 class="feature-card-title">{{ $t('home.features.shipment.title') }}</h3>
          <p class="feature-card-description">{{ $t('home.features.shipment.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import whiteCrossIcon from '../assets/icon/white-cross.webp'
import whiteExploreIcon from '../assets/icon/white-explore.webp'
import whiteProtectIcon from '../assets/icon/white-protect.webp'
import whitePartnerIcon from '../assets/icon/white-partner.webp'
import consultationImage from '../assets/features/consultation.jpg'
import designImage from '../assets/features/design.jpg'
import developmentImage from '../assets/features/development.jpg'
import agreementImage from '../assets/features/agreement.jpg'
import collaborationImage from '../assets/features/collaboration.jpg'

const visible = ref(false)

onMounted(() => {
  // Use Intersection Observer for animation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const section = document.querySelector('.features-section')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
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
  display: flex;
  gap: 2rem;
  align-items: stretch;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 1rem;
}

.features-grid::after {
  content: '';
  flex-shrink: 0;
  width: 0;
}

.features-grid::-webkit-scrollbar {
  height: 8px;
}

.features-grid::-webkit-scrollbar-track {
  background: var(--light-secondary);
}

.features-grid::-webkit-scrollbar-thumb {
  background: var(--light-tertiary);
  border-radius: 4px;
}

.features-grid::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

.feature-card {
  background: var(--light-secondary);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid var(--light-tertiary);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  transition: all 0.3s ease;
  min-width: 300px;
  width: 300px;
  min-height: 400px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
}

.feature-card > * {
  position: relative;
  z-index: 1;
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
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.feature-card-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
  flex: 1;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .features-section {
    padding: 3rem 0;
  }

  .features-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .features-grid {
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem 1.5rem;
    min-width: 280px;
    width: 280px;
  }

  .feature-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 1.5rem;
  }

  .feature-card-title {
    font-size: 1.1rem;
  }

  .feature-card-description {
    font-size: 0.85rem;
  }
}
</style>
