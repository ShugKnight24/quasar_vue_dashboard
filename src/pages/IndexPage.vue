<template>
  <q-page class="column items-center justify-center">
    <dashboard-component />
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import DashboardComponent from 'components/DashboardComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent, DashboardComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'Create a Dashboard component',
        completed: true,
      },
      {
        id: 2,
        content: 'Add Graphs and Charts to the Dashboard',
        completed: false,
      },
      {
        id: 3,
        content: 'Expand the Dashboard to include more data',
        completed: false,
      },
      {
        id: 4,
        content: 'Improve the Dashboard UI',
        completed: false,
      },
      {
        id: 5,
        content: 'Add a CRUD Table component',
        completed: false,
      },
      {
        id: 6,
        content: 'Add CRUD Dialog / Form / Modal component(s)',
        completed: false,
      },
      {
        id: 7,
        content: 'Connect CRUD table to Dashboard data',
        completed: false,
      },
      {
        id: 8,
        content: 'Stretch Goal: Connect CRUD table to a REST API',
        completed: false,
      },
      {
        id: 9,
        content: 'Stretch Goal: Simulate a store with Pinia',
        completed: false,
      },
      {
        id: 10,
        content: 'Connect CRUD table / Dashboard to the store',
        completed: false,
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>
