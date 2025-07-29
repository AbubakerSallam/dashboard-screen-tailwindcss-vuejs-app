<script setup>
import ThemeToggeler from "@/components/ThemeToggeler.vue";
import IconHolder from "./IconHolder.vue";
import { Icon } from "@iconify/vue";
import { useWindowSize } from "@vueuse/core";
const props = defineProps({
  selectedParent: String,
  selectedChild: String,
});
const emit = defineEmits(["toggle-slide"]);
const toggleCall = () => {
  emit("toggle-slide");
};
const { width } = useWindowSize();
</script>
<template>
  <div
    class="text-[10px] sm:text-sm h-[68px] flex items-center sm:justify-between sm:px-6 dark:bg-[#2A2A2A] dark:text-white border-b border-b-gray-400"
    :class="{ 'justify-center': width <= 639 }"
  >
    <div class="flex gap-1 sm:gap-3 md:gap-4 items-center">
      <IconHolder
        class="sm:hidden block"
        :iconHolder="'ic:baseline-menu'"
        @click="toggleCall"
      />
      <IconHolder :iconHolder="'cuida:dashboard-outline'" />
      <IconHolder :iconHolder="'tabler:star'" />

      <div class="flex items-center sm:gap-3 md:gap-4">
        <Button class="cursor-pointer"
          ><span class="text-gray-300">{{ selectedParent }}</span></Button
        >
        <span class="text-gray-300">/</span>
        <Button class="cursor-pointer"
          ><span>{{ selectedChild }}</span></Button
        >
        <!-- <label class="sm:hidden inline-flex items-center gap-1">
          <label
            class="rounded-md dark:bg-gray-400 bg-gray-100 flex text-gray-300 gap-1 items-center pl-1"
          >
            <Icon
              icon="mynaui:search"
              width="20"
              height="20"
              style="color: #d1d5dc"
            />
            <span>Search</span>
          </label>
          <Icon
            icon="mynaui:search"
            width="20"
            height="20"
            style="color: #d1d5dc"
          />
          <ThemeToggeler />
        </label> -->
      </div>
    </div>
    <div class="h-[28px] flex flex-row items-center gap-0.5 sm:gap-2 ml-3">
      <label
        class="w-[79px] min-sm:w-[142px] rounded-lg dark:bg-gray-400 bg-gray-100 flex text-gray-300 gap-1 items-center pl-1"
      >
        <Icon
          icon="mynaui:search"
          width="20"
          height="20"
          style="color: #d1d5dc"
        />
        <span>Search</span>
      </label>
      <ThemeToggeler />
      <IconHolder :iconHolder="'circum:timer'" />
      <IconHolder :iconHolder="'mingcute:notification-line'" />
      <IconHolder :iconHolder="'fluent:slide-transition-20-regular'" />
    </div>
  </div>
</template>
