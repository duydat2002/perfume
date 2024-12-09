<script setup lang="ts">
import CameraIcon from "@icons/camera.svg";
import AccountDetail from "@/components/Account/Detail.vue";
import AccountAddress from "@/components/Account/Address.vue";
import AccountOrder from "@/components/Account/Order.vue";
import AccountWishlist from "@/components/Account/Wishlist.vue";
import { ref } from "vue";

const tabs = ref([
  { name: "account", title: "Tài khoản" },
  { name: "address", title: "Địa chỉ" },
  { name: "order", title: "Đơn hàng" },
  { name: "wishlist", title: "Yêu thích" },
  { name: "signout", title: "Đăng xuất" },
]);

const tabSelected = ref("account");

const tabChoose = (tabName: string) => {
  if (tabName != "signout") {
    tabSelected.value = tabName;
  } else {
  }
};
</script>

<template>
  <div class="">
    <span class="block py-20 text-60px font-medium text-black text-center"
      >Tài khoản của tôi</span
    >
    <div class="mx-content flex items-start">
      <div class="w-[262px] mr-[7px] px-4 py-10 bg-[#F3F5F7]">
        <div class="flex flex-col items-center">
          <div class="relative">
            <div class="size-20 rounded-full overflow-hidden">
              <img class="w-full" src="@/assets/images/account.jpg" alt="" />
            </div>
            <div
              class="absolute size-[30px] bottom-0 right-0 flex flex-center bg-black border-[1.5px] border-white rounded-full z-10"
            >
              <CameraIcon class="text-white" />
            </div>
          </div>
          <span class="mt-2 text-20px font-semibold text-black"
            >Linh Nguyen</span
          >
        </div>
        <div class="mt-10 flex flex-col gap-3">
          <div
            v-for="tab in tabs"
            :key="tab.name"
            class="py-2 text-16px font-semibold border-b cursor-pointer hover:text-neutral-900"
            :class="
              tab.name == tabSelected
                ? 'text-neutral-900 border-neutral-900'
                : 'text-neutral-500 border-transparent'
            "
            @click="tabChoose(tab.name)"
          >
            <span class="">{{ tab.title }}</span>
          </div>
        </div>
      </div>
      <div class="flex-1 px-[72px]">
        <AccountDetail v-if="tabSelected == 'account'" />
        <AccountAddress v-else-if="tabSelected == 'address'" />
        <AccountOrder v-else-if="tabSelected == 'order'" />
        <AccountWishlist v-else-if="tabSelected == 'wishlist'" />
      </div>
    </div>
  </div>
</template>
