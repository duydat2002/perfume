<script setup lang="ts">
import MailIcon from "@icons/mail.svg";
import PhoneIcon from "@icons/phone.svg";
import LocationIcon from "@icons/location.svg";
import FacebookIcon from "@icons/facebook-f.svg";
import InstagramIcon from "@icons/instagram-f.svg";
import XIcon from "@icons/x-f.svg";
import TiktokIcon from "@icons/tiktok-f.svg";
import TelegramIcon from "@icons/telegram-f.svg";
import ThreadIcon from "@icons/thread-f.svg";
</script>

<template>
  <div
    class="px-content py-14"
    style="background: linear-gradient(221.58deg, #06d001 0%, #058310 95.65%)"
  >
    <div class="mb-14 flex items-center justify-between">
      <div class="">
        <img
          class="h-[54px]"
          src="@/assets/images/logo-hori.png"
          alt="Perfume"
        />
      </div>
      <div class="flex items-center gap-5">
        <RouterLink :to="{ name: 'Home' }">
          <FacebookIcon />
        </RouterLink>
        <RouterLink :to="{ name: 'Home' }">
          <InstagramIcon />
        </RouterLink>
        <RouterLink :to="{ name: 'Home' }">
          <XIcon />
        </RouterLink>
        <RouterLink :to="{ name: 'Home' }">
          <TiktokIcon />
        </RouterLink>
        <RouterLink :to="{ name: 'Home' }">
          <TelegramIcon />
        </RouterLink>
        <RouterLink :to="{ name: 'Home' }">
          <ThreadIcon />
        </RouterLink>
      </div>
    </div>
    <div class="flex items-start justify-between">
      <div class="flex flex-col gap-5 text-white text-14px">
        <div class="flex items-center">
          <div class="mr-3 flex items-center justify-center">
            <LocationIcon class="" />
          </div>
          <span class="">77 ngõ 1 Bùi Xương Trạch, Thanh Xuân, Hà Nội</span>
        </div>
        <div class="flex items-center">
          <div class="mr-3 flex items-center justify-center">
            <MailIcon class="w-6 fill-white" />
          </div>
          <span class="">perfume@gmail.com</span>
        </div>
        <div class="flex items-center">
          <div class="mr-3 flex items-center justify-center">
            <PhoneIcon class="" />
          </div>
          <span class="">0852248926</span>
        </div>
      </div>
      <div class="flex items-center gap-20">
        <RouterLink class="text-14px text-neutral-100" :to="{ name: 'Home' }"
          >Trang chủ</RouterLink
        >
        <RouterLink class="text-14px text-neutral-100" :to="{ name: 'Home' }"
          >Sản phẩm</RouterLink
        >
        <RouterLink class="text-14px text-neutral-100" :to="{ name: 'Home' }"
          >Blog</RouterLink
        >
        <RouterLink class="text-14px text-neutral-100" :to="{ name: 'Home' }"
          >Liên hệ</RouterLink
        >
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between py-4 px-content bg-black">
    <span class="text-[#ffffffcb]"
      >Copyright © 2023
      <span class="text-12px text-brand-400">PERFUME</span> All rights
      reserved</span
    >
    <div class="flex items-center gap-6 text-14px font-medium">
      <RouterLink :to="{ name: 'Home' }" class="text-[#ffffffcb] font-semibold"
        >Điều khoản & Quyền hạn</RouterLink
      >
      <RouterLink :to="{ name: 'Home' }" class="text-[#ffffffcb] font-semibold"
        >Trung tâm hỗ trợ khách hàng</RouterLink
      >
    </div>
  </div>
</template>
