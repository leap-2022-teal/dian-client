import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../../components/header';
import ProductFilter from '../../components/productFilter';

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <Header />
        <ProductFilter />
      </div>
      <ToastContainer />
    </>
  );
}
