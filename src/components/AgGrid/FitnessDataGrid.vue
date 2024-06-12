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
    <!-- :tabToNextCell="tabToNextCell" -->
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import {
  GridApi,
  GridReadyEvent,
  // TabToNextCellParams,
} from 'ag-grid-community';
import EditSaveRow from './CellComponents/EditSaveRow.vue';

// TODO: Figure out how to import in the CSS / SCSS side
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const editType = ref<'fullRow' | null>(null);

onBeforeMount(() => {
  editType.value = 'fullRow';
});

const gridApi = ref<GridApi>();

const onGridReady = (params: GridReadyEvent) => {
  gridApi.value = params.api;
};

// const tabToNextCell = (params: TabToNextCellParams) => {
//   // if new row, start editing the first cell
//   // save prior row & toggle is editing
//   // start editing the first cell of the new row
//   // trigger isEditing on new row
//   console.log('tabToNextCell', params);
// };

const listOfExercises = [
  'Running',
  'Walking',
  'Hiking',
  'Swimming',
  'Cycling',
  'Weight Lifting',
  'Yoga',
  'HIIT',
  'Kickboxing',
  'BJJ',
  'Burpees',
  'Jump Squats',
  'Push Ups',
  'Planks',
  'Mountain Climbers',
  'Jumping Jacks',
  'High Knees',
  'Lunges',
  'Squats',
  'Crunches',
  'Leg Raises',
  'Russian Twists',
];

const columns = ref([
  {
    headerName: 'Exercise',
    field: 'exercise',
    minWidth: 100,
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: listOfExercises,
    },
  },
  {
    headerName: 'Duration (minutes)',
    field: 'duration',
    minWidth: 100,
    editable: true,
    cellEditor: 'agNumericCellEditor',
    // TODO: Fix min and max values not working
    cellEditorParams: {
      min: 0,
      max: 120,
    },
  },
  {
    headerName: 'Calories Burned',
    field: 'caloriesBurned',
    minWidth: 100,
    editable: true,
    cellEditor: 'agNumericCellEditor',
    cellEditorParams: {
      precision: 2,
      step: 0.25,
      showStepperButtons: true,
    },
  },
  {
    headerName: 'Workouts Remaining (Read Only)',
    field: 'workoutsRemaining',
    minWidth: 150,
    editable: false,
  },
  {
    headerName: 'Next Workout Date',
    field: 'nextWorkoutDate',
    minWidth: 100,
    editable: true,
    cellEditor: 'agDateCellEditor',
    cellEditorParams: {
      min: '2024-06-06',
      max: '2025-06-06',
    },
  },
  {
    headerName: 'Equipment Needed',
    field: 'equipmentNeeded',
    minWidth: 50,
    editable: true,
    cellRenderer: 'agCheckboxRenderer',
    cellEditor: 'agCheckboxCellEditor',
  },
  {
    headerName: 'Notes',
    field: 'notes',
    minWidth: 100,
    editable: true,
    cellEditor: 'agLargeTextCellEditor',
  },
  {
    headerName: 'Actions',
    minWidth: 100,
    cellRenderer: EditSaveRow,
    // cellRendererParams: {
    //   tabToNextCell,
    // },
  },
]);

const rowData = ref([
  {
    exercise: 'Running',
    duration: 30,
    caloriesBurned: 300,
    workoutsRemaining: 3,
    nextWorkoutDate: '2024-06-07',
    equipmentNeeded: false,
    notes: 'Buy new running shoes, run a minimum of 3 miles',
  },
  {
    exercise: 'Walking',
    duration: 45,
    caloriesBurned: 200,
    workoutsRemaining: 2,
    nextWorkoutDate: '2024-06-06',
    equipmentNeeded: false,
    notes: 'Walk around the neighborhood',
  },
  {
    exercise: 'Hiking',
    duration: 60,
    caloriesBurned: 400,
    workoutsRemaining: 1,
    nextWorkoutDate: '2024-06-15',
    equipmentNeeded: true,
    notes: 'Hike a new trail',
  },
  {
    exercise: 'Swimming',
    duration: 60,
    caloriesBurned: 700,
    workoutsRemaining: 2,
    nextWorkoutDate: '2024-06-21',
    equipmentNeeded: false,
    notes: 'Swim laps at the pool',
  },
  {
    exercise: 'Cycling',
    duration: 45,
    caloriesBurned: 500,
    workoutsRemaining: 1,
    nextWorkoutDate: '2024-06-25',
    equipmentNeeded: true,
    notes: 'Bike ride around the city',
  },
  {
    exercise: 'Weight Lifting',
    duration: 60,
    caloriesBurned: 400,
    workoutsRemaining: 7,
    nextWorkoutDate: '2024-06-06',
    equipmentNeeded: true,
    notes: 'Lift weights outside',
  },
  {
    exercise: 'Yoga',
    duration: 30,
    caloriesBurned: 200,
    workoutsRemaining: 15,
    nextWorkoutDate: '2024-06-07',
    equipmentNeeded: true,
    notes: 'Work on your postures, focus on breathing, push yourself. Namaste',
  },
  {
    exercise: 'HIIT',
    duration: 30,
    caloriesBurned: 400,
    workoutsRemaining: 3,
    nextWorkoutDate: '2024-06-09',
    equipmentNeeded: false,
    notes:
      'Hill Sprints, Burpees, Jump Squats, Push Ups, Planks, Mountain Climbers, Jumping Jacks, High Knees, Butt Kicks, Lunges, Squats, Crunches, Leg Raises, Russian Twists, Flutter Kicks, Bicycle Crunches, Plank Jacks, Plank Shoulder Taps, Plank Knee to Elbow, Plank Up Downs, Plank Hip Dips, Plank Walks, Plank Rotations, Plank Toe Taps, Plank Leg Lifts, Plank Leg Circles, Plank Leg Swings, Plank Leg Scissors, Plank Leg Climbs, Plank Leg Crossovers, Plank Leg Extensions, Plank Leg Curls',
  },
  {
    exercise: 'Kickboxing',
    duration: 45,
    caloriesBurned: 600,
    workoutsRemaining: 7,
    nextWorkoutDate: '2024-06-23',
    equipmentNeeded: true,
    notes:
      'Kick and punch the bag & Bob dummy, work on string combinations together fluidly, focus on distance control and technique',
  },
  {
    exercise: 'BJJ',
    duration: 60,
    caloriesBurned: 700,
    workoutsRemaining: 2,
    nextWorkoutDate: '2024-06-24',
    equipmentNeeded: false,
    notes: 'Flow roll, work on technique, drill drill drill!',
  },
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
