import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import numeral from 'numeral';
import { Fragment, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

export default function ProductSidebar({ open, setOpen }: any) {
  const [selected, setSelected, { removeItem }] = useLocalStorageState<any[]>('selected');
  const [quantity, setQuantity] = useState(1);

  function handleMinus() {
    setQuantity(+quantity - 1);
  }

  function handleAdd() {
    setQuantity(+quantity + 1);
  }
  function handledeleteItem(product: any) {
    const deletedItem = selected?.filter((item) => item._id !== product);
    setSelected(deletedItem);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 pt-11" onClose={setOpen}>
        <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100]" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-0 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative top-[73px] w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#171717] py-6 shadow-xl">
                    <div className="flex">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div>
                          <button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(false)}>
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">Panel title</Dialog.Title>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {selected?.map((product: any, index: number) => (
                        <div className="relative">
                          <div key={product._id} className="bg-white flex hover:shadow-lg border border-gray-100 rounded-lg">
                            <Link href={`/product/${product.slugUrl}`}>
                              <figure className=" flex justify-center  ">
                                <img className="w-[190px]" src={product.imageUrl} alt="Product Image" width={100} height={100} />
                              </figure>
                            </Link>
                            <div className="p-5 text-sm flex flex-col w-full justify-between font-sans font-bold">
                              <Link href={`/product/${product.slugUrl}`}>
                                <p className="text-slate-800 ">{product.title}</p>
                              </Link>
                              <div className="flex  justify-between">
                                <span className="text-[#101010] text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                                <div className="flex items-center space-x-3">
                                  <button
                                    onClick={handleMinus}
                                    className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button"
                                  >
                                    <span className="sr-only">Quantity button</span>
                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                    </svg>
                                  </button>
                                  <div>
                                    <input
                                      value={quantity}
                                      onChange={(e: any) => setQuantity(e.target.value)}
                                      id="first_product"
                                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      required
                                    />
                                  </div>
                                  <button
                                    onClick={handleAdd}
                                    className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button"
                                  >
                                    <span className="sr-only">Quantity button</span>
                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className=" top-1 right-1 absolute rounded-md text-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => handledeleteItem(product._id)}
                            >
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
