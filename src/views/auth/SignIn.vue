<script setup lang="ts">
import EyeIcon from "@icons/eye.svg";
import CheckIcon from "@icons/check.svg";
import { ref } from "vue";

const showPassword = ref(false);
const checkRememberPass = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="flex min-h-screen">
    <div class="flex-1">
      <img
        class="h-full object-cover"
        src="@/assets/images/signin-thumb.png"
        alt="Sign In Thumb"
      />
    </div>
    <div class="flex-1">
      <div class="mt-[220px] ml-[88px] w-[456px]">
        <div class="">
          <span class="text-24px font-semibold">Đăng nhập</span>
          <div class="text-16px">
            <span class="">Bạn chưa có tài khoản ? </span>
            <RouterLink
              class="font-semibold text-secondary-300"
              :to="{ name: 'SignUp' }"
              >Đăng kí</RouterLink
            >
          </div>
        </div>
        <div class="mt-8 text-16px not-lastchild:mb-8">
          <div class="pb-[14px] border-b border-neutral-300">
            <input
              type="text"
              class="placeholder-neutral-400"
              placeholder="Tài khoản hoặc Email"
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
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div
                class="relative size-6 mr-[14px] rounded-[4px] border-[1.5px] border-neutral-400"
                :class="checkRememberPass ? 'bg-secondary-300' : 'bg-none'"
              >
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  class="size-full opacity-0"
                  v-model="checkRememberPass"
                />
                <CheckIcon
                  v-if="checkRememberPass"
                  class="absolute-center w-4 fill-white select-none pointer-events-none"
                />
              </div>
              <label for="remember" class="text-neutral-400">Ghi nhớ</label>
            </div>
            <RouterLink :to="{ name: 'Home' }" class="font-semibold"
              >Quên mật khẩu?</RouterLink
            >
          </div>
        </div>
        <button
          class="mt-8 w-full px-10 py-[10px] rounded-lg text-16px text-white bg-neutral-700"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  </div>
</template>
