<template>
  <q-page class="ag-page flex flex-center">
    <div>
      <h1 class="text-h1">AgGrid Page</h1>
      <CarDataGrid />
      <FitnessDataGrid />
      <ColorsDataGrid />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import CarDataGrid from './CarDataGrid.vue';
import ColorsDataGrid from './ColorsDataGrid.vue';
import FitnessDataGrid from './FitnessDataGrid.vue';
</script>
<style lang="scss" scoped>
.ag-page {
  padding: 25px 0;

  // TODO: Figure out how to add a border to the data grid
  .ag-root-wrapper {
    border-radius: var(--ag-wrapper-border-radius) !important;
    border: 1px solid var(--ag-border-color) !important;
  }

  h1 {
    margin: 0 0 10px;
  }

  .grid-container {
    h2 {
      margin: 0 0 10px;
    }
  }
}
</style>
