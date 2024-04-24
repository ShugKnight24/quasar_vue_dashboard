<template>
  <div ref="dashboardsContainer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Highcharts from 'highcharts';
import Dashboards from '@highcharts/dashboards';
import DataGrid from '@highcharts/dashboards/datagrid';
import LayoutModule from '@highcharts/dashboards/modules/layout';
import { Config } from '../models';

LayoutModule(Dashboards);
Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);
Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);

const dashboardConfig: Config = {
  dataPool: {
    connectors: [
      {
        id: 'micro-element',
        type: 'JSON',
        options: {
          firstRowAsNames: false,
          columnNames: ['Food', 'Vitamin A', 'Iron'],
          data: [
            ['Beef Liver', 6421, 6.5],
            ['Lamb Liver', 2122, 6.5],
            ['Cod Liver Oil', 1350, 0.9],
            ['Mackerel', 388, 1],
            ['Tuna', 214, 0.6],
          ],
        },
      },
    ],
  },
  editMode: {
    enabled: true,
    contextMenu: {
      enabled: true,
      items: ['editMode'],
    },
  },
  gui: {
    layouts: [
      {
        rows: [
          {
            cells: [
              {
                id: 'kpi-wrapper',
                layout: {
                  rows: [
                    {
                      cells: [
                        {
                          id: 'kpi-vitamin-a',
                        },
                        {
                          id: 'kpi-iron',
                        },
                      ],
                    },
                  ],
                },
              },
              {
                id: 'dashboard-col-0',
              },
              {
                id: 'dashboard-col-1',
              },
            ],
          },
          {
            cells: [
              {
                id: 'dashboard-col-2',
              },
            ],
          },
        ],
      },
    ],
  },
  components: [
    {
      type: 'KPI',
      cell: 'kpi-vitamin-a',
      value: 900,
      valueFormat: '{value}',
      title: 'Vitamin A',
      subtitle: 'daily recommended dose',
    },
    {
      type: 'KPI',
      cell: 'kpi-iron',
      value: 8,
      title: 'Iron',
      valueFormat: '{value}',
      subtitle: 'daily recommended dose',
    },
    {
      cell: 'title',
      type: 'HTML',
      elements: [
        {
          tagName: 'h1',
          textContent: 'MicroElement amount in Foods',
        },
      ],
    },
    {
      sync: {
        visibility: true,
        highlight: true,
        extremes: true,
      },
      connector: {
        id: 'micro-element',
      },
      cell: 'dashboard-col-0',
      type: 'Highcharts',
      columnAssignment: {
        Food: 'x',
        'Vitamin A': 'value',
      },
      chartOptions: {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          title: {
            text: 'mcg',
          },
          plotLines: [
            {
              value: 900,
              zIndex: 7,
              dashStyle: 'shortDash',
              label: {
                text: 'RDA',
                align: 'right',
                style: {
                  color: '#B73C28',
                },
              },
            },
          ],
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          series: {
            marker: {
              radius: 6,
            },
          },
        },
        legend: {
          enabled: true,
          verticalAlign: 'top',
        },
        chart: {
          animation: false,
          type: 'column',
          spacing: [30, 30, 30, 20],
        },
        title: {
          text: '',
        },
      },
    },
    {
      cell: 'dashboard-col-1',
      sync: {
        visibility: true,
        highlight: true,
        extremes: true,
      },
      connector: {
        id: 'micro-element',
      },
      type: 'Highcharts',
      columnAssignment: {
        Food: 'x',
        Iron: 'y',
      },
      chartOptions: {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          title: {
            text: 'mcg',
          },
          max: 8,
          plotLines: [
            {
              value: 8,
              dashStyle: 'shortDash',
              label: {
                text: 'RDA',
                align: 'right',
                style: {
                  color: '#B73C28',
                },
              },
            },
          ],
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          series: {
            marker: {
              radius: 6,
            },
          },
        },
        title: {
          text: '',
        },
        legend: {
          enabled: true,
          verticalAlign: 'top',
        },
        chart: {
          animation: false,
          type: 'column',
          spacing: [30, 30, 30, 20],
        },
      },
    },
    {
      cell: 'dashboard-col-2',
      connector: {
        id: 'micro-element',
      },
      type: 'DataGrid',
      editable: true,
      sync: {
        highlight: true,
        visibility: true,
      },
    },
  ],
};

