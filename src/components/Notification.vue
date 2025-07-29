<template>
    <div class="relative flex items-start space-x-1 p-2" v-for="(card, index) in cards" :key="index">

        <div class="relative shrink-0 pt-0.5">
            <img v-if="card.image" :src="card.image" alt="" class="w-[20px] h-[20px] rounded-xl object-cover">
            <IconHolder :iconHolder="card.icon" v-else />
            <div v-if="card.image && index != cards.length - 1 && card.subtitle"
                class="absolute left-1/2 -bottom-6 h-[90%] w-px bg-gray-300 transform -translate-x-1/2">
            </div>
        </div>
        <div class="flex flex-col max-w-50 ml-1 ">
            <span class="text-sm font-medium truncate  ">
                {{ card.title }}
            </span>
            <span class="text-xs text-gray-500 truncate">
                {{ card.subtitle }}
            </span>
        </div>
    </div>
</template>

<script setup>
import IconHolder from './IconHolder.vue';

defineProps({
    cards: {
        type: Array,
        default: () => [],
    },
});
</script>