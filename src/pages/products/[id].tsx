import { useRouter } from 'next/router';
import { Products } from '../../../components/products';
import { fetcherPost } from '../../../utils/fetcher';

export default function FilteredbyCatProducts({ products }: any) {
  const router = useRouter();
  return (
    <>
      <Products products={products} />
    </>
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
