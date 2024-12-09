<script setup lang="ts">
import { getDynamicImage } from "@/helpers";
import { IProduct, IWishList } from "@/types";
import CancelIcon from "@icons/cancel.svg";
import { ref } from "vue";

const wishlists = ref<IWishList[]>([
  {
    id: 1,
    product: {
      id: "NH001",
      name: "Dior Sauvage EDP",
      gender: "men",
      season: "spring",
      quantity: 50,
      image: "Dior Sauvage EDP.png",
      prices: [
        {
          capacity: 10,
          price: 440000,
        },
        {
          capacity: 20,
          price: 780000,
        },
        {
          capacity: 50,
          price: 1950000,
        },
        {
          capacity: 100,
          price: 4000000,
        },
      ],
      slug: "dior-sauvage-edp",
    },
    capacity: 10,
  },
  {
    id: 2,
    product: {
      id: "NH014",
      name: "Chanel Coco EDP",
      gender: "women",
      season: "summer",
      quantity: 50,
      image: "Chanel Coco EDP.png",
      prices: [
        {
          capacity: 10,
          price: 360000,
        },
        {
          capacity: 20,
          price: 620000,
        },
        {
          capacity: 50,
          price: 1550000,
        },
      ],
      slug: "chanel-coco-edp",
    },
    capacity: 50,
  },
  {
    id: 3,
    product: {
      id: "NH025",
      name: "Mancera EDP",
      gender: "unisex",
      season: "spring",
      quantity: 50,
      image: "Mancera EDP.png",
      prices: [
        {
          capacity: 10,
          price: 150000,
        },
        {
          capacity: 20,
          price: 200000,
        },
        {
          capacity: 50,
          price: 500000,
        },
        {
          capacity: 100,
          price: 1100000,
        },
      ],
      slug: "mancera-edp",
    },
    capacity: 100,
  },
]);

const getCapacity = (product: IProduct, capacity: number | string) => {
  return (
    product.prices.find((p) => p.capacity == capacity) ?? {
      capacity: 0,
      price: 0,
    }
  );
};
</script>

<template>
  <div>
    <span class="block mb-10 text-30px font-semibold text-black"
      >Yêu thích</span
    >
    <div class="">
      <table class="w-full text-left">
        <thead class="text-neutral-500 font-normal">
          <tr class="border-b border-neutral-200">
            <th></th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th class="w-fit">Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in wishlists"
            :key="item.id"
            class="border-b border-neutral-200"
          >
            <td>
              <CancelIcon class="" />
            </td>
            <td>
              <div class="flex items-center">
                <RouterLink
                  :to="{ name: 'Product', params: { slug: item.product.slug } }"
                  class="w-[60px] bg-neutral-50"
                >
                  <img
                    class=""
                    :src="getDynamicImage(item.product.image)"
                    alt=""
                  />
                </RouterLink>
                <div class="flex flex-col gap-2 py-3">
                  <RouterLink
                    :to="{
                      name: 'Product',
                      params: { slug: item.product.slug },
                    }"
                    class="font-semibold text-neutral-900"
                    >{{ item.product.name }}</RouterLink
                  >
                  <span class="text-neutral-500"
                    >Dung tích:
                    {{
                      getCapacity(item.product, item.capacity).capacity
                    }}ml</span
                  >
                </div>
              </div>
            </td>
            <td>
              <span class=""
                >{{
                  getCapacity(item.product, item.capacity).price.toLocaleString(
                    "vi-VI"
                  )
                }}đ</span
              >
            </td>
            <td>
              <div
                class="w-fit h-10 flex flex-center bg-brand-400 px-6 py-1 cursor-pointer"
              >
                <span class="text-16px font-medium text-white text-center"
                  >Đặt hàng</span
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
th {
  @apply pb-2 font-normal;
}

td {
  @apply py-6;
}
</style>
