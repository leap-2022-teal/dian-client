import { Category } from './category';
import { Products } from './products';

export default function ProductFilter() {

  

  return (
    <>
      <Category />
      <div className="grid grid-cols-4">
        <Products />
      </div>
    </>
  );
}
