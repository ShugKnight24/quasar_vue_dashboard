<template>
  <div>
    <h2 class="q-my-sm">Object Test</h2>
    <p>Playground for testing out Object properties</p>
  </div>
  <div>
    <h3>Object Properties</h3>
    <hr />
    <p>New Property won't be displayed below</p>
    <pre>{{ testObject }}</pre>
    <div>
      <div v-for="(name, index) in testObject.name" :key="index">
        {{ name }}
      </div>
      <div>Where are you located?: {{ testObject.location }}</div>
      <div>Blurb won't change: {{ testObject.blurb }}</div>
      <div>GetterSetter real value: {{ testObject.getterSetter }}</div>
      <div v-if="testObject.newProperty?.value">
        <div>New Property Exists!!!</div>
        <div>{{ testObject.newProperty.value }}</div>
        <div>But why don't you show :/</div>
        <div
          v-for="(number, index) in testObject.newProperty.value"
          :key="index"
        >
          {{ number }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface TestObject {
  blurb: string;
  location?: string;
  getterSetter: string;
  name: Record<number, string>;
  newProperty?: {
    value: number[];
  };
}

const testObject: TestObject = {
  name: {
    0: "Who's asking?",
    1: "I'm asking",
    2: 'Who are you?',
  },
  location: 'The internet, ever heard of it?',
  blurb: "I'm a programmer, not a poet",
  getterSetter: "I'm a getter",
};
console.log('testObject', testObject);

let realGetterSetterValue = "I'm the real value";
Object.defineProperties(testObject, {
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
  getterSetter: {
    configurable: true,
    get() {
      // Overrides default getter, will always return this value
      console.log(
        `I'm a getter, and I'm returning the value ${realGetterSetterValue}`
      );
      return realGetterSetterValue;
    },
    set(newValue) {
      // Overrides default setter
      if (newValue === "I'm a setter") {
        console.log(`I'm a setter, and I'm setting the value to ${newValue}`);
      }
      realGetterSetterValue = newValue;
    },
  },
});

// Won't work
for (const key in testObject.newProperty?.value) {
  console.log(`${key}, ${testObject.newProperty?.value}`);
}
try {
  delete testObject.location;
} catch (error) {
  console.error(error);
  testObject.location = 'Off the grid';
  console.log(`Location should not exist... ${testObject.location}`);
}

try {
  testObject.blurb = "I'm also a poet, so watch the prose flow";
} catch (error) {
  console.error(error);
}
console.log(testObject.getterSetter);
testObject.getterSetter = "I'm not a setter";
console.log(testObject.getterSetter);
testObject.getterSetter = "I'm a setter";
console.log(testObject.getterSetter);
</script>
