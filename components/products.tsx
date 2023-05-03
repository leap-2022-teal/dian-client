import { useEffect, useState } from 'react';
import { fetcherPost } from '../utils/fetcher';
import { fetcherGet } from '../utils/fetcher';
import numeral from 'numeral';

interface PropType {
  selected: string | undefined;
}

export function Products({ selected }: PropType) {
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    fetcherPost(`products/filter`, { selected }).then((res) => res.json().then((data) => setProducts(data)));
  }, [selected]);
  return (
    <>
      {products?.map((product: any) => {
        return (
          <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden w-44 mb-5">
            <img className="w-full" src={product.imageUrl} alt="Product Image" />
            <div className="px-5 pb-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
              <div>
                <span className="text-gray-900 text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
