<script setup lang="ts">
import CheckIcon from "@icons/check.svg";
import MoneyIcon from "@icons/money.svg";
import VisaIcon from "@icons/visa.svg";
import CardIcon from "@icons/card.svg";
import PaypalIcon from "@icons/paypal.svg";
import ApplePayIcon from "@icons/apple-pay.svg";
import CheckPopupIcon from "@icons/check-popup.svg";
import ErrorPopupIcon from "@icons/error-popup.svg";
import { reactive, ref } from "vue";
import UInput from "../Common/UInput.vue";
import UButton from "../Common/UButton.vue";
import CartSmallItem from "./CartSmallItem.vue";

const paymentDetail = reactive({
  firtName: "",
  lastName: "",
  phone: "",
  email: "",
  address: {
    province: "",
    district: "",
    commune: "",
    detail: "",
  },
  bankPayment: {
    cardNumber: "",
    renewal: "",
    cvc: "",
  },
});
const useSavedAddress = ref(false);

const paymentTypes = ref([
  { name: "bank", title: "Thanh toán bằng thẻ ngân hàng" },
  { name: "momo", title: "Thanh toán bằng chuyển khoản" },
  { name: "cod", title: "Thanh toán khi nhận hàng" },
]);
const paymentSelected = ref("bank");
const showPopup = ref(0);

const clickMomo = () => {
  showPopup.value = showPopup.value < 2 ? showPopup.value + 1 : 0;
};
</script>

