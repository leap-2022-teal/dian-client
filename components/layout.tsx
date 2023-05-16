import { Header } from './header';
import CategoryFilter from './categoryFilter';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      <CategoryFilter />
      {children}
    </div>
  );
}
