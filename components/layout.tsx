import { Banner } from './banner';
import { CategoryFilter } from './categoryFilter';
import { Header } from './header';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      <Banner />
      <CategoryFilter />
      {children}
    </div>
  );
}
