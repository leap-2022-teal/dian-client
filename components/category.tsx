import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';

type C = {
  subCategories: any;
  onClick: (e: any) => void;
};

export function Category({ onClick, subCategories }: C) {
  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    fetcherGet(`categories`).then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 ">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          {categories?.map((category: any) => (
            <li key={category._id} className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-transparent rounded-t-lg hover:text-gray-600"
                id={category._id}
                aria-selected="false"
                onClick={() => {
                  onClick(category);
                }}
              >
                {category.title}
              </button>
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
