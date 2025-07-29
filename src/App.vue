<script setup>
import { onMounted } from 'vue';
import HomeView from './views/HomeView.vue';
onMounted(() => {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
});
</script>

<template>
  <div class="max-w-full ">
    <HomeView />
  </div>
</template>
