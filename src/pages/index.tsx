import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';

export default function Home() {
  return (
    <Layout>
      <ToastContainer />
    </Layout>
  );
}
