import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';

export function CategoryFilter() {
  const [categories, setCategories] = useState<any>();
  const [selectedId, setSelectedId] = useState<any>();

  const router = useRouter();
  useEffect(() => {
    fetcherGet(`categories`).then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="group relative text-sm font-small box-border ">
        <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" className="bg-gray-300 text-gray-700 py-4 px-6 rounded inline-flex items-center group">
          <span className="mr-1">Ангилал</span>
          <svg className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        menu list
        <ul id="dropdown" className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-56">
          {categories?.map((category: any, i: number) => {
            let depthLevel = 0;
            return (
              <li
                // ref={lineRefs.current[i]}
                className={`bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer relative  ${
                  category.number === 2 || category.number === 1 || category.number === 3 || category.number === 4 ? `group ` : ''
                }`}
              >
                <Link
                  key={category._id}
                  className="p-4 hover:text-gray-600  dark:hover:text-gray-300"
                  // onClick={() => {
                  //   setSelectedId(category._id);
                  // }}
                  onMouseEnter={() => {
                    setSelectedId(category._id);
                  }}
                  // onMouseLeave={() => {
                  //   setSelectedId('');
                  // }}
                  href={`/category/${category.slugUrl}`}
                >
                  {/* {category.title} */}
                  {category.number === 2 || category.number === 1 || category.number === 3 || category.number === 4 ? (
                    <div data-dropdown-toggle="selectedId">
                      {category.title} {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </div>
                  ) : (
                    category.title
                  )}
                  {/* <SubCategoryFilter selectedId={selectedId} /> */}
                </Link>
                <div className="hidden aria- absolute">hello</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
