<template>
    <div class="bg-white dark:bg-[#2A2A2A] p-4 rounded shadow- h-64">
        <h4 class="text-sm text-gray-500 mb-2">Traffic by Device</h4>
        <Bar :data="data" :options="options" />
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const data = {
    labels: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'],
    datasets: [
        {
            label: 'Users',
            data: [15000, 12000, 22000, 18000, 17000, 8000],
            backgroundColor: '#3b82f6'
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
</script>
