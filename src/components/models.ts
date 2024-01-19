export type DashboardDataCompleted = boolean | 'in-progress' | null;

export interface DashboardData {
  title: string;
  description: string;
  completed: DashboardDataCompleted;
  notes?: string;
}

export interface MockHeatMapData {
  name: string;
  data: number[];
}

export interface MockLineChartData {
  name: string;
  data: number[];
}

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}
