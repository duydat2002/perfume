<script setup lang="ts">
import Breadcrumb from "@/components/Common/Breadcrumb.vue";
import { IBreadcrum } from "@/types";
import { ref } from "vue";

const breadcrumbs = ref<IBreadcrum[]>([
  { text: "Trang chủ", link: { name: "Home" } },
  { text: "Giới thiệu", link: "" },
]);
</script>

<template>
  <div>
    <Breadcrumb :items="breadcrumbs" />
    <span class="mx-content text-48px font-semibold text-brand-400"
      >Giới thiệu</span
    >
    <div
      class="mx-content mt-10 flex flex-col gap-10 text-16px text-neutral-900"
    >
      <span class="text-center text-48px font-medium"
        >Chào mừng bạn đã đến với <br />
        thế giới nước hoa của Perfume Store</span
      >
      <div class="">
        <span class="block mb-2 text-24px font-bold"
          >1. LỊCH SỬ HÌNH THÀNH</span
        >
        <span class="">
          Đi tiên phong và ra đời vào ngày 14/8/2004 với showroom đầu tiên tại
          234 Khương Đình , Hai Bà Trưng, Hà Nội Hiện nay chúng tôi là công ty
          cung cấp nước hoa hàng đầu tại thị trường Hà Nội và tại VN. Với 200
          nhãn hiệu, hàng nghìn mặt hàng được cập nhật liên tục để khách hàng
          được đa dạng lựa chọn, giá luôn TỐT NHẤT đồng thời mang đến sự yên tâm
          về chất lượng sản phẩm cùng đội ngũ nhân viên chuyên nghiệp sẽ mang
          lại cho quý khách trải nghiệm mua sắm nước hoa tốt nhất. <br />
          Chúng tôi tự hào là nhà bán lẻ có giá tốt, phong cách dịch vụ chuyên
          nghiệp và được nhiều khách hàng ủng hộ nhất trên thị trường. Khách
          hàng của chúng tôi là những ca sỹ, người nổi tiếng, các doanh
          nhân.</span
        >
      </div>
      <div class="w-full h-[650px] overflow-hidden">
        <img class="w-full" src="@/assets/images/about-1.png" alt="" />
      </div>
      <div class="">
        <span class="block mb-2 text-24px font-bold"
          >2. CAM KẾT BÁN HÀNG DỊCH VỤ</span
        >
        <span class="">
          100% sản phẩm là chính hiệu nhập khẩu và từ các nhà cung cấp chính
          hãng tại Việt Nam- Đền 200% tiền nếu phát hiện sản phẩm kém chất
          lượng, hàng giả. <br />
          Bảo Hành Sản Phẩm Trong Vòng 30 Ngày Không Cần Lý Do</span
        >
      </div>
      <div class="">
        <span class="block mb-2 text-24px font-bold">3.ĐỘI NGŨ & HỆ THỐNG</span>
        <span class="">
          Tại Perfume - Nơi bạn tìm thấy mùi hương của chính mình. <br />
          Chúng tôi tin rằng, nước hoa không chỉ là một sản phẩm làm đẹp mà còn
          là một phần câu chuyện của bạn. Vì vậy, tại Perfume, chúng tôi luôn
          lắng nghe và thấu hiểu nhu cầu của từng khách hàng để đưa ra những gợi
          ý phù hợp nhất. <br />
          Với đội ngũ tư vấn viên giàu kinh nghiệm và am hiểu về hương thơm,
          chúng tôi sẽ giúp bạn tìm ra mùi hương signature, tạo nên dấu ấn riêng
          biệt.</span
        >
      </div>
      <div class="flex items-center">
        <div class="w-1/2">
          <img src="@/assets/images/about-2.jpg" alt="" class="w-full" />
        </div>
        <div class="w-1/2 flex flex-col gap-4 p-20">
          <span class="text-36px font-medium"
            >Tận tâm lắng nghe, tận tình phục vụ</span
          >
          <span class=""
            ><span class="font-bold">Perfume Shop</span> luôn đặt sự tận tâm nên
            hàng đầu , phục vụ với sự chân thành , nhiệt huyết để cho khách hàng
            những trải nghiểm tốt nhất</span
          >
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-1/2 flex flex-col gap-4 p-20">
          <span class="text-36px font-medium"
            >Chuyên gia tư vấn, kinh nghiệm dày dặn</span
          >
          <span class=""
            ><span class="font-bold">Perfume Shop</span> luôn có những nhân viên
            với nhiều kinh nghiệm và kiến thưc trong giới nước hoa .Đội ngũ tư
            vấn luôn sẵn sàng giúp đỡ bạn về sản phẩm bạn muốn</span
          >
        </div>
        <div class="w-1/2">
          <img src="@/assets/images/about-3.jpg" alt="" class="w-full" />
        </div>
      </div>
      <div class="flex flex-col gap-5 mb-20">
        <span class="block mb-2 text-24px font-bold">4.CÁC CHI NHÁNH </span>
        <div class="flex flex-col">
          <span class="">234 Khương Đình , Thanh Xuân , Hà Nội</span>
          <div class="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0038302413277!2d105.81096947503042!3d20.992483580647836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac93c60a7a53%3A0x4af42a4dfdd9dd7c!2zMjM0IMSQLiBLaMawxqFuZyDEkMOsbmgsIEjhuqEgxJDDrG5oLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1733771301253!5m2!1svi!2s"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="">87 P. Bà Triệu , Hai Bà Trưng , Hà Nội</span>
          <div class="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3972281612314!2d105.84678647503102!3d21.016786180629506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8da8c6a989%3A0x1dcece93f08b7f41!2zODcgUC4gQsOgIFRyaeG7h3UsIELDuWkgVGjhu4sgWHXDom4sIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1733771374697!5m2!1svi!2s"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="">21 Nguyễn Ngọc Nại, Thanh Xuân, Hà Nội</span>
          <div class="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.811056521937!2d105.82012867503066!3d21.00020968064198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac85dc453c3d%3A0x90f982d7f5776e38!2zMjEgUC4gTmd1eeG7hW4gTmfhu41jIE7huqFpLCBLaMawxqFuZyBUaMaw4bujbmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1733771396547!5m2!1svi!2s"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
