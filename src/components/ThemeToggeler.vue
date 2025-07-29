<template>
    <Icon icon="ix:light-dark" width="18" height="18" class="cursor-pointer transition" :style="{ color: iconColor }"
        @click="toggleDarkMode" />

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Icon } from "@iconify/vue";

const isDark = ref(false);
const iconColor = computed(() => (isDark.value ? '#ffffff' : '#2A2A2A'));
function toggleDarkMode() {
    isDark.value = !isDark.value;

    if (isDark.value) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    document.documentElement.classList.toggle('dark', isDark.value);
}
onMounted(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');

    isDark.value = stored === 'dark' || (!stored && prefersDark);

    document.documentElement.classList.toggle('dark', isDark.value);
});
</script>