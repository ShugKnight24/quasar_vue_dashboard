export interface Config {
  dataPool: {
    connectors: Connector[];
  };
  editMode: EditMode;
  gui: Gui;
  components: Component[];
}

interface Cell {
  id: string;
  layout?: {
    rows: {
      cells: Cell[];
    }[];
  };
}

interface Component {
  type: string;
  cell: string;
  value?: number;
  valueFormat?: string;
  title?: string;
  subtitle?: string;
  elements?: Element[];
  sync?: {
    visibility: boolean;
    highlight: boolean;
    extremes?: boolean;
  };
  connector?: {
    id: string;
  };
  columnAssignment?: {
    [key: string]: string;
  };
  // TODO: Properly type this out
  chartOptions?: {
    [key: string]: any;
  };
  editable?: boolean;
}

interface Connector {
  id: string;
  type: string;
  options: {
    firstRowAsNames: boolean;
    columnNames: string[];
    data: (string | number)[][];
  };
}

export type DashboardDataCompleted = boolean | 'in-progress' | null;

export interface DashboardData {
  title: string;
  description: string;
  completed: DashboardDataCompleted;
  notes?: string;
}

interface EditMode {
  enabled: boolean;
  contextMenu: {
    enabled: boolean;
    items: string[];
  };
}

interface Element {
  tagName: string;
  textContent: string;
}

interface Gui {
  layouts: Layout[];
}

interface Layout {
  rows: Row[];
}

export interface MockHeatMapData {
  name: string;
  data: number[];
}

export interface MockLineChartData {
  name: string;
  data: number[];
}

interface Row {
  cells: Cell[];
}

export interface TestObject {
  blurb: string;
  location?: string;
  getterSetter: string;
  name: Record<number, string>;
  newProperty?: {
    value: number[];
  };
}

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

export type UpdateFunction = () => void;
