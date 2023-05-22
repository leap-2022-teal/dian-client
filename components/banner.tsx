import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

export const BigBanner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
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
          <img className="bg-red-200" src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg" alt="" />
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
    </div>
  );
};

export function Slider() {
  return (
    <>
      <div className="lg:w-[65%] sm:w-[90%] mx-auto lg:mt-9 mt-5 pb-5">
        <div className="snap-x mx-auto snap-mandatory flex lg:gap-x-10 gap-x-3 overflow-scroll  ">
          <div className=" snap-start flex-shrink-0 w-[22.5%] items-center justify-center  ">
            <figure>
              <div className="overflow-hidden ">
                <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/Crucial-DDR5-1683643044420235372-original.jpg" alt="image" />
              </div>
            </figure>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%]  items-center  justify-center  ">
            <figure>
              <div className="overflow-hidden">
                <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/ARCTIC-THERMAL-1683643144082288241-original.jpg" alt="image" />
              </div>
            </figure>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%]  items-center  justify-center  ">
            <figure>
              <div className="overflow-hidden ">
                <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/RTX-4080-1683643077931292349-original.jpg" alt="image" />
              </div>
            </figure>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%] items-center  justify-center  ">
            <figure>
              <div className="overflow-hidden ">
                <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/990-1683643219099333641-original.jpg" alt="image" />
              </div>
            </figure>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%] items-center  justify-center  ">
            <figure>
              <div className="overflow-hidden ">
                <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/Royal-Cludge-H81-1683643188962167957-original.jpg" alt="image" />
              </div>
            </figure>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%]  items-center  justify-center  ">
            <figure>
              <div className="overflow-hidden ">
                <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/haste-2-1683642997724233422-original.jpg" alt="image" />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export const SmallBanner = () => {
  return (
    <>
      <div className="flex mt-[4rem]">
        <img className="lg:w-[50%] w-[0] " src="https://promotions.newegg.com/nepro/23-0075/banner/800x120@2x.jpg" alt="" />
        <img className="lg:w-[50%] w-[100%]" src="https://promotions.newegg.com/nepro/23-0570/800x120@2x.jpg" alt="" />
      </div>
    </>
  );
};
