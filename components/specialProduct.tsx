import { OrderContext } from '@/pages/_app';
import Image from 'next/image';
import Link from 'next/link';
import numeral from 'numeral';
import { useContext, useEffect, useState } from 'react';
import { BsBasket2 } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetcherGet } from '../utils/fetcher';
SwiperCore.use([Autoplay, Pagination, Navigation]);

export function SpecialProduct() {
  const [products, setProducts] = useState<any>();
  const orderContext = useContext(OrderContext);
  useEffect(() => {
    fetcherGet(`products/special`).then((data) => setProducts(data));
  }, []);
  function handleItemSelect(product: any) {
    if (orderContext && orderContext.ItemSelect) {
      orderContext.ItemSelect(product);
    }
  }
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-center  w-[100%] max-w-[1344px] mx-auto mt-[1rem]">
        <div className="lg:w-[350px] w-full h-auto mx-16 p-2 ">
          {/* <div className="lg:mt-[100px]"></div> */}
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
            className="w-[350px]  h-auto "
          >
            <SwiperSlide>
              <Link href={`/product/benq-ec2-cw-cf50d4c4`}>
                <img className="rounded-lg border border-gray-300" src="https://cdn.shopify.com/s/files/1/0631/9590/6271/files/1_67816f92-1c73-46e3-bb91-7535f10549b8.jpg" alt="" />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href={`/product/razer-blackshark-v2-x-gaming-headset-85f0a268`}>
                <img className="rounded-lg border border-gray-300" src="https://assets2.razerzone.com/images/razer-blackshark-v2/razer-blackshark-v2-2020-OGimage.jpg" alt="" />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href={`/product/asrock-b650-livemixer-ddr5-am5-b543edb3`}>
                <img className="rounded-lg border border-gray-300" src="https://www.asrock.com/mb/features/B650%20LiveMixer.jpg" alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`/product/phanteks-enthoo-evolv-x-glass-matte-white-f884bdda`}>
                <img className="relative rounded-lg border border-gray-300" src="https://www.geekawhat.com/wp-content/uploads/2022/11/Best-Prebuilt-PCs-Featured-Image.jpg" alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={`product/dxracer-gaming-chair-pink-8084a411`}>
                <img className="rounded-lg border border-gray-300" src="https://api.hitech.mn/uploads/images/2022/12/25/1-1671945082952690867-524X524.gif" alt="" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="flex justify-between p-2 text-md text-[#c10206] mt-[2rem] font-sans font-bold">
            <div className=" flex items-center">
              <div className=" text-[#c10206] mr-2">
                <FaStar />
              </div>
              <h4>ОНЦЛОХ БАРАА</h4>
            </div>
            <div>
              <Link href={`/allProducts`} className="flex  items-center">
                <div className="mr-2">БҮГДИЙГ ҮЗЭХ</div>
                <SlArrowRight />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 w-[100%] box-border p-2 md:grid-cols-2 xl:grid-cols-3 gap-2">
            {products?.map((product: any) => (
              <div key={product._id} className="bg-slate-100 hover:shadow-lg border border-gray-100 rounded-2xl flex flex-col">
                <Link href={`/product/${product.slugUrl}`}>
                  <figure className="flex justify-center bg-white shadow overflow-hidden rounded-2xl mb-2">
                    <Image className="w-[190px]" src={product.imageUrl} alt="Product Image" width={100} height={100} />
                  </figure>
                </Link>
                <div className="p-5 text-sm flex flex-col justify-between flex-grow font-sans font-bold">
                  <Link href={`/product/${product.slugUrl}`} className="text-slate-400">
                    <div className="pb-5">
                      <p className="text-slate-800 mb-5">{product.title}</p>
                    </div>
                  </Link>
                  <div className="flex justify-between">
                    <span className="text-[#101010] text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                    <button className="text-white bg-[#C10206] text-xl p-1 border rounded-md" onClick={() => handleItemSelect(product)}>
                      <BsBasket2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <></>
      </div>
      {/* {products?.map((product: any) => (
        <div key={product._id} className="bg-white flex hover:shadow-lg w-[100%] h-[100%] overflow-hidden border border-gray-100 rounded-lg">
          <Link href={`/product/${product.slugUrl}`}>
            <figure className=" flex justify-center  overflow-hidden">
              <Image className="w-[190px]" src={product.imageUrl} alt="Product Image" width={100} height={100} />
            </figure>
          </Link>
          <div className="p-5 text-sm flex w-[100%] flex-col justify-between font-sans font-bold">
            <Link href={`/product/${product.slugUrl}`} className="  text-slate-400">
              <div className="pb-5">
                <p className="text-slate-800 mb-5">{product.title}</p>
              </div>
            </Link>
            <div className="flex  justify-between">
              <span className="text-[#101010] text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
              <button className=" text-[#3a3939]">select</button>
            </div>
          </div>
        </div>
      ))} */}
    </>
  );
}
