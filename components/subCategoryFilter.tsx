import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';

export default function SubCategoryFilter({ selectedId }: any) {
  const [subCategories, setSubCategories] = useState<any>();
  const filted = subCategories?.filter((e: any) => e.parentId === selectedId);
  useEffect(() => {
    fetcherGet(`categories/subCategory`).then((data) => setSubCategories(data));
  }, []);
  return (
    <div
      // onMouseEnter={() => {
      //   setSelectedId(category._id);
      // }}
      id={selectedId}
      className="z-10  bg-white group ml-[200px] rounded-lg absolute shadow w-44"
    >
      <ul className={`rounded  hidden text-gray-700 pt-1 group-hover:block w-56 dropdown left-[200px] `}>
        {filted?.map((category: any) => (
          // <li>
          //   <Link key={subCategory._id} href={`/category/${subCategory.slugUrl}`}>
          //     <p className="text-sm text-gray-500 dark:text-gray-400">{subCategory.title}</p>
          //   </Link>
          // </li>
          <li
            // ref={lineRefs.current[i]}
            className={`bg-gray-200 left-[300px] hover:bg-gray-400 py-4 px-4 cursor-pointer `}
          >
            <Link
              key={category._id}
              className="p-4 hover:text-gray-600  dark:hover:text-gray-300"
              // onClick={() => {
              //   setSelectedId(category._id);
              // }}
              onMouseEnter={() => {
                // setSelectedId(category._id);
                console.log('ok');
              }}
              onMouseLeave={() => {
                // setSelectedId('');
              }}
              href={`/category/${category.slugUrl}`}
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
