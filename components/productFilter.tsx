import { useRouter } from 'next/router';
import { useState } from 'react';
import ProductSidebar from './productSidebar';

export default function ProductFilter() {
  const [open, setOpen] = useState<any>(false);
  const router = useRouter();

  return (
    <div>
      <div className="md:hidden block">
        <button onClick={() => setOpen(true)}>angilal gargah</button>
      </div>
      <ProductSidebar setOpen={setOpen} open={open} />

      <div className="hidden md:block">
        <div>
          <h6>shuultuur</h6>
          <div></div>
        </div>
      </div>
    </div>
  );
}
