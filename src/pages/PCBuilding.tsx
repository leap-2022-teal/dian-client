import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../../utils/fetcher';

export default function PCBuilding() {
  const [subCategories, setSubCategories] = useState<any>();
  useEffect(() => {
    fetcherGet(`categories/6ac583ed-76c9-419a-9b2f-df3290cf6bc1`).then((data) => setSubCategories(data));
  }, []);

  console.log(subCategories);

  return (
    <div>
      <div>
        {subCategories?.map((category: any) => {
          return (
            <div key={category._id}>
              <Link href={`/products/${category.slugUrl}`}>
                <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
