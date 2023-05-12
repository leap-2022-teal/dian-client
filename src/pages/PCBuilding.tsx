import numeral from 'numeral';
import { useState } from 'react';
import BuildModal from '../../components/buildModal';
import { Header } from '../../components/header';
import { fetcherGet } from '../../utils/fetcher';

export default function PCBuilding() {
  const [products, setProducts] = useState<any>();
  const [selected, setSelected] = useState<any[]>([]);

  // const [showModal, setShowModal] = useState(false);

  function BuildFilter(category: any) {
    fetcherGet(`products/build/${category}`).then((data) => setProducts(data));
  }
  function ItemSelect({ product }: any) {
    const products = selected.filter((e: any) => {
      return e.categoryId !== product.categoryId;
    });
    products.push(product);
    setSelected(products);
  }
  console.log(selected);

  return (
    <>
      <Header />
      <div className="flex">
        <div>
          {/* {subCategories?.map((category: any) => {
            return (
              <div key={category._id}>
                {selected?.map((product: any) => {
                  return (
                    <div key={product._id}>
                      {product.categoryId === category._id ? (
                        <>
                          <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
                            <div className="px-5 pb-5">
                              <img className="" src={product.imageUrl} alt="Product Image" />
                              <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                              <div></div>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  );
                })}
                <button onClick={() => BuildFilter({ category })}>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
                </button>
              </div>
            );
          })} */}
        </div>
        <div className=" container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products?.map((product: any) => {
            return (
              <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
                <img className="w-full" src={product.imageUrl} alt="Product Image" />
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

        {/* <Sidebar /> */}
        <BuildModal BuildFilter={BuildFilter} selected={selected} />
      </div>
    </>
  );
}
