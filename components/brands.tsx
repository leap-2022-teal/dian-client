import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { fetcherGet } from '../utils/fetcher';
import Link from 'next/link';

export default function Brands() {
  const [brands, setBrands] = useState<any>();

  useEffect(() => {
    fetcherGet('brands').then((data) => {
      setBrands(data);
    });
  }, []);
  return (
    <>
      <div className="pt-6 w-[100%] max-w-[1344px] mx-auto mt-[3rem]">
        <div className=" flex items-center">
          <div className=" text-[#c10206] mr-2">
            <FaStar />
          </div>
          <h4 className="text-[#c10206] font-sans font-bold text-md">БРЭНД</h4>
        </div>

        <div className=" flex flex-wrap p-2 justify-around items-center">
          {brands?.map((brand: any) => (
            <Link href={`allProducts?search=${brand.title}`}>
            
            <div key={brand._id} className="w-[100px] h-[100px] mx-4 my-4 rounded-sm">
              <img className="filter grayscale" src={brand.imageUrl} alt="" />
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
