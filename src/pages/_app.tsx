import type { AppProps } from 'next/app';
import { createContext } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import '../styles/globals.scss';
import { toast } from 'react-toastify';

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
    console.log(product);
    products?.push(product);
    setSelected(products);

    toast.success(`Бараа сагсанд хадгалагдлаа`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
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
