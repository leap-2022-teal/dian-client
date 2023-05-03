import { Header } from './header';
import ProductFilter from './productFilter';

export default function Layout({ children }: any) {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <ProductFilter />
      {children}
    </div>
  );
}
