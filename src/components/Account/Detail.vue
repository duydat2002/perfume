<script setup lang="ts">
import UButton from "../Common/UButton.vue";
import UInput from "../Common/UInput.vue";
import { reactive } from "vue";

const accountDetail = reactive({
  firstname: "",
  lastname: "",
  email: "",
});

const changePassword = reactive({
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
});
</script>

<template>
  <div class="">
    <div class="">
      <span class="block mb-6 text-30px font-semibold text-black"
        >Chi tiết tài khoản</span
      >
      <div class="flex flex-col gap-6">
        <UInput
          title="Tên"
          placeholder="Tên"
          v-model:prop-value="accountDetail.firstname"
        />
        <UInput
          title="Họ"
          placeholder="Họ"
          v-model:prop-value="accountDetail.lastname"
        />
        <UInput
          title="Email"
          placeholder="Email"
          v-model:prop-value="accountDetail.email"
        />
      </div>
      <div class="my-10">
        <UButton class="w-fit px-10" title="Lưu thay đổi" size="medium" />
      </div>
    </div>
    <div class="">
      <span class="block mb-6 text-30px font-semibold text-black"
        >Mật khẩu</span
      >
      <div class="flex flex-col gap-6">
        <UInput
          title="Mật khẩu cũ"
          placeholder="Mật khẩu cũ"
          v-model:prop-value="changePassword.oldPassword"
        />
        <UInput
          title="Mật khẩu mới"
          placeholder="Mật khẩu mới"
          v-model:prop-value="changePassword.newPassword"
        />
        <UInput
          title="Nhập lại mật khẩu"
          placeholder="Nhập lại mật khẩu"
          v-model:prop-value="changePassword.confirmPassword"
        />
      </div>
      <div class="my-10">
        <UButton class="w-fit px-10" title="Lưu thay đổi" size="medium" />
      </div>
    </div>
  </div>
</template>
