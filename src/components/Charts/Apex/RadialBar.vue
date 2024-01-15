<template>
  <div>
    <apexchart
      id="radial-bar-chart"
      type="radialBar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
  name: 'RadialBar',
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const radialBarData = ref<number[]>([30, 60, 75, 15, 0]);

    const chartOptions = ref({
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            total: {
              show: true,
              label: 'Total Skill',
            },
            value: {
              fontSize: '16px',
            },
          },
        },
      },
      legend: {
        show: true,
        floating: false,
        fontSize: '16px',
        position: 'right',
        offsetX: 0,
        offsetY: 60,
      },
      labels: ['Vue3', 'TypeScript', 'SCSS', 'ApexCharts', 'Pinia'],
      title: {
        text: 'Current Project Skills',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          color: '#263238',
        },
        offsetY: 10,
      },
    });

    return {
      series: radialBarData.value,
      chartOptions,
    };
  },
});
</script>
