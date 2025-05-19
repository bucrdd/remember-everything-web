<script setup lang="ts">

import { computed, ref } from "vue";
import { useDate } from "vuetify";

const dateAdapter = useDate();
const menu = ref(false)
const date = ref();
const formatDate = computed(() => {
  if (!date.value) return ''
  return dateAdapter.format(date.value, "normalDate");
})
</script>

<template>
  <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      location="bottom"
  >
    <template v-slot:activator="{ props }">
    <v-text-field
        v-model="formatDate"
        label="Select date"
        v-bind="props"
    >
    </v-text-field>
    </template>
    <v-date-picker
        v-model="date"
        @update:model-value="menu = false"
        show-adjacent-months
        hide-header
    >
    </v-date-picker>
  </v-menu>
</template>

<style scoped>

</style>