<template>
  <div class="grid-container">
    <h2>AG Grid Fitness Data Table</h2>
    <p>This table allows the user to edit each row</p>
    <p>Hitting the pencil icon will begin editing mode</p>
    <!-- TODO: Fix width display -->
    <ag-grid-vue
      class="ag-theme-material"
      title="Fitness Data Grid"
      @gridReady="onGridReady"
      :columnDefs="columns"
      :editType="editType"
      :domLayout="'autoHeight'"
      :rowData="rowData"
    />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import EditRow from './CellComponents/EditRow.vue';

// TODO: Figure out how to import in the CSS / SCSS side
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const editType = ref(null);

onBeforeMount(() => {
  editType.value = 'fullRow';
});

const gridApi = ref<GridApi>();

const onGridReady = (params: GridReadyEvent) => {
  gridApi.value = params.api;
};

const columns = ref([
  {
    headerName: 'Exercise',
    field: 'exercise',
    minWidth: 100,
    editable: true,
  },
  {
    headerName: 'Duration (minutes)',
    field: 'duration',
    minWidth: 100,
    editable: true,
  },
  {
    headerName: 'Calories Burned',
    field: 'caloriesBurned',
    minWidth: 100,
    editable: true,
  },
  {
    headerName: 'Workouts Remaining (Read Only)',
    field: 'workoutsRemaining',
    minWidth: 100,
    editable: false,
  },
  {
    headerName: 'Actions',
    minWidth: 100,
    cellRenderer: EditRow,
  },
]);

const rowData = ref([
  {
    exercise: 'Running',
    duration: 30,
    caloriesBurned: 300,
    workoutsRemaining: 3,
  },
  {
    exercise: 'Walking',
    duration: 45,
    caloriesBurned: 200,
    workoutsRemaining: 2,
  },
  {
    exercise: 'Hiking',
    duration: 60,
    caloriesBurned: 400,
    workoutsRemaining: 1,
  },
  {
    exercise: 'Swimming',
    duration: 60,
    caloriesBurned: 700,
    workoutsRemaining: 2,
  },
  {
    exercise: 'Cycling',
    duration: 45,
    caloriesBurned: 500,
    workoutsRemaining: 1,
  },
  {
    exercise: 'Weight Lifting',
    duration: 60,
    caloriesBurned: 400,
    workoutsRemaining: 7,
  },
  {
    exercise: 'Yoga',
    duration: 30,
    caloriesBurned: 200,
    workoutsRemaining: 15,
  },
  { exercise: 'HIIT', duration: 30, caloriesBurned: 400, workoutsRemaining: 3 },
  {
    exercise: 'Kickboxing',
    duration: 45,
    caloriesBurned: 600,
    workoutsRemaining: 7,
  },
  { exercise: 'BJJ', duration: 60, caloriesBurned: 700, workoutsRemaining: 2 },
]);
</script>
<style lang="scss" scoped>
.grid-container {
  margin: 20px 0;

  h2 {
    margin: 0 0 10px;
  }
}
</style>
