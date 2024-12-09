<script setup lang="ts">
import { IOption } from "@/types";
import DownIcon from "@icons/down-select.svg";
import { ref } from "vue";

const emit = defineEmits(["update:selected", "choose"]);

const props = defineProps<{
  title: string;
  options: IOption[];
  selected?: string;
}>();

const showDropdown = ref(false);

const chooseOption = (option: IOption) => {
  if (!option.disabled) {
    emit(
      "update:selected",
      option.key != props.selected ? option.key : undefined
    );
    emit("choose", option.key != props.selected ? option : undefined);
    showDropdown.value = false;
  }
};
</script>

<template>
  <div
    class="w-full relative border px-4 py-2 h-12 border-neutral-500"
    :class="[selected ? 'bg-brand-200' : 'bg-white']"
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
      <span class="text-16px font-bold text-neutral-600">{{
        selected ? options.find((o) => o.key == selected)?.value : title
      }}</span>
      <DownIcon class="" />
    </div>
    <div v-if="showDropdown" class="absolute top-full left-0 right-0 z-10">
      <div class="w-full flex flex-col pt-[1px] shadow-dropdow">
        <div
          v-for="option in options"
          :key="option.key"
          class="flex px-4 py-[14px] items-center justify-between border border-neutral-200 bg-white text-neutral-600 hover:bg-brand-200 hover:text-white has-[.active]:bg-brand-200 has-[.active]:text-white select-none"
          :class="{ active: selected == option.key }"
          @click="chooseOption(option)"
        >
          <span class="text-16px font-bold">{{ option.value }}</span>
          <DownIcon class="rotate-180 w-6" />
        </div>
      </div>
    </div>
  </div>
</template>
