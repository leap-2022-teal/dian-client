import { useRouter } from 'next/router';
import { useState } from 'react';
import { Navbar } from '../../../components/navbar';
import { Products } from '../../../components/products';
import { fetcherPost } from '../../../utils/fetcher';

export default function FilteredbyCatProducts({ products }: any) {
  const [open, setOpen] = useState<any>(false);

  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="flex mt-10 container mx-auto">
        {/* <div className="">
          <button onClick={() => setOpen(true)}>angilal gargah</button>
        </div>
        <CategoriesFilterSidebar setOpen={setOpen} open={open} /> */}
        {/* <ProductFilter /> */}
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
