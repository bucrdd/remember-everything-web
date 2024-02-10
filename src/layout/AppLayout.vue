<script setup lang="ts">
import AppNavigationDrawer from "@/components/AppNavigationDrawer.vue";
import { ref } from "vue";

const drawer = ref(false);
</script>

<template>
  <v-app>
    <v-app-bar title="Remember Everything" app></v-app-bar>
    <app-navigation-drawer :drawer="drawer" />
    <v-main class="d-flex" style="min-height: 300px;" app>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>