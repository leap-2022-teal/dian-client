import { SmallBanner } from './banner';
import Footer from './footer';
import Brands from './brands';
import Header from './header';
import NewProduct from './newProduct';
import { SpecialProduct } from './specialProduct';

export default function Layout({ children }: any) {
  return (
    <div>
      <Header />
      <SpecialProduct />
      <SmallBanner />
      <NewProduct />
      {children}
      <Brands />
      <Footer />
    </div>
  );
}
