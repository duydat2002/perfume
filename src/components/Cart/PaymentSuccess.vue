<script setup lang="ts">
import UButton from "../Common/UButton.vue";
</script>

<template>
  <div
    class="mt-[80px] mx-auto w-[740px] flex flex-col items-center gap-10 border px-10 py-20"
  >
    <div class="flex flex-col gap-4">
      <span
        class="text-[28px] leading-[34px] font-medium text-center text-neutral-700"
        >Cảm ơn! 🎉</span
      >
      <span
        class="text-[40px] leading-[44px] font-medium text-center text-neutral-900"
        >Đơn hàng của bạn đã được nhận.</span
      >
    </div>
    <div class="flex gap-10 mt-4">
      <div class="relative w-20 h-[96px] flex flex-center bg-neutral-50">
        <img class="w-full" src="@/assets/images/Maison Francis.png" alt="" />
        <div
          class="absolute -top-4 -right-4 size-8 rounded-full flex flex-center bg-neutral-900 text-white z-10"
        >
          2
        </div>
      </div>
      <div class="relative w-20 h-[96px] flex flex-center bg-neutral-50">
        <img class="w-full" src="@/assets/images/Maison Francis.png" alt="" />
        <div
          class="absolute -top-4 -right-4 size-8 rounded-full flex flex-center bg-neutral-900 text-white z-10"
        >
          1
        </div>
      </div>
      <div class="relative w-20 h-[96px] flex flex-center bg-neutral-50">
        <img class="w-full" src="@/assets/images/Maison Francis.png" alt="" />
        <div
          class="absolute -top-4 -right-4 size-8 rounded-full flex flex-center bg-neutral-900 text-white z-10"
        >
          1
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 w-[400px]">
      <div class="flex items-center justify-between">
        <span class="text-14px font-semibold text-neutral-500">Mã hàng:</span>
        <span class="text-14px font-semibold text-neutral-900"
          >#0123_45678</span
        >
      </div>
      <div class="flex items-center justify-between">
        <span class="text-14px font-semibold text-neutral-500">Ngày:</span>
        <span class="text-14px font-semibold text-neutral-900">20/10/2024</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-14px font-semibold text-neutral-500">Tổng:</span>
        <span class="text-14px font-semibold text-neutral-900">3.100.000đ</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-14px font-semibold text-neutral-500"
          >Phương thức thanh toán:</span
        >
        <span class="text-14px font-semibold text-neutral-900"
          >Thẻ ngân hàng</span
        >
      </div>
    </div>
    <UButton class="px-[60px]" size="medium" title="Hoàn tất" />
  </div>
</template>
