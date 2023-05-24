import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { fetcherPost } from '../utils/fetcher';
import useLocalStorageState from 'use-local-storage-state';
interface PropType {
  products: any;
}

export function Products({ products }: PropType) {
  const [selected, setSelected] = useLocalStorageState<any[]>('selected', { defaultValue: [] });
  const router = useRouter();
  const [limit] = useState(15);
  // let { page }: any = router.query;
  const { id }: any = router.query;

  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await fetcherPost('products/filter', { id });
        const data = await response.json();
        setProductCount(data.length);
      } catch (error) {
        console.error('Error fetching product count:', error);
      }
    };

    fetchProductCount();
  }, [id]);
  console.log(selected);
  function ItemSelect({ product }: any) {
    const products = selected?.filter((e: any) => {
      return e._id !== product._id;
    });
    products?.push(product);
    setSelected(products);
  }
  // function previousPage() {
  //   if (page !== 1) {
  //     page = page - 1;
  //   }
  // }

  // function nextPage() {
  //   if (page !== Math.floor(productCount / limit)) {
  //     page = page - 1;
  //   }
  // }

  return (
    <>
      {products ? (
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="grid sm:grid-cols-2 w-[100%] box-border p-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
            {products?.map((product: any) => (
              <div key={product._id} className=" hover:shadow-lg border border-gray-100 rounded-2xl flex flex-col">
                <Link href={`/product/${product.slugUrl}`}>
                  <figure className="flex justify-center bg-white  overflow-hidden rounded-2xl mb-2">
                    <Image className="w-[190px]" src={product.imageUrl} alt="Product Image" width={100} height={100} />
                  </figure>
                </Link>
                <div className="p-5 text-sm flex flex-col justify-between flex-grow font-sans font-bold">
                  <Link href={`/product/${product.slugUrl}`} className="text-slate-400">
                    <div className="pb-5">
                      <p className="text-slate-800 mb-5">{product.title}</p>
                    </div>
                  </Link>
                  <div className="flex justify-between">
                    <span className="text-[#101010] text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                    <button onClick={() => ItemSelect({ product })}>select</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <Pagination productCount={productCount} limit={limit} previousPage={previousPage} nextPage={nextPage} /> */}
        </div>
      ) : (
        <div>spin</div>
      )}
    </>
  );
}
