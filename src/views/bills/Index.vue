<script lang="ts" setup>
import { ref } from "vue";

const typeItems = [
  { label: "食品", value: "1" },
  { label: "衣物", value: "2" },
  { label: "日常", value: "3" },
  { label: "玩乐", value: "4" },
];

const item = ref(typeItems[0]);

</script>

<template>
  <b-page elevation="2" title="Bill">
    <v-layout class="d-flex flex-sm-row-reverse flex-column mx-auto">
      <v-col style="padding-top: 2dvh">
        <v-autocomplete
          :items="typeItems" item-title="label" item-value="value"
          label="Type"
          v-model="item"
          clearable return-object
        ></v-autocomplete>
        <v-autocomplete
          :items="typeItems" item-title="label" item-value="value"
          label="Account"
          clearable
        ></v-autocomplete>
        <v-text-field clearable label="Amount" type="number"></v-text-field>
        <b-select-sheet
          :items="typeItems" item-title="label" item-value="value"
          label="Type"
          v-model="item"
        ></b-select-sheet>
      </v-col>
    </v-layout>
  </b-page>
</template>

<style scoped>

</style>