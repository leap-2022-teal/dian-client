import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import SubCategoryFilter from './subCategoryFilter';

export function CategoryFilter() {
  const [categories, setCategories] = useState<any>();
  const [selectedId, setSelectedId] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    fetcherGet(`categories`).then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="text-sm font-small text-gray-500 ">
        {categories?.map((category: any) => (
          <Link
            key={category._id}
            className="p-4 hover:text-gray-600  dark:hover:text-gray-300"
            onClick={() => {
              setSelectedId(category._id);
            }}
            onMouseEnter={() => {
              setSelectedId(category._id);
            }}
            onMouseLeave={() => {
              setSelectedId('');
            }}
            href={`/category/${category.slugUrl}`}
          >
            {category.title}
          </Link>
        ))}
      </div>
      <SubCategoryFilter selectedId={selectedId} />
      {/* {subCategories?.map((category: any) => {
        return (
          <div
            onMouseEnter={() => {
              onClick((id = category.parentId));
            }}
            key={category._id}
          >
            <Link href={`/products/${category.slugUrl}`}>
              <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
            </Link>
          </div>
        );
      })} */}
    </>
  );
}
