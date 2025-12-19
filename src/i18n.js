import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

// Get saved language from localStorage or default to Indonesian
const savedLocale = localStorage.getItem('locale') || 'id'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'id',
  messages: {
    en,
    id
  }
})

export default i18n
