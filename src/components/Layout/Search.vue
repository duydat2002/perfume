<script setup lang="ts">
import CancelIcon from "@icons/cancel.svg";
import SearchIcon from "@icons/search.svg";
import ProductItem from "../Product/ProductItem.vue";
import { storeToRefs } from "pinia";
import { useCommonStore, useProductStore } from "@/stores";
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

const { products } = storeToRefs(useProductStore());
const { popupSelected } = storeToRefs(useCommonStore());

const search = ref("");

const searchProducts = computed(() => {
  return products.value.filter((p) =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div class="fixed top-[88px] left-0 right-0 min-h-screen bg-white z-50">
    <div class="flex flex-col items-center mx-content">
      <div class="relative w-full mt-2 mb-3 flex flex-center">
        <span class="text-30px font-semibold text-center text-brand-400"
          >TÌM KIẾM</span
        >
        <div class="absolute right-0 flex flex-center">
          <CancelIcon
            class="cursor-pointer hover:text-[#FF0004] transition-all duration-200"
            @click="
              () => {
                popupSelected = undefined;
              }
            "
          />
        </div>
      </div>
      <div
        class="flex items-center gap-4 w-[600px] py-4 border-b border-neutral-600 mb-5"
      >
        <SearchIcon class="w-5" />
        <input
          type="text"
          class="text-16px font-medium text-neutral-900 placeholder:text-neutral-700"
          placeholder="Tìm kiếm"
          v-model="search"
        />
      </div>
      <div class="w-full">
        <span class="block text-20px font-medium mb-2">KẾT QUẢ TÌM KIẾM</span>
        <div class="flex flex-center">
          <div v-if="searchProducts.length > 0" class="w-full">
            <swiper class="swiper" :slides-per-view="4" :space-between="20">
              <swiper-slide v-for="product in searchProducts" :key="product.id">
                <ProductItem :product />
              </swiper-slide>
            </swiper>
          </div>
          <span v-else class="py-20">Không tìm thấy sản phẩm nào.</span>
        </div>
      </div>
    </div>
  </div>
</template>
