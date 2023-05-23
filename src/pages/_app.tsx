import type { AppProps } from 'next/app';
import { createContext } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import '../styles/globals.scss';

type OrderContextType = {
  ItemSelect: (product: any) => void;
};

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

export default function App({ Component, pageProps }: AppProps) {
  const [selected, setSelected] = useLocalStorageState<any[]>('selected', { defaultValue: [] });

  function ItemSelect(product: any) {
    const products = selected?.filter((e: any) => {
      return e._id !== product._id;
    });
    products?.push(product);
    setSelected(products);
  }

  const orderContextValue: OrderContextType = {
    ItemSelect: ItemSelect,
  };
  return (
    <OrderContext.Provider value={orderContextValue}>
      <Component {...pageProps} />
    </OrderContext.Provider>
  );
}
