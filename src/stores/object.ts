import { defineStore } from 'pinia';
import { TestObject } from 'src/components/models';

interface ObjectStore {
  testObject: TestObject;
}

export const useoObjectStore = defineStore('object', {
  state: (): ObjectStore => ({
    testObject: {
      name: {
        0: "Who's asking?",
        1: "I'm asking",
        2: 'Who are you?',
      },
      location: 'The internet, ever heard of it?',
      blurb: "I'm a programmer, not a poet",
      getterSetter: "I'm a getter",
    },
  }),
  actions: {
    setTestObject(newObject: TestObject) {
      this.testObject = newObject;
    },
  },
});
