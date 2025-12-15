<template>
  <div 
    :class="['case-study-card', { 'showcase-card': variant === 'showcase' }]"
    @click="handleClick"
  >
    <div :class="['case-study-image', { 'showcase-card-image': variant === 'showcase' }]">
      <img :src="caseStudy.image" :alt="caseStudy.title" />
    </div>
    <div :class="['case-study-content', { 'showcase-card-content': variant === 'showcase' }]">
      <div 
        v-if="variant === 'full'" 
        class="case-study-category"
      >
        {{ caseStudy.category }}
      </div>
      <h3 :class="['case-study-title', { 'showcase-card-title': variant === 'showcase' }]">
        {{ caseStudy.title }}
      </h3>
      <p :class="['case-study-description', { 'showcase-card-description': variant === 'showcase' }]">
        {{ caseStudy.description }}
      </p>
      <div v-if="variant === 'full' && caseStudy.technologies" class="case-study-tech">
        <span 
          v-for="(tech, techIndex) in caseStudy.technologies" 
          :key="techIndex"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
      <div v-if="variant === 'full' && caseStudy.results" class="case-study-results">
        <div 
          v-for="(result, resultIndex) in caseStudy.results" 
          :key="resultIndex"
          class="result-item"
        >
          <div class="result-value">{{ result.value }}</div>
          <div class="result-label">{{ result.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  caseStudy: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'full', // 'showcase' or 'full'
    validator: (value) => ['showcase', 'full'].includes(value)
  }
})

const emit = defineEmits(['click'])
const router = useRouter()

const handleClick = () => {
  emit('click', props.caseStudy)
  if (props.caseStudy.id) {
    router.push(`/case-studies/${props.caseStudy.id}`)
  }
}
</script>

<style scoped>
.case-study-card {
  background: var(--light-secondary);
  border-radius: 0;
  overflow: hidden;
  border: 1px solid var(--light-tertiary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.case-study-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.case-study-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.case-study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-study-content {
  padding: 2rem;
}

.case-study-category {
  display: inline-block;
  background: var(--electric-blue);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.case-study-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.case-study-description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.case-study-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: var(--light-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: 500;
}

.case-study-results {
  display: flex;
  gap: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--light-tertiary);
}

.result-item {
  text-align: center;
}

.result-value {
  font-family: 'League Spartan', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--electric-blue);
  margin-bottom: 0.25rem;
}

.result-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Showcase variant styles */
.showcase-card {
  background: var(--light-secondary);
  border-radius: 0;
  overflow: hidden;
  border: 1px solid var(--light-tertiary);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.showcase-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.showcase-card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.showcase-card-title {
  font-family: 'League Spartan', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.showcase-card-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