const dashboardsContainer = ref(null);
// Once the container is added to the DOM, render the Dashboard
// with the config given in props
onMounted(() => {
  if (dashboardsContainer.value) {
    // TODO: Fix the type of dashboardConfig to match `Options` from `highcharts`
    Dashboards.board(dashboardsContainer.value, dashboardConfig, true);
  }
});
</script>
<style>
@import url('https://code.highcharts.com/css/highcharts.css');
@import url('https://code.highcharts.com/dashboards/css/datagrid.css');
@import url('https://code.highcharts.com/dashboards/css/dashboards.css');

h1#title {
  padding-top: 10px;
  margin: 0;
  background-color: #3d3d3d;
  text-align: center;
  color: #fff;
}

#kpi-vitamin-a .highcharts-dashboards-component-title::before,
#kpi-iron .highcharts-dashboards-component-title::before {
  width: 14px;
  height: 14px;
  border-radius: 28px;
  display: inline-block;
  padding: 0;
  margin-right: 4px;
  background-color: var(--highcharts-color-0);
  content: ' ';
}

#kpi-iron .highcharts-dashboards-component-title::before {
  background-color: var(--highcharts-color-2);
}

#kpi-vitamin-a .highcharts-dashboards-component-kpi-subtitle,
#kpi-iron .highcharts-dashboards-component-kpi-subtitle {
  margin-top: 10px;
  font-size: 1.2em;
  color: var(--highcharts-neutral-color-60);
}

#kpi-vitamin-a .highcharts-dashboards-component-kpi-value,
#kpi-iron .highcharts-dashboards-component-kpi-value {
  font-size: 4em;
  line-height: 2.4rem;
  margin-top: 10px;
  color: var(--highcharts-color-0);
}

#kpi-iron .highcharts-dashboards-component-kpi-value {
  color: var(--highcharts-color-2);
}

#dashboard-col-1 .highcharts-color-0 {
  fill: var(--highcharts-color-2);
  stroke: var(--highcharts-color-2);
}

#kpi-vitamin-a .highcharts-dashboards-component-kpi-value::after,
#kpi-iron .highcharts-dashboards-component-kpi-value::after {
  content: 'micrograms';
  display: block;
  font-size: 1rem;
}

.highcharts-plot-line {
  stroke-dasharray: 2px;
  stroke: var(--highcharts-color-3);
}

.highcharts-plot-line-label {
  fill: var(--highcharts-color-3);
}

.highcharts-description {
  padding: 0 20px;
}

#dashboard-col-2 {
  height: 323px;
}

#kpi-vitamin-a,
#kpi-iron {
  flex: 1 1 100%;
  height: 205px;
}

/* Breakpoints */
/* Large Screens */
@media (max-width: 1200px) {
  #dashboard-col-0,
  #dashboard-col-1 {
    flex: 1 1 35%;
  }

  #kpi-wrapper {
    flex: 1 1 30%;
  }

  #kpi-vitamin-a,
  #kpi-iron {
    flex: 1 1 100%;
  }
}

/* Medium Screens */
@media (max-width: 992px) {
  #dashboard-col-0,
  #dashboard-col-1 {
    flex: 1 1 50%;
  }

  #kpi-wrapper {
    flex: 1 1 100%;
  }

  #kpi-vitamin-a,
  #kpi-iron {
    flex: 1 1 50%;
  }
}

/* Small Screens */
@media (max-width: 576px) {
  #dashboard-col-0,
  #dashboard-col-1 {
    flex: 1 1 100%;
  }

  #kpi-wrapper {
    flex: 1 1 100%;
  }

  #kpi-vitamin-a,
  #kpi-iron {
    flex: 1 1 50%;
  }
}
</style>
