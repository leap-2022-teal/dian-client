import numeral from 'numeral';

interface PropType {
  products: any;
}

export function Products({ products }: PropType) {
  return (
    <>
      {products ? (
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products?.map((product: any) => {
            return (
              <div key={product._id} className="bg-white shadow-md rounded-lg overflow-hidden w-[70%] mb-5">
                <img className="w-full" src={product.imageUrl} alt="Product Image" />
                <div className="px-5 pb-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.title}</h3>
                  <div>
                    <span className="text-gray-900 text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>spin</div>
      )}
    </>
  );
}
