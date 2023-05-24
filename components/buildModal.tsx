import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import useLocalStorageState from 'use-local-storage-state';
import { fetcherGet } from '../utils/fetcher';

export default function BuildModal({ BuildFilter, products, isScrolled }: any) {
  const [showModal, setShowModal] = useState<boolean>(true);
  const [subCategories, setSubCategories] = useState<any>();
  useEffect(() => {
    fetcherGet(`categories/subCategory/6ac583ed-76c9-419a-9b2f-df3290cf6bc1`).then((data) => setSubCategories(data));
  }, []);
  const [selected, setSelected] = useLocalStorageState<any>('PCBuild', { defaultValue: {} });
  const [selectedProduct, setSelectedProduct] = useLocalStorageState<any[]>('buildProduct', { defaultValue: [] });
  const initialValue = 0;
  const total = selectedProduct.reduce(
    (
      accumulator: number,
      current: {
        unitPrice: number;
      }
    ) => accumulator + current.unitPrice,
    initialValue
  );
  function BaraaNemeh() {
    setSelected({ name: 'PCbuild', selectedProduct });
  }
  return (
    <>
      {showModal ? (
        <>
          <div
            className={`mb-10 fixed top-[75.1px] right-0 transition-all h-screen w-1/12 overflow-x-auto  duration-400 ease-in bg-[#171717] duration-300 ${isScrolled ? 'opacity-90' : 'opacity-100'}`}
          >
            <button onClick={() => BaraaNemeh()} className="text-white">
              sagslah
            </button>
            <div className="text-white">{numeral(total).format('0,0')}₮</div>
            <button className="cursor-pointer  w-7 border-1 rounded-full text-white" type="button" onClick={() => setShowModal(!showModal)}>
              <FaArrowLeft />
            </button>
            <div className="grid grid-cols-1">
              {subCategories?.map((category: any) => (
                <div key={category._id}>
                  {selectedProduct.map((product: any) => {
                    return (
                      <div key={product._id} className="px-4">
                        {product.categoryId === category._id ? (
                          <>
                            <div className="flex bg-white shadow-md rounded-lg overflow-hidden mb-0.5">
                              <img className="" src={product.imageUrl} alt="Product Image" />
                            </div>
                          </>
                        ) : null}
                      </div>
                    );
                  })}
                  <button onClick={() => BuildFilter(category._id)}>
                    {products.filter((product: any) => product.categoryId === category._id).length === 0 && <img src={category.imageUrl} className=" cursor-pointer" />}
                    <p className="text-xs text-gray-500 dark:text-gray-400 m-1">{category.title}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className={`fixed top-[75.1px] right-0 transition-all overflow-x-auto h-screen duration-400  ease-in w-1/3  bg-[#171717] duration-300 ${isScrolled ? 'opacity-90' : 'opacity-100'}`}>
          <button onClick={() => BaraaNemeh()} className="text-white">
            sagslah
          </button>
          <div className="text-white">{numeral(total).format('0,0')}₮</div>
          <button className="cursor-pointer w-7 border-1 rounded-full text-white" type="button" onClick={() => setShowModal(!showModal)}>
            <FaArrowRight />
          </button>
          <div className="grid grid-cols-1 justify-center">
            {subCategories?.map((category: any) => (
              <div key={category._id}>
                {selectedProduct.map((product: any) => {
                  return (
                    <div key={product._id} className="overflow-scroll flex justify-center px-4">
                      {product.categoryId === category._id ? (
                        <div className="flex bg-white shadow-md  w-[100%]  rounded-lg overflow-hidden ">
                          <figure className=" flex justify-center  ">
                            <img className="w-[190px]" src={product.imageUrl} alt="Product Image" width={100} height={100} />
                          </figure>
                          <div className="p-5 text-sm flex flex-col w-full justify-between font-sans font-normal">
                            <p className="text-slate-800 ">{product.title}</p>
                            <div className="flex  justify-between">
                              <span className="text-[#101010] text-sm font-normal">{numeral(product.unitPrice).format('0,0')}₮</span>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
                <button onClick={() => BuildFilter(category._id)}>
                  {products.filter((product: any) => product.categoryId === category._id).length === 0 && <img src={category.imageUrl} className=" w-[160px] cursor-pointer" />}
                  <p className="text-sm text-gray-500 dark:text-gray-400 pb-3">{category.title}</p>
                </button>
              </div>
            ))}

            {/* {selected?.map((product: any) => {
              return (
                <>
                  {product?.category[0]?.parentId !== '6ac583ed-76c9-419a-9b2f-df3290cf6bc1' ? (
                    <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
                      <div className="px-5 pb-5">
                        <img className="" src={product.imageUrl} alt="Product Image" />
                        <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                      </div>
                    </div>
                  ) : null}
                </>
              );
            })} */}
          </div>
        </div>
      )}
    </>
  );
}
