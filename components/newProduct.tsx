import Link from 'next/link';
import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { BsBasket2 } from 'react-icons/bs';
import { SlArrowRight } from 'react-icons/sl';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { fetcherGet } from '../utils/fetcher';
import { FaStar } from 'react-icons/fa';

export default function NewProduct() {
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    fetcherGet(`products/new`).then((data) => setProducts(data));
  }, []);
  return (
    <div className="pt-6 w-[100%] max-w-[1344px] mx-auto mt-[3rem]">
      <div className="flex justify-between p-2 text-md text-[#c10206]  font-sans font-bold">
        <div className=" flex items-center">
          {/* <div className="w-2 h-2  bg-[#c10206] rounded-full inline-block mr-4"></div> */}
          <div className=" text-[#c10206] mr-2">
            <FaStar />
          </div>
          <h4>ШИНЭ БАРАА</h4>
        </div>
        <div>
          <Link href={`/category`} className="flex  items-center">
            <div className="mr-2">БҮГДИЙГ ҮЗЭХ</div>
            <SlArrowRight />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 w-[100%] box-border p-2 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {products?.map((product: any) => (
          <div key={product._id} className="bg-white flex hover:shadow-lg border border-gray-100 rounded-lg">
            <Link href={`/product/${product.slugUrl}`}>
              <figure className=" flex justify-center  ">
                <img className="w-[190px]" src={product.imageUrl} alt="Product Image" width={100} height={100} />
              </figure>
            </Link>
            <div className="p-5 text-sm flex flex-col w-full justify-between font-sans font-bold">
              <Link href={`/product/${product.slugUrl}`}>
                <p className="text-slate-800 ">{product.title}</p>
              </Link>
              <div className="flex  justify-between">
                <span className="text-[#101010] text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                <button className="text-white bg-[#C10206] text-xl p-1 border rounded-md">
                  <BsBasket2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
