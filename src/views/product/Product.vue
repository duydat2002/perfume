<script setup lang="ts">
import LeftIcon from "@icons/arrow-left.svg";
import RightIcon from "@icons/arrow-right.svg";
import CheckIcon from "@icons/check.svg";
import HeartIcon from "@icons/heart.svg";
import MinusIcon from "@icons/minus.svg";
import AddIcon from "@icons/add.svg";
import DownIcon from "@icons/down.svg";
import Breadcrumb from "@/components/Common/Breadcrumb.vue";
import Newsletter from "@/components/Common/Newsletter.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperClass } from "swiper";
import { Pagination, Navigation, Autoplay, Thumbs } from "swiper/modules";
import { computed, onBeforeMount, ref, watch } from "vue";
import { IBreadcrum, IOption, IProduct, IProductPrice } from "@/types";
import USelect from "@/components/Common/USelect.vue";
import Stars from "@/components/Common/Stars.vue";
import CommentItem from "@/components/Product/CommentItem.vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores";
import ProductList from "@/components/Product/ProductList.vue";
import UButton from "@/components/Common/UButton.vue";
import { useRoute, useRouter } from "vue-router";
import { getDynamicImage } from "@/helpers";

const router = useRouter();
const route = useRoute();

const { products } = storeToRefs(useProductStore());

const product = ref<IProduct>();
const product1 = computed(() => {
  return products.value.find((p) => p.slug == route.params.slug);
});

const swiperRef = ref<SwiperClass>();
const breadcrumbList = ref<IBreadcrum[]>([
  { text: "Trang chủ", link: { name: "Home" } },
  { text: "Sản phẩm", link: { name: "Products" } },
  { text: "Sản phẩm abc", link: { name: "Home" } },
]);

const imgs = computed(() => {
  return [
    getDynamicImage(product.value?.image ?? "Mancera EDP.png"),
    getDynamicImage("Maison Francis.png"),
    getDynamicImage("Tom Ford.png"),
    getDynamicImage("Dior Sauvage EDP.png"),
    getDynamicImage("Dolce & Gabbana Brown.png"),
    ,
  ];
});

const selectedPrice = ref(0);
const quantity = ref(1);

const onSwiper = (swiper: SwiperClass) => {
  swiperRef.value = swiper;
};

const sortOptions = ref<IOption[]>([
  { key: "latest", value: "Mới nhất" },
  { key: "oldest", value: "Cũ nhất" },
]);
const sortSelected = ref("latest");

const prevQty = () => {
  if (quantity.value > 1) quantity.value = quantity.value - 1;
};

const nextQty = () => {
  if (quantity.value < (product.value?.quantity ?? 50))
    quantity.value = quantity.value + 1;
};

const changeQty = () => {
  if (quantity.value < 1 || quantity.value > (product.value?.quantity ?? 50))
    quantity.value = 1;
};

watch(
  () => route.params.slug,
  (slug) => {
    product.value = products.value.find((p) => p.slug == slug);

    if (!product.value) router.push({ name: "NotFound" });
  },
  { immediate: true }
);
</script>

