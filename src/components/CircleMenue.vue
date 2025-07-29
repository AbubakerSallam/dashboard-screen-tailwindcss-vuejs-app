<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <div>
        <div class="inline-flex items-center gap-1 my-1">
            <Icon icon="material-symbols-light:circle" width="7" height="7" style="color: #a09b9b" />
            <slot>Overview</slot>
        </div>

    </div>
</template>