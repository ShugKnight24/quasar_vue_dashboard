import { defineStore } from 'pinia';
import { DashboardData } from 'src/components/models';

interface DashboardStore {
  data: DashboardData[];
}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashboardStore => ({
    data: [
      {
        title: 'Create Layout',
        description: 'Create a layout for the dashboard',
        completed: true,
      },
      {
        title: 'Add Graphs and Charts',
        description:
          'Add graphs and charts to the dashboard that display data and can be interacted with',
        completed: 'in-progress',
        notes: 'More to come, add D3 charts in the future',
      },
      {
        title: 'Expand Dashboard',
        description: 'Expand the dashboard to include more data',
        completed: false,
      },
      {
        title: 'Improve Dashboard UI',
        description: 'Improve the dashboard UI and make more robust',
        completed: false,
      },
      {
        title: 'Connect to external data',
        description:
          'Connect to an external data source and display data in the dashboard, like an API or store',
        completed: null,
      },
      {
        title: 'Allow user to mark tasks as complete',
        description:
          'Allow the user to mark tasks as complete and save the state of the tasks, update UI to reflect this',
        completed: null,
      },
    ] as DashboardData[],
  }),
  actions: {
    setData(newData: DashboardData[]) {
      this.data = newData;
    },
  },
});
