<script setup lang="ts">
import ArrowLeftLIcon from "@icons/arrow-left-long.svg";
import ArrowRightLIcon from "@icons/arrow-right-long.svg";
import USelect from "@/components/Common/USelect.vue";
import { IBreadcrum, IOption } from "@/types";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductItem from "@/components/Product/ProductItem.vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores";
import Newsletter from "@/components/Common/Newsletter.vue";
import Breadcrumb from "@/components/Common/Breadcrumb.vue";
import USelectNew from "@/components/Common/USelectNew.vue";

const router = useRouter();
const route = useRoute();

const genderOptions = ref<IOption[]>([
  { key: "men", value: "Nước hoa nam" },
  { key: "women", value: "Nước hoa nữ" },
  { key: "unisex", value: "Nước hoa unisex" },
]);
const priceOptions = ref<IOption[]>([
  { key: "lt1", value: "Dưới 1 triệu" },
  { key: "1to3", value: "1 triệu - 3 triệu" },
  { key: "gt3", value: "Trên 3 triệu" },
]);
const seasonOptions = ref<IOption[]>([
  { key: "xuan", value: "Mùa Xuân" },
  { key: "he", value: "Mùa Hè" },
  { key: "thu", value: "Mùa Thu" },
  { key: "dong", value: "Mùa Đông" },
]);
const sortOptions = ref<IOption[]>([
  { key: "atoz", value: "Tên từ A đến Z" },
  { key: "ztoa", value: "Tên từ Z đến A" },
  { key: "ltoh", value: "Giá từ thấp đến cao" },
  { key: "htol", value: "Giá từ cao đến thấp" },
]);

const genderSelected = ref();
const priceSelected = ref();
const seasonSelected = ref();
const sortSelected = ref("atoz");
const gridSelected = ref<"3x3" | "2x2" | "2x1" | "1x2">("3x3");

const { products } = storeToRefs(useProductStore());

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
      <div class="flex my-10 items-end justify-between">
        <div class="flex gap-6">
          <div class="w-[285px]">
            <USelectNew
              title="Lọc theo giá"
              :options="priceOptions"
              v-model:selected="priceSelected"
            />
          </div>
          <div class="w-[285px]">
            <USelectNew
              title="Lọc theo giới tính"
              :options="genderOptions"
              v-model:selected="genderSelected"
            />
          </div>
          <div class="w-[285px]">
            <USelectNew
              title="Lọc theo mùa"
              :options="seasonOptions"
              v-model:selected="seasonSelected"
            />
          </div>
        </div>
        <div class="flex items-center -mb-4">
          <div class="flex items-center mr-4">
            <span
              class="text-16px font-medium text-neutral-400 whitespace-nowrap"
              >Sắp xếp:</span
            >
            <USelect
              class="border-transparent"
              :options="sortOptions"
              v-model:selected="sortSelected"
            />
          </div>
        </div>
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
</template>
