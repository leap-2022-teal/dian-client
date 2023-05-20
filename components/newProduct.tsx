import Link from 'next/link';
import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { BsBasket2 } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { fetcherGet } from '../utils/fetcher';

export default function NewProduct() {
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    fetcherGet(`products/new`).then((data) => setProducts(data));
  }, []);
  return (
    <div className="pt-6 w-[100%] max-w-[1344px] mx-auto mt-[3rem]">
      <div className="flex justify-between p-2">
        <h4>ШИНЭ БАРАА</h4>
        <div>
          <Link href={`/category`}>БҮГДИЙГ ҮЗЭХ</Link>
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
