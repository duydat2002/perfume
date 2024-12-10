<script setup lang="ts">
import DownIcon from "@icons/down.svg";
import { ref } from "vue";

const emit = defineEmits(["update:selected"]);

const props = defineProps<{
  title: string;
  items: {
    name: string;
    title: string;
  }[];
  seletecd?: string;
}>();

const showDropdown = ref(false);

const chooseOption = (item: { name: string; title: string }) => {
  emit("update:selected", item.name);
  showDropdown.value = false;
};
</script>

<template>
  <div class="relative">
    <div
      class="flex items-center justify-between cursor-pointer"
      @click="
        () => {
          showDropdown = !showDropdown;
        }
      "
    >
      <span class="text-18px font-semibold text-neutral-900">{{ title }}</span>
      <DownIcon
        class="w-6 transition-all duration-200"
        :class="showDropdown ? 'rotate-180' : ''"
      />
    </div>
    <div
      v-if="showDropdown"
      class="top-full left-0 right-0 flex flex-col gap-4 pt-4"
    >
      <span
        v-for="item in items"
        :key="item.name"
        class="text-18px font-medium hover:text-neutral-900 hover:font-semibold py-[10px] border-b border-neutral-300 cursor-pointer"
        :class="seletecd == item.name ? 'text-neutral-900' : 'text-neutral-700'"
        @click="chooseOption(item)"
        >{{ item.title }}</span
      >
    </div>
  </div>
</template>
