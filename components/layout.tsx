import Header from './header';
import Slider from './productSlider';
import { SpecialProduct } from './specialProduct';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      <Slider />
      <SpecialProduct />

      {children}
    </div>
  );
}
