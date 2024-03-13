<template>
  <div>
    <h2>AG Grid Table</h2>
    <ag-grid-vue
      class="ag-theme-material"
      title="Test AG Grid Table"
      :columnDefs="columns"
      :rowData="rowData"
      style="height: 500px; width: 100%"
    >
    </ag-grid-vue>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
// TODO: Figure out how to import in the CSS / SCSS side
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const columns = ref([
  { headerName: 'Make', field: 'make', minWidth: 100 },
  { headerName: 'Model', field: 'model', minWidth: 100 },
  { headerName: 'Price', field: 'price', minWidth: 100 },
]);

const rowData = ref([
  { make: 'BMW', model: 'I8 Coupe', price: 148000 },
  { make: 'Chevrolet', model: 'Silverado', price: 45000 },
  { make: 'Chrysler', model: '300S', price: 48000 },
  { make: 'Dodge', model: 'Challenger R/T', price: 52000 },
  { make: 'Dodge', model: 'Charger R/T', price: 51000 },
  { make: 'Ferrari', model: '488 GTB', price: 330000 },
  { make: 'Ferrari', model: '296 GTS', price: 340000 },
  { make: 'Lamborghini', model: 'Aventador S', price: 425000 },
  { make: 'Porsche', model: 'GT3 RS', price: 241300 },
]);
</script>
