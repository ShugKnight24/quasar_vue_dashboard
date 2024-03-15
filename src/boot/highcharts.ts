import { boot } from 'quasar/wrappers';
import HighChartsVue from 'highcharts-vue';

export default boot(({ app }) => {
  // Set HighchartsVue instance on app
  app.use(HighChartsVue);
});
