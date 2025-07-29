<template>
  <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
    <StatCard title="Views" value="7,265" change="+11.01%" />
    <StatCard title="Visits" value="3,671" change="-0.03%" />
    <StatCard title="New Users" value="156" change="+15.03%" />
    <StatCard title="Active Users" value="2,318" change="+6.08%" />
    <div class="col-span-1 md:col-span-2 lg:col-span-3">
      <LineChart />
    </div>
    <TrafficByWebsite />

    <div class="col-span-2 md:col-span-3 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <BarChart />
      <DoughnutChart />
    </div>
   
  </div>
</template>

<script setup>
import BarChart from '@/components/charts/BarChart.vue';
import DoughnutChart from '@/components/charts/DoughnutChart.vue';
import LineChart from '@/components/charts/LineChart.vue';
import TrafficByWebsite from '@/components/charts/TrafficByWebsite.vue';
import StatCard from '@/components/StatCard.vue';


</script>
