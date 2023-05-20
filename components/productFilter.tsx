import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
import Example from './sidebar';

export default function ProductFilter() {
  const [open, setOpen] = useState<any>(true);
  const router = useRouter();
  const { id } = router.query;
  const [subCategories, setSubCategories] = useState<any>();
  const filted = subCategories?.filter((e: any) => e.slugUrl === id);
  useEffect(() => {
    fetcherGet(`categories/subCategories`).then((data) => setSubCategories(data));
  }, []);
  
  return (
    <div>
      <div className="md:hidden block">
        <button onClick={() => setClick()}>angilal gargah</button>
      </div>
      <Example setClick={setOpen} />
      <div className="hidden md:block">
        <div>
          <h6>Ангилал</h6>
          <div>
            {filted?.map((category: any) => (
              <Link key={category._id} className=" w-full text-sm whitespace-nowrap text-black flex relative items-center outline-none " href={`/category/${category.slugUrl}`}>
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
