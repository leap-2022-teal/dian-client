import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import numeral from 'numeral';
import { Fragment } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import useLocalStorageState from 'use-local-storage-state';

export default function ProductSidebar({ open, setOpen }: any) {
  const [selected, setSelected] = useLocalStorageState<any[]>('selected');
  const [pcBuild, setPCBuild, { removeItem }] = useLocalStorageState<any[]>('orderPCBuild');

  function handleDeleteItem(product: any) {
    const deletedItem = selected?.filter((item: any) => item._id !== product);
    setSelected(deletedItem);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 pt-11 " onClose={setOpen}>
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
                <Dialog.Panel className="pointer-events-auto relative md:top-[75px] top-[62px] w-screen max-w-md">
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
                          {/* <button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(false)}>
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button> */}
                        </div>
                      </Transition.Child>
                      <div className="px-4 sm:px-6"></div>
                    </div>
                    <div className="relative mb-6 flex-1 px-4 sm:px-6">
                      <div className="text-white pb-4">
                        <div className="flex gap-3 items-center justify-items-center">
                          <HiShoppingCart />
                          Миний сагс
                        </div>
                      </div>
                      {selected?.map((product: any) => (
                        <div key={product._id} className="relative mb-6">
                          <div key={product._id} className=" flex hover:shadow-lg border border-gray-100 rounded-lg">
                            <Link href={`/product/${product.slugUrl}`}>
                              <figure className=" flex my-auto ">
                                <img className="w-[200px] rounded-tl rounded-bl " src={product.imageUrl} alt="Product Image" width={100} height={100} />
                              </figure>
                            </Link>
                            <div className="p-5 text-sm flex flex-col w-full justify-between font-sans font-bold">
                              <Link href={`/product/${product.slugUrl}`}>
                                <p className="text-white ">{product.title}</p>
                              </Link>
                              <div className="flex  justify-between">
                                <span className="text-white text-sm font-bold">{numeral(product.unitPrice).format('0,0')}₮</span>
                                {/* <Quantity /> */}
                              </div>
                              <button
                                type="button"
                                className=" top-1 right-1 absolute rounded-md text-gray-300 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => handleDeleteItem(product._id)}
                              >
                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      {pcBuild && (
                        <div className="relative ">
                          <div className="text-white">Угсарсан компьютер</div>
                          <button
                            type="button"
                            className=" top-1 right-1 absolute rounded-md text-gray-300 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => removeItem()}
                          >
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                          {pcBuild?.map((buildProducts: any) => (
                            <div key={buildProducts._id} className=" my-3 flex hover:shadow-lg border border-gray-100 rounded-lg">
                              <Link href={`/product/${buildProducts.slugUrl}`}>
                                <figure className=" flex my-auto ">
                                  <img className="w-[200px] rounded-tl rounded-bl " src={buildProducts.imageUrl} alt="Product Image" width={100} height={100} />
                                </figure>
                              </Link>
                              <div className="p-5 text-sm flex flex-col w-full justify-between font-sans font-bold">
                                {/* <Link href={`/product/${buildProducts.slugUrl}`}> */}
                                <p className="text-white ">{buildProducts.title}</p>
                                {/* </Link> */}
                                <div className="flex  justify-between">
                                  <span className="text-white text-sm font-bold">{numeral(buildProducts.unitPrice).format('0,0')}₮</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    <div className=" h-12 w-1"></div>
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
