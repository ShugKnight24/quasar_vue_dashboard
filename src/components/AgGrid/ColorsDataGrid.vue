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
import { ValueFormatterParams, ValueParserParams } from 'ag-grid-community';

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
      maxLength: 6,
      minLength: 3,
    },
    valueFormatter: (params: ValueFormatterParams) => {
      let hexCode = params.value;
      hexCode = hexCode.charAt(0) === '#' ? hexCode : '#' + hexCode;
      return hexCode.toUpperCase();
    },
    // Don't include # in the data, format it on change
    valueParser: (params: ValueParserParams) => {
      let hexCode = params.newValue;
      if (hexCode.startsWith('#')) {
        hexCode = hexCode.slice(1);
      }
      const hexCodeRegex = /^([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/i;
      if (!hexCodeRegex.test(hexCode)) {
        // TODO: Figure out how to display an intuitive error message that's not an alert
        return params.oldValue;
      }
      return hexCode;
    },
  },
]);

// TODO: Figure out how you can add a Select for the color picker that updates the hex code on change
const rowData = ref([
  { color: 'Red', description: 'The color of blood', hexCode: 'FF0000' },
  { color: 'Orange', description: 'The color of oranges', hexCode: 'FFA500' },
  { color: 'Yellow', description: 'The color of the sun', hexCode: 'FFFF00' },
  { color: 'Green', description: 'The color of grass', hexCode: '008000' },
  { color: 'Blue', description: 'The color of the sky', hexCode: '0000FF' },
]);
</script>
