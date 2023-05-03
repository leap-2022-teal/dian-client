import { Header } from './header';
import ProductFilter from './productFilter';

export default function Layout({ children }: any) {
  return (
    <div className="container mx-auto">
      <Header />
      <ProductFilter />
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> {children}</div>
    </div>
  );
}
