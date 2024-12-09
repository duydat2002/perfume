<script setup lang="ts">
import CancelIcon from "@icons/cancel.svg";
import MinusIcon from "@icons/minus.svg";
import AddIcon from "@icons/add.svg";
</script>

<template>
  <div class="py-6 flex items-center border-b border-neutral-300">
    <div class="flex-[3]">
      <div class="flex items-center gap-4">
        <div class="w-20 bg-neutral-200">
          <img
            class="w-full"
            src="https://s3-alpha-sig.figma.com/img/9888/2570/737c21f84305cd076d895e487f149ebc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SC7SsfU90F8Wjq2XIFX6JOgj6fM~msB3f94WwVmVP1KWndiSYrIMH-2nYtjQzVHCF1H98614N7bMM9uGTHrwdXRcI8smlBkBnmo0Jkcw~IK9zOXbnoeeraZ5O0zQAiGCiw-WOtqNSCiK~au1FDwtkePI3M0nMfMMRHED~E15iTc2kcBWDMUxvId24HwtTyZVyEh9x~BXWbuXiNBLpHQsbOd4U1begKLwuVYjKEmtMq5hDZMZqwqID1DehTzywU-J9tQbR01Qene92ouDxFENW0tn9c0CCODnu8uC9pzOEfkcOzkpUVbbZwen7x3B1nu61dqoA8ldPy46Z8auQtV5SA__"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-14px font-semibold text-neutral-900">Nước hoa</span>
          <span class="text-12px text-neutral-400">Dung tích 100ml</span>
          <div class="flex items-center cursor-pointer">
            <CancelIcon class="mr-1" />
            <span class="text-14px text-neutral-400">Bỏ</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
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
    <div class="flex-1 flex justify-end">
      <span class="text-16px font-semibold text-neutral-700 text-right"
        >1.000.000đ</span
      >
    </div>
    <div class="flex-1 flex justify-end">
      <span class="text-18px text-brand-400 font-semibold text-right"
        >2.000.000đ</span
      >
    </div>
  </div>
</template>
