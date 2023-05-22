import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import SidebarCategory from './sidebarCategory';
import { HiChip } from 'react-icons/hi';

export default function Sidebar({ open, setOpen, handleLoginModal, handleRegisterModal, user }: any) {
  return (
    <>
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
                            {/* <button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(false)}>
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button> */}
                          </div>
                        </Transition.Child>
                        {/* <div className="px-4 sm:px-6">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-100">Нэвтрэх</Dialog.Title>
                        </div> */}
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6 text-white">
                        {!user ? (
                          <div className="flex justify-center gap-5 pb-10 border-b-[1px] border-b-gray-500">
                            <button onClick={handleLoginModal} className="bg-[rgb(208,55,46)] hover:bg-[#B52424] rounded-md p-2">
                              Нэвтрэх
                            </button>
                            <button onClick={handleRegisterModal} className="bg-[rgb(208,55,46)] hover:bg-[#B52424]  rounded-md p-2">
                              Бүртгүүлэх
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 border-b-[1px] border-b-gray-500 pb-10">
                            <div className="relative ">
                              <img
                                className="w-10 h-10 rounded-full"
                                src="https://icon2.cleanpng.com/20181128/puj/kisspng-ninja-portable-network-graphics-computer-icons-ava-macmacmac-5bfea49bdb85c3.5082572815434149398992.jpg"
                                alt=""
                              />
                              <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                            </div>
                            <div className="font-bold">{user.email}</div>
                          </div>
                        )}

                        <div className="flex py-10 border-b-[1px] border-b-gray-500">
                          <div className="my-auto pl-2 pr-1 text-lg">
                            <HiChip />
                          </div>
                          <div className="text-lg ">Компьютер угсрах</div>
                        </div>

                        <div className="flex flex-col py-10 border-b-[1px] border-b-gray-500">
                          <SidebarCategory />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