<template>
  <div class="mt-[60px] flex items-start gap-16">
    <div class="flex-1 flex flex-col gap-6 pb-[60px]">
      <div class="flex flex-col gap-6 p-6 border border-neutral-500">
        <span class="text-20px font-semibold text-black"
          >Thông tin liên hệ</span
        >
        <div class="flex flex-col gap-4">
          <div class="flex gap-3">
            <div class="flex-1">
              <UInput
                title="TÊN"
                placeholder="Tên"
                v-model:prop-value="paymentDetail.firtName"
              />
            </div>
            <div class="flex-1">
              <UInput
                title="Họ"
                placeholder="Họ"
                v-model:prop-value="paymentDetail.lastName"
              />
            </div>
          </div>
          <UInput
            title="SỐ ĐIỆN THOẠI"
            placeholder="Số điện thoại"
            v-model:prop-value="paymentDetail.phone"
          />
          <UInput
            title="ĐỊA CHỈ EMAIL"
            placeholder="Địa chỉ email của bạn"
            v-model:prop-value="paymentDetail.firtName"
          />
        </div>
      </div>
      <div class="flex flex-col gap-6 p-6 border border-neutral-500">
        <span class="text-20px font-semibold text-black"
          >Địa chỉ giao hàng</span
        >
        <div class="flex flex-col gap-4">
          <UInput
            title="TỈNH/ THÀNH PHỐ"
            placeholder="Tỉnh / Thành phố"
            v-model:prop-value="paymentDetail.address.province"
          />
          <UInput
            title="QUẬN/ HUYỆN"
            placeholder="Quận / Huyện"
            v-model:prop-value="paymentDetail.address.district"
          />
          <UInput
            title="XÃ/ PHƯỜNG/ THỊ TRẤN"
            placeholder="Xã/Phường/Thị  Trấn"
            v-model:prop-value="paymentDetail.address.commune"
          />
          <UInput
            title="ĐỊA CHỈ CỤ THỂ"
            placeholder=""
            v-model:prop-value="paymentDetail.address.detail"
          />
        </div>
        <div
          class="flex items-center gap-3 cursor-pointer"
          @click="
            () => {
              useSavedAddress = !useSavedAddress;
            }
          "
        >
          <div
            class="size-6 border-[1.5px] flex flex-center"
            :class="
              useSavedAddress
                ? 'bg-brand-300 border-brand-300'
                : 'border-neutral-500'
            "
          >
            <CheckIcon v-if="useSavedAddress" class="w-4 fill-white" />
          </div>
          <span class="block text-16px text-neutral-700 select-none"
            >Dùng địa chỉ bạn đã lưu</span
          >
        </div>
      </div>
      <div class="flex flex-col gap-6 p-6 border border-neutral-500">
        <span class="text-20px font-semibold text-black"
          >Phương thức thanh toán</span
        >
        <div class="flex flex-col">
          <div
            class="flex flex-col gap-6 pb-8 mb-6 border-b border-neutral-400"
          >
            <div
              v-for="payment in paymentTypes"
              :key="payment.name"
              class="flex items-center px-4 py-3 h-[52px] border hover:bg-brand-50 hover:border-brand-400 cursor-pointer"
              :class="[
                payment.name == paymentSelected
                  ? 'bg-brand-50 border-brand-400'
                  : 'bg-white border-neutral-300',
              ]"
              @click="
                () => {
                  paymentSelected = payment.name;
                }
              "
            >
              <div
                class="size-[18px] flex flex-center rounded-full border"
                :class="[
                  payment.name == paymentSelected
                    ? 'border-brand-400'
                    : 'border-neutral-500',
                ]"
              >
                <div
                  v-if="payment.name == paymentSelected"
                  class="size-[10px] rounded-full bg-brand-400"
                ></div>
              </div>
              <span
                class="px-3 flex-1 text-16px font-medium"
                :class="
                  payment.name == paymentSelected
                    ? 'text-brand-400'
                    : 'text-neutral-900'
                "
                >{{ payment.title }}</span
              >
              <MoneyIcon
                v-if="payment.name == paymentSelected"
                class="w-6 text-neutral-800"
              />
            </div>
          </div>
          <div v-if="paymentSelected == 'bank'" class="flex flex-col gap-3">
            <div
              class="box flex items-center w-fit p-4 gap-[25px] rounded-[5px]"
            >
              <div
                class="w-12 h-8 flex flex-center border border-neutral-300 rounded"
              >
                <VisaIcon />
              </div>
              <div
                class="w-12 h-8 flex flex-center border border-neutral-300 rounded"
              >
                <CardIcon />
              </div>
              <div
                class="w-12 h-8 flex flex-center border border-neutral-300 rounded"
              >
                <PaypalIcon />
              </div>
              <div
                class="w-12 h-8 flex flex-center border border-neutral-300 rounded"
              >
                <ApplePayIcon />
              </div>
            </div>
            <UInput
              title="Số thẻ"
              placeholder="1234 1234 1234"
              v-model:prop-value="paymentDetail.bankPayment.cardNumber"
            />
            <div class="flex gap-3">
              <UInput
                title="Ngày gia hạn"
                placeholder="MM/YY"
                v-model:prop-value="paymentDetail.bankPayment.renewal"
              />
              <UInput
                title="CVC"
                placeholder="CVC code"
                v-model:prop-value="paymentDetail.bankPayment.cvc"
              />
            </div>
          </div>
          <div
            v-else-if="paymentSelected == 'momo'"
            class="flex flex-col w-fit gap-4"
          >
            <span class="text-14px font-semibold text-neutral-700"
              >Chuyển khoản qua MOMO</span
            >
            <div
              class="flex flex-col p-4 border rounded-md border-neutral-400"
              @click="clickMomo"
            >
              <div class="mb-4">
                <img class="" src="@/assets/images/momo.png" alt="Momo" />
              </div>
              <span class="mb-[6px] text-16px font-medium text-neutral-400"
                >Số tài khoản:
                <span class="text-neutral-900">11240839124</span></span
              >
              <span class="text-18px font-semibold text-neutral-900"
                >Trịnh Ngọc Tân</span
              >
            </div>
          </div>
        </div>
      </div>
      <UButton title="Đặt hàng"></UButton>
    </div>
    <div
      class="w-[413px] flex flex-col gap-4 px-6 py-4 border border-neutral-500"
    >
      <span class="">Đơn hàng</span>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col">
          <CartSmallItem />
          <CartSmallItem />
          <CartSmallItem />
        </div>
        <div class="flex gap-3">
          <div class="flex-1 p-4 border border-neutral-300">
            <input
              class="size-full text-neutral-900 placeholder:text-neutral-400 text-14px font-medium"
              type="text"
              placeholder="Nhập mã voucher"
            />
          </div>
          <UButton class="w-[123px]" title="Thêm" size="medium" />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center py-3 border-b border-neutral-300 gap-2">
          <MoneyIcon class="w-6" />
          <span class="flex-1 text-16px font-medium text-neutral-700"
            >Th0m84</span
          >
          <span class="text-16px font-medium text-neutral-900"
            >-100.000đ [Remove]</span
          >
        </div>
        <div
          class="flex items-center justify-between py-3 border-b border-neutral-300"
        >
          <span class="text-16px font-medium text-neutral-700">Phí Ship</span>
          <span class="text-16px font-medium text-neutral-900">Miễn phí</span>
        </div>
        <div
          class="flex items-center justify-between py-3 border-b border-neutral-300"
        >
          <span class="text-16px font-medium text-neutral-700">Tổng phụ</span>
          <span class="text-16px font-medium text-neutral-900">200.000đ</span>
        </div>
        <div class="flex items-center justify-between py-3">
          <span class="text-20px font-semibold text-neutral-900">Tổng</span>
          <span class="text-20px font-semibold text-brand-300">3.100.000đ</span>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showPopup == 1" class="fixed top-24 left-1/2 -translate-x-1/2">
    <div
      class="w-[400px] flex flex-col items-center p-10 gap-[14px] bg-brand-100 border border-brand-200"
    >
      <CheckPopupIcon />
      <span class="text-20px font-bold text-brand-300 text-center"
        >Chúc mừng bạn đã thanh toán<br />
        thành công</span
      >
    </div>
  </div>
  <div v-if="showPopup == 2" class="fixed top-24 left-1/2 -translate-x-1/2">
    <div
      class="w-[400px] flex flex-col items-center p-10 gap-[14px] bg-[#E7B7B7] border border-[#E98A8AD1]"
    >
      <ErrorPopupIcon />
      <span class="text-20px font-bold text-[#D50C0C] text-center"
        >Xin lỗi bạn đã thanh toán <br />
        thất bại</span
      >
    </div>
  </div>
</template>

<style scoped>
.box {
  background-image: repeating-linear-gradient(
      90deg,
      #058310,
      #058310 10px,
      transparent 10px,
      transparent 15px
    ),
    repeating-linear-gradient(
      180deg,
      #058310,
      #058310 10px,
      transparent 10px,
      transparent 15px
    ),
    repeating-linear-gradient(
      90deg,
      #058310,
      #058310 10px,
      transparent 10px,
      transparent 15px
    ),
    repeating-linear-gradient(
      180deg,
      #058310,
      #058310 10px,
      transparent 10px,
      transparent 15px
    );
  background-position: left top, right top, left bottom, left top;
  background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;
  background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
}
</style>
