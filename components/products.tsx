import { useEffect, useState } from 'react';
import { fetcherPost } from '../utils/fetcher';
import { fetcherGet } from '../utils/fetcher';
import numeral from 'numeral';

interface PropType {
  selected: string | undefined;
}

export function Products({ selected }: PropType) {
  const [products, setProducts] = useState<any>();
  // console.log(selected);
  // useEffect(() => {
  //   fetcherGet(`products`).then((data: any) => {
  //     // const filteredProducts = data.filter((e: any) => {
  //     //   console.log(e);
  //     //   if (selected?.includes(e.categoryId._id)) {
  //     //     return e;
  //     //   }
  //     // });
  //     // setProducts(filteredProducts);
  //     setAllProducts(data);
  //   });
  // }, []);

  useEffect(() => {
    fetcherPost(`products/filter`, { selected }).then((res) => res.json().then((data) => setProducts(data)));
    // setProducts(res));
  }, [selected]);

  // useEffect(() => {
  //   // fetcherGet(`products`).then((data: any) => {
  //   // });
  //   const filteredProducts = allProducts?.filter((e: any) => {
  //     console.log(e);
  //     if (selected?.includes(e.categoryId?._id)) {
  //       return e;
  //     }
  //   });
  //   setProducts(filteredProducts);
  // }, [selected]);
  // console.log(products);
  return (
    <>
      {products?.map((product: any) => {
        return (
          <div key={product._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out w-64 mb-5">
            <img className="w-full object-cover" src={product.imageUrl} alt="Product Image" />
            <div className="p-3">
              <h3 className="text-md font-semibold text-gray-800 mb-1">{product.title}</h3>

              <div className="flex items-center justify-between">
                <span className="text-gray-900 text-sm font-bold">{numeral(product.unitPrice).format('0,0.00')}₮</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
