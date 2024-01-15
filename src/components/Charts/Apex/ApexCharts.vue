<template>
  <div class="apex-charts">
    <h2>Apex Charts</h2>
    <line-chart />
    <radial-bar />
    <heat-map />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LineChart from './LineChart.vue';
import RadialBar from './RadialBar.vue';
import HeatMap from './HeatMap.vue';

export default defineComponent({
  name: 'ApexCharts',
  components: {
    LineChart,
    RadialBar,
    HeatMap,
  },
});
</script>

<style lang="scss">
.apex-charts {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;

  h2 {
    font-size: 2.5rem;
    color: $info;
    margin-bottom: 0;
    flex-basis: 100%;
    text-align: center;
  }
}

#heat-map-chart,
#line-chart,
#radial-bar-chart {
  min-width: 450px;
  max-width: 600px;
}
</style>
