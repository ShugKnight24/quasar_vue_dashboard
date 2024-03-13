<!-- Connect to the router and have different pages..? -->
<!-- Create a UI that allows you to move from the charts / graphs / to CRUD Table... -->
<!-- Look at the old PHP CRUD app you made a long time ago -->
<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script setup lang="ts">
import { withDefaults } from 'vue';

interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  title: '',
  caption: '',
  link: '#',
  icon: '',
});
</script>
