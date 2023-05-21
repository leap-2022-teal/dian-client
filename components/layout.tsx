import { useState } from 'react';
import { SmallBanner } from './banner';
import Header from './header';
import NewProduct from './newProduct';
import Example from './sidebar';
import { SpecialProduct } from './specialProduct';

export default function Layout({ children }: any) {
  const [open, setOpen] = useState<any>(false);
  return (
    <div className="">
      <Header />
      <SpecialProduct />
      <SmallBanner />
      <NewProduct />
      {children}
      <div className="">
        <button onClick={() => setOpen(true)}>angilal gargah</button>
      </div>
      <Example setOpen={setOpen} open={open} />
    </div>
  );
}
