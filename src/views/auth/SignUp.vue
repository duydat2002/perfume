<script setup lang="ts">
import EyeIcon from "@icons/eye.svg";
import CheckIcon from "@icons/check.svg";
import { ref } from "vue";

const showPassword = ref(false);
const checkTerm = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="flex min-h-screen">
    <div class="flex-1">
      <div class="size-full relative">
        <img
          class="h-full object-cover"
          src="@/assets/images/signup-thumb.png"
          alt="Sign In Thumb"
        />
        <img
          class="absolute w-[160px] top-8 left-1/2 -translate-x-1/2"
          src="@/assets/images/logo-black.png"
          alt="Perfume"
        />
      </div>
    </div>
    <div class="flex-1">
      <div class="mt-[220px] ml-[88px] w-[456px]">
        <div class="">
          <span class="text-24px font-semibold">Đăng kí</span>
          <div class="text-16px">
            <span class="">Bạn đã có tài khoản ? </span>
            <RouterLink
              class="font-semibold text-secondary-300"
              :to="{ name: 'SignIn' }"
              >Đăng nhập</RouterLink
            >
          </div>
        </div>
        <div class="mt-8 text-16px not-lastchild:mb-8">
          <div class="pb-[14px] border-b border-neutral-300">
            <input
              type="text"
              class="placeholder-neutral-400"
              placeholder="Họ và tên"
            />
          </div>
          <div class="pb-[14px] border-b border-neutral-300">
            <input
              type="text"
              class="placeholder-neutral-400"
              placeholder="Tài khoản"
            />
          </div>
          <div class="pb-[14px] border-b border-neutral-300">
            <input
              type="email"
              class="placeholder-neutral-400"
              placeholder="Email"
            />
          </div>
          <div class="pb-[14px] border-b border-neutral-300">
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
              <span class="font-semibold text-neutral-700"
                >Chính sách bảo mật</span
              >
              và
              <span class="font-semibold text-neutral-700"
                >Điều khoản sử dụng</span
              ></label
            >
          </div>
        </div>
        <button
          class="mt-8 w-full px-10 py-[10px] rounded-lg text-16px text-white bg-neutral-700"
        >
          Đăng kí
        </button>
      </div>
    </div>
  </div>
</template>
