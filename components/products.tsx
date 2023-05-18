import Image from 'next/image';
import Link from 'next/link';
import numeral from 'numeral';
import { useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

interface PropType {
  products: any;
}

export function Products({ products }: PropType) {
  const [selected, setSelected] = useState<any[]>([]);

  function ItemSelect({ product }: any) {
    const products = selected.filter((e: any) => {
      return e.categoryId !== product.categoryId;
    });
    products.push(product);
    setSelected(products);
  }
  return (
    <>
      {products ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[70%]">
          {products?.map((product: any) => {
            return (
              <>
                <div key={product._id} className="bg-white hover:shadow-lg overflow-hidden border group border-gray-100 rounded-md ">
                  <Link href={`/product/${product.slugUrl}`}>
                    <Image className="w-full px-10" src={product.imageUrl} alt="Product Image" width={60} height={60} />
                    <div className="px-5 pb-2">
                      <h3 className="text-lg font-semibold text-[#3a3939] mt-2 mb-3 truncate">{product.title}</h3>
                      <div>
                        <span className="text-[#101010] text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                      </div>
                    </div>
                  </Link>
                  <button className="text-[#3a3939] hidden group-hover:block bg-black rounded w-1/12 " onClick={() => ItemSelect({ product })}>
                    {/* <BsFillCartPlusFill fill="white" /> */}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div>spin</div>
      )}
    </>
  );
}
