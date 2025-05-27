<script lang="ts" setup>

import { ref } from "vue";
import { useDate } from "vuetify";

const dateAdapter = useDate();

const menu = ref(false);

const modelValue = defineModel();
const date = ref(null);

</script>

<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    location="bottom"
    transition="scale-transition"
    width="100%"
  >
    <template v-slot:activator="{ props }">
    <v-text-field
      v-model="modelValue"
      label="Select date"
      v-bind="props"
      width="100%"
    >
    </v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      hide-header
      show-adjacent-months
      @update:model-value="menu = false"
    >
    </v-date-picker>
  </v-menu>
</template>

<style scoped>

</style>