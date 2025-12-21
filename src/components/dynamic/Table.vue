<template>
  <div class="dynamic-table-wrapper">
    <table class="dynamic-table">
      <thead v-if="headers && headers.length > 0">
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  headers: {
    type: Array,
    default: () => []
  },
  rows: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.dynamic-table-wrapper {
  overflow-x: auto;
  margin: 2rem 0;
}

.dynamic-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--light-secondary);
  border: 1px solid var(--light-tertiary);
}

.dynamic-table th {
  background: var(--light-tertiary);
  color: var(--text-primary);
  padding: 1rem;
  text-align: left;
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 1px solid var(--light-tertiary);
}

.dynamic-table td {
  padding: 1rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--light-tertiary);
  font-size: 0.95rem;
}

.dynamic-table tbody tr:last-child td {
  border-bottom: none;
}

.dynamic-table tbody tr:hover {
  background: var(--light-tertiary);
}
</style>








