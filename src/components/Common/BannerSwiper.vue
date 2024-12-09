<script setup lang="ts">
import LeftIcon from "@icons/arrow-left.svg";
import RightIcon from "@icons/arrow-right.svg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
</script>

<template>
  <div class="banner relative group/banner overflow-hidden">
    <swiper
      class="swiper h-full"
      :modules="[Pagination, Navigation, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 3000,
      }"
      :pagination="{ clickable: true }"
      :navigation="{
        prevEl: '.banner .navi-prev',
        nextEl: '.banner .navi-next',
      }"
    >
      <swiper-slide
        ><div class="">
          <img
            class="w-full"
            src="@/assets/images/banner-1.png"
            alt="Banner 1"
          /></div
      ></swiper-slide>
      <swiper-slide>
        <div class="">
          <img
            class="w-full"
            src="@/assets/images/banner-2.png"
            alt="Banner 2"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="">
          <img
            class="w-full"
            src="@/assets/images/banner-3.png"
            alt="Banner 3"
          />
        </div>
      </swiper-slide>
    </swiper>
    <div class="banner-navi">
      <div
        class="navi-prev size-[52px] hover:scale-110 absolute -left-10 group-hover/banner:left-10 top-1/2 -translate-y-1/2 bg-white rounded-full flex flex-center z-10 cursor-pointer select-none transition-all duration-200 opacity-0 group-hover/banner:opacity-100"
      >
        <LeftIcon class="w-8 text-neutral-400 hover:text-neutral-700" />
      </div>
      <div
        class="navi-next size-[52px] hover:scale-110 absolute -right-10 group-hover/banner:right-10 top-1/2 -translate-y-1/2 bg-white rounded-full flex flex-center z-10 cursor-pointer select-none transition-all duration-200 opacity-0 group-hover/banner:opacity-100"
      >
        <RightIcon class="w-8 text-neutral-400 hover:text-neutral-700" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner :deep(.swiper-pagination-bullet) {
  @apply bg-neutral-100 opacity-100 transition-all duration-200 mx-2;
}

.banner :deep(.swiper-pagination-bullet-active) {
  @apply w-[30px] rounded-xl;
}
</style>
