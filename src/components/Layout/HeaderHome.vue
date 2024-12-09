<script setup lang="ts">
import SearchIcon from "@icons/search.svg";
import UserIcon from "@icons/user-circle.svg";
import BagIcon from "@icons/bag.svg";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div
    class="h-[88px] px-content w-full fixed top-0 left-0 flex items-center justify-between z-10"
  >
    <RouterLink :to="{ name: 'Home' }" class="">
      <img class="h-10" src="@/assets/images/logo-hori.png" alt="Perfume" />
    </RouterLink>
    <div class="flex items-center gap-10 text-white text-14px">
      <RouterLink
        class="has-[.active]:font-semibold"
        :class="{ active: route.name == 'Home' }"
        :to="{ name: 'Home' }"
        >Trang chủ</RouterLink
      >
      <RouterLink
        class="has-[.active]:font-semibold"
        :class="{ active: route.name == 'Products' }"
        :to="{ name: 'Products' }"
        >Sản phẩm</RouterLink
      >
      <RouterLink
        class="has-[.active]:font-semibold"
        :class="{ active: route.name == 'About' }"
        :to="{ name: 'Home' }"
        >Giới thiệu</RouterLink
      >
      <RouterLink
        class="has-[.active]:font-semibold"
        :class="{ active: route.name == 'Blog' }"
        :to="{ name: 'Home' }"
        >Blog</RouterLink
      >
    </div>
    <div class="flex items-center gap-4">
      <div class="">
        <SearchIcon class="text-white w-6 cursor-pointer" />
      </div>
      <div class="">
        <UserIcon class="text-white w-6 cursor-pointer" />
      </div>
      <div class="relative">
        <BagIcon class="text-white w-6 cursor-pointer" />
      </div>
    </div>
  </div>
</template>
