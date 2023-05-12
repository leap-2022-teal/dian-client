import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';

export default function BuildModal({ BuildFilter, selected }: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [subCategories, setSubCategories] = useState<any>();
  useEffect(() => {
    fetcherGet(`categories/subCategory/6ac583ed-76c9-419a-9b2f-df3290cf6bc1`).then((data) => setSubCategories(data));
  }, []);

  return (
    <>
      {showModal ? (
        <div className="relative transition-[w-1/2] duration-400 ease-in bg-slate-100 h-1/2 w-1/12">
          <button className="absolute cursor-pointer -left-3 top-9 w-7 border-1 rounded-full" type="button" onClick={() => setShowModal(!showModal)}>
            Close
          </button>
          <div className="snap-y">
            {subCategories?.map((category: any) => (
              <div key={category._id} className={` cursor-pointer text-gray-300 text-sm snap-start`}>
                <img src={category.imageUrl} />
                <span className={`${!showModal && 'hidden'} origin-left duration-200`}>{category.title}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`w-1/2  transition-[w-1/12] duration-400 ease-in  relative bg-slate-400 h-screen`}>
          <button className="absolute cursor-pointer -left-3 top-9 w-7 border-1 rounded-full" type="button" onClick={() => setShowModal(!showModal)}>
            Open
          </button>
          <div className="pt-6">
            {subCategories?.map((category: any) => (
              <div key={category._id} className={`p-2 cursor-pointer text-gray-300 text-sm `}>
                <img src={category.imageUrl} />
                <span className={`${!open && 'hidden'} duration-200`}>{category.title}</span>
                {selected?.map((product: any) => {
                  return (
                    <div key={product._id}>
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.title}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
