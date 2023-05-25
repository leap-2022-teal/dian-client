import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BigBanner = () => {
  return (
    <>
      <div className=" hidden sm:block">
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
            <Link href={`/product/asrock-amd-radeon-rx-7900-xtx-phantom-gaming-24gb-oc-802ba4ec`}>
              <img src="https://api.hitech.mn/uploads/images/2023/5/9/7900-1683642640771328372-original.jpg" alt="" />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={`/product/amd-ryzen-5-7600-472f6911`}>
              <img
                className="bg-red-200"
                src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/5/AmazonStores/A2EUQ1WTGCTBG2/14e46b7c0535200c1aff8dae29498ccb.w1934.h773._CR0%2C0%2C1934%2C773_SX1934_.jpg"
                alt=""
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={`/product/phanteks-eclipse-p600s-1e263d2f`}>
              <img src=" https://api.hitech.mn/uploads/images/2023/5/9/NV7-1683642859505632107-original.jpg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={`/product/asus-rog-swift-pg259qnr-24-5-inch-fhd-1920x1080-fast-ips-360hz-aafa2def`}>
              <img src="  https://api.hitech.mn/uploads/images/2023/5/9/PG48UQ-1683642833181786191-original.jpg" alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="  sm:hidden">
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
            <Link href={`/product/asus-rog-swift-pg259qnr-24-5-inch-fhd-1920x1080-fast-ips-360hz-aafa2def`}>
              <img src="https://www.pojo.com/wp-content/uploads/2018/03/ttces2-e1520000383183.jpg`" alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export function Slider() {
  return (
    <>
      <div className=" lg:w-[65%] sm:w-[90%] mx-auto lg:mt-9 mt-5 pb-5">
        <div className="snap-x mx-auto snap-mandatory flex lg:gap-x-10 gap-x-3 overflow-scroll  ">
          <div className=" snap-start flex-shrink-0 w-[22.5%] items-center justify-center  ">
            <Link href={`/product/kingston-fury-32gb-2x16gb-ddr5-4800mhz-88d9b52d`}>
              <figure>
                <div className="overflow-hidden ">
                  <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/Crucial-DDR5-1683643044420235372-original.jpg" alt="image" />
                </div>
              </figure>
            </Link>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%]  items-center  justify-center  ">
            <Link href={`/product/apple-macbook-air-m2-chip-midnight-2022-512gb-d0a1ecd7`}>
              <figure>
                <div className="overflow-hidden">
                  <img className="border rounded-lg" src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1024" alt="image" />
                </div>
              </figure>
            </Link>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%]  items-center  justify-center  ">
            <Link href={`/product/asus-rog-strix-geforce-rtx-4080-16gb-356ecdb4`}>
              <figure>
                <div className="overflow-hidden ">
                  <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/RTX-4080-1683643077931292349-original.jpg" alt="image" />
                </div>
              </figure>
            </Link>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%] items-center  justify-center  ">
            <Link href={`/product/980-pro-pcie-r-4-0-nvme-ssd-500gb-52d05e5c`}>
              <figure>
                <div className="overflow-hidden ">
                  <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/990-1683643219099333641-original.jpg" alt="image" />
                </div>
              </figure>
            </Link>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%] items-center  justify-center  ">
            <Link href={`/product/k70-rgb-mk-2-se-mechanical-gaming-keyboard-97d6db59`}>
              <figure>
                <div className="overflow-hidden ">
                  <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/Royal-Cludge-H81-1683643188962167957-original.jpg" alt="image" />
                </div>
              </figure>
            </Link>
          </div>

          <div className="snap-start flex-shrink-0 h-[auto] w-[22.5%]  items-center  justify-center  ">
            <Link href={`/product/benq-zowie-fk1-c-mouse-for-esports-78c691a5`}>
              <figure>
                <div className="overflow-hidden ">
                  <img className="border rounded-lg" src="https://api.hitech.mn/uploads/images/2023/5/9/haste-2-1683642997724233422-original.jpg" alt="image" />
                </div>
              </figure>
            </Link>
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
        <Link href={`/product/amd-ryzen-9-7900x-12-core-24-thread-unlocked-desktop-processor-4ba6c388`} className="lg:w-[50%] w-[0]">
          <img src="https://promotions.newegg.com/nepro/23-0075/banner/800x120@2x.jpg" alt="" />
        </Link>
        <Link href={`/product/gaming-build-34-54dc61a2`} className="lg:w-[50%] w-[0]">
          <img src="https://promotions.newegg.com/nepro/23-0570/800x120@2x.jpg" alt="" />
        </Link>
      </div>
    </>
  );
};
