import { createPinia } from 'pinia';
import { App } from 'vue';

export default ({ app }: { app: App }) => {
  app.use(createPinia());
};
