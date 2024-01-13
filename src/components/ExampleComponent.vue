<template>
  <div>
    <h2>Learning ToDos:</h2>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        @click="toggleComplete(todo)"
        :class="{ active: !todo.completed, completed: todo.completed }"
      >
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }}</p>
    <p :class="{ active }">Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo } from './models';

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  function toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
    increment();
  }

  return { clickCount, increment, toggleComplete };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: 'ExampleComponent',
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')) };
  },
});
</script>

<style scoped lang="scss">
h2 {
  color: $primary;
  margin-bottom: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;

  li {
    color: $positive;
    &.active {
      color: $negative;
    }
    &.completed {
      text-decoration: line-through;
    }
    &:hover {
      color: $primary;
      cursor: pointer;
    }
  }
}
</style>
