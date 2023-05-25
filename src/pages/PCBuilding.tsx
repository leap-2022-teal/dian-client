import numeral from 'numeral';
import { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import BuildModal from '../../components/buildModal';
import { Navbar } from '../../components/navbar';
import { fetcherGet } from '../../utils/fetcher';
import Footer from '../../components/footer';
import { IoMdAdd } from 'react-icons/io';

export default function PCBuilding() {
  const [products, setProducts] = useState<any>();
  const [selected, setSelected] = useLocalStorageState<any[]>('buildProduct', { defaultValue: [] });
  const [isScrolled, setIsScrolled] = useState(false);

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
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative mt-2 md:mt-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products?.map((product: any) => {
            return (
              <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden relative mb-5">
                <img className="mx-auto" src={product.imageUrl} alt="Product Image" />
                <div className="px-5 pb-5 ">
                  <h3 className="text-sm font-semibold text-gray-800 mb-10">{product.title}</h3>
                  <div className="flex justify-between bottom-2">
                    <span className="text-[#101010] text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                    <button onClick={() => ItemSelect({ product })} className="text-[#171717] border-1 border-[#171717] text-sm  p-0.5 lg:p-1 border rounded-full">
                      <span className=" flex justify-center items-center ">
                        <IoMdAdd />
                        Сонгох
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <BuildModal BuildFilter={BuildFilter} products={selected} isScrolled={isScrolled} />
      </div>
      <Footer />
    </>
  );
}
