<script setup lang="ts">
import { ref, reactive } from "vue";

const page = ref(1)
const countdownEvents = reactive([
  {date: "2023-12-29", title: "holiday", details: "details - holiday"},
  {date: "2023-12-29", title: "holiday", details: "details - holiday"},
  {date: "2023-12-29", title: "holiday", details: "details - holiday"},
  {date: "2023-12-29", title: "holiday", details: "details - holiday"},
  {date: "2023-12-29", title: "holiday", details: "details - holiday"},
])
</script>

<template>
  <v-layout class="flex-column flex-md-row">
    <v-layout class="flex-column overflow-visible align-center">
      <h1>Count Down</h1>
      <v-date-picker show-adjacent-months></v-date-picker>
    </v-layout>
    <v-container>
      <v-data-iterator :items="countdownEvents" :page="page">
        <template #default="{ items }">
          <template v-for="(item, i) in items" :key="i">
            <v-card
                class="mt-4"
                :title="item.raw.title"
                :text="item.raw.details"
                variant="outlined"
            ></v-card>
          </template>
        </template>
      </v-data-iterator>
    </v-container>
  </v-layout>
</template>

<style scoped>

</style>
