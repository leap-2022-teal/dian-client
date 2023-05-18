import { Banner } from './banner';
import { Header } from './header';
import { SpecialProduct } from './specialProduct';
import Slider from './productSlider';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      <Banner />
      <SpecialProduct />

      <Slider />
      {children}
    </div>
  );
}
