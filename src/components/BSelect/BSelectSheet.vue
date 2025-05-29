<script setup lang="ts">
import { computed, ref, shallowRef } from "vue";
import type { BSelectSheetProp, ItemProp } from "./BSelectSheet";

const sheet = shallowRef(false);
const defaults = ref({
  VBottomSheet: {
    contentClass: "overflow-hidden",
  },
});

const modelValue = defineModel<ItemProp>();
const props = withDefaults(defineProps<BSelectSheetProp>(), {
  maxHeight: "50vh",
});

const title = computed(() => props.title ? props.title : props.label ? props.label : "Select"
);

function onItemSelected(item: ItemProp) {
  modelValue.value = item
  sheet.value = false;
}

</script>

<template>
  <v-defaults-provider :defaults="defaults">
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ props: activatorProps }">
      <v-select
        readonly
        v-bind="activatorProps"
        v-model="modelValue"
        :label="props.label"
        itemTitle="label"
        item-value="value"
        :active="sheet"
        :menu-icon="sheet ? 'mdi-menu-up' : 'mdi-menu-down'"
      ></v-select>
      </template>

      <v-sheet :maxHeight="props.maxHeight">
        <v-list>
          <v-list-subheader :title="title"></v-list-subheader>
          <v-list-item
            v-for="option in props.options"
            :key="option.value"
            :title="option.label"
            @click="onItemSelected(option)"
          ></v-list-item>
        </v-list>
      </v-sheet>
    </v-bottom-sheet>
  </v-defaults-provider>
</template>

<style scoped>

</style>