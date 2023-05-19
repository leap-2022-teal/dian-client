import { BigBanner, Slider, SmallBanner } from './banner';
import { Header } from './header';
import { SpecialProduct } from './specialProduct';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      <BigBanner />
      <Slider />
      <SpecialProduct />
      <SmallBanner />

      {children}
    </div>
  );
}
