import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

export function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://api.hitech.mn/uploads/images/2023/5/9/7900-1683642640771328372-original.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=" https://api.hitech.mn/uploads/images/2023/5/9/NV7-1683642859505632107-original.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="  https://api.hitech.mn/uploads/images/2023/5/9/PG48UQ-1683642833181786191-original.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
