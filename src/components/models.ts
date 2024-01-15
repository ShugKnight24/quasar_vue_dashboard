export interface DashboardData {
  title: string;
  description: string;
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
