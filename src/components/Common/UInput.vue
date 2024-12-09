<script setup lang="ts">
import { computed, ref } from "vue";

const emit = defineEmits(["update:propValue"]);

const props = defineProps<{
  title: string;
  propValue: string | number;
  placeholder?: string;
}>();

const isFocus = ref(false);

const inputValue = computed({
  get: () => props.propValue,
  set: (value) => {
    emit("update:propValue", value);
  },
});

const focusInput = () => {
  isFocus.value = true;
};

const blurInput = () => {
  isFocus.value = false;
};
</script>

<template>
  <div class="flex flex-col gap-3">
    <span class="text-14px font-semibold text-neutral-700">{{ title }}</span>
    <div
      class="flex flex-center px-4 py-3 border"
      :class="[isFocus ? 'border-brand-300' : 'border-neutral-300']"
    >
      <input
        class="size-full text-neutral-900 placeholder:text-neutral-400 text-14px font-medium"
        type="text"
        v-model="inputValue"
        :placeholder
        @focus="focusInput"
        @blur="blurInput"
      />
    </div>
  </div>
</template>
