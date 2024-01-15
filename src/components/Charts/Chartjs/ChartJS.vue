<template>
  <div class="chartjs-charts">
    <h2>Chart.js Charts</h2>
    <c-line-chart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CLineChart from './CLineChart.vue';

export default defineComponent({
  name: 'ChartJs',
  components: {
    CLineChart,
  },
});
</script>

<style lang="scss">
.chartjs-charts {
  h2 {
    font-size: 2.5rem;
    color: $positive;
    margin-bottom: 0;
    text-align: center;
  }

  #c-line-chart {
    min-width: 650px;
    max-width: 1000px;
  }
}
</style>
