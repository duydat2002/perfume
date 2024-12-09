<script setup lang="ts">
import EyeIcon from "@icons/eye.svg";
import CheckIcon from "@icons/check.svg";
import UButton from "../Common/UButton.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/stores";

const { popupSelected } = storeToRefs(useCommonStore());

const showPassword = ref(false);
const checkTerm = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
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
        <span class="mb-6 text-48px font-medium text-neutral-900">Đăng kí</span>
        <div class="text-16px">
          <span class="">Bạn đã có tài khoản ? </span>
          <span
            class="font-semibold text-secondary-300 cursor-pointer"
            @click="
              () => {
                popupSelected = 'signin';
              }
            "
            >Đăng nhập</span
          >
        </div>
      </div>
      <div class="flex flex-col gap-8 text-16px text-neutral-900">
        <div class="pb-[18px] border-b border-neutral-300">
          <input
            type="text"
            class="placeholder-neutral-400"
            placeholder="Họ và tên"
          />
        </div>
        <div class="pb-[18px] border-b border-neutral-300">
          <input
            type="text"
            class="placeholder-neutral-400"
            placeholder="Tài khoản"
          />
        </div>
        <div class="pb-[18px] border-b border-neutral-300">
          <input
            type="email"
            class="placeholder-neutral-400"
            placeholder="Email"
          />
        </div>
        <div class="pb-[18px] border-b border-neutral-300">
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="placeholder-neutral-400"
              placeholder="Mật khẩu"
            />
            <div
              class="absolute right-0 top-1/2 -translate-y-1/2 hover:cursor-pointer"
              @click="togglePassword"
            >
              <EyeIcon />
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="relative size-6 mr-[14px] rounded-[4px] border-[1.5px] border-neutral-400"
            :class="checkTerm ? 'bg-secondary-300' : 'bg-none'"
          >
            <input
              type="checkbox"
              name="term"
              id="term"
              class="size-full opacity-0"
              v-model="checkTerm"
            />
            <CheckIcon
              v-if="checkTerm"
              class="absolute-center w-4 fill-white select-none pointer-events-none"
            />
          </div>
          <label for="term" class="text-neutral-400"
            >Tôi đồng ý với
            <span class="font-semibold text-neutral-700 cursor-pointer"
              >Chính sách bảo mật</span
            >
            và
            <span class="font-semibold text-neutral-700 cursor-pointer"
              >Điều khoản sử dụng</span
            ></label
          >
        </div>
        <UButton title="Đăng ký"></UButton>
      </div>
    </div>
  </div>
</template>
