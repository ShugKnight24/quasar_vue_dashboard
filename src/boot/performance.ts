import { boot } from 'quasar/wrappers';
import { App } from 'vue';

export default boot(({ app }: { app: App }) => {
  // Enable performance tracking in development mode
  if (process.env.NODE_ENV === 'development') {
    app.config.performance = true;
  }
});
