<template>
  <div class="bg-white dark:bg-[#2A2A2A] p-4 rounded sha shadow-xl text-center">
    <h4 class="text-sm text-gray-500">{{ t }}</h4>
    <p class="text-xl font-bold">{{ value }}</p>
    <p :class="changeColor" class="text-sm">{{ change }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["title", "value", "change"]);

const changeColor = computed(() =>
  props.change.includes("+") ? "text-green-500" : "text-red-500"
);
</script>
