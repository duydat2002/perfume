<script setup lang="ts">
import ArrowLeftLIcon from "@icons/arrow-left-long.svg";
import ArrowRightLIcon from "@icons/arrow-right-long.svg";
import FilterIcon from "@icons/filter.svg";
import USelect from "@/components/Common/USelect.vue";
import { IBreadcrum, IOption } from "@/types";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductItem from "@/components/Product/ProductItem.vue";
import { storeToRefs } from "pinia";
import { useCommonStore, useProductStore } from "@/stores";
import Newsletter from "@/components/Common/Newsletter.vue";
import Breadcrumb from "@/components/Common/Breadcrumb.vue";
import ProductFilter from "@/components/Product/ProductFilter.vue";

const route = useRoute();

const { products } = storeToRefs(useProductStore());
const { popupSelected } = storeToRefs(useCommonStore());

const breadcrumbs = ref<IBreadcrum[]>([
  { text: "Trang chủ", link: { name: "Home" } },
  { text: "Sản phẩm", link: "" },
]);

onMounted(() => {
  console.log(route, route.params?.category?.toString);
});
</script>

<template>
  <div>
    <Breadcrumb :items="breadcrumbs" />
    <div class="mx-content">
      <div class="flex items-baseline gap-2">
        <span class="text-48px font-semibold text-brand-400 uppercase"
          >Nước hoa unisex</span
        >
        <span class="text-16px font-medium text-neutral-400">(1200)</span>
      </div>
      <div
        class="flex my-10 items-center gap-3 cursor-pointer text-neutral-900 hover:text-brand-400"
        @click="
          () => {
            popupSelected = 'filter';
          }
        "
      >
        <span class="text-18px font-semibold">Bộ lọc</span>
        <FilterIcon class="" />
      </div>
      <div class="flex flex-col items-center">
        <div class="flex flex-wrap -mx-3 mb-20">
          <div
            v-for="product in products"
            :key="product.name"
            class="w-1/4 p-3"
          >
            <ProductItem :product="product" />
          </div>
        </div>
        <div class="flex items-center gap-6 mb-20">
          <ArrowLeftLIcon />
          <div class="flex items-center gap-4 text-18px font-medium">
            <div
              class="size-10 rounded-full flex flex-center bg-brand-400 text-white cursor-pointer"
            >
              <span class="">01</span>
            </div>
            <div
              v-for="i in 4"
              :key="i"
              class="size-10 rounded-full flex flex-center text-neutral-700 cursor-pointer hover:bg-brand-400 hover:text-white"
            >
              <span class="">0{{ i + 1 }}</span>
            </div>
            <div
              class="size-10 rounded-full flex flex-center text-neutral-700 cursor-pointer"
            >
              <span class="">...</span>
            </div>
            <div
              class="size-10 rounded-full flex flex-center text-neutral-700 cursor-pointer hover:bg-brand-400 hover:text-white"
            >
              <span class="">09</span>
            </div>
          </div>
          <ArrowRightLIcon />
        </div>
      </div>
    </div>
    <Newsletter />
  </div>
  <ProductFilter v-if="popupSelected == 'filter'" />
</template>
