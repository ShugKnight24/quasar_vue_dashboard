<template>
  <div class="row q-gutter-md items-start justify-center dashboard-container">
    <q-card
      v-for="(item, index) in props.data"
      :key="index"
      bordered
      class="col-xs-12 col-sm-6 col-md-4"
    >
      <q-card-section>
        <div class="q-mb-sm">
          <h4 class="text-h4">{{ item.title }}</h4>
        </div>
        <div>
          <p class="text-body2">{{ item.description }}</p>
          <p class="text-body2 text-italic text-weight-bold" v-if="item.notes">
            {{ item.notes }}
          </p>
        </div>
      </q-card-section>
      <q-card-actions
        align="left"
        :class="{
          'bg-positive': item.completed === true,
          'bg-negative': item.completed === false,
          'bg-info': item.completed === null,
          'bg-primary': item.completed === 'in-progress',
        }"
        class="text-white text-weight-bold"
      >
        <q-btn
          class="text-weight-bold"
          flat
          label="Set True"
          @click="setCompleted(item, true)"
        />
        <q-btn
          class="text-weight-bold"
          flat
          label="Set False"
          @click="setCompleted(item, false)"
        />
        <q-btn
          class="text-weight-bold"
          flat
          label="Set Null"
          @click="setCompleted(item, null)"
        />
        <q-btn
          class="text-weight-bold"
          flat
          label="Set In-Progress"
          @click="setCompleted(item, 'in-progress')"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { DashboardData, DashboardDataCompleted } from './models';

const props = defineProps<{ data: DashboardData[] }>();

const setCompleted = (item: DashboardData, value: DashboardDataCompleted) => {
  item.completed = value;
};
</script>
