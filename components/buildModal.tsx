import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { fetcherGet } from '../utils/fetcher';

export default function BuildModal({ BuildFilter, selected }: any) {
  const [showModal, setShowModal] = useState<boolean>(true);
  const [subCategories, setSubCategories] = useState<any>();
  useEffect(() => {
    fetcherGet(`categories/subCategory/6ac583ed-76c9-419a-9b2f-df3290cf6bc1`).then((data) => setSubCategories(data));
  }, []);
  return (
    <div className={`absolute  right-0 flex justify-end overflow-scroll h-screen`}>
      {showModal ? (
        <div className="relative transition-all w-1/4  duration-400 ease-in bg-slate-100">
          <button className="absolute cursor-pointer -left-0 top-1/2 w-7 border-1 rounded-full " type="button" onClick={() => setShowModal(!showModal)}>
            <FaArrowLeft />
          </button>
          <div className="pt-6">
            {subCategories?.map((category: any) => (
              <>
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
                <button onClick={() => BuildFilter(category?._id)}>
                  {selected.filter((product: any) => product.categoryId === category._id).length === 0 && (
                    <div key={category._id} className={`p-2 cursor-pointer text-gray-300 text-sm `}>
                      <img src={category.imageUrl} />
                    </div>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
                </button>
              </>
            ))}
          </div>
        </div>
      ) : (
        <div className={` transition-all duration-400 ease-in w-full relative bg-slate-400 `}>
          <button className="absolute cursor-pointer -left-0 top-1/2 w-7 border-1 rounded-full " type="button" onClick={() => setShowModal(!showModal)}>
            <FaArrowRight />
          </button>
          <div className="pt-6">
            {subCategories?.map((category: any) => (
              <>
                {selected.map((product: any) => {
                  return (
                    <div key={product._id} className="overflow-scroll ">
                      {product.categoryId === category._id ? (
                        <>
                          <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
                            <div className="px-5 pb-5">
                              <img className="" src={product.imageUrl} alt="Product Image" />
                              <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  );
                })}
                <button onClick={() => BuildFilter(category._id)}>
                  {selected.filter((product: any) => product.categoryId === category._id).length === 0 && (
                    <div key={category._id} className={`p-2 cursor-pointer text-gray-300 text-sm `}>
                      <img src={category.imageUrl} className="" />
                    </div>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
                </button>
              </>
            ))}
            {selected?.map((product: any) => {
              return (
                <>
                  {product?.category[0].parentId !== '6ac583ed-76c9-419a-9b2f-df3290cf6bc1' ? (
                    <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
                      <div className="px-5 pb-5">
                        <img className="" src={product.imageUrl} alt="Product Image" />
                        <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                      </div>
                    </div>
                  ) : null}
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
