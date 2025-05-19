<script lang="ts" setup>
export interface BPageProps {
  title?: string;
  elevation?: string | number;
}

const props = defineProps<BPageProps>();
</script>

<template>
  <v-app-bar
    :elevation="props.elevation"
    :title="props.title"
  >
    <template #prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
  <v-main>
    <slot></slot>
  </v-main>
  <v-bottom-navigation></v-bottom-navigation>
</template>

<style scoped>
.v-main {
  padding-left: 16px;
  padding-right: 16px;
}
</style>