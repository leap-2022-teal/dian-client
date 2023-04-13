import { Header } from '../../components/header';
import { Products } from '../../components/products';

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <Header />

        <div className="grid grid-cols-3">
          <Products />
        </div>
      </div>
    </>
  );
}
