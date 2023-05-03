import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';

type C = {
  subCategories: any;
  onClick: (e: any) => void;
};

export function Category({ onClick, subCategories }: C) {
  const [categories, setCategories] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    fetcherGet(`categories`).then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          {categories?.map((category: any) => (
            <li key={category._id} className="mr-2" role="presentation">
              <Link
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id={category._id}
                aria-selected="false"
                onClick={() => {
                  onClick(router.push(`/products/${category._id}`));
                }}
                href={`/products/${category._id}`}
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {subCategories?.map((category: any) => {
        return (
          <div key={category._id}>
            <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
          </div>
        );
      })}
    </>
  );
}
