<template>
  <LineChart id="c-line-chart" :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line as LineChart } from 'vue-chartjs';
import { lineChartData } from '../../../Data/lineChartData';
import { defineComponent } from 'vue';

const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

const datasets = lineChartData.map((item, index) => ({
  label: item.name,
  data: item.data,
  backgroundColor: colors[index], // fill color
  borderColor: colors[index], // line color
  fill: false,
  tension: 0.4, // smooth curve
}));

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  datasets,
};

const options = {
  responsive: false,
  maintainAspectRatio: false,
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default defineComponent({
  name: 'CLineChart',
  components: {
    LineChart,
  },
  data() {
    return {
      data,
      options,
    };
  },
});
</script>
