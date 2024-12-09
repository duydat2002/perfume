<script setup lang="ts">
import EyeIcon from "@icons/eye.svg";
import CheckIcon from "@icons/check.svg";
import UButton from "../Common/UButton.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/stores";

const { popupSelected, accountUser, isSignIn } = storeToRefs(useCommonStore());

const showPassword = ref(false);
const checkRememberPass = ref(false);
const username = ref("");
const password = ref("");
const errSignin = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const signIn = () => {
  if (
    username.value == accountUser.value.username &&
    password.value == accountUser.value.password
  ) {
    errSignin.value = false;
    isSignIn.value = true;
    popupSelected.value = undefined;
  } else {
    errSignin.value = true;
  }
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
          >Đăng nhập</span
        >
        <div class="text-16px">
          <span class="">Bạn chưa có tài khoản ? </span>
          <span
            class="font-semibold text-secondary-300 cursor-pointer"
            @click="
              () => {
                popupSelected = 'signup';
              }
            "
            >Đăng ký</span
          >
        </div>
      </div>
      <div class="flex flex-col gap-8 text-16px text-neutral-900">
        <div class="pb-[18px] border-b border-neutral-300">
          <input
            type="text"
            class="placeholder-neutral-400"
            placeholder="Tài khoản hoặc Email"
            v-model="username"
          />
        </div>
        <div class="pb-[18px] border-b border-neutral-300">
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="placeholder-neutral-400"
              placeholder="Mật khẩu"
              v-model="password"
            />
            <div
              class="absolute right-0 top-1/2 -translate-y-1/2 hover:cursor-pointer"
              @click="togglePassword"
            >
              <EyeIcon />
            </div>
          </div>
        </div>
        <span v-if="errSignin" class="text-16px text-[#FC0509] -mt-5"
          >* Tên đăng nhập/ mật khẩu không đúng</span
        >
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
          <span
            class="text-16px font-bold text-neutral-900 hover:text-brand-300 cursor-pointer"
            @click="
              () => {
                popupSelected = 'forgotPassword';
              }
            "
            >Quên mật khẩu ?</span
          >
        </div>
        <UButton title="Đăng nhập" @click="signIn"></UButton>
      </div>
    </div>
  </div>
</template>
