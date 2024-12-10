<script setup lang="ts">
import RightIcon from "@icons/arrow-right.svg";
import ClockIcon from "@icons/clock.svg";
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
      <div class="mx-content h-[500px] mb-[60px] mt-5 overflow-hidden">
        <img class="w-full" src="@/assets/images/blog-detail-1.png" alt="" />
      </div>
      <div class="flex flex-col mx-[280px] mb-[60px]">
        <div class="mb-[60px]">
          <span
            class="block mb-5 text-48px font-semibold text-neutral-900 text-center"
            >Tầng hương nước hoa là gì? Tại sao có 3 tầng nốt hương?</span
          >
          <div class="flex flex-center gap-3 text-center">
            <ClockIcon />
            <span class="">15/08/2024 - 22:20</span>
          </div>
        </div>
        <div
          class="flex flex-col gap-4 text-16px text-neutral-700 text-justify"
        >
          <span class=""
            >Tầng hương nước hoa không chỉ là sự pha trộn của các mùi hương mà
            còn là nghệ thuật kể chuyện qua từng nốt hương. Đây là bí mật tạo
            nên sức hút, sự tinh tế, và cảm giác đắm chìm mà một chai nước hoa
            mang lại. Hãy cùng khám phá các tầng hương nước hoa để hiểu vì sao
            chúng chính là “linh hồn” của mỗi sản phẩm nước hoa.</span
          >
          <div class="overflow-hidden">
            <img
              src="@/assets/images/blog-detail-3.png"
              alt=""
              class="w-full"
            />
          </div>
          <span class="text-20px font-medium">Tầng hương nước hoa là gì?</span>
          <span class=""
            >Tầng hương nước hoa là khái niệm quan trọng trong thế giới mùi
            hương, thể hiện sự phân tầng rõ rệt trong cách một mùi hương được
            cảm nhận theo thời gian. Khi bạn xịt nước hoa lên da, mùi hương
            không xuất hiện theo cách đồng nhất mà thay đổi dần dần qua các giai
            đoạn. Quá trình này được chia thành ba tầng hương chính: tầng hương
            đầu, tầng hương giữa, và tầng hương cuối. <br />
            Mỗi tầng hương mang một vai trò khác biệt, được thiết kế để dẫn dắt
            người dùng từ những cảm giác ban đầu tươi mát, qua sự lắng đọng tinh
            tế, đến dư vị ấm áp kéo dài. Đây không chỉ là sự sắp xếp mùi hương,
            mà còn là một hành trình cảm xúc, nơi mỗi tầng hương kể một câu
            chuyện riêng biệt. <br />
            Có thể nói, trong suốt lịch sử nước hoa, tầng hương chính là yếu tố
            quyết định một mùi hương có thể chinh phục trái tim của người dùng
            hay không. Từ cảm giác bừng tỉnh bởi tầng hương đầu, đến chiều sâu
            quyến rũ của tầng hương giữa, và cuối cùng là sự vương vấn lâu dài
            của tầng hương cuối - tất cả đều kết hợp hài hòa để tạo nên dấu ấn
            không thể phai mờ.</span
          >
          <span class="text-20px font-medium"
            >Có những tầng hương nước hoa nào?</span
          >
          <span class=""
            >Như đã đề cập ở trên, các tầng hương nước hoa được chia thành ba
            phần chính: tầng hương đầu, tầng hương giữa, và tầng hương cuối. Sự
            phân chia này không phải ngẫu nhiên mà là một nghệ thuật được các
            nhà chế tác nước hoa tính toán tỉ mỉ. <br />
            Lý do có ba tầng hương nước hoa bắt nguồn từ cách các phân tử mùi
            hương phản ứng với không khí và làn da. Những hương nhẹ, dễ bay hơi
            thường được cảm nhận ngay lập tức khi xịt, trong khi các hương nặng
            hơn cần thời gian để lan tỏa và lắng đọng. Điều này giúp mùi hương
            có sức hấp dẫn bền vững, không chỉ gây ấn tượng ban đầu mà còn để
            lại dấu ấn sâu sắc trong tâm trí người đối diện.</span
          >
          <span class="text-20px font-medium"
            >Vì sao cần tìm hiểu tầng hương khi lựa chọn nước hoa?</span
          >
          <span class=""
            >Mỗi tầng hương được thiết kế như một “chương” trong câu chuyện của
            mùi hương, mang lại trải nghiệm phong phú và đa chiều. Khi bạn hiểu
            được cách các tầng hương vận hành, bạn không chỉ biết cách chọn nước
            hoa phù hợp mà còn hiểu cách “phối hợp” hương thơm với từng dịp, tạo
            nên sự tinh tế và ấn tượng riêng biệt.</span
          >
          <div class="">
            <img
              src="@/assets/images/blog-detail-2.png"
              alt=""
              class="w-full"
            />
          </div>
          <span class="text-20px font-medium"
            >Gợi ý lựa chọn tầng hương nước hoa cho từng dịp cụ thể</span
          >
          <div class="flex flex-col gap-2">
            <span class="text-18px font-bold"
              >Buổi sáng đi làm hoặc hoạt động hàng ngày:</span
            >
            <ul class="flex flex-col gap-2 list-disc list-inside">
              <li>
                Tầng hương đầu tươi mát là lựa chọn lý tưởng, bởi chúng mang lại
                cảm giác tràn đầy năng lượng và sự tươi mới để bắt đầu một ngày
                mới.
              </li>
              <li>
                Gợi ý mùi hương: Hương cam bergamot, chanh vàng, táo xanh, hoặc
                bạc hà thường có trong những loại nước hoa như Dolce & Gabbana
                Light Blue, Versace Bright Crystal, hoặc Chanel Chance Eau
                Fraiche.
              </li>
              <li>
                Lưu ý: Hãy chọn các dòng nước hoa nhẹ nhàng với nồng độ eau de
                toilette (EDT) để tránh gây cảm giác nồng gắt trong môi trường
                làm việc hoặc nơi đông người.
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-18px font-bold"
              >Buổi trưa hoặc các buổi họp quan trọng:</span
            >
            <ul class="flex flex-col gap-2 list-disc list-inside">
              <li>
                Lúc này, tầng hương giữa ấm áp và tinh tế sẽ phát huy hiệu quả,
                giúp bạn tạo ấn tượng chuyên nghiệp và tự tin hơn.
              </li>
              <li>
                Gợi ý mùi hương: Các nốt hoa cỏ như hoa nhài, hoa hồng hoặc hoa
                lan Nam Phi là lựa chọn hoàn hảo. Nước hoa như Chanel Coco
                Mademoiselle hoặc Dior Miss Dior mang lại vẻ thanh lịch và tinh
                tế.
              </li>
              <li>
                Lưu ý: Tầng hương giữa nên có sự cân bằng - không quá ngọt ngào
                nhưng vẫn đủ để thu hút và tạo cảm giác dễ chịu.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mx-content my-20">
        <div class="flex mb-10 items-end justify-between">
          <span class="text-36px font-medium">Có thể bạn thích</span>
          <RouterLink
            :to="{ name: 'BlogDetail', params: { slug: 'blog-detail' } }"
            class="inline-flex items-center border-b border-neutral-700"
          >
            <span class="text-16px text-neutral-700 font-medium mr-1"
              >Xem thêm</span
            >
            <RightIcon class="w-5 text-neutral-700" />
          </RouterLink>
        </div>
        <div class="flex gap-5">
          <RouterLink
            :to="{ name: 'BlogDetail', params: { slug: 'blog-detail' } }"
            class="flex-1"
          >
            <div class="mb-5 overflow-hidden aspect-video">
              <img
                class="w-full"
                src="@/assets/images/blog-2.png"
                alt="Blog 2"
              />
            </div>
            <div class="">
              <span
                class="mb-2 block h-14 text-20px text-neutral-700 font-bold line-clamp-2 text-ellipsis"
                >Tầng hương nước hoa là gì? Tại sao có 3 tầng nốt hương?</span
              >
              <span class="text-16px text-neutral-700">May 16, 2024</span>
            </div>
          </RouterLink>
          <RouterLink
            :to="{ name: 'BlogDetail', params: { slug: 'blog-detail' } }"
            class="flex-1"
          >
            <div class="mb-5 overflow-hidden aspect-video">
              <img
                class="w-full"
                src="@/assets/images/blog-3.png"
                alt="Blog 3"
              />
            </div>
            <div class="">
              <span
                class="mb-2 block h-14 text-20px text-neutral-700 font-bold line-clamp-2 text-ellipsis"
                >Tầng hương nước hoa là gì? Tại sao có 3 tầng nốt hương?</span
              >
              <span class="text-16px text-neutral-700">May 16, 2024</span>
            </div>
          </RouterLink>
          <RouterLink
            :to="{ name: 'BlogDetail', params: { slug: 'blog-detail' } }"
            class="flex-1"
          >
            <div class="mb-5 overflow-hidden aspect-video">
              <img
                class="w-full"
                src="@/assets/images/blog-1.png"
                alt="Blog 1"
              />
            </div>
            <div class="">
              <span
                class="mb-2 block h-14 text-20px text-neutral-700 font-bold line-clamp-2 text-ellipsis"
                >Tầng hương nước hoa là gì? Tại sao có 3 tầng nốt hương?</span
              >
              <span class="text-16px text-neutral-700">May 16, 2024</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
