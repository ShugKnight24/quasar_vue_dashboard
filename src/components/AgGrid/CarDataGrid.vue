<template>
  <div class="grid-container">
    <h2>AG Grid Car Data Table</h2>
    <p>This table allows the user to edit each cell independently</p>
    <p>
      Click into a cell and start typing, or double click to get a more
      pronounced input
    </p>
    <p>Hitting `Tab` will allow you to move to the next cell</p>
    <ag-grid-vue
      class="ag-theme-material"
      title="Car Data Grid"
      :columnDefs="columns"
      editType="fullRow"
      :rowData="rowData"
      :domLayout="'autoHeight'"
      @cell-value-changed="onCellValueChanged"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import { CellValueChangedEvent } from 'ag-grid-community';

// TODO: Figure out how to import in the CSS / SCSS side
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

// TODO: Figure out a better implementation
// user needs to click off the cell to trigger the cell value changed event
const onCellValueChanged = (params: CellValueChangedEvent) => {
  if (params.colDef.field === 'make') {
    params.api.startEditingCell({
      rowIndex: params.node.rowIndex,
      colKey: 'model',
    });
  }
};

const rowData = ref([
  { make: 'BMW', model: 'I8 Coupe', price: 148000 },
  { make: 'Chevrolet', model: 'Silverado', price: 45000 },
  { make: 'Chrysler', model: '300S', price: 48000 },
  { make: 'Dodge', model: 'Challenger R/T', price: 52000 },
  { make: 'Dodge', model: 'Charger R/T', price: 51000 },
  { make: 'Ferrari', model: '488 GTB', price: 330000 },
  { make: 'Ferrari', model: '296 GTS', price: 340000 },
  { make: 'Lamborghini', model: 'Aventador S', price: 425000 },
  { make: 'Porsche', model: 'GT3 RS', price: 241300 },
  { make: 'Jeep', model: 'Grand Cherokee', price: 23000 },
]);

const automotiveBrands = [
  'Acura',
  'Alfa Romeo',
  'Aston Martin',
  'Audi',
  'Bentley',
  'BMW',
  'Bugatti',
  'Buick',
  'Cadillac',
  'Chevrolet',
  'Chrysler',
  'Citroën',
  'Dodge',
  'Ferrari',
  'Fiat',
  'Ford',
  'GMC',
  'Honda',
  'Hyundai',
  'Infiniti',
  'Jaguar',
  'Jeep',
  'Kia',
  'Koenigsegg',
  'Lamborghini',
  'Land Rover',
  'Lexus',
  'Maserati',
  'Mazda',
  'McLaren',
  'Mercedes-Benz',
  'Mitsubishi',
  'Nissan',
  'Pagani',
  'Porsche',
  'Renault',
  'Rolls Royce',
  'Subaru',
  'Suzuki',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo',
];

