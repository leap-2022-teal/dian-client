import { createContext, useState } from 'react';

import { SmallBanner } from './banner';
import Brands from './brands';
import Footer from './footer';
import Header from './header';
import NewProduct from './newProduct';
import ProductSidebar from './productSidebar';
import { SpecialProduct } from './specialProduct';
import useLocalStorageState from 'use-local-storage-state';

type OrderContext = {
  myFunction: (e: any) => void;
};
// export const OrderContext = createContext<any | undefined>(undefined);

export default function Layout({ children }: any) {
  const [item, setItem] = useState<any>();
  // const [selected, setSelected] = useLocalStorageState<any[]>('selected', { defaultValue: [] });
  const [open, setOpen] = useState<any>(false);

  // useEffect(() => {
  //   ItemSelect(item);
  // }, [item]);

  // function ItemSelect(product: any) {
  //   const products = selected?.filter((e: any) => {
  //     return e._id !== product._id;
  //   });
  //   products?.push(product);
  //   setSelected(products);
  // }
  // console.log(selected, 'selected');
  // console.log(selected, 'layout');
  // useEffect(() => {
  //   const one: any = localStorage.getItem('selected');
  //   setItem(JSON.parse(one));
  // }, []);
  // console.log(item, 'item');

  return (
    <div>
      {/* <OrderContext.Provider value={{ ItemSelect }}> */}
        <Header />
        <SpecialProduct />
        <SmallBanner />
        <NewProduct />
        {children}
        <div className="">
          <button onClick={() => setOpen(true)}>angilal gargah</button>
        </div>
        <ProductSidebar setOpen={setOpen} open={open} />
        <Brands />
        <Footer />
      {/* </OrderContext.Provider> */}
    </div>
  );
}
