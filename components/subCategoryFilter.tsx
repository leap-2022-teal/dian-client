import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';

export function SubCategoryFilter({ selectedId }: any) {
  const [subCategories, setSubCategories] = useState<any>();
  const filted = subCategories?.filter((e: any) => e.parentId === selectedId);
  useEffect(() => {
    fetcherGet(`categories/subCategories`).then((data) => setSubCategories(data));
  }, []);

  return (
    <div className="">
      {filted?.map((category: any) => (
        // <li key={category._id} className={`py-4 px-4 cursor-pointer `}>
        <Link key={category._id} className=" text-sm whitespace-nowrap text-white" href={`/category/${category.slugUrl}`}>
          <p>{category.title}</p>
        </Link>
        // </li>
      ))}
    </div>
  );
}
