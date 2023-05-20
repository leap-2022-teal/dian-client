import { BigBanner, Slider } from './banner';
import { Navbar } from './navbar';

export default function Header() {
  return (
    <>
      <Navbar />
      <BigBanner />
      <Slider />
    </>
  );
}
