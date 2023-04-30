import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import numeral from 'numeral';

export function Products(props: any) {
  const [products, setProducts] = useState(props.products);

  useEffect(() => {
    fetcherGet(`products`).then((data: any) => {
      const filteredProducts = data.filter((e: any) => {
        console.log(e);
        const subCategories = ['b85bf3a0-4a6b-45d3-bc57-75592f0b7115', '323ed6c1-f4aa-49b6-99a6-c89098c1b6e7'];
        if (subCategories.includes(e.categoryId._id)) {
          return e;
        }
      });
      setProducts(filteredProducts);
    });
  }, []);
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
