<template>
  <q-btn
    v-if="!isEditing"
    dense
    round
    flat
    color="primary"
    @click="editRow(props.params.data)"
    icon="edit"
    title="Edit Row"
  />
  <q-btn
    v-else
    dense
    round
    flat
    color="primary"
    @click="saveRow(props.params.data)"
    icon="save"
    title="Save Row"
  />
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ICellRendererParams } from 'ag-grid-community';

// TODO: Figure out how to toggle isEditing when tabbing to the next row or clicking into a cell using `TabToNextCell`
// A user clicking into a cell will throw that row into edit mode, but the `isEditing` is not toggled
// A user can tab to the next row and the row will be in edit mode, but `isEditing` is not toggled

const props = defineProps<{
  params: ICellRendererParams;
}>();

const isEditing = ref(false);
const rowIndex = ref(null);

const editRow = () => {
  props.params.api.setFocusedCell(rowIndex.value, 'exercise');
  props.params.api.startEditingCell({
    rowIndex: rowIndex.value,
    colKey: 'exercise',
  });
  isEditing.value = true;
};

const saveRow = () => {
  props.params.api.stopEditing();
  isEditing.value = false;
};

onMounted(() => {
  rowIndex.value = props.params.rowIndex;
});
</script>
