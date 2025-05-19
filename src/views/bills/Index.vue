<script lang="ts" setup>

const typeItems = ["食品", "衣物", "日常", "玩乐"];

</script>

<template>
  <b-page elevation="2" title="Bill">
    <v-layout class="d-flex flex-sm-row-reverse flex-column mx-auto">
      <v-layout class="flex-column" style="padding-top: 2dvh">
        <v-autocomplete :items="typeItems" clearable label="Type"></v-autocomplete>
        <v-autocomplete :items="typeItems" clearable label="Account" density="comfortable"></v-autocomplete>
        <v-text-field clearable label="Amount" type="number"></v-text-field>
      </v-layout>
    </v-layout>
  </b-page>
</template>

<style scoped>

</style>