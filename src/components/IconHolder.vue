<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
    iconHolder: {
        type: String,
        default: "",
    }

});

</script>

<template>


    <Button>
        <Icon :icon="iconHolder" width="20" height="20" class="cursor-pointer transition"
            :style="{ color: 'var(--icon-color)' }" />
    </Button>


</template>
