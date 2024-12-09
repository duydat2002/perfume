<script setup lang="ts">
import Breadcrumb from "@/components/Common/Breadcrumb.vue";
import { IBreadcrum } from "@/types";
import { ref } from "vue";

const breadcrumbs = ref<IBreadcrum[]>([
  { text: "Trang chủ", link: { name: "Home" } },
  { text: "Blog", link: { name: "Blog" } },
  { text: "Chi tiết blog", link: "" },
]);
</script>

<template>
  <div class="">
    <Breadcrumb :items="breadcrumbs" />
    <div class="">
      <div class="">
        <img src="" alt="" />
      </div>
      <div class="flex flex-col">
        <span class=""
          >Tầng hương nước hoa là gì? Tại sao có 3 tầng nốt hương?</span
        >
      </div>
    </div>
  </div>
</template>
