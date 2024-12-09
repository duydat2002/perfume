<script setup lang="ts">
import { IOption } from "@/types";
import DownIcon from "@icons/down.svg";
import { ref } from "vue";

const emit = defineEmits(["update:selected", "choose"]);

const props = defineProps<{
  options: IOption[];
  selected?: string;
}>();

const showDropdown = ref(false);

const chooseOption = (option: IOption) => {
  if (!option.disabled) {
    emit("update:selected", option.key);
    emit("choose", option);
    showDropdown.value = false;
  }
};
</script>

<template>
  <div
    class="w-full relative border-2 px-4 py-2 h-12 border-neutral-400 rounded-lg"
    v-click-outside.short="
      () => {
        showDropdown = false;
      }
    "
  >
    <div
      class="size-full flex items-center justify-between cursor-pointer"
      @click="
        () => {
          showDropdown = !showDropdown;
        }
      "
    >
      <span class="text-16px font-medium text-neutral-700">{{
        options.find((o) => o.key == selected)?.value
      }}</span>
      <DownIcon class="" />
    </div>
    <div v-if="showDropdown" class="absolute top-full pt-2 left-0 right-0 z-10">
      <div
        class="w-full flex flex-col p-2 gap-[10px] shadow-dropdow bg-white rounded-xl border-[1.5px] border-neutral-200"
      >
        <span
          v-for="option in options"
          :class="{ active: option.key == selected }"
          class="px-4 py-2 text-16px text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 has-[.active]:text-neutral-700 has-[.active]:bg-neutral-200 rounded-lg cursor-pointer transition-all duration-100"
          @click="chooseOption(option)"
          >{{ option.value }}</span
        >
      </div>
    </div>
  </div>
</template>
