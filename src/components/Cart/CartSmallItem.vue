<script setup lang="ts">
import CancelIcon from "@icons/cancel.svg";
import MinusIcon from "@icons/minus.svg";
import AddIcon from "@icons/add.svg";
</script>

<template>
  <div class="flex gap-4 p-4 border-b border-neutral-300">
    <div class="w-20">
      <img class="" src="@/assets/images/Maison Francis.png" alt="" />
    </div>
    <div class="flex flex-1">
      <div class="flex-1 flex flex-col gap-2">
        <span class="text-14px font-semibold text-neutral-900">Nước hoa</span>
        <span class="text-12px text-neutral-400">Dung tích: 100ml</span>
        <div
          class="flex items-center p-2 w-20 h-[32px] rounded border border-neutral-400"
        >
          <div class="flex flex-center cursor-pointer">
            <MinusIcon class="w-4" />
          </div>
          <div class="flex-1">
            <input
              class="w-full text-12px text-neutral-700 font-semibold text-center"
              type="number"
              value="2"
            />
          </div>
          <div class="flex flex-center cursor-pointer">
            <AddIcon class="w-4" />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end justify-between">
        <span class="text-14px font-semibold text-brand-400">1.000.000đ</span>
        <div class="flex items-center cursor-pointer">
          <CancelIcon class="mr-1" />
          <span class="text-14px text-neutral-400">Bỏ</span>
        </div>
      </div>
    </div>
  </div>
</template>
