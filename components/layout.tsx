import { SmallBanner } from './banner';
import Header from './header';
import NewProduct from './newProduct';
import { SpecialProduct } from './specialProduct';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      <SpecialProduct />
      <SmallBanner />
      <NewProduct />
      {children}
    </div>
  );
}
