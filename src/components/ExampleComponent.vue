<template>
  <div>
    <p>{{ title }}</p>
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
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p :class="{ active: active }">Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo, Meta } from './models';

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
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
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
</style>
