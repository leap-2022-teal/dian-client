import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import numeral from 'numeral';
import { Fragment } from 'react';
import { BsBasket2 } from 'react-icons/bs';
import useLocalStorageState from 'use-local-storage-state';

export default function Example({ open, setOpen }: any) {
  const [selceted, setTodos, { isPersistent }] = useLocalStorageState<any[]>('selceted', {});

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
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
                      {selceted?.map((product: any) => (
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
                              <button className="text-white bg-[#C10206] text-xl p-1 border rounded-md">
                                <BsBasket2 />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      {!isPersistent && <span>Changes aren currently persisted.</span>}
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
