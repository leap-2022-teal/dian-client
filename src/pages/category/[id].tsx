import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import { Products } from '../../../components/products';
import { fetcherPost } from '../../../utils/fetcher';

export default function FilteredbyCatProducts({ products }: any) {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      <Products products={products} />
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const categories = await fetcherGet(`categories/subCategory`);
//   console.log(categories);
//   const paths = categories.map((category: any) => ({
//     params: {
//       id: category.slugUrl,
//     },
//   }));
//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// export async function getStaticProps({ params }: any) {
//   const { id } = params;
//   const products = await fetcherPost(`products/filter`, { id }).then((res) => res.json());
//   return {
//     props: {
//       products,
//     },
//   };
// }

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const products = await fetcherPost(`products/filter`, { id }).then((res) => res.json());
  return {
    props: {
      products,
    },
  };
}
