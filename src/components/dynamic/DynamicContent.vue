<template>
  <div class="dynamic-content">
    <component
      v-for="(block, index) in content"
      :key="index"
      :is="getComponent(block.type)"
      v-bind="block.props"
    />
  </div>
</template>

<script setup>
import Text from './Text.vue'
import Heading from './Heading.vue'
import Image from './Image.vue'
import Table from './Table.vue'
import Quote from './Quote.vue'
import List from './List.vue'

const props = defineProps({
  content: {
    type: Array,
    required: true
  }
})

const componentMap = {
  text: Text,
  heading: Heading,
  image: Image,
  table: Table,
  quote: Quote,
  list: List
}

const getComponent = (type) => {
  return componentMap[type] || null
}
</script>

<style scoped>
.dynamic-content {
  max-width: 100%;
}
</style>

