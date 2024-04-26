import { boot } from 'quasar/wrappers';
import { App } from 'vue';

export default boot(({ app }: { app: App }) => {
  // Global error handler
  app.config.errorHandler = (error, component, info) => {
    console.error('Vue Error Handler:', error, component, info);
  };
});
