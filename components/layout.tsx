import { Banner } from './banner';
import { Header } from './header';
import { SpecialProduct } from './specialProduct';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      <Banner />
      <SpecialProduct />

      {children}
    </div>
  );
}
