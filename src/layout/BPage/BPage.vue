<script lang="ts" setup>
export interface BPageProps {
  title?: string;
  elevation?: string | number;
}

const appTitle: string = import.meta.env.VITE_APP_TITLE;

const props = withDefaults(defineProps<BPageProps>(), {
  elevation: 2,
})
</script>

<template>
  <v-app-bar
    :elevation="props.elevation"
    :title="props.title ?? appTitle"
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