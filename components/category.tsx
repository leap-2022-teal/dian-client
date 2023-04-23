import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';

export function Category(props: any) {
  const [categories, setCategories] = useState(props.categories);

  useEffect(() => {
    fetcherGet(`categories`).then((data) => setCategories(data));
  }, []);

  return (
    <div>
      {categories?.map((category: any) => (
        <div className="text-white" key={category._id}>
          {category.title}
        </div>
      ))}
    </div>
  );
}
