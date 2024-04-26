<template>
  <div>
    <h2>Reactive Object Properties</h2>
    <hr />
    <pre>{{ reactiveObject }}</pre>
    <div>
      <div v-for="(name, index) in reactiveObject.name" :key="index">
        {{ name }}
      </div>
      <div>Where are you located?: {{ reactiveObject.location }}</div>
      <div>Blurb won't change: {{ reactiveObject.blurb }}</div>
      <div>GetterSetter real value: {{ reactiveObject.getterSetter }}</div>
      <div v-if="reactiveObject.newProperty">
        <div>New Property Exists!!!</div>
        <div>{{ reactiveObject.newProperty.value }}</div>
        <div>But why don't you show :/</div>
        <div
          v-for="(number, index) in reactiveObject.newProperty.value"
          :key="index"
        >
          {{ number }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// Using a reactive object to compare functionality
const reactiveObject = ref<TestObject>(testObject);
console.log('reactiveObject', reactiveObject.value);

try {
  Object.defineProperties(reactiveObject.value, {
    newProperty: {
      // Won't show up in for...in loops
      enumerable: false,
      value: [0, 1, 2, 3, 4, 5],
    },
    location: {
      // Can't be deleted, but can be changed, will error
      configurable: false,
    },
    blurb: {
      // Can assign to the property, but it won't be changed. Will error
      writable: false,
    },
    // Add other properties as needed
  });
} catch (error) {
  console.error('Error defining properties on reactiveObject:', error);
  // For example, you might want to set a fallback value, log the error, or notify the user
}
</script>
