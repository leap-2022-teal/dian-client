import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../../utils/fetcher';


export default function PCBuilding() {
  const [products, setProducts] = useState<any>();
  const [subCategories, setSubCategories] = useState<any>();
  const [selected, setSelected] = useState<any[]>([]);

  useEffect(() => {
    fetcherGet(`categories/6ac583ed-76c9-419a-9b2f-df3290cf6bc1`).then((data) => setSubCategories(data));
  }, []);

  function BuildFilter({ category }: any) {
    fetcherGet(`products/build/${category._id}`).then((data) => setProducts(data));
  }
  function itemSelect({ product }: any) {
    const products = selected.filter((e: any) => {
      return e.categoryId !== product.categoryId;
    });
    products.push(product);
    setSelected(products);
  }

  return (
    <div>
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {selected?.map((product: any) => {
          return (
            <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
              <img className="w-full" src={product.imageUrl} alt="Product Image" />
              <div className="px-5 pb-5">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                <div>
                  <span className="text-gray-900 text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                </div>
                <button onClick={() => itemSelect({ product })}>select</button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {subCategories?.map((category: any) => {
          return (
            <div key={category._id}>
              <button onClick={() => BuildFilter({ category })}>
                {/* {selected &&
                  selected.map((e: any) => {
                    if (e.categoryId === category._id) {
                      return <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>;
                    }
                  })} */}
                <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
              </button>
            </div>
          );
        })}
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products?.map((product: any) => {
          return (
            <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
              <img className="w-full" src={product.imageUrl} alt="Product Image" />
              <div className="px-5 pb-5">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                <div>
                  <span className="text-gray-900 text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                </div>
                <button onClick={() => itemSelect({ product })}>select</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
