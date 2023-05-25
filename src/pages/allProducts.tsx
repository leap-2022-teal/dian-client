import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { Navbar } from '../../components/navbar';
import { fetcherGet } from '../../utils/fetcher';
import { BsBasket2 } from 'react-icons/bs';

export default function AllProducts() {
  const [order, setOrder] = useLocalStorageState<any[]>('order', { defaultValue: [] });
  const router = useRouter();
  const [limit] = useState(15);
  // let { page, id }: any = router.query;
  const [products, setProducts] = useState([]);

  const { search } = router.query;

  //   useEffect(() => {
  //     axios.get(`http://localhost:8000/products?searchQuery=${search}`).then((res) => setProducts(res.data));
  //   }, [search]);

  useEffect(() => {
    fetcherGet(`products?searchQuery=${search ? search : ''}`).then((data) => setProducts(data.list));
  }, [search]);

  //   useEffect(() => {
  //     const fetchProductCount = async () => {
  //       try {
  //         const response = await fetcherPost('products/filter', { id });
  //         const data = await response.json();
  //         setProductCount(data.length);
  //       } catch (error) {
  //         console.error('Error fetching product count:', error);
  //       }
  //     };

  //     fetchProductCount();
  //   }, [id]);
  console.log(order);
  function ItemSelect({ product }: any) {
    const products = order?.filter((e: any) => {
      return e._id !== product._id;
    });
    products?.push(product);
    setOrder(products);
  }
  //   function previousPage() {
  //     if (page !== 1) {
  //       page = page - 1;
  //     }
  //   }

  //   function nextPage() {
  //     if (page !== Math.floor(productCount / limit)) {
  //       page = page - 1;
  //     }
  //   }

  return (
    <>
      <Navbar />
      {products ? (
        <div className="mt-10 flex flex-col gap-20 justify-center items-center">
          <div className="grid grid-cols-1 w-[100%] box-border p-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
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
                    <button onClick={() => ItemSelect({ product })} className="text-white bg-[#C10206] text-xl p-1 border rounded-md">
                      <BsBasket2 />
                    </button>
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
