<script setup>
import { computed, ref } from "vue";
import AppBar from "@/components/AppBar.vue";
import SlideBar from "../components/SlideBar.vue";
import RightSlide from "@/components/RightSlide.vue";

const slidOpen = ref(false);
const toggleSlideOpenClose = () => {
  slidOpen.value = !slidOpen.value;
};
const selectedLabels = ref({
  parentLabel: "Dashboards",
  childLabel: "Defaults",
});
const updateSelectedLabels = (payload) => {
  selectedLabels.value.parentLabel = payload.parentLabel;
  selectedLabels.value.childLabel = payload.childLabel;
};
</script>

<template>
  <div class="min-h-screen max-w-full m-0 p-0 flex text-[14px]">
    <SlideBar
      :slidOpen="slidOpen"
      @update:slidOpen="slidOpen = $event"
      @update:selectedLabels="updateSelectedLabels"
    />
    <div class="flex flex-col w-full max-w-[830px] min-w-0 ">
      <AppBar
        class="shrink-0 overflow-x-visible"
        @toggle-slide="toggleSlideOpenClose"
        :selected-parent="selectedLabels.parentLabel"
:selected-child="selectedLabels.childLabel"
/>
<div class="p-4 flex-grow ">
<router-view />
</div>
    </div>

    <div class="w-10  ">
      <RightSlide />
    </div>
  </div>
</template>
