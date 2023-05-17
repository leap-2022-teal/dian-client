import { Banner } from './banner';

import { Header } from './header';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      <Banner />

      {children}
    </div>
  );
}
