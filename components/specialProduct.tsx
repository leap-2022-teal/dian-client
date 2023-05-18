import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);

export function SpecialProduct() {
  <div>
    <div className="w-[250px] h-auto m-2">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[350px] h-auto"
      >
        <SwiperSlide>
          <img className="relative rounded-lg border border-gray-300" src="https://c1.neweggimages.com/WebResource/Themes/Nest/ne_features_pcbuilder.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg border border-gray-300" src="https://assets.hardwarezone.com/img/2021/01/Razer_BlackShark_V2_Pro.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg border border-gray-300" src="https://cdn.shopify.com/s/files/1/0631/9590/6271/files/1_67816f92-1c73-46e3-bb91-7535f10549b8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg border border-gray-300" src="https://www.asrock.com/mb/features/B650%20LiveMixer.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg border border-gray-300" src="https://www.fractal-design.com/app/uploads/2021/11/IMG_6741-1440x960.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>

    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div></div>
    </div>
  </div>;
}
