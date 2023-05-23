import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { fetcherGet } from '../utils/fetcher';

export default function BuildModal({ BuildFilter, selected, isScrolled }: any) {
  const [showModal, setShowModal] = useState<boolean>(true);
  const [subCategories, setSubCategories] = useState<any>();
  useEffect(() => {
    fetcherGet(`categories/subCategory/6ac583ed-76c9-419a-9b2f-df3290cf6bc1`).then((data) => setSubCategories(data));
  }, []);
  const initialValue = 0;
  const total = selected.reduce(
    (
      accumulator: number,
      current: {
        unitPrice: number;
      }
    ) => accumulator + current.unitPrice,
    initialValue
  );
  return (
    <>
      {showModal ? (
        <div className={` fixed top-[75.1px] right-0 transition-all h-screen w-1/12 overflow-x-auto  duration-400 ease-in bg-[#171717] duration-300 ${isScrolled ? 'opacity-90' : 'opacity-100'}`}>
          <button className="cursor-pointer  w-7 border-1 rounded-full " type="button" onClick={() => setShowModal(!showModal)}>
            <FaArrowLeft />
          </button>
          <div className="">
            {subCategories?.map((category: any) => (
              <div key={category._id}>
                {selected.map((product: any) => {
                  return (
                    <div key={product._id}>
                      {product.categoryId === category._id ? (
                        <>
                          <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
                            <img className="" src={product.imageUrl} alt="Product Image" />
                          </div>
                        </>
                      ) : null}
                    </div>
                  );
                })}
                <button onClick={() => BuildFilter(category._id)}>
                  {selected.filter((product: any) => product.categoryId === category._id).length === 0 && <img src={category.imageUrl} className="p-2 cursor-pointer" />}
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`fixed top-[75.1px] right-0 transition-all overflow-x-auto h-screen duration-400  ease-in w-1/3  bg-[#171717] duration-300 ${isScrolled ? 'opacity-90' : 'opacity-100'}`}>
          <button className="cursor-pointer w-7 border-1 rounded-full " type="button" onClick={() => setShowModal(!showModal)}>
            <FaArrowRight />
          </button>
          <div className="">
            {subCategories?.map((category: any) => (
              <div key={category._id}>
                {selected.map((product: any) => {
                  return (
                    <div key={product._id} className="overflow-scroll ">
                      {product.categoryId === category._id ? (
                        <>
                          <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
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
                        </>
                      ) : null}
                    </div>
                  );
                })}
                <button onClick={() => BuildFilter(category._id)}>
                  {selected.filter((product: any) => product.categoryId === category._id).length === 0 && <img src={category.imageUrl} className="p-2 cursor-pointer" />}
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
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
      {total}
    </>
  );
}
