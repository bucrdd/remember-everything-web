<script setup lang="ts">
import { computed, ref, shallowRef } from "vue";
import type { BSelectSheetProp, ItemProp } from "./BSelectSheet";

const sheet = shallowRef(false);
const defaults = ref({
  VBottomSheet: {
    contentClass: "overflow-hidden",
  },
});

const modelValue = defineModel<ItemProp | unknown | null>();
const props = withDefaults(defineProps<BSelectSheetProp>(), {
  maxHeight: "50vh",
});

const title = computed(() => props.title ? props.title : props.label ? props.label : "Select");

function onItemSelected(item: ItemProp) {
  modelValue.value = item;
  sheet.value = false;
}

</script>

<template>
  <v-defaults-provider :defaults="defaults">
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ props: activatorProps }">
      <v-select
        :item-title="props.itemTitle"
        :item-value="props.itemValue"
        :label="props.label"
        v-model="modelValue"
        v-bind="activatorProps"
        :active="sheet"
        readonly
        :menu-icon="sheet ? 'mdi-menu-up' : 'mdi-menu-down'"
      ></v-select>
      </template>

      <v-sheet :maxHeight="props.maxHeight">
        <v-list>
          <v-list-subheader :title="title"></v-list-subheader>
          <v-list-item
            v-for="item in props.itmes"
            :key="item"
            :title="item.label"
            @click="onItemSelected(item)"
          ></v-list-item>
        </v-list>
      </v-sheet>
    </v-bottom-sheet>
  </v-defaults-provider>
</template>

<style scoped>

</style>