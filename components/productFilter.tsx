import { useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import { Category } from './category';
import { Products } from './products';

export default function ProductFilter() {
  const [selected, setSelected] = useState<string | undefined>();
  const [subCategories, setSubCategories] = useState<any>();
  const [categories, setCategories] = useState<any>();

  // useEffect(() => {
  //   fetcherGet(`categories`).then((data) => setCategories(data));
  // }, []);

  // useEffect(() => {
  //   const newArr = subCategories?.map((e: any) => {
  //     return e._id;
  //   });
  //   setSelected(newArr);
  // }, [subCategories]);

  function onClick(category: any) {
    fetcherGet(`categories/${category._id}`).then((data) => setSubCategories(data));
    console.log(category);
    setSelected(category._id);
  }

  return (
    <>
      {/* <Category onClick={onClick} subCategories={subCategories} /> */}
      <Category onClick={onClick} subCategories={subCategories} />
      <div className="grid grid-cols-4">
        <Products selected={selected} />
      </div>
    </>
  );
}
