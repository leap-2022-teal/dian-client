import Header from './header';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
