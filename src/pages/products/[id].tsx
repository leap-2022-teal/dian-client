import { useRouter } from 'next/router';
import { Products } from '../../../components/products';
import { fetcherPost } from '../../../utils/fetcher';

export default function FilteredbyCatProducts({ products }: any) {
  const router = useRouter();
  return (
    <>
      <Products products={products} />;
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const products = await fetcherPost(`products/filter`, { id }).then((res) => res.json());
  return {
    props: {
      products,
    },
  };
}
