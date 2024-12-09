<script setup lang="ts">
import Breadcrumb from "@/components/Common/Breadcrumb.vue";
import { getDynamicImage } from "@/helpers";
import { IBreadcrum } from "@/types";
import { ref } from "vue";

const breadcrumbs = ref<IBreadcrum[]>([
  { text: "Trang chủ", link: { name: "Home" } },
  { text: "Blog", link: "" },
]);

const blogs = ref([
  {
    slug: "tng-hng-nc-hoa-l-g-ti-sao-c-3-tng-nt-hng",
    title: "Tầng hương nước hoa là gì? Tại sao có 3 tầng nốt hương?",
    image: "blog-1.png",
    createAt: "May 16, 2024",
  },
  {
    slug: "dung-tch-nc-hoa-thng-bao-nhiu-cc-loi-dung-tch-ph-bin",
    title: "Dung tích nước hoa thường bao nhiêu? Các loại dung tích phổ biến",
    image: "blog-2.png",
    createAt: "May 16, 2024",
  },
  {
    slug: "nc-hoa-edp-v-edt-s-khc-bit",
    title: "Nước hoa EDP và EDT : sự khác biệt",
    image: "blog-3.png",
    createAt: "May 16, 2024",
  },
  {
    slug: "cn-trong-nc-hoa-",
    title: "Cồn trong nươc hoa ?",
    image: "blog-4.png",
    createAt: "May 16, 2024",
  },
  {
    slug: "lch-s-nc-hoa",
    title: "Lịch sử nước hoa",
    image: "blog-5.png",
    createAt: "May 16, 2024",
  },
  {
    slug: "nng-nc-hoa-l-g-c-nhng-loi-nng-no",
    title: "Nồng độ nước hoa là gì? Có những loại nồng độ nào?",
    image: "blog-6.png",
    createAt: "May 16, 2024",
  },
  {
    slug: "quy-trnh-sn-xut-nc-hoa",
    title: "Quy trình sản xuất nước hoa",
    image: "blog-7.png",
    createAt: "May 16, 2024",
  },
  {
    slug: "nc-hoa-eau-de-parfum-intense-l-g-top-nc-hoa-intense",
    title: "Nước hoa Eau de Parfum Intense là gì? TOP nước hoa Intense",
    image: "blog-8.png",
    createAt: "May 16, 2024",
  },
  {
    slug: "gi-nc-hoa-n-thm-cho-ngi-mi-bt-u",
    title: "Gợi ý nươc hoa nữ thơm cho người mới bắt đầu",
    image: "blog-9.jpg",
    createAt: "May 16, 2024",
  },
]);
</script>

<template>
  <div>
    <Breadcrumb :items="breadcrumbs" />
    <div class="mx-content">
      <span class="block mb-10 text-48px font-semibold text-brand-400"
        >Blog</span
      >
      <div class="flex flex-wrap -mx-[10px]">
        <div
          v-for="blog in blogs"
          :key="blog.slug"
          class="w-1/3 pb-10 px-[10px]"
        >
          <div class="">
            <RouterLink
              :to="{ name: 'BlogDetail', params: { slug: blog.slug } }"
              class="overflow-hidden aspect-video"
            >
              <img
                :src="getDynamicImage(blog.image)"
                :alt="blog.title"
                class="w-full"
              />
            </RouterLink>
            <div class="mt-5">
              <RouterLink
                :to="{ name: 'BlogDetail', params: { slug: blog.slug } }"
                class="h-14 text-20px text-neutral-900 font-bold hover:text-brand-400 line-clamp-2 text-ellipsis transition-all duration-200"
                >{{ blog.title }}</RouterLink
              >
              <span
                class="mt-2 block text-16px leading-[30px] text-neutral-900"
                >{{ blog.createAt }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
