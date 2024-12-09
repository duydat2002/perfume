<script setup lang="ts">
import EditIcon from "@icons/edit.svg";
</script>

<template>
  <div class="">
    <span class="block mb-5 text-30px font-semibold text-black">Mật khẩu</span>
    <div class="flex flex-wrap -mx-3">
      <div class="w-1/2 px-3">
        <div class="px-6 py-4 border border-neutral-500 rounded-lg">
          <div class="mb-2 flex items-center justify-between">
            <span class="text-16px font-semibold">Địa chỉ nhà</span>
            <div
              class="flex items-center gap-1 text-neutral-500 text-16px font-semibold"
            >
              <EditIcon class="" />
              <span class="">Sửa</span>
            </div>
          </div>
          <div class="flex flex-col gap-1 text-14px text-black">
            <span class="">Linh Nguyen</span>
            <span class="">(+84) 234 567 890</span>
            <span class="">345 Khuong Dinh,Hai Ba Trung, Ha Noi</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
