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
    <div className={`rounded absolute bg-white pt-1 group-hover:block start-48 top-0 min-w-32`}>
      {filted?.map((category: any) => (
        <li className={` hover:bg-gray-100 py-4 px-4 cursor-pointer `}>
          <Link key={category._id} className=" w-full text-start flex relative items-center outline-none " href={`/category/${category.slugUrl}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </div>
  );
}
