<script setup lang="ts">
import CheckIcon from "@icons/check.svg";
import CartView from "@/components/Cart/index.vue";
import CartDetailView from "@/components/Cart/PaymentDetail.vue";
import CartSuccessView from "@/components/Cart/PaymentSuccess.vue";
import { ref } from "vue";

const tabSelected = ref<1 | 2 | 3>(1);
</script>

<template>
  <div class="mx-content py-20">
    <div class="flex flex-col items-center">
      <span class="mb-10 text-48px font-bold text-black">Giỏ hàng</span>
      <div class="flex gap-8">
        <div
          class="w-[256px] flex flex-center pb-5 border-b-2"
          :class="[
            tabSelected <= 1 ? 'border-neutral-900' : 'border-brand-400',
          ]"
        >
          <div
            class="flex items-center cursor-pointer"
            @click="
              () => {
                tabSelected = 1;
              }
            "
          >
            <div
              class="mr-4 size-[42px] rounded-full flex flex-center text-16px font-semibold"
              :class="[
                tabSelected <= 1 ? 'bg-neutral-900 text-white' : 'bg-brand-400',
              ]"
            >
              <span v-if="tabSelected <= 1" class="">1</span>
              <CheckIcon v-else class="w-5 fill-white" />
            </div>
            <span
              class="text-18px font-semibold cursor-pointer"
              :class="[
                tabSelected <= 1 ? 'text-neutral-900 ' : 'text-brand-400',
              ]"
              >Giỏ hàng</span
            >
          </div>
        </div>
        <div
          class="w-[256px] flex flex-center pb-5 border-b-2"
          :class="[
            tabSelected == 2
              ? 'border-neutral-900'
              : tabSelected < 2
              ? 'border-transparent'
              : 'border-brand-400',
          ]"
        >
          <div
            class="flex items-center cursor-pointer"
            @click="
              () => {
                tabSelected = 2;
              }
            "
          >
            <div
              class="mr-4 size-[42px] rounded-full flex flex-center text-16px font-semibold text-white"
              :class="[
                tabSelected == 2
                  ? 'bg-neutral-900 '
                  : tabSelected < 2
                  ? 'bg-neutral-400'
                  : 'bg-brand-400',
              ]"
            >
              <span v-if="tabSelected <= 2" class="">2</span>
              <CheckIcon v-else class="w-5 fill-white" />
            </div>
            <span
              class="text-18px font-semibold cursor-pointer"
              :class="[
                tabSelected == 2
                  ? 'text-neutral-900 '
                  : tabSelected < 2
                  ? 'text-neutral-400'
                  : 'text-brand-400',
              ]"
              >Chi tiết thanh toán</span
            >
          </div>
        </div>
        <div
          class="w-[256px] flex flex-center pb-5 border-b-2"
          :class="[
            tabSelected == 3
              ? 'border-neutral-900'
              : tabSelected < 3
              ? 'border-transparent'
              : 'border-brand-400',
          ]"
        >
          <div
            class="flex items-center cursor-pointer"
            @click="
              () => {
                tabSelected = 3;
              }
            "
          >
            <div
              class="mr-4 size-[42px] rounded-full flex flex-center text-16px font-semibold text-white"
              :class="[
                tabSelected == 3
                  ? 'bg-neutral-900 '
                  : tabSelected < 3
                  ? 'bg-neutral-400'
                  : 'bg-brand-400',
              ]"
            >
              <span v-if="tabSelected <= 3" class="">3</span>
              <CheckIcon v-else class="w-5 fill-white" />
            </div>
            <span
              class="text-18px font-semibold cursor-pointer"
              :class="[
                tabSelected == 3
                  ? 'text-neutral-900 '
                  : tabSelected < 3
                  ? 'text-neutral-400'
                  : 'text-brand-400',
              ]"
              >Hoàn tất thanh toán</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <CartView v-if="tabSelected == 1" />
      <CartDetailView v-else-if="tabSelected == 2" />
      <CartSuccessView v-else />
    </div>
  </div>
</template>
