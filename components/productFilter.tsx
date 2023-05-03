import { useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import { Category } from './category';
import { Products } from './products';

export default function ProductFilter() {
  const [selected, setSelected] = useState<string | undefined>();
  const [subCategories, setSubCategories] = useState<any>();
  const [categories, setCategories] = useState<any>();

  function onClick(category: any) {
    fetcherGet(`categories/${category._id}`).then((data) => setSubCategories(data));
    console.log(category);
    setSelected(category._id);
  }

  return (
    <>
      <Category onClick={onClick} subCategories={subCategories} />

      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Products selected={selected} />
      </div>
    </>
  );
}
