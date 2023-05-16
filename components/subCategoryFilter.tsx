import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';

export default function SubCategoryFilter({ selectedId }: any) {
  const [subCategories, setSubCategories] = useState<any>();
  useEffect(() => {
    fetcherGet(`categories/subCategory`).then((data) => setSubCategories(data));
  }, []);

  const filted = subCategories?.filter((e: any) => e.parentId === selectedId);

  return (
    <div className="">
      {filted?.map((subCategory: any) => (
        <Link key={subCategory._id} href={`/products/${subCategory.slugUrl}`}>
          <p className="text-sm text-gray-500 dark:text-gray-400">{subCategory.title}</p>
        </Link>
      ))}
    </div>
  );
}
