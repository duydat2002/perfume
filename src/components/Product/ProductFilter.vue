<script setup lang="ts">
import CancelIcon from "@icons/cancel.svg";
import DownIcon from "@icons/down.svg";
import { useCommonStore } from "@/stores";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import FilterDropdown from "./FilterDropdown.vue";

const { popupSelected } = storeToRefs(useCommonStore());

const sortItems = ref([
  { name: "ltoh", title: "GIÁ TỪ THẤP ĐẾN CAO" },
  { name: "htol", title: "GIÁ TỪ CAO ĐẾN THẤP" },
  { name: "latest", title: "MỚI NHẤT" },
  { name: "bestseller", title: "BÁN CHẠY NHẤT" },
  { name: "discount", title: "KHUYẾN MẠI - GIẢM GIÁ" },
]);

const genderOptions = ref([
  { name: "men", title: "Nước hoa nam" },
  { name: "women", title: "Nước hoa nữ" },
  { name: "unisex", title: "Nước hoa unisex" },
]);
const priceOptions = ref([
  { name: "lt1", title: "Dưới 1 triệu" },
  { name: "1to3", title: "1 triệu - 3 triệu" },
  { name: "gt3", title: "Trên 3 triệu" },
]);
const seasonOptions = ref([
  { name: "xuan", title: "Mùa Xuân" },
  { name: "he", title: "Mùa Hè" },
  { name: "thu", title: "Mùa Thu" },
  { name: "dong", title: "Mùa Đông" },
]);

const genderSelected = ref();
const priceSelected = ref();
const seasonSelected = ref();
const sortSelected = ref();
</script>

<template>
  <div
    class="fixed flex justify-end top-0 right-0 w-full bottom-0 bg-[#00000099] z-50 overflow-y-scroll"
    v-click-inside="
      () => {
        popupSelected = undefined;
      }
    "
  >
    <div class="flex flex-col bg-white w-[530px]">
      <div class="p-8 flex flex-col bg-white">
        <div
          class="flex items-center justify-between py-5 mb-10 border-b border-neutral-500"
        >
          <span class="text-20px font-semibold text-neutral-900">BỘ LỌC</span>
          <div
            class="flex items-center gap-3 text-neutral-400 hover:text-[#FF0004] cursor-pointer transition-all duration-200"
            @click="
              () => {
                popupSelected = undefined;
              }
            "
          >
            <span class="text-18px font-medium underline">Xóa bộ lọc</span>
            <CancelIcon class="w-6" />
          </div>
        </div>
        <div class="flex flex-col gap-8">
          <FilterDropdown
            title="SẮP XẾP THEO"
            :items="sortItems"
            v-model:selected="sortSelected"
          />
          <FilterDropdown
            title="THEO GIÁ"
            :items="priceOptions"
            v-model:selected="priceSelected"
          />
          <FilterDropdown
            title="THEO GIỚI TÍNH"
            :items="genderOptions"
            v-model:selected="genderSelected"
          />
          <FilterDropdown
            title="THEO MÙA"
            :items="seasonOptions"
            v-model:selected="seasonSelected"
          />
        </div>
      </div>
    </div>
  </div>
</template>