// TODO: Add a trim to the models or add a different column
const carMakesAndModels = [
  {
    make: 'Acura',
    models: ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX'],
  },
  {
    make: 'Alfa Romeo',
    models: ['4C', 'Giulia', 'Stelvio'],
  },
  {
    make: 'Aston Martin',
    models: ['DB11', 'DBS', 'DBS Superleggera', 'Rapide', 'Vantage'],
  },
  {
    make: 'Audi',
    models: [
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'A8',
      'Q3',
      'Q5',
      'Q7',
      'Q8',
      'R8',
      'RS3',
      'RS5',
      'RS7',
      'S3',
      'S4',
      'S5',
      'S6',
      'S7',
      'S8',
      'SQ5',
      'SQ7',
      'TT',
    ],
  },
  {
    make: 'Bentley',
    models: ['Bentayga', 'Continental', 'Flying Spur', 'Mulsanne'],
  },
  {
    make: 'BMW',
    models: [
      '2 Series',
      '3 Series',
      '4 Series',
      '5 Series',
      '6 Series',
      '7 Series',
      '8 Series',
      'I8',
      'I8 Coupe',
      'M2',
      'M3',
      'M4',
      'M5',
      'M6',
      'X1',
      'X2',
      'X3',
      'X4',
      'X5',
      'X6',
      'X7',
      'Z4',
    ],
  },
  {
    make: 'Bugatti',
    models: ['Chiron', 'Divo'],
  },
  {
    make: 'Buick',
    models: ['Cascada', 'Enclave', 'Encore', 'Envision', 'LaCrosse', 'Regal'],
  },
  {
    make: 'Cadillac',
    models: [
      'ATS',
      'CT4',
      'CT5',
      'CT6',
      'CTS',
      'Escalade',
      'XT4',
      'XT5',
      'XT6',
      'XTS',
    ],
  },
  {
    make: 'Chevrolet',
    models: [
      'Blazer',
      'Bolt',
      'Camaro',
      'Colorado',
      'Corvette',
      'Equinox',
      'Impala',
      'Malibu',
      'Silverado',
      'Sonic',
      'Spark',
      'Suburban',
      'Tahoe',
      'Traverse',
      'Trax',
    ],
  },
  {
    make: 'Chrysler',
    models: ['300', '300C', '300S', 'Pacifica', 'Voyager'],
  },
  {
    make: 'Citroën',
    models: ['C3', 'C4', 'C5', 'C6', 'C8', 'C-Crosser', 'C-Elysée', 'C-Zero'],
  },
  {
    make: 'Dodge',
    models: [
      'Challenger',
      'Challenger R/T',
      'Charger',
      'Charger R/T',
      'Durango',
      'Journey',
    ],
  },
  {
    make: 'Ferrari',
    models: [
      '296 GTS',
      '488 GTB',
      '488 Pista',
      '488 Spider',
      '812 Superfast',
      'GTC4Lusso',
      'Portofino',
      'Roma',
      'SF90 Stradale',
    ],
  },
  {
    make: 'Fiat',
    models: ['124 Spider', '500', '500L', '500X'],
  },
  {
    make: 'Ford',
    models: [
      'Bronco',
      'EcoSport',
      'Edge',
      'Escape',
      'Expedition',
      'Explorer',
      'F-150',
      'F-250',
      'F-350',
      'F-450',
      'Fiesta',
      'Flex',
      'Focus',
      'Fusion',
      'Mustang',
      'Ranger',
      'Taurus',
    ],
  },
  {
    make: 'GMC',
    models: ['Acadia', 'Canyon', 'Sierra', 'Terrain', 'Yukon'],
  },
  {
    make: 'Honda',
    models: [
      'Accord',
      'Civic',
      'Clarity',
      'CR-V',
      'Fit',
      'HR-V',
      'Insight',
      'Odyssey',
      'Passport',
      'Pilot',
      'Ridgeline',
    ],
  },
  {
    make: 'Hyundai',
    models: [
      'Accent',
      'Elantra',
      'Ioniq',
      'Kona',
      'Nexo',
      'Palisade',
      'Santa Fe',
      'Sonata',
      'Tucson',
      'Veloster',
      'Venue',
    ],
  },
  {
    make: 'Infiniti',
    models: ['Q50', 'Q60', 'Q70', 'QX30', 'QX50', 'QX60', 'QX80'],
  },
  {
    make: 'Jaguar',
    models: ['E-Pace', 'F-Pace', 'F-Type', 'I-Pace', 'XE', 'XF', 'XJ'],
  },
  {
    make: 'Jeep',
    models: [
      'Cherokee',
      'Compass',
      'Gladiator',
      'Grand Cherokee',
      'Renegade',
      'Wrangler',
    ],
  },
  {
    make: 'Kia',
    models: [
      'Cadenza',
      'Forte',
      'K5',
      'Niro',
      'Optima',
      'Rio',
      'Sedona',
      'Seltos',
      'Sorento',
      'Soul',
      'Sportage',
      'Stinger',
      'Telluride',
    ],
  },
  {
    make: 'Koenigsegg',
    models: ['Agera', 'CCX', 'Gemera', 'Jesko', 'Regera'],
  },
  {
    make: 'Lamborghini',
    models: [
      'Aventador',
      'Aventador S',
      'Centenario',
      'Huracán',
      'Murciélago',
      'Reventón',
      'Sesto Elemento',
      'Urus',
      'Veneno',
    ],
  },
  {
    make: 'Land Rover',
    models: [
      'Defender',
      'Discovery',
      'Discovery Sport',
      'Range Rover',
      'Range Rover Evoque',
      'Range Rover Sport',
      'Range Rover Velar',
    ],
  },
  {
    make: 'Lexus',
    models: ['ES', 'GS', 'GX', 'IS', 'LC', 'LS', 'LX', 'NX', 'RC', 'RX', 'UX'],
  },
  {
    make: 'Maserati',
    models: ['Ghibli', 'GranTurismo', 'Levante', 'Quattroporte'],
  },
  {
    make: 'Mazda',
    models: ['CX-3', 'CX-30', 'CX-5', 'CX-9', 'Mazda3', 'Mazda6', 'MX-5'],
  },
  {
    make: 'McLaren',
    models: ['540C', '570S', '600LT', '620R', '650S', '675LT', '720S', '765LT'],
  },
  {
    make: 'Mercedes-Benz',
    models: [
      'A-Class',
      'C-Class',
      'CLA',
      'CLS',
      'E-Class',
      'G-Class',
      'GLA',
      'GLB',
      'GLC',
      'GLE',
      'GLS',
      'Metris',
      'S-Class',
      'SL',
      'SLC',
      'Sprinter',
    ],
  },
  {
    make: 'Mitsubishi',
    models: ['Eclipse Cross', 'Mirage', 'Outlander', 'Outlander Sport'],
  },
  {
    make: 'Nissan',
    models: [
      '370Z',
      'Altima',
      'Armada',
      'Frontier',
      'GT-R',
      'Kicks',
      'Leaf',
      'Maxima',
      'Murano',
      'NV',
      'NV200',
      'Pathfinder',
      'Rogue',
      'Rogue Sport',
      'Sentra',
      'Titan',
      'Versa',
    ],
  },
  {
    make: 'Pagani',
    models: ['Huayra', 'Huayra Roadster', 'Zonda'],
  },
  {
    make: 'Porsche',
    models: [
      '718 Boxster',
      '718 Cayman',
      '911',
      '918 Spyder',
      'Cayenne',
      'GT2 RS',
      'GT3 RS',
      'Macan',
      'Panamera',
      'Taycan',
    ],
  },
  {
    make: 'Renault',
    models: [
      'Arkana',
      'Captur',
      'Clio',
      'Duster',
      'Kadjar',
      'Koleos',
      'Megane',
    ],
  },
  {
    make: 'Rolls Royce',
    models: ['Cullinan', 'Dawn', 'Ghost', 'Phantom', 'Wraith'],
  },
  {
    make: 'Subaru',
    models: [
      'Ascent',
      'BRZ',
      'Crosstrek',
      'Forester',
      'Impreza',
      'Legacy',
      'Outback',
    ],
  },
  {
    make: 'Suzuki',
    models: ['Celerio', 'Ignis', 'Jimny', 'Swift', 'S-Cross', 'Vitara'],
  },
  {
    make: 'Tesla',
    models: ['Model 3', 'Model S', 'Model X', 'Model Y', 'Roadster'],
  },
  {
    make: 'Toyota',
    models: [
      '4Runner',
      '86',
      'Avalon',
      'C-HR',
      'Camry',
      'Corolla',
      'Highlander',
      'Land Cruiser',
      'Mirai',
      'Prius',
      'RAV4',
      'Sequoia',
      'Sienna',
      'Supra',
      'Tacoma',
      'Tundra',
      'Yaris',
    ],
  },
  {
    make: 'Volkswagen',
    models: [
      'Arteon',
      'Atlas',
      'Beetle',
      'CC',
      'e-Golf',
      'Golf',
      'Jetta',
      'Passat',
      'Tiguan',
      'Touareg',
    ],
  },
  {
    make: 'Volvo',
    models: [
      'S60',
      'S90',
      'V60',
      'V90',
      'XC40',
      'XC60',
      'XC90',
      'XC90 Recharge',
    ],
  },
];

const columns = ref([
  {
    headerName: 'Make',
    field: 'make',
    minWidth: 100,
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: automotiveBrands,
    },
  },
  {
    headerName: 'Model',
    field: 'model',
    minWidth: 100,
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: (params) => {
      const make = params.data.make;
      const selectedMake = carMakesAndModels.find((car) => car.make === make);
      return {
        values: selectedMake.models,
      };
    },
  },
  {
    headerName: 'Price',
    field: 'price',
    minWidth: 100,
    editable: true,
  },
]);
</script>
