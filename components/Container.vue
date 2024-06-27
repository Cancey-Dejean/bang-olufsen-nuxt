<script setup lang="ts">
import { computed, defineProps } from "vue";
import { cn } from "@/lib/utils";

// Define the props
const props = defineProps({
  size: {
    type: String,
    default: "base",
  },
  class: {
    type: String,
    default: "",
  },
});

const containerSizes = {
  base: "max-w-[1512px]",
  contained: "contained",
  wide: "wide",
};

// Compute the final class
const containerClass = computed(() => {
  return cn("mx-auto w-full px-9", containerSizes[props.size], props.class);
});
</script>

<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>
