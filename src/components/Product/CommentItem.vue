<script setup lang="ts">
import Stars from "../Common/Stars.vue";
</script>

<template>
  <div class="flex pb-6 border-b border-neutral-300">
    <div class="size-[72px] rounded-full mr-10 overflow-hidden">
      <img class="w-full" src="@/assets/images/account.jpg" alt="" />
    </div>
    <div class="">
      <div class="flex flex-col gap-4 mb-6">
        <span class="text-20px font-semibold text-neutral-700"
          >Linh nguyen</span
        >
        <Stars />
        <span class="text-16px text-neutral-700"
          >Hôm trước mua chai mini cho anh xã, xài xong ổng thích quá thế là giờ
          phải đặt chai lớn. toilette nhưng lưu mùi ok ghê. mát dịu dễ chịu mà
          sang nữa.</span
        >
      </div>
      <div class="flex gap-4">
        <span class="text-12px text-neutral-700">Khoảng 1 phút trước</span>
        <span class="text-12px font-medium text-neutral-700 cursor-pointer"
          >Thích</span
        >
        <span class="text-12px font-medium text-neutral-700 cursor-pointer"
          >Trả lời</span
        >
      </div>
    </div>
  </div>
</template>
