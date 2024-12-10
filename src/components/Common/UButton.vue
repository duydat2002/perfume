<script setup lang="ts">
import { computed, useSlots } from "vue";

const slots = useSlots();

const props = withDefaults(
  defineProps<{
    title?: string;
    size?: "small" | "medium" | "big";
    variant?: "contained" | "outlined";
    variantType?: "primary" | "secondary" | "white";
    rounded?: string;
  }>(),
  {
    size: "big",
    variant: "contained",
    variantType: "primary",
    rounded: "rounded-none",
  }
);

const variantTypeClass = computed(() => {
  switch (props.variantType) {
    case "primary":
      return props.variant == "contained"
        ? "bg-brand-500 border-brand-500 text-white hover:bg-brand-400 active:bg-brand-500"
        : "border-brand-300 bg-transparent text-brand-500 hover:bg-brand-50 active:bg-transparent";
    case "secondary":
      return props.variant == "contained"
        ? "bg-black border-black text-white"
        : "border-black bg-transparent text-black ";
    case "white":
      return props.variant == "contained"
        ? "bg-white border-white text-white"
        : "border-white bg-transparent text-white hover:bg-white hover:text-black active:bg-neutral-100";
    default:
      return "";
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case "small":
      return "h-12 p-3 text-18px font-semibold";
    case "medium":
      return "h-13 p-3 text-16px font-medium";
    case "big":
      return "h-14 p-4 text-18px font-semibold";
    default:
      return "";
  }
});
</script>

<template>
  <div
    class="flex flex-center gap-2 border cursor-pointer transition-all duration-200"
    :class="[rounded, variantTypeClass, sizeClass]"
  >
    <slot name="left" />
    <slot v-if="slots.default" />
    <span v-else class="">{{ title }}</span>
    <slot name="right" />
  </div>
</template>
