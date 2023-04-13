import axios from 'axios';
import { useEffect, useState } from 'react';

export function Products(props: any) {
  const [products, setProducts] = useState(props.products);

  useEffect(() => {
    axios(`http://localhost:8000/products`).then((data: any) => {
      // console.log(data.data)
      setProducts(data.data);
    });
  }, []);

  return (
    <>
      {products?.map((product: any) => {
        return (
        //   <div className="max-w-sm rounded overflow-hidden shadow-lg" key={product._id}>
        //     <img className="w-3/5" src={product.imageUrl} alt="" />
        //     <div className="px-6 py-4">
        //       <div className="font-bold text-l text-white mb-2">{product.title}</div>
        //       <p className="text-gray-700 text-base">{product.description.short}</p>
        //     </div>
        //     <div className="px-6 py-4">
        //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{product.unitPrice}</span>
        //     </div>
        //   </div>

<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out w-64">
  <img className="w-full object-cover" src={product.imageUrl} alt="Product Image"/>
  <div className="p-3">
    <h3 className="text-md font-semibold text-gray-800 mb-1">{product.title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-1 overflow-hidden">{product.description.short}</p>
    <div className="flex items-center justify-between">
      <span className="text-gray-900 font-semibold text-sm">{product.unitPrice}</span>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Add to Cart</button> */}
    </div>
  </div>
</div>


        );
      })}
    </>
  );
}
