<script setup lang="ts">
import RightIcon from "@icons/arrow-right.svg";
import DeliveryIcon from "@icons/delivery.svg";
import MoneyIcon from "@icons/money.svg";
import LockIcon from "@icons/lock.svg";
import CallIcon from "@icons/call.svg";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores";
import ProductList from "@/components/Product/ProductList.vue";
import Newsletter from "@/components/Common/Newsletter.vue";
import UButton from "@/components/Common/UButton.vue";

const { products } = storeToRefs(useProductStore());
</script>

<template>
  <section class="">
    <div class="relative">
      <img
        class="w-full h-screen object-cover"
        src="@/assets/images/banner.jpg"
        alt=""
      />
      <div class="absolute left-content top-[20%] right-[40%]">
        <div class="flex flex-col items-start text-white mb-12">
          <img
            src="@/assets/images/logo.png"
            alt=""
            class="h-16 mb-8 object-contain"
          />
          <span class="text-36px font-semibold mb-[2px]"
            >Thơm Mát Từ Thiên Nhiên</span
          >
          <span class="text-72px font-bold mb-5">Green Essence</span>
          <span class="text-18px"
            >Được chắt lọc từ những tinh túy của thiên nhiên, hương thơm của
            [Tên sản phẩm] mang đến một cảm giác sang trọng, quý phái. Sự kết
            hợp hoàn hảo giữa hoa nhài thanh thoát và gỗ đàn hương ấm áp tạo nên
            dấu ấn khó quên.</span
          >
        </div>
        <UButton
          class="w-fit px-8"
          title="Mua ngay"
          rounded="rounded-xl"
          variant="outlined"
          variant-type="white"
          size="medium"
        >
          <template #default>
            <span class="text-20px font-bold mr-5">Mua ngay</span>
          </template>
          <template #right>
            <RightIcon class="text-white w-6" />
          </template>
        </UButton>
      </div>
    </div>
    <div class="mx-content py-12 flex gap-6">
      <div class="flex-1 bg-brand-50 p-8 flex flex-col gap-4">
        <DeliveryIcon class="w-[38px] text-brand-400" />
        <div class="flex flex-col gap-2">
          <span class="text-20px font-medium text-brand-400"
            >Giao hàng miễn phí</span
          >
          <span class="text-14px text-neutral-500">Cho đơn trên 2 triệu</span>
        </div>
      </div>
      <div class="flex-1 bg-brand-50 p-8 flex flex-col gap-4">
        <MoneyIcon class="w-[38px] text-brand-400" />
        <div class="flex flex-col gap-2">
          <span class="text-20px font-medium text-brand-400">Hoàn trả </span>
          <span class="text-14px text-neutral-500">Hoàn trả trong 30 ngày</span>
        </div>
      </div>
      <div class="flex-1 bg-brand-50 p-8 flex flex-col gap-4">
        <LockIcon class="w-[38px] text-brand-400" />
        <div class="flex flex-col gap-2">
          <span class="text-20px font-medium text-brand-400"
            >Thanh toán bảo mật</span
          >
          <span class="text-14px text-neutral-500">An toàn khi thanh toán</span>
        </div>
      </div>
      <div class="flex-1 bg-brand-50 p-8 flex flex-col gap-4">
        <CallIcon class="w-[38px] text-brand-400" />
        <div class="flex flex-col gap-2">
          <span class="text-20px font-medium text-brand-400">Hỗ trợ 24/7</span>
          <span class="text-14px text-neutral-500"
            >Hỗ trợ qua email , điện thoại</span
          >
        </div>
      </div>
    </div>
    <div class="mx-content">
      <ProductList title="SẢN PHẨM MỚI" :products="products" />
    </div>
    <div class="mx-content">
      <ProductList title="HOT DEAL" :products="products" />
    </div>
    <div class="flex mt-20 gap-[10px] h-[732px]">
      <div class="flex-1">
        <div class="size-full relative">
          <img
            src="@/assets/images/banner-1.jpg"
            alt=""
            class="h-full object-cover"
          />
          <div
            class="absolute left-12 bottom-14 right-[20%] flex flex-col text-white"
          >
            <span class="text-20px mb-6">#Sanphamhot</span>
            <span class="text-30px font-semibold mb-[2px]"
              >Thơm Mát Từ Thiên Nhiên</span
            >
            <span class="text-60px font-semibold mb-3">Green Essence</span>
            <span class="text-18px font-medium mb-6"
              >Được chắt lọc từ những tinh túy của thiên nhiên, hương thơm của
              [Tên sản phẩm] mang đến một cảm giác sang trọng, quý phái.</span
            >
            <UButton
              class="w-fit"
              title="Mua ngay"
              rounded="rounded-xl"
              variant="outlined"
              variant-type="white"
              size="big"
            >
              <template #default>
                <span class="text-20px font-bold mr-5">Mua ngay</span>
              </template>
              <template #right>
                <RightIcon class="text-white w-6" />
              </template>
            </UButton>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="size-full flex flex-col gap-[10px]">
          <div class="flex-1 h-[400px]">
            <div class="size-full relative">
              <img
                src="@/assets/images/banner-2.jpg"
                alt=""
                class="size-full object-cover"
              />
              <div
                class="absolute left-6 bottom-6 top-6 right-[20%] flex flex-col justify-between text-white"
              >
                <div class="flex flex-col">
                  <span class="text-20px mb-6">#Sanphamhot</span>
                  <span class="text-30px font-semibold mb-[2px]"
                    >Thơm Mát Từ Thiên Nhiên</span
                  >
                  <span class="text-60px font-semibold mb-3"
                    >Green Essence</span
                  >
                  <span class="text-16px font-medium"
                    >Được chắt lọc từ những tinh túy của thiên nhiên, hương thơm
                    của [Tên sản phẩm] mang đến một cảm giác sang trọng, quý
                    phái.</span
                  >
                </div>
                <UButton
                  class="w-fit"
                  title="Mua ngay"
                  rounded="rounded-xl"
                  variant="outlined"
                  variant-type="white"
                  size="big"
                >
                  <template #default>
                    <span class="text-20px font-bold mr-5">Mua ngay</span>
                  </template>
                  <template #right>
                    <RightIcon class="text-white w-6" />
                  </template>
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex-1 h-[321px]">
            <div class="size-full flex gap-[10px]">
              <div class="flex-1 relative">
                <div
                  class="absolute top-0 left-0 size-full bg-[#00000030]"
                ></div>
                <img
                  src="@/assets/images/banner-3.jpg"
                  alt=""
                  class="h-full object-cover"
                />
                <div
                  class="absolute left-3 top-3 bottom-3 flex flex-col justify-between"
                >
                  <div class="flex flex-col text-white">
                    <span class="text-16px mb-3">#Sanphamhot</span>
                    <span class="text-20px font-semibold mb-[2px]"
                      >Thơm Mát Từ Thiên Nhiên</span
                    >
                    <span class="text-30px font-semibold mb-3"
                      >Green Essence</span
                    >
                  </div>
                  <UButton
                    class="w-fit"
                    title="Mua ngay"
                    rounded="rounded-xl"
                    variant="outlined"
                    variant-type="white"
                    size="big"
                  >
                    <template #default>
                      <span class="text-20px font-bold mr-5">Mua ngay</span>
                    </template>
                    <template #right>
                      <RightIcon class="text-white w-6" />
                    </template>
                  </UButton>
                </div>
              </div>
              <div
                class="flex-1 flex flex-center bg-gradient-to-tr from-[#06D001] to-[#058310]"
              >
                <img
                  src="@/assets/images/logo.png"
                  alt=""
                  class="h-[60%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-content my-20">
      <div class="flex mb-10 items-end justify-between">
        <span class="text-36px font-medium">Blog</span>
        <RouterLink
          :to="{ name: 'BlogDetail', params: { slug: 'blog-detail' } }"
          class="inline-flex items-center border-b border-neutral-700"
        >
          <span class="text-16px text-neutral-700 font-medium mr-1"
            >Xem thêm</span
          >
          <RightIcon class="w-5 text-neutral-700" />
        </RouterLink>
      </div>
      <div class="flex gap-5">
        <RouterLink
          :to="{ name: 'BlogDetail', params: { slug: 'blog-detail' } }"
          class="flex-1"
        >
          <div class="mb-5 overflow-hidden aspect-video">
            <img class="w-full" src="@/assets/images/blog-2.png" alt="Blog 2" />
          </div>
          <div class="">
            <span
              class="mb-2 block h-14 text-20px text-neutral-700 font-bold line-clamp-2 text-ellipsis"
              >Tầng hương nước hoa là gì? Tại sao có 3 tầng nốt hương?</span
            >
            <span class="text-16px text-neutral-700">May 16, 2024</span>
          </div>
        </RouterLink>
        <RouterLink
          :to="{ name: 'BlogDetail', params: { slug: 'blog-detail' } }"
          class="flex-1"
        >
          <div class="mb-5 overflow-hidden aspect-video">
            <img class="w-full" src="@/assets/images/blog-3.png" alt="Blog 3" />
          </div>
          <div class="">
            <span
              class="mb-2 block h-14 text-20px text-neutral-700 font-bold line-clamp-2 text-ellipsis"
              >Tầng hương nước hoa là gì? Tại sao có 3 tầng nốt hương?</span
            >
            <span class="text-16px text-neutral-700">May 16, 2024</span>
          </div>
        </RouterLink>
        <RouterLink
          :to="{ name: 'BlogDetail', params: { slug: 'blog-detail' } }"
          class="flex-1"
        >
          <div class="mb-5 overflow-hidden aspect-video">
            <img class="w-full" src="@/assets/images/blog-1.png" alt="Blog 1" />
          </div>
          <div class="">
            <span
              class="mb-2 block h-14 text-20px text-neutral-700 font-bold line-clamp-2 text-ellipsis"
              >Tầng hương nước hoa là gì? Tại sao có 3 tầng nốt hương?</span
            >
            <span class="text-16px text-neutral-700">May 16, 2024</span>
          </div>
        </RouterLink>
      </div>
    </div>
    <Newsletter />
  </section>
</template>
