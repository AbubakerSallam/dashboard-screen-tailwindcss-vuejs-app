<template>
    <Line :data="data" :options="options" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip)

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'This Year',
            data: [12000, 19000, 3000, 5000, 20000, 30000, 25000],
            borderColor: '#3b82f6',
            fill: false
        },
        {
            label: 'Last Year',
            data: [10000, 17000, 2500, 4000, 18000, 28000, 24000],
            borderColor: '#94a3b8',
            borderDash: [5, 5],
            fill: false
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false
}
</script>