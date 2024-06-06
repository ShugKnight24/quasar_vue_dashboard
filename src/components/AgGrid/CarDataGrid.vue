<template>
  <div class="grid-container">
    <h2>AG Grid Car Data Table</h2>
    <p>This table allows the user to edit each cell independently</p>
    <p>
      Click into a cell and start typing, or double click to get a more
      pronounced input
    </p>
    <p>Hitting `Tab` will allow you to move to the next cell</p>
    <ag-grid-vue
      class="ag-theme-material"
      title="Car Data Grid"
      :columnDefs="columns"
      :rowData="rowData"
      :domLayout="'autoHeight'"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';

// TODO: Figure out how to import in the CSS / SCSS side
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const columns = ref([
  {
    headerName: 'Make',
    field: 'make',
    minWidth: 100,
    editable: true,
  },
  {
    headerName: 'Model',
    field: 'model',
    minWidth: 100,
    editable: true,
  },
  {
    headerName: 'Price',
    field: 'price',
    minWidth: 100,
    editable: true,
  },
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
  { make: 'Jeep', model: 'Grand Cherokee', price: 23000 },
]);
</script>
