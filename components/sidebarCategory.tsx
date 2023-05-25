import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiCategory } from 'react-icons/bi';
import { fetcherGet } from '../utils/fetcher';
import { SubCategoryFilter } from './subCategoryFilter';

export function SidebarCategory() {
  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    fetcherGet(`categories`).then((data) => setCategories(data));
  }, []);
  return (
    <>
      <div className="flex">
        {/* <div className="my-auto pl-2 pr-1 text-xl">
          <BiCategory />
        </div> */}
        <div className="text-lg font-semibold">Ангилал</div>
      </div>

      {categories?.map((category: any) => (
        <>
          <div className=" mt-6 hover:text-[#c10206] flex gap-2 items-center justify-items-center" key={category._id}>
            <BiCategory />

            <Link href={`/category/${category.slugUrl}`}>{category.title}</Link>
          </div>
          {category.number === 2 || category.number === 1 || category.number === 3 || category.number === 4 ? (
            <div className="mt-3">
              <SubCategoryFilter selectedId={category._id} />
            </div>
          ) : null}
        </>
      ))}

      <div className="h-32 w-32"></div>
    </>
  );
}
