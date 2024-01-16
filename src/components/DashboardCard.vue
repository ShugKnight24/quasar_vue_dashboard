<template>
  <div class="row q-gutter-md items-start justify-center dashboard-container">
    <q-card
      v-for="(item, index) in data"
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
        </div>
      </q-card-section>
      <q-card-actions align="right" class="bg-primary text-warning">
        <!-- TODO: Add Different kinds of actions -->
        <q-btn class="text-weight-bold" flat label="Action" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { QCard, QCardSection, QCardActions, QBtn } from 'quasar';
import { DashboardData } from './models';

export default defineComponent({
  name: 'DashboardCard',
  components: {
    QCard,
    QCardSection,
    QCardActions,
    QBtn,
  },
  props: {
    data: {
      type: Array as () => DashboardData[],
      required: true,
    },
  },
});
</script>
