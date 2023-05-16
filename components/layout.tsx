import { CategoryFilter } from './categoryFilter';
import { Header } from './header';

export default function Layout({ children }: any) {
  return (
    <>
      <div className="mx-20">
        <Header />
        <CategoryFilter />
      </div>
      <div>{children}</div>
    </>
  );
}
