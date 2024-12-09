<script setup lang="ts">
import UButton from "../Common/UButton.vue";
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/stores";
import { ref } from "vue";

const { popupSelected } = storeToRefs(useCommonStore());

const errForgot = ref(false);

const forgotPass = () => {
  errForgot.value = true;
};
</script>

<template>
  <div
    class="fixed flex flex-center top-0 right-0 w-full h-full bg-[#00000099] z-50"
    v-click-inside="
      () => {
        popupSelected = undefined;
      }
    "
  >
    <div class="w-[600px] bg-white p-12">
      <div class="flex flex-col mb-8">
        <span class="mb-6 text-48px font-medium text-neutral-900"
          >Quên mật khẩu</span
        >
        <span class="text-16px text-neutral-700"
          >Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua
          email.</span
        >
      </div>
      <div class="flex flex-col gap-8 text-16px text-neutral-900">
        <div class="pb-[18px] border-b border-neutral-300">
          <input
            type="text"
            class="placeholder-neutral-400"
            placeholder="Email"
          />
        </div>
        <span v-if="errForgot" class="text-16px text-[#FC0509] -mt-5"
          >* Email không tồn tại</span
        >
        <UButton title="Lấy lại mật khẩu" @click="forgotPass"></UButton>
      </div>
    </div>
  </div>
</template>
