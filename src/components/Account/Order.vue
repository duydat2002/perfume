<script setup lang="ts">
import { IOrder } from "@/types";
import { ref } from "vue";

const orders = ref<IOrder[]>([
  {
    id: "3456_768",
    orderDate: "02/11/2024",
    status: "pending",
    price: 1000000,
  },
  {
    id: "3456_769",
    orderDate: "04/11/2024",
    status: "confirmed",
    price: 1000000,
  },
  {
    id: "3456_770",
    orderDate: "06/11/2024",
    status: "delivering",
    price: 1000000,
  },
  {
    id: "3456_771",
    orderDate: "08/11/2024",
    status: "delivered",
    price: 1000000,
  },
  {
    id: "3456_772",
    orderDate: "10/11/2024",
    status: "cancelled",
    price: 1000000,
  },
]);
</script>

<template>
  <div class="">
    <span class="block mb-10 text-30px font-semibold text-black"
      >Lịch sử mua hàng</span
    >
    <div class="">
      <table class="w-full text-left text-14px">
        <thead class="text-neutral-500 font-normal">
          <tr class="border-b border-neutral-200">
            <th class="font-normal">
              <span class="">Mã đơn hàng</span>
            </th>
            <th class="font-normal">
              <span class="">Ngày</span>
            </th>
            <th class="font-normal">
              <span class="">Tình Trạng</span>
            </th>
            <th class="font-normal">
              <span class="">Giá</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in orders"
            :key="order.id"
            class="border-b border-neutral-200"
          >
            <td>
              <span class="">#{{ order.id }}</span>
            </td>
            <td>
              <span class="">{{ order.orderDate }}</span>
            </td>
            <td>
              <span v-if="order.status == 'pending'" class="text-[#F0AD4E]"
                >Đang chờ xác nhận</span
              >
              <span
                v-else-if="order.status == 'confirmed'"
                class="text-brand-300"
                >Đã xác nhận</span
              >
              <span
                v-else-if="order.status == 'delivering'"
                class="text-brand-500"
                >Đang giao</span
              >
              <span
                v-else-if="order.status == 'delivered'"
                class="text-brand-900"
                >Đã giao</span
              >
              <span
                v-else-if="order.status == 'cancelled'"
                class="text-[#FF0004]"
                >Đã hủy</span
              >
            </td>
            <td>
              <span class="">{{ order.price.toLocaleString("vi-VI") }}đ</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
th {
  @apply pb-2;
}

td {
  @apply py-6;
}
</style>
