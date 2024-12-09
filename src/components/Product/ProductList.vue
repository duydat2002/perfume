<script setup lang="ts">
import RightIcon from "@icons/arrow-right.svg";
import ProductItem from "@/components/Product/ProductItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Scrollbar } from "swiper/modules";
import { IProduct } from "@/types";
import { ref } from "vue";

const props = defineProps<{
  title: string;
  products: IProduct[];
}>();

const uniqueId = ref(Math.random().toString(36).substr(2, 9));
</script>

<template>
  <div class="w-full pt-10 pb-[60px]">
    <div class="flex mb-12 items-end justify-between">
      <span class="text-36px font-semibold">{{ title }}</span>
      <RouterLink
        :to="{ name: 'Home' }"
        class="inline-flex items-center border-b border-neutral-700 text-neutral-700 hover:text-brand-400 transition-all duration-200"
      >
        <span class="text-16px mr-1">Xem thêm</span>
        <RightIcon class="w-5" />
      </RouterLink>
    </div>
    <div class="">
      <swiper
        class="swiper"
        :modules="[Pagination, Autoplay]"
        :slides-per-view="4"
        :space-between="24"
        :autoplay="{
          delay: 3000,
        }"
      >
        <swiper-slide v-for="product in products" :key="product.name">
          <ProductItem :product />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
:deep(.swiper-scrollbar) {
  @apply bg-red-300;
}

:deep(.swiper-scrollbar-drag) {
  @apply h-1 bg-neutral-500 cursor-pointer transition-all duration-200;
}

:deep(.swiper-scrollbar-drag:hover) {
  @apply h-1 bg-neutral-700;
}
</style>
