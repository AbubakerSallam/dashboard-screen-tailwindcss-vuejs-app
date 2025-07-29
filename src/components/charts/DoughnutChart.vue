<template>
  <div class="bg-white dark:bg-[#2A2A2A] p-4 rounded shadow-xl h-64">
    <h4 class="text-sm text-gray-500 mb-2 inline-flex">Traffic by Location</h4>
    <Doughnut :data="data" :options="options" />
    <div class="block">
      <span class="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span
      >United States (52.1%)
      <span class="inline-block w-3 h-3 rounded-full bg-green-400 mr-2"></span
      >Canada (22.8%)
      <span class="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2"></span
      >Mexico (13.9%)
      <span class="inline-block w-3 h-3 rounded-full bg-gray-400 mr-2"></span
      >Other (11.2%)
    </div>
    <!-- <ul class="mt-4 text-sm  ">
            <li>   </li>
            <li> </li>
            <li>  </li>
            <li></li>
        </ul> -->
  </div>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data = {
  labels: ["United States", "Canada", "Mexico", "Other"],
  datasets: [
    {
      label: "Location",
      data: [52.1, 22.8, 13.9, 11.2],
      backgroundColor: ["#3b82f6", "#34d399", "#fbbf24", "#9ca3af"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
};
</script>
