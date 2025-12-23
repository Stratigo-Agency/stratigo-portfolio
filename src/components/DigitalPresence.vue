<template>
  <section class="section digital-presence">
    <div class="container">
      <div class="digital-presence-content fade-in" :class="{ 'visible': visible }">
        <div class="digital-presence-number">Stand out from the rest</div>
        <div class="digital-presence-strengths">
          <div class="strength-card">
            <img :src="curved1" alt="" class="strength-pattern" />
            <h3 class="strength-title">{{ $t('home.digitalPresence.strengths.professional.title') }}</h3>
            <p class="strength-description">{{ $t('home.digitalPresence.strengths.professional.description') }}</p>
          </div>
          <div class="strength-card">
            <img :src="curved2" alt="" class="strength-pattern" />
            <h3 class="strength-title">{{ $t('home.digitalPresence.strengths.customSecure.title') }}</h3>
            <p class="strength-description">{{ $t('home.digitalPresence.strengths.customSecure.description') }}</p>
          </div>
          <div class="strength-card">
            <img :src="curved3" alt="" class="strength-pattern" />
            <h3 class="strength-title">{{ $t('home.digitalPresence.strengths.customizable.title') }}</h3>
            <p class="strength-description">{{ $t('home.digitalPresence.strengths.customizable.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import curved1 from '../assets/patterns/curved1.jpg'
import curved2 from '../assets/patterns/curved2.jpg'
import curved3 from '../assets/patterns/curved3.jpg'

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

  const section = document.querySelector('.digital-presence')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
/* Digital Presence Section */
.digital-presence {
  background: #000;
  padding: 5rem 0;
}

.digital-presence-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 4rem;
  align-items: start;
}

.digital-presence-number {
  font-size: 6rem;
  font-weight: 400;
  color: #fff;
  line-height: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.digital-presence-strengths {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1rem;
}

.strength-card {
  background: var(--light-secondary);
  border: 1px solid var(--light-tertiary);
  padding: 2.5rem 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.strength-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}


.strength-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
  position: relative;
  z-index: 1;
}

.strength-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  font-weight: 300;
  position: relative;
  z-index: 1;
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
  .digital-presence {
    padding: 3rem 0;
  }

  .digital-presence-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .digital-presence-number {
    font-size: 4rem;
  }

  .digital-presence-strengths {
    gap: 1.5rem;
  }

  .strength-card {
    padding: 2rem 1.5rem;
  }

  .strength-title {
    font-size: 1.5rem;
  }

  .strength-description {
    font-size: 1rem;
  }
}
</style>
