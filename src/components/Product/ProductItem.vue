<script setup lang="ts">
import StarIcon from "@icons/star.svg";
import HeartIcon from "@icons/heart.svg";
import { IProduct } from "@/types";
import { getDynamicImage } from "@/helpers";

const props = defineProps<{
  product: IProduct;
}>();
</script>

<template>
  <div class="group/item">
    <div
      class="relative h-[300px] flex flex-center bg-neutral-50 overflow-hidden"
    >
      <RouterLink
        :to="{ name: 'Product', params: { slug: product.slug } }"
        class="w-[90%]"
      >
        <img
          class="w-full hover:scale-110 transition-all duration-200"
          :src="getDynamicImage(product.image)"
          :alt="product.name"
        />
      </RouterLink>
      <div
        class="group absolute top-4 group-hover/item:right-4 -right-10 flex flex-center bg-neutral-100 size-8 rounded-full shadow-item cursor-pointer transition-all duration-200"
      >
        <HeartIcon
          class="w-5 text-neutral-500 group-hover:text-red-400 transition-all duration-200"
        />
      </div>
    </div>
    <div class="flex flex-col mt-5">
      <span class="text-16px font-medium text-neutral-700 mb-[2px]"
        >#Sản phẩm mới</span
      >
      <RouterLink
        :to="{ name: 'Product', params: { slug: product.slug } }"
        class="mb-4 text-16px text-neutral-900 hover:text-brand-400 font-semibold line-clamp-1 text-ellipsis"
        >{{ product.name }}</RouterLink
      >
      <span class="text-20px text-brand-400 font-medium"
        >{{ product.prices[1].price.toLocaleString("vi-VN") }}đ</span
      >
    </div>
  </div>
</template>
