<script setup lang="ts">
import SearchIcon from "@icons/search.svg";
import UserIcon from "@icons/user-circle.svg";
import BagIcon from "@icons/bag.svg";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/stores";
import Search from "./Search.vue";
import { onMounted, ref } from "vue";

const router = useRouter();
const route = useRoute();

const { popupSelected, isSignIn } = storeToRefs(useCommonStore());

const isScrollPast = ref(false);

const clickAccount = () => {
  if (isSignIn.value) {
    router.push({ name: "Account" });
  } else {
    popupSelected.value = "signin";
  }
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrollPast.value = window.scrollY >= window.innerHeight - 88;
  });
});
</script>

<template>
  <div
    class="h-[88px] px-content w-full fixed top-0 left-0 flex items-center justify-between z-10 transition-all duration-150"
    :class="[isScrollPast || popupSelected == 'search' ? 'bg-white' : '']"
  >
    <RouterLink :to="{ name: 'Home' }" class="">
      <img
        v-if="!isScrollPast && popupSelected != 'search'"
        class="h-10"
        src="@/assets/images/logo-hori.png"
        alt="Perfume"
      />
      <img
        v-else
        class="h-10"
        src="@/assets/images/logo-hori-green.png"
        alt="Perfume"
      />
    </RouterLink>
    <div
      class="flex items-center gap-10 text-14px"
      :class="
        isScrollPast || popupSelected == 'search'
          ? 'text-neutral-900'
          : 'text-white'
      "
    >
      <RouterLink
        class="has-[.active]:font-semibold hover:font-semibold transition-all duration-200"
        :class="{ active: route.name == 'Home' }"
        :to="{ name: 'Home' }"
        >Trang chủ</RouterLink
      >
      <RouterLink
        class="has-[.active]:font-semibold hover:font-semibold transition-all duration-200"
        :class="{ active: route.name == 'Products' }"
        :to="{ name: 'Products' }"
        >Sản phẩm</RouterLink
      >
      <RouterLink
        class="has-[.active]:font-semibold hover:font-semibold transition-all duration-200"
        :class="{ active: route.name == 'About' }"
        :to="{ name: 'About' }"
        >Giới thiệu</RouterLink
      >
      <RouterLink
        class="has-[.active]:font-semibold hover:font-semibold transition-all duration-200"
        :class="{ active: route.name == 'Blog' }"
        :to="{ name: 'Blog' }"
        >Blog</RouterLink
      >
      <RouterLink
        class="has-[.active]:font-semibold hover:font-semibold transition-all duration-200"
        :class="{ active: route.name == 'Contact' }"
        :to="{ name: 'Contact' }"
        >Liên hệ</RouterLink
      >
    </div>
    <div
      class="flex items-center gap-4"
      :class="
        isScrollPast || popupSelected == 'search'
          ? 'text-neutral-900'
          : 'text-white'
      "
    >
      <div
        class=""
        @click="
          () => {
            popupSelected = 'search';
          }
        "
      >
        <SearchIcon class="w-6 cursor-pointer" />
      </div>
      <div class="" @click="clickAccount">
        <UserIcon class="w-6 cursor-pointer" />
      </div>
      <RouterLink :to="{ name: 'Cart' }" class="relative">
        <BagIcon class="w-6 cursor-pointer" />
      </RouterLink>
    </div>
  </div>
  <Search v-if="popupSelected == 'search'" />
</template>
