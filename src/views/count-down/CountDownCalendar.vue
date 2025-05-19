<script setup lang="ts">
import { ref, reactive } from "vue";
import BDatePopPicker from "@/components/BDatePicker/BDatePopPicker.vue";

const date = ref(null);
const page = ref(1)
const countdownEvents = reactive([
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
  { date: "2023-12-29", title: "holiday", details: "details - holiday" },
])
</script>

<template>
  <v-app>
    <v-app-bar title="Count Down">
      <template #prepend>
        <v-app-bar-nav-icon />
      </template>
    </v-app-bar>
    <v-main>
      <v-layout class="flex-column flex-md-row">
        <v-layout class="flex-column overflow-visible align-center justify-center">
          <v-date-picker
              v-model="date"
              show-adjacent-months
          ></v-date-picker>
          <b-date-pop-picker
              v-model="date"
          ></b-date-pop-picker>
        </v-layout>
        <v-container>
          <v-data-iterator :items="countdownEvents" :page="page">
            <template v-slot:default="{ items }">
              <template v-for="(item, i) in items" :key="i">
                <v-card class="mt-4" :title="item.raw.title" :text="item.raw.details" variant="outlined" hover>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn variant="text">Click</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </template>
          </v-data-iterator>
        </v-container>
      </v-layout>
    </v-main>
  </v-app>
</template>

<style scoped></style>
