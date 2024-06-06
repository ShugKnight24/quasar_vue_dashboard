<template>
  <ag-grid-vue
    class="ag-theme-material"
    title="Color Data Grid"
    :columnDefs="columns"
    :domLayout="'autoHeight'"
    :rowData="rowData"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const columns = ref([
  {
    headerName: 'Color Name',
    field: 'color',
    minWidth: 100,
    editable: true,
    cellEditor: 'agTextCellEditor',
    cellEditorParams: {
      maxLength: 50,
    },
  },
  {
    headerName: 'Description',
    field: 'description',
    minWidth: 100,
    editable: true,
    cellEditor: 'agLargeTextCellEditor',
  },
  {
    headerName: 'Hex Code',
    field: 'hexCode',
    minWidth: 100,
    editable: true,
    cellEditor: 'agTextCellEditor',
    cellEditorParams: {
      maxLength: 7,
      minLength: 4,
    },
    // TODO: Add validation to ensure there is a # at the beginning of the hex code
    // TODO: Figure out how you can add a Select for the color picker that updates the hex code on change
  },
]);

const rowData = ref([
  { color: 'Red', description: 'The color of blood', hexCode: '#FF0000' },
  { color: 'Orange', description: 'The color of oranges', hexCode: '#FFA500' },
  { color: 'Yellow', description: 'The color of the sun', hexCode: '#FFFF00' },
  { color: 'Green', description: 'The color of grass', hexCode: '#008000' },
  { color: 'Blue', description: 'The color of the sky', hexCode: '#0000FF' },
]);
</script>
