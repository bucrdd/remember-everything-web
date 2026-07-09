<script setup lang="ts">
// Utilities
import { computed, ref } from "vue";

// Types
import type { BBtnPickerProps } from "./BBtnPicker";

const props = withDefaults(defineProps<BBtnPickerProps>(), {
  placeholder: "select",
  title: "Select One"
});

const value = ref(null)
const valueShow = computed(() => {
  return value.value ? value.value[props.itemTitle] : ""
});

const innerValue = ref([])

const open = ref(false)
</script>

<template>
  <v-bottom-sheet v-model="open">
    <template v-slot:activator="{ props: activatorProps }">
      <div>
        <v-chip v-bind="activatorProps">{{ valueShow || props.placeholder }}</v-chip>
      </div>
    </template>
    <v-list
      v-model="innerValue"
      select-strategy="single-leaf"
    >
      <v-list-subheader :title="props.title"></v-list-subheader>
      <v-list-item
        v-for="item in items"
        :key="item[itemValue]"
        :title="item[itemTitle]"
        :value="item[itemValue]"
      >
        <template v-slot:append="{ isSelected, select }">
          <v-list-item-action start>
            <v-checkbox-btn
              :model-value="isSelected"
              @update:model-value="select"
              false-icon="null"
              true-icon="mdi-check"
            >
            </v-checkbox-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </v-bottom-sheet>
</template>

<style scoped>

</style>
