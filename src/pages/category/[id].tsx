import { useRouter } from 'next/router';
import { Navbar } from '../../../components/navbar';
import ProductFilter from '../../../components/productFilter';
import { Products } from '../../../components/products';
import { fetcherPost } from '../../../utils/fetcher';
import { useEffect } from 'react';

export default function FilteredbyCatProducts({ products }: any) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className=" container mx-auto">
        <ProductFilter />
        <Products products={products} />
      </div>
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
  const { id, page, limit } = params;

  const products = await fetcherPost(`products/filter/pagination?page=${page}&limit=${limit}`, { id }).then((res) => res.json());
  return {
    props: {
      products,
    },
  };
}
