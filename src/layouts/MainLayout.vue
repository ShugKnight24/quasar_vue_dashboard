<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-item clickable tag="a" :to="{ path: '/ag' }">
          <q-item-section>AG Grid</q-item-section>
        </q-item>
        <q-item clickable tag="a" :to="{ path: '/high' }">
          <q-item-section>High C</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<!-- TODO: Switch to Setup script -->
<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Portfolio',
    caption: 'My Portfolio',
    icon: 'work',
    link: 'https://shugknight24.github.io',
  },
  {
    title: 'Github',
    caption: 'github.com/shugknight24',
    icon: 'code',
    link: 'https://github.com/shugknight24',
  },
  {
    title: 'LinkedIn',
    caption: 'My LinkedIn',
    icon: 'chat',
    link: 'https://linkedin.com/in/shugmi.shumunov',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
