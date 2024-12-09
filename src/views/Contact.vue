<script setup lang="ts">
import TrackingIcon from "@icons/sms-tracking.svg";
import PhoneIcon from "@icons/phone.svg";
import LocationIcon from "@icons/location.svg";
import FacebookIcon from "@icons/facebook-f.svg";
import InstagramIcon from "@icons/instagram-f.svg";
import TelegramIcon from "@icons/telegram-f.svg";
import ZaloIcon from "@icons/zalo.svg";
import Breadcrumb from "@/components/Common/Breadcrumb.vue";
import Newsletter from "@/components/Common/Newsletter.vue";
import UButton from "@/components/Common/UButton.vue";
import { getDynamicImage } from "@/helpers";
import { IBreadcrum } from "@/types";
import { ref } from "vue";

const breadcrumbs = ref<IBreadcrum[]>([
  { text: "Trang chủ", link: { name: "Home" } },
  { text: "Liên hệ", link: "" },
]);
</script>

<template>
  <div class="">
    <Breadcrumb :items="breadcrumbs" />
    <div class="mt-10">
      <div
        class="w-full px-content py-20 flex bg-cover"
        :style="{
          backgroundImage: `url(${getDynamicImage('newsletter.jpg')})`,
        }"
      >
        <div class="flex-1 flex flex-col text-white mr-20">
          <span class="text-60px font-medium mb-3">Liên hệ</span>
          <span class="text-20px"
            >Chúng tôi luôn sẵn sàng lắng nghe ý kiến, phản hồi và giải đáp thắc
            mắc của bạn.</span
          >
          <div
            class="w-full h-[1px] bg-[#dfdfdf] flex-shrink-0 my-[30px]"
          ></div>
          <div class="flex flex-col">
            <div class="flex items-center gap-5">
              <div
                class="size-[50px] flex flex-center bg-brand-50 rounded-full overflow-hidden"
              >
                <TrackingIcon class="w-6 text-brand-400" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-20px font-semibold">Email</span>
                <span class="text-16px">Perfume@gmail.com</span>
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div
                class="size-[50px] flex flex-center bg-brand-50 rounded-full overflow-hidden"
              >
                <PhoneIcon class="w-6 text-brand-400" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-20px font-semibold">Số điện thoại</span>
                <span class="text-16px">+84 234 567 890</span>
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div
                class="size-[50px] flex flex-center bg-brand-50 rounded-full overflow-hidden"
              >
                <LocationIcon class="w-6 text-brand-400" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-20px font-semibold">Địa chỉ</span>
                <span class="text-16px"
                  >234 Khương Đình , Thanh Xuân , Hà Nội</span
                >
              </div>
            </div>
          </div>
          <div
            class="w-full h-[1px] bg-[#dfdfdf] flex-shrink-0 my-[30px]"
          ></div>
          <div class="flex items-center gap-5">
            <FacebookIcon class="w-[35px]" />
            <InstagramIcon class="w-[35px]" />
            <TelegramIcon class="w-[35px]" />
            <ZaloIcon class="" />
          </div>
        </div>
        <div class="w-[586px] flex flex-col gap-3">
          <div class="flex gap-3 text-18px font-medium text-white">
            <div class="flex-1 border border-white">
              <input
                type="text"
                class="w-full px-6 py-3 placeholder:text-white"
                placeholder="Tên của bạn"
              />
            </div>
            <div class="flex-1 border border-white">
              <input
                type="text"
                class="w-full px-6 py-3 placeholder:text-white"
                placeholder="Số điện thoại"
              />
            </div>
            <div class="flex-1 border border-white">
              <input
                type="email"
                class="w-full px-6 py-3 placeholder:text-white"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="flex-1 border border-white relative">
            <textarea
              class="size-full px-6 py-3 resize-none text-18px font-medium text-white placeholder:text-white"
              placeholder="Nội dung"
            ></textarea>
            <div class="absolute right-10 bottom-4">
              <UButton
                class="w-[110px]"
                variant="outlined"
                variant-type="white"
                title="Gửi"
              ></UButton>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[404px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.4491523574134!2d105.8131502373624!3d20.992633543269044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac93c638689d%3A0x408b6a545d27f085!2zMjM2IMSQLiBLaMawxqFuZyDEkMOsbmgsIEjhuqEgxJDDrG5oLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1733761321103!5m2!1svi!2s"
          width="100%"
          height="100%"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>
