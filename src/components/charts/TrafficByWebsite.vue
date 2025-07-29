<template>
    <div class="bg-white dark:bg-[#2A2A2A] p-4 rounded shadow-xl h-64">
        <h4 class="text-sm text-gray-500 mb-2">Traffic by Website</h4>
        <ul class="space-y-2 text-sm">
            <li v-for="item in trafficData" :key="item.platform" class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <Icon :icon="item.icon" class="text-gray-600 dark:text-gray-300" width="18" height="18" />
                    <span>{{ item.platform }}</span>
                </div>
                <span class="font-semibold">{{ item.value }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const trafficData = [
    { platform: 'Google', icon: 'mdi:google', value: '39%' },
    { platform: 'YouTube', icon: 'mdi:youtube', value: '21%' },
    { platform: 'Instagram', icon: 'mdi:instagram', value: '15%' },
    { platform: 'Pinterest', icon: 'mdi:pinterest', value: '10%' },
    { platform: 'Facebook', icon: 'mdi:facebook', value: '9%' },
    { platform: 'Twitter', icon: 'mdi:twitter', value: '6%' }
]
</script>
