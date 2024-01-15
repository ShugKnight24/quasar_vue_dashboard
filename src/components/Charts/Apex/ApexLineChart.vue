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
import { MockLineChartData } from '../../models';
import { lineChartData } from '../../../Data/lineChartData';

// TODO: Make this generic so that it can be used for any dataset and update the UI accordingly
export default defineComponent({
  name: 'ApexLineChart',
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const lineData = ref<MockLineChartData[]>(lineChartData);

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
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        title: {
          text: 'Current data array index',
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
