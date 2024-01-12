<template>
  <q-page class="row items-center justify-evenly">
    <q-card v-for="(item, index) in data" :key="index" flat bordered>
      <q-card-section>
        <div class="text-h4">{{ item.title }}</div>
        <div class="text-body2">{{ item.description }}</div>
      </q-card-section>
      <q-card-actions align="right" class="bg-primary text-warning">
        <!-- TODO: Add Different kinds of actions -->
        <q-btn class="text-weight-bold" flat label="Action" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QCard, QCardSection, QCardActions, QBtn } from 'quasar';
import { DashboardData } from './models';

export default defineComponent({
  name: 'DashboardView',
  components: { QCard, QCardSection, QCardActions, QBtn },
  setup() {
    const data = ref<DashboardData[]>([
      {
        title: 'Create Layout',
        description: 'Create a layout for the dashboard',
      },
      {
        title: 'Add Graphs and Charts',
        description:
          'Add graphs and charts to the dashboard that display data and can be interacted with',
      },
      {
        title: 'Expand Dashboard',
        description: 'Expand the dashboard to include more data',
      },
      {
        title: 'Improve Dashboard UI',
        description: 'Improve the dashboard UI and make more robust',
      },
      {
        title: 'Connect to external data',
        description:
          'Connect to an external data source and display data in the dashboard, like an API or store',
      },
      {
        title: 'Allow user to mark tasks as complete',
        description:
          'Allow the user to mark tasks as complete and save the state of the tasks, update UI to reflect this',
      },
    ]);
    return { data };
  },
});
</script>
