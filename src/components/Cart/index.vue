<script setup lang="ts">
import TicketIcon from "@icons/ticket.svg";
import CartItem from "./CartItem.vue";
import { ref } from "vue";
import UButton from "../Common/UButton.vue";

const ships = ref([
  { name: "Giao hàng nhanh", price: 30000 },
  { name: "Giao hàng hỏa tốc", price: 70000 },
]);
const shipSelected = ref(0);
</script>

<template>
  <div>
    <div class="flex mt-20 gap-16">
      <div class="flex-1">
        <div
          class="flex text-16px text-neutral-900 font-semibold pb-6 border-b border-neutral-400"
        >
          <div class="flex-[3]">Sản phẩm</div>
          <div class="flex-1">Số lượng</div>
          <div class="flex-1 text-right">Giá</div>
          <div class="flex-1 text-right">Tổng</div>
        </div>
        <div class="flex flex-col">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div class="w-[413px] h-fit p-6 border border-neutral-500">
        <span class="block text-20px font-medium mb-3">Giỏ hàng</span>
        <div class="flex flex-col gap-3 mb-4">
          <div
            v-for="(ship, i) in ships"
            :key="i"
            class="flex items-center px-4 py-3 border hover:bg-brand-50 hover:border-brand-400 cursor-pointer"
            :class="[
              i == shipSelected
                ? 'bg-brand-50 border-brand-400'
                : 'bg-white border-neutral-300',
            ]"
            @click="
              () => {
                shipSelected = i;
              }
            "
          >
            <div
              class="size-[18px] flex flex-center rounded-full border"
              :class="[
                i == shipSelected ? 'border-brand-400' : 'border-neutral-500',
              ]"
            >
              <div
                v-if="i == shipSelected"
                class="size-[10px] rounded-full bg-brand-400"
              ></div>
            </div>
            <span class="px-3 flex-1 text-16px font-medium text-neutral-900">{{
              ship.name
            }}</span>
            <span class="text-18px font-medium text-neutral-900"
              >{{ ship.price.toLocaleString("vi-VN") }}đ</span
            >
          </div>
        </div>
        <div
          class="py-3 flex items-center justify-between border-b border-[#eaeaea]"
        >
          <span class="text-16px text-neutral-700">Tổng tiền</span>
          <span class="text-16px text-neutral-700 font-semibold"
            >6.000.000đ</span
          >
        </div>
        <div class="py-3 flex items-center justify-between">
          <span class="text-20px text-neutral-700 font-semibold">Tổng</span>
          <span class="text-16px text-neutral-700 font-semibold"
            >6.030.000đ</span
          >
        </div>
        <UButton class="mt-8" size="medium" title="Mua ngay"></UButton>
      </div>
    </div>
    <div class="mt-20 w-[424px]">
      <div class="flex flex-col gap-2 mb-4">
        <span class="text-20px font-medium text-neutral-900"
          >Thêm mã khuyến mãi ?</span
        >
        <span class="text-16px text-neutral-400"
          >Thêm mã của bạn để áp dụng giảm giá ngay lập tức cho giỏ hàng.</span
        >
      </div>
      <div
        class="flex items-center gap-[10px] px-4 py-3 border border-neutral-400"
      >
        <TicketIcon class="" />
        <input
          type="text"
          class="flex-1 text-16px font-medium placeholder-neutral-400"
          placeholder="Mã khuyến mãi"
        />
        <span class="text-16px font-medium text-neutral-700 cursor-pointer"
          >Thêm</span
        >
      </div>
    </div>
  </div>
</template>
