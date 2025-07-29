<script setup>
import { computed, ref } from "vue";
import AppBar from "@/components/AppBar.vue";
import SlideBar from "../components/SlideBar.vue";
import RightSlide from "@/components/RightSlide.vue";

const slidOpen = ref(true);
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
  <div class="min-h-screen m-0 p-0 flex text-[14px]">
    <SlideBar
      :slidOpen="slidOpen"
      @update:slidOpen="slidOpen = $event"
      @update:selectedLabels="updateSelectedLabels"
    />
    <div class="flex flex-col flex-grow min-w-0 max-w-[913px]">
      <AppBar
        class="shrink-0 overflow-auto"
        @toggle-slide="toggleSlideOpenClose"
        :selected-parent="selectedLabels.parentLabel"
        :selected-child="selectedLabels.childLabel"
      />
      <div class="p-4 flex-grow overflow-auto">
        <router-view />
      </div>
    </div>

    <div class="max-w-[100px] shrink-0">
      <RightSlide />
    </div>
  </div>
</template>
