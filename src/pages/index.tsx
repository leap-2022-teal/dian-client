import { Category } from '../../components/category';
import { Header } from '../../components/header';
import { Products } from '../../components/products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <Header />
        <Category />
        <div className="grid grid-cols-4">
          <Products />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
