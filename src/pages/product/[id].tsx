import { useRouter } from 'next/router';
import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { Navbar } from '../../../components/navbar';
import { fetcherGet } from '../../../utils/fetcher';

export default function SingleProduct() {
  const [product, setProducts] = useState<any>();
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (router.isReady) {
      fetcherGet(`products/${id}`).then((data: any) => setProducts(data));
    }
  }, [router]);

  function handleMinus() {
    setQuantity(+quantity - 1);
  }

  function handleAdd() {
    setQuantity(+quantity + 1);
  }

  return (
    <>
      <Navbar />
      <div className="container px-10 py-24 mx-auto cursor-pointer mt-10 shadow-lg">
        <div className=" mx-auto flex flex-wrap">
          <img alt={product && product[0]?.title} className="lg:w-1/3 w-full lg:h-auto h-60 object-cover object-center rounded cursor-pointer" src={product && product[0].imageUrl} />
          <div className="lg:w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0 cursor-pointer">
            <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 cursor-pointer">{product && product[0]?.title}</h1>
            <div className="flex mb-4 justify-between">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#C10206]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#C10206]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#C10206]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#C10206]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-[#C10206]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">20 Reviews</span>
              </span>
              <span className="flex items-center ml-[2rem]">
                <span className="text-gray-600 mr-3 text-center">Брэнд:</span>
                <img className="w-10 h-auto" src={product && product[0]?.brandImageUrl} alt="" />
              </span>
            </div>
            <p className="leading-relaxed">{product && product[0].description.short}</p>
            <div className="flex mt-6 items-center justify-between pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <CiDeliveryTruck className="text-2xl text-[#C10206] mr-2" />
                <span className="text-gray-600">Хүргэлтийн үнэ:</span>
                <span className="text-gray-600 font-bold ml-1">Үнэгүй</span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleMinus}
                  className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                  </svg>
                </button>

                <div>
                  <input
                    value={quantity}
                    onChange={(e: any) => setQuantity(e.target.value)}
                    id="first_product"
                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  onClick={handleAdd}
                  className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">{product && numeral(product[0].unitPrice).format('0,0')}₮</span>
              <button className="flex ml-auto text-white bg-[#C10206] border-0 py-2 px-6 focus:outline-none hover:bg-[#A50113] rounded"> Сагсанд хийх</button>
              {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
