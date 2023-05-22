import { createContext, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { SmallBanner } from './banner';
import Footer from './footer';
import Brands from './brands';
import Header from './header';
import NewProduct from './newProduct';
import Example from './sidebar';
import { SpecialProduct } from './specialProduct';

const LocalContext = createContext(null);

export default function Layout({ children }: any) {
  // const [item, setItem] = useState<any>();
  // const [selected, setSelected] = useLocalStorageState<any[]>('selected', { defaultValue: [] });

  // function ItemSelect({ product }: any) {
  //   const products = selected?.filter((e: any) => {
  //     return e._id !== product._id;
  //   });
  //   products?.push(product);
  //   setSelected(products);
  // }
  const [open, setOpen] = useState<any>(false);


  // console.log(selected, 'layout');
  // useEffect(() => {
  //   const one: any = localStorage.getItem('selected');
  //   setItem(JSON.parse(one));
  // }, []);
  // console.log(item, 'item');

  return (
    <div>
      <Header />
      <SpecialProduct />
      <SmallBanner />
      <NewProduct />
      {children}
      <div className="">
        <button onClick={() => setOpen(true)}>angilal gargah</button>
      </div>
      <Example setOpen={setOpen} open={open} />
      <Brands />
      <Footer />
    </div>
  );
}
