<script setup lang="ts">
import { getDynamicImage } from "@/helpers";
import UButton from "./UButton.vue";
</script>

<template>
  <div
    class="w-full h-[460px] px-content py-20 flex bg-cover"
    :style="{
      backgroundImage: `url(${getDynamicImage('newsletter.jpg')})`,
    }"
  >
    <div class="flex-1 flex flex-col text-white mr-10">
      <span class="text-72px font-medium mb-5">Liên hệ với chúng tôi</span>
      <span class="text-20px"
        >Chúng tôi luôn sẵn sàng lắng nghe ý kiến, phản hồi và giải đáp thắc mắc
        của bạn.</span
      >
    </div>
    <div class="w-[765px] flex flex-col gap-3">
      <div class="flex gap-3 text-18px font-medium text-white">
        <div class="flex-1 border border-white">
          <input
            type="text"
            class="w-full px-6 py-3 placeholder:text-white"
            placeholder="Tên của bạn"
          />
        </div>
        <div class="flex-1 border border-white">
          <input
            type="text"
            class="w-full px-6 py-3 placeholder:text-white"
            placeholder="Số điện thoại"
          />
        </div>
        <div class="flex-1 border border-white">
          <input
            type="email"
            class="w-full px-6 py-3 placeholder:text-white"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="flex-1 border border-white relative">
        <textarea
          class="size-full px-6 py-3 resize-none text-18px font-medium text-white placeholder:text-white"
          placeholder="Nội dung"
        ></textarea>
        <div class="absolute right-10 bottom-4">
          <UButton
            class="w-[110px]"
            variant="outlined"
            variant-type="white"
            title="Gửi"
          ></UButton>
        </div>
      </div>
    </div>
  </div>
</template>