<template>
  <div v-if="product">
    <Breadcrumb :items="breadcrumbList" />
    <div class="mx-content flex mb-14">
      <div class="w-[548px] mr-16 preview">
        <div class="relative group/preview">
          <div class="mb-6">
            <swiper
              class="swiper"
              :modules="[Pagination, Autoplay, Navigation, Thumbs]"
              :space-between="10"
              :thumbs="{ swiper: swiperRef }"
              :navigation="{
                prevEl: '.preview .navi-prev',
                nextEl: '.preview .navi-next',
              }"
            >
              <swiper-slide v-for="(url, index) in imgs" :key="index">
                <div class="w-full bg-neutral-200">
                  <img :src="url" class="w-full object-cover" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div
            class="group absolute top-4 right-4 flex flex-center bg-neutral-100 size-8 rounded-full shadow-item cursor-pointer z-10"
          >
            <HeartIcon
              class="w-5 text-neutral-500 group-hover:text-red-400 transition-all duration-200"
            />
          </div>
          <div
            class="navi-prev size-10 hover:scale-110 absolute -left-10 group-hover/preview:left-8 top-1/2 -translate-y-1/2 bg-white rounded-full flex flex-center z-10 cursor-pointer select-none transition-all duration-200 opacity-0 group-hover/preview:opacity-100"
          >
            <LeftIcon class="w-8 text-neutral-400 hover:text-neutral-700" />
          </div>
          <div
            class="navi-next size-10 hover:scale-110 absolute -right-10 group-hover/preview:right-8 top-1/2 -translate-y-1/2 bg-white rounded-full flex flex-center z-10 cursor-pointer select-none transition-all duration-200 opacity-0 group-hover/preview:opacity-100"
          >
            <RightIcon class="w-8 text-neutral-400 hover:text-neutral-700" />
          </div>
        </div>
        <div class="w-full">
          <swiper
            @swiper="onSwiper"
            class="swiper"
            :modules="[Pagination, Autoplay, Navigation, Thumbs]"
            :slides-per-view="3"
            :space-between="24"
            :watchSlidesProgress="true"
          >
            <swiper-slide v-for="(url, index) in imgs" :key="index">
              <div
                class="w-full bg-neutral-200 border-2 border-transparent parent-[.swiper-slide-thumb-active]:border-secondary-300"
              >
                <img :src="url" class="w-full object-cover" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="flex-1">
        <div class="flex flex-col gap-4 pb-4 mb-4 border-b border-neutral-300">
          <div class="flex items-center gap-[10px]">
            <Stars />
            <span class="text-12px text-neutral-700">11 đánh giá</span>
          </div>
          <span class="text-48px text-neutral-700 font-medium">{{
            product.name
          }}</span>
          <span class="text-16px text-neutral-400"
            >Tỏa sáng trong mọi buổi tiệc, sự kiện, hay buổi hẹn hò với hương
            hoa cỏ, gỗ và xạ hương quyến rũ, thanh lịch, giúp bạn tự tin và nổi
            bật.</span
          >
          <span class="text-24px font-semibold text-brand-400"
            >{{
              product.prices[selectedPrice].price.toLocaleString("vi-VN")
            }}đ</span
          >
        </div>
        <div class="flex flex-col gap-2 text-18px text-neutral-400">
          <div class="">
            <span class="font-medium">Thương hiệu: </span>
            <span class="text-neutral-700 font-semibold">Dior</span>
          </div>
          <div class="">
            <span class="font-medium">Loại sản phẩm: </span>
            <span class="text-neutral-700 font-semibold"
              >Nước hoa Dior Nam</span
            >
          </div>
          <div class="">
            <span class="font-medium">Tình trạng: </span>
            <span class="text-neutral-700 font-semibold">Còn hàng</span>
          </div>
          <div class="">
            <span class="font-medium">Dung tích: </span>
          </div>
          <div class="flex flex-wrap mt-2 -mx-[10px]">
            <div
              v-for="(item, i) in product.prices"
              :key="i"
              class="w-1/2 px-[10px] pb-3"
            >
              <div
                class="flex items-center justify-between px-4 py-3 border hover:bg-brand-50 hover:border-brand-400 cursor-pointer"
                :class="[
                  i == selectedPrice
                    ? 'border-brand-400 bg-brand-50'
                    : 'border-neutral-300',
                ]"
                @click="
                  () => {
                    selectedPrice = i;
                  }
                "
              >
                <div class="flex flex-col">
                  <span class="text-16px font-medium text-neutral-700"
                    >{{ item.capacity }}ml</span
                  >
                  <span class="text-20px font-semibold text-brand-400"
                    >{{ item.price.toLocaleString("vi-VN") }}đ</span
                  >
                </div>
                <CheckIcon
                  v-if="i == selectedPrice"
                  class="w-5 fill-brand-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 flex flex-col gap-4">
          <div class="flex items-center h-[52px] bg-[#f5f5f5]">
            <div class="p-4 flex flex-center cursor-pointer" @click="prevQty">
              <MinusIcon />
            </div>
            <input
              class="flex-1 text-center text-20px font-medium text-neutral-900"
              type="number"
              v-model="quantity"
              min="1"
              :max="product.quantity"
              @change="changeQty"
            />
            <div class="p-4 flex flex-center cursor-pointer" @click="nextQty">
              <AddIcon />
            </div>
          </div>
          <div class="flex gap-5">
            <UButton
              class="flex-1"
              title="Thêm vào giỏ hàng"
              variant="outlined"
              rounded="rounded-none"
            ></UButton>
            <UButton
              class="flex-1"
              title="Mua hàng"
              rounded="rounded-none"
            ></UButton>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-content mt-20">
      <div
        class="flex items-center justify-between pb-2 mb-2 border-b border-neutral-400 cursor-pointer"
      >
        <span class="text-24px font-medium text-brand-400"
          >Thông tin chi tiết</span
        >
        <DownIcon class="w-6" />
      </div>
      <div v-if="true" class="flex flex-col mt-5 text-20px text-neutral-700">
        <div class="flex flex-col">
          <span class="mb-2 text-24px font-semibold text-neutral-900"
            >Chi tiết</span
          >
          <div class="mb-4 flex flex-col">
            <span class=""
              >Phân loại: <span class="underline">Nước hoa</span></span
            >
            <span class=""
              >Thương hiệu: <span class="underline">Dior</span></span
            >
            <span class="">Xuất xứ: <span class="">Pháp</span></span>
            <span class="">Năm phát hành: <span class="">2015</span></span>
            <span class=""
              >Nồng độ: <span class="">Eau de Toilette (EDT)</span></span
            >
          </div>
          <div class="mb-4">
            <span class=""
              >Nhà chế tác:Francois DemachyDior Sauvage EDT là một hương thơm
              thuộc nhóm hương Aromatic Fougere, được ra mắt vào năm 2015. Sáng
              tạo bởi nhà pha chế nước hoa François Demachy, Sauvage EDT lấy cảm
              hứng từ khung cảnh hoang dã và tự do của bầu trời xanh và sa mạc
              cát vàng.</span
            >
          </div>
          <ul class="flex flex-col list-disc list-inside">
            <li class="">Top note (hương đầu): Cam bergamot Calabria, tiêu</li>
            <li class="">
              Heart note (hương giữa): Tiêu Sichuan, hoa oải hương, nhục đậu
              khấu, tiểu hồi hương
            </li>
            <li class="">
              Base note (hương cuối): Ambroxan, nhựa Elemi, cỏ hương bài
            </li>
          </ul>
        </div>
        <div class="flex flex-col mt-5">
          <span class="mb-2 text-24px font-semibold text-neutral-900"
            >Thông số bảo quản</span
          >
          <ul class="flex flex-col list-disc list-inside">
            <li class="">Độ lưu hương: 4/5</li>
            <li class="">Độ tỏa hương: 4/5</li>
            <li class="">Nịnh mũi: 4/5</li>
            <li class="">
              Thời điểm: Thích hợp cho hàng ngày, làm việc, gặp gỡ bạn bè và các
              sự kiện quan trọng.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mx-content mt-20">
      <div class="flex gap-4 mb-6">
        <span class="text-24px font-semibold text-neutral-800">Đánh giá</span>
        <div class="flex items-center gap-[10px]">
          <Stars />
          <span class="text-14px font-medium text-neutral-700"
            >11 đánh giá</span
          >
        </div>
      </div>
      <div class="flex items-center gap-2 p-6 border-2 border-neutral-300">
        <input
          type="text"
          class="flex-1 text-16px"
          placeholder="Nhận xét về sản phẩm này..."
        />
        <UButton
          size="small"
          title="Thêm nhận xét"
          rounded="rounded-none"
        ></UButton>
      </div>
      <div class="my-10">
        <div class="flex items-center justify-between mb-10">
          <span class="text-28px font-medium text-black">11 đánh giá</span>
          <div class="w-[256px]">
            <USelect
              class="rounded-none"
              :options="sortOptions"
              v-model:selected="sortSelected"
            />
          </div>
        </div>
        <div class="flex flex-col items-center gap-6">
          <CommentItem v-for="i in 5" :key="i" />
          <div class="h-10 flex flex-center py-2 px-4 cursor-pointer">
            <span class="text-18px font-medium text-brand-400 underline"
              >Xem thêm</span
            >
          </div>
        </div>
      </div>
      <div class="mb-20 mt-10">
        <ProductList title="Bạn có thể thích" :products="products" />
      </div>
    </div>
    <Newsletter />
  </div>
</template>
