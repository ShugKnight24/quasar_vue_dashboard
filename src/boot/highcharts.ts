import { boot } from 'quasar/wrappers';
import HighchartsVue from 'highcharts-vue';

export default boot(({ app }) => {
  // Set HighchartsVue instance on app
  app.use(HighchartsVue);
});
