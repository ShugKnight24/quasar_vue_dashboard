<template>
  <dashboard-card :data="data" class="col-12 col-sm-6 col-md-4" />
  <div class="charts-container column q-gutter-sm items-center justify-center">
    <apex-charts />
    <chart-js />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { DashboardData } from './models';
// Apex Charts
import ApexCharts from './Charts/Apex/ApexCharts.vue';
// Charts.js Charts
import ChartJs from './Charts/Chartjs/ChartJs.vue';
import DashboardCard from './DashboardCard.vue';

export default defineComponent({
  name: 'DashboardView',
  components: {
    ApexCharts,
    ChartJs,
    DashboardCard,
  },
  setup() {
    const data = ref<DashboardData[]>([
      {
        title: 'Create Layout',
        description: 'Create a layout for the dashboard',
        completed: true,
      },
      {
        title: 'Add Graphs and Charts',
        description:
          'Add graphs and charts to the dashboard that display data and can be interacted with',
        completed: 'in-progress',
        notes: 'More to come, add D3 charts in the future',
      },
      {
        title: 'Expand Dashboard',
        description: 'Expand the dashboard to include more data',
        completed: false,
      },
      {
        title: 'Improve Dashboard UI',
        description: 'Improve the dashboard UI and make more robust',
        completed: false,
      },
      {
        title: 'Connect to external data',
        description:
          'Connect to an external data source and display data in the dashboard, like an API or store',
        completed: null,
      },
      {
        title: 'Allow user to mark tasks as complete',
        description:
          'Allow the user to mark tasks as complete and save the state of the tasks, update UI to reflect this',
        completed: null,
      },
    ]);
    return { data };
  },
});
</script>

<style lang="scss">
.dashboard-container {
  margin: 1rem 0;

  .q-card {
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9);
    }

    .q-card-actions {
      padding: 0.5rem 1rem;
    }
  }
}
</style>
