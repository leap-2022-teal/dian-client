import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import Link from 'next/link';
import numeral from 'numeral';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { BsBasket2 } from 'react-icons/bs';

export default function NewProduct() {
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    fetcherGet(`products/new`).then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="flex justify-between p-2">
        <h4>ШИНЭ БАРАА</h4>
        <div>
          <Link href={`/category`}>БҮГДИЙГ ҮЗЭХ</Link>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {products?.map((product: any) => (
          <SwiperSlide>
            <div key={product._id} className="bg-white flex hover:shadow-lg w-[100%] h-[100%] overflow-hidden border border-gray-100 rounded-lg">
              <Link href={`/product/${product.slugUrl}`}>
                <figure className=" flex justify-center  overflow-hidden">
                  <img className="w-[190px]" src={product.imageUrl} alt="Product Image" width={100} height={100} />
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
                  <button className="text-white bg-[#C10206] text-xl p-1 border rounded-md">
                    <BsBasket2 />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
