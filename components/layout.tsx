import { Banner } from './banner';
import { Header } from './header';
import Slider from './productSlider';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      <Banner />
      <Slider />
      {children}
    </div>
  );
}
