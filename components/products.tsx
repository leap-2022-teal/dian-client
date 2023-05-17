import Image from 'next/image';
import Link from 'next/link';
import numeral from 'numeral';
import { useState } from 'react';

interface PropType {
  products: any;
  BuildFilter: any;
}

export function Products({ products, BuildFilter }: PropType) {
  const [selected, setSelected] = useState<any[]>([]);

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
      {products ? (
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products?.map((product: any) => {
            return (
              <>
                <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
                  <Link href={`/product/${product.slugUrl}`}>
                    <Image className="w-full" src={product.imageUrl} alt="Product Image" width={70} height={70} />
                    <div className="px-5 pb-5">
                      <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                      <div>
                        <span className="text-gray-900 text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                      </div>
                    </div>
                  </Link>
                  <button onClick={() => ItemSelect({ product })}>select</button>
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
