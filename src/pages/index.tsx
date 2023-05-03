import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../../components/header';
import ProductFilter from '../../components/productFilter';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto container px-4">
        <ProductFilter />
      </div>
      <ToastContainer />
    </>
  );
}
