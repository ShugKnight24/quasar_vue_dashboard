<template>
  <div class="q-pa-md">
    <h1 class="q-my-sm">Dependency Tracker</h1>
    <p>Dependency tracker for Vue 3</p>
    <p>
      There will be a maximum call stack error due to the recursive nature of
      this function
    </p>
    <p>TODO: Add an interval or timeout to exit before that occurs</p>
  </div>
</template>
<script setup lang="ts">
import { UpdateFunction } from './models';

class DependencyTracker {
  dependents: Set<UpdateFunction>;

  constructor() {
    this.dependents = new Set(); // Prevent duplicates
  }

  depend() {
    if (currentUpdate) {
      this.dependents.add(currentUpdate);
      console.log('Dependency has been tracked');
    }
  }

  notify() {
    this.dependents.forEach((effect: UpdateFunction) => {
      effect();
      console.log('Effect has been triggered');
    });
  }
}

const currentDependency = new DependencyTracker();

let currentUpdate: UpdateFunction | null;

function autorun(update: UpdateFunction) {
  function wrappedUpdate() {
    currentUpdate = wrappedUpdate;
    update();
    currentUpdate = null;
  }
  wrappedUpdate();
}

autorun(() => {
  currentDependency.depend();
  currentDependency.notify();
});
</script>
