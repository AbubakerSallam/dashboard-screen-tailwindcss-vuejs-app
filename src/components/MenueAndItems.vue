<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const props = defineProps({
  label: String,
  options: Array,
  currentOpenIndex: String,
  index: String,
  selectedChild: String,
});
const uniqueIndex = (localIndex) => `${props.index}-${localIndex}`;

const emit = defineEmits([
  "update:slidOpen",
  "select",
  "toggle-open",
  "toggle-child",
]);

function selectAChild(subindex, localIndex, option, child) {
  emit("update:slidOpen");
  emit("toggle-child", `${props.index}-${localIndex}-${subindex}`);
  emit("select", {
    parentLabel: option.label,
    childLabel: child.label,
  });
}
function toggle(localIndex) {
  const id = uniqueIndex(localIndex);
  emit("toggle-open", id);
}
</script>
<template>
  <div class="mt-1 text-[16px]" @click="isOpened = !isOpened">
    <span class="text-gray-400">
      {{ label }}
    </span>
  </div>
  <div class="m-2">
    <div v-for="(option, localIndex) in options" :key="uniqueIndex(localIndex)">
      <div
        class="flex items-center gap-2 py-0.5 px-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition delay-100 duration-300 hover:scale-102"
        @click="toggle(localIndex)"
      >
        <span
          class="font-bold text-slate-400 dark:text-slate-300"
          :class="
            currentOpenIndex === uniqueIndex(localIndex) ? 'text-[9px]' : ''
          "
        >
          {{ currentOpenIndex === uniqueIndex(localIndex) ? "▼" : "›" }}</span
        >
        <Icon v-if="option.icon" :icon="option.icon" width="20" height="18" />
        <span>{{ option.label }}</span>
      </div>

      <Transition name="collapse">
        <div
          v-if="option.children && currentOpenIndex === uniqueIndex(localIndex)"
        >
          <router-link
            v-for="(child, subindex) in option.children"
            :key="subindex"
            :to="child.to"
            class="rounded-md hover:bg-slate-200 transition duration-600 dark:hover:bg-slate-700"
            @click="selectAChild(subindex, localIndex, option, child)"
          >
            <!-- <div class="w-3"></div> -->
            <span
              class="hover:bg-slate-200 dark:hover:bg-slate-700 transition delay-100 duration-700 hover:scale-102"
              :class="[
                'block  py-1 px-2 rounded',
                selectedChild === `${props.index}-${localIndex}-${subindex}`
                  ? 'bg-slate-100 dark:bg-slate-800 border-l-4 border-slate-500 dark:border-slate-400'
                  : '',
              ]"
            >
              <span class="ml-12">{{ child.label }}</span>
            </span>
          </router-link>
        </div>
      </Transition>
    </div>
  </div>
</template>
<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}

.collapse-enter-to,
.collapse-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
