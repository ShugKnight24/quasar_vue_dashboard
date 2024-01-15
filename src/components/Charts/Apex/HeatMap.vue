<template>
  <div>
    <apexchart
      id="heat-map-chart"
      type="heatmap"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { MockHeatMapData } from '../../models';

export default defineComponent({
  name: 'HeatMap',
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const siteAnalytics = ref<MockHeatMapData[]>([
      {
        name: 'Page Views',
        data: [1583, 739, 392, 110, 411, 2903, 2356],
      },
      {
        name: 'Unique Visitors',
        data: [892, 208, 136, 48, 230, 1581, 1256],
      },
      {
        name: 'Bounce Rate',
        data: [494, 223, 137, 14, 167, 856, 709],
      },
      {
        name: 'Average Session Duration (in seconds)',
        data: [1440, 962, 660, 227, 782, 1620, 1500],
      },
    ]);

    const chartOptions = ref({
      chart: {
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
      title: {
        text: 'Site Vistors - Heat Map Data',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          color: '#263238',
        },
      },
      xaxis: {
        categories: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
      },
    });

    return {
      series: siteAnalytics,
      chartOptions,
    };
  },
});
</script>
