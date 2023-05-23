import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import { SubCategory } from './subcategory';

export function CategoryFilter() {
  const [categories, setCategories] = useState<any>();
  const [selectedId, setSelectedId] = useState<any>();

  useEffect(() => {
    fetcherGet(`categories`).then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="group text-sm font-small inline-block z-50">
        <button className="   items-center box-border ">
          <span className="mr-1">Ангилал</span>
          <svg className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform inline-block " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul className=" absolute hidden text-gray-700 pt-1 group-hover:block z-50">
          {categories?.map((category: any) => {
            return (
              <Link
                key={category._id}
                className="hover:text-gray-600"
                onMouseEnter={() => {
                  setSelectedId(category?._id);
                }}
                href={`/category/${category.slugUrl}`}
              >
                <li className={`cursor-pointer bg-white px-2 py-1 relative hover:bg-gray-100 `}>
                  <button aria-haspopup="true" aria-controls="menu-lang" className="w-full text-start flex  items-center focus:outline-none">
                    {category.number === 2 || category.number === 1 || category.number === 3 || category.number === 4 ? (
                      <>
                        <span className="p-3 whitespace-nowrap w-full">{category.title}</span>
                        {selectedId === category._id && <SubCategory selectedId={selectedId} />}
                      </>
                    ) : (
                      <>
                        <p className="w-full p-3 relative items-center focus:outline-none">{category.title}</p>
                      </>
                    )}
                  </button>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
