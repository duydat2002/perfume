<script setup lang="ts">
import { IBreadcrum } from "@/types";
import { computed } from "vue";

const props = defineProps<{
  items: IBreadcrum[];
}>();

const lastItem = computed(() => {
  return props.items.pop();
});
</script>

<template>
  <div class="mx-content flex items-center mb-3 pt-5">
    <div v-for="item in items" :key="item.text" class="flex items-center">
      <RouterLink
        :to="item.link"
        class="text-14px font-medium text-neutral-400 hover:text-neutral-900"
        >{{ item.text }}</RouterLink
      >
      <span class="block mx-2">/</span>
    </div>
    <div class="flex items-center">
      <div class="text-14px font-medium text-neutral-900">
        {{ lastItem?.text }}
      </div>
    </div>
  </div>
</template>
