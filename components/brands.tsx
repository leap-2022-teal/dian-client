import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import Link from 'next/link';

export default function Brands() {
  const [brands, setBrands] = useState<any>();

  useEffect(() => {
    fetcherGet('brands').then((data) => {
      console.log(data);
      setBrands(data);
    });
  }, []);
  return (
    <>
      <div className="pt-6 w-[100%] max-w-[1344px] mx-auto mt-[3rem]">
        <div className=" flex items-center">
          <div className="w-2 h-2  bg-[#c10206] rounded-full inline-block mr-4"></div>
          <h4 className="text-[#c10206] font-sans font-bold text-md">БРЭНД</h4>
        </div>

        <div className=" flex flex-wrap  justify-around items-center">
          {brands?.map((brand: any) => (
            <div key={brand._id} className="w-[100px] h-[100px] m-[20px] rounded-sm">
              <img className="filter grayscale" src={brand.imageUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
