import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';

export default function SubCategoryFilter({ selectedId }: any) {
  const [subCategories, setSubCategories] = useState<any>();
  const filted = subCategories?.filter((e: any) => e.parentId === selectedId);
  useEffect(() => {
    fetcherGet(`categories/subCategories`).then((data) => setSubCategories(data));
  }, []);

  return (
  <div className={` static hidden  pt-1 group-hover:block z-50`}>
      <div className=" bg-white absolute top-0 left-full  line-clamp-1 z-50 ">
        {filted?.map((category: any) => (
          <li key={category._id} className={` hover:bg-gray-100 py-4 px-4 cursor-pointer `}>
            <Link key={category._id} className=" w-full text-sm whitespace-nowrap text-black flex relative items-center outline-none " href={`/category/${category.slugUrl}`}>
              {category.title}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
