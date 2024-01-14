<template>
  <div>
    <apexchart
      id="line-chart"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { MockLineChartData } from './models';

// TODO: Make this generic so that it can be used for any data
export default defineComponent({
  name: 'LineChart',
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const lineData = ref<MockLineChartData>([
      {
        name: 'add-by-15',
        data: [0, 15, 30, 45, 60, 75, 90, 105, 120],
      },
      {
        name: 'power-of-2',
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
      },
      {
        name: 'fibonacci',
        data: [1, 1, 2, 3, 5, 8, 13, 21, 34],
      },
      {
        name: 'add-by-5',
        data: [0, 5, 10, 15, 20, 25, 30, 35, 40],
      },
      {
        name: 'prime',
        data: [2, 3, 5, 7, 11, 13, 17, 19, 23],
      },
    ]);

    const chartOptions = ref({
      chart: {
        height: 600,
        width: '100%',
        maxWidth: 1000,
        type: 'line',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        floating: false,
        offsetY: 5,
        offsetX: 0,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Different Number Sequences',
        align: 'top',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          color: '#263238',
        },
        offsetY: 10,
      },
      tooltip: {
        x: {
          formatter: function (value) {
            return 'Index: ' + value;
          },
        },
      },
    });

    return {
      series: lineData,
      chartOptions,
    };
  },
});
</script>
