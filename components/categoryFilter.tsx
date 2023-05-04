import { useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import { Category } from './category';
// import { Products } from './products';

export default function CategoryFilter() {
  const [selected, setSelected] = useState<string | undefined>();
  const [subCategories, setSubCategories] = useState<any>();
  // const [categories, setCategories] = useState<any>();

  function onClick(category: any) {
    fetcherGet(`categories/${category._id}`).then((data) => setSubCategories(data));

    setSelected(category._id);
  }

  return (
    <>
      <Category onClick={onClick} subCategories={subCategories} />
    </>
  );
}
