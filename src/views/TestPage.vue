<script lang="ts" setup>

import BBtnPicker from "@/components/BBtnPicker/BBtnPicker.vue";

const data: { keys: string, values: string }[] = [
  { keys: "01, 02", values: "零一, 零二"},
  { keys: "01, 03", values: "零一, 零三"},
  { keys: "02, 04", values: "零二, 零四"},
]

const provinces = [
  { code: "010", name: "北京市"},
  { code: "011", name: "天津市"},
  { code: "012", name: "山东省"},
]

const citys = [
  { parentCode: "010", code: "01", name: "北京市"},
  { parentCode: "011", code: "01", name: "天津市"},
  { parentCode: "012", code: "01", name: "济南市"},
  { parentCode: "012", code: "02", name: "潍坊市"},
]

const result = new Map<string, string>(data.map((item: { keys: string, values: string }) => {
  const keys: string[] = item.keys.split(",")
  const values: string[] = item.values.split(",")
  return keys.map((k: string, i: number): [string, string] => [k.trim(), values[i]?.trim() ?? ""])
}).flat())

</script>

<template>
  <b-page>
    <BBtnPicker :items="data" item-title="values" item-value="keys"></BBtnPicker>
  </b-page>
</template>

<style lang="less" scoped>
</style>
