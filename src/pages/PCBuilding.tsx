import numeral from 'numeral';
import { useEffect, useState } from 'react';
import BuildModal from '../../components/buildModal';
import { Header } from '../../components/header';
import { fetcherGet } from '../../utils/fetcher';

export default function PCBuilding() {
  const [products, setProducts] = useState<any>();
  const [selected, setSelected] = useState<any[]>([]);

  function BuildFilter(id: any) {
    fetcherGet(`products/build/${id}`).then((data) => setProducts(data));
  }

  useEffect(() => {
    BuildFilter('323ed6c1-f4aa-49b6-99a6-c89098c1b6e7');
  }, []);

  function ItemSelect({ product }: any) {
    const products = selected.filter((e: any) => {
      return e.categoryId !== product.categoryId;
    });
    products.push(product);
    setSelected(products);
  }
  

  return (
    <>
      <Header />
      <div className="relative ">
        <div className="container max-w-[1344px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products?.map((product: any) => {
            return (
              <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden  mb-5">
                <img className="mx-auto" src={product.imageUrl} alt="Product Image" />
                <div className="px-5 pb-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                  <div>
                    <span className="text-gray-900 text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                  </div>
                  <button onClick={() => ItemSelect({ product })}>select</button>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="absolute top-0 flex justify-end right-0 w-2/5"> */}
        <BuildModal BuildFilter={BuildFilter} selected={selected} />
        {/* </div> */}
      </div>
    </>
  );
}
