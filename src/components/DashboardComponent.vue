<template>
  <div class="row q-gutter-md items-start justify-center dashboard-container">
    <q-card
      v-for="(item, index) in data"
      :key="index"
      bordered
      class="col-xs-12 col-sm-6 col-md-4"
    >
      <q-card-section>
        <div class="text-h4 q-mb-sm">{{ item.title }}</div>
        <div class="text-body2">{{ item.description }}</div>
      </q-card-section>
      <q-card-actions align="right" class="bg-primary text-warning">
        <!-- TODO: Add Different kinds of actions -->
        <q-btn class="text-weight-bold" flat label="Action" />
      </q-card-actions>
    </q-card>
  </div>
  <div class="charts-container column q-gutter-sm items-center justify-center">
    <line-chart />
    <radial-bar-chart />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QCard, QCardSection, QCardActions, QBtn } from 'quasar';
import { DashboardData } from './models';
import LineChart from './Charts/LineChart.vue';
import RadialBarChart from './Charts/RadialBarChart.vue';

export default defineComponent({
  name: 'DashboardView',
  components: {
    LineChart,
    QCard,
    QCardSection,
    QCardActions,
    QBtn,
    RadialBarChart,
  },
  setup() {
    const data = ref<DashboardData[]>([
      {
        title: 'Create Layout',
        description: 'Create a layout for the dashboard',
      },
      {
        title: 'Add Graphs and Charts',
        description:
          'Add graphs and charts to the dashboard that display data and can be interacted with',
      },
      {
        title: 'Expand Dashboard',
        description: 'Expand the dashboard to include more data',
      },
      {
        title: 'Improve Dashboard UI',
        description: 'Improve the dashboard UI and make more robust',
      },
      {
        title: 'Connect to external data',
        description:
          'Connect to an external data source and display data in the dashboard, like an API or store',
      },
      {
        title: 'Allow user to mark tasks as complete',
        description:
          'Allow the user to mark tasks as complete and save the state of the tasks, update UI to reflect this',
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
.charts-container {
  #line-chart,
  #radialbar-chart {
    min-width: 650px;
    max-width: 1000px;
  }
}
</style>
