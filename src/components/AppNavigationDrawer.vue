<script setup lang="ts">
import { ref } from "vue";

const { drawer } = defineProps<{
  drawer: Boolean
}>()

const rail = ref(true)
</script>

<template>
  <v-navigation-drawer
      :drawer="drawer"
      :rail="rail"
      mobile-breakpoint="xs"
      :expand-on-hover="true"
      app
  >
    <v-list>
      <v-list-item title="Navigation drawer"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>