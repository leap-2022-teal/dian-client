import { Header } from './header';
import CategoryFilter from './categoryFilter';

export default function Layout({ children }: any) {
  return (
    <div className="container mx-auto">
      <Header />
      <CategoryFilter />
      {/* <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> {children}</div> */}
      {children}
    </div>
  );
}
