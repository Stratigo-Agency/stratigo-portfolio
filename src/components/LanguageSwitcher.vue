<template>
  <div class="language-switcher">
    <button 
      class="lang-btn" 
      :class="{ active: currentLocale === 'id' }"
      @click="switchLanguage('id')"
      aria-label="Switch to Indonesian"
    >
      ID
    </button>
    <span class="lang-separator">|</span>
    <button 
      class="lang-btn" 
      :class="{ active: currentLocale === 'en' }"
      @click="switchLanguage('en')"
      aria-label="Switch to English"
    >
      EN
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const switchLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  margin-right: 1rem;
}

.lang-btn {
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: color 0.3s ease, opacity 0.3s ease;
  font-family: 'League Spartan', sans-serif;
  opacity: 0.7;
}

.lang-btn:hover {
  opacity: 1;
}

.lang-btn.active {
  opacity: 1;
  font-weight: 600;
}

.lang-separator {
  color: var(--text-primary);
  font-size: 0.9rem;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .language-switcher {
    margin-right: 0;
    margin-left: auto;
    order: 2;
    flex-shrink: 0;
    z-index: 1001;
  }
  
  .lang-btn {
    font-size: 0.85rem;
    padding: 0.2rem 0.4rem;
    min-height: 32px;
  }
}
</style>
