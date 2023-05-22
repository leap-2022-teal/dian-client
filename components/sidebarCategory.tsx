import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import { BiCategory } from 'react-icons/bi';

export default function SidebarCategory() {
  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    fetcherGet(`categories`).then((data) => setCategories(data));
  }, []);
  return (
    <>
      <div className="flex">
        <div className="my-auto pl-2 pr-1 text-xl">
          <BiCategory />
        </div>
        <div className="text-lg font-semibold">Ангилал</div>
      </div>

      {categories?.map((category: any) => (
        <div className="mt-5 ml-8" key={category._id}>
          {category.title}
        </div>
      ))}
    </>
  );
}
