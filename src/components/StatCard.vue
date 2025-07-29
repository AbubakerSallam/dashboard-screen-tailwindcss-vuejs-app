<template>
  <div :class="changeBg" class="p-4 rounded sha shadow-xl text-center">
    <!--  bg-white dark:bg-[#2A2A2A] -->
    <h4 class="text-sm text-gray-500 my-3">{{ title }}</h4>
    <p class="text-xl font-bold text-black">{{ value }}</p>
    <p :class="changeColor" class="text-sm">{{ change }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["title", "value", "change"]);

const changeColor = computed(() =>
  props.change.includes("+") ? "text-green-500" : "text-red-500"
);
const changeBg = computed(() =>
  props.change.includes("+") ? "bg-teal-50" : "bg-blue-100"
);
</script>
