<template>
  <DashboardCard :data="data" class="col-12 col-sm-6 col-md-4" />
  <div class="charts-container column q-gutter-sm items-center justify-center">
    <apex-charts />
    <chart-js />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDashboardStore } from '../stores/dashboard';
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
    const store = useDashboardStore();
    return { data: store.$state.data };
  },
});
</script>

<style lang="scss">
.dashboard-container {
  margin: 1rem 0;

  .q-card {
    max-width: 450px;
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
