import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserLogin from './login';
import { Dropdown, Avatar, Text, Grid, User } from '@nextui-org/react';
import UserSignUp from './signUp';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';

export function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [user, setUser] = useState<any>();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    // const auth = {
    //   header: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };

    axios
      .get('http://localhost:8000/users/me', { headers: { Authorization: token ? `Bearer ${token}` : '' } })
      .then((res: any) => setUser(res.data))
      .catch((res) => {
        const { status } = res;
        if (status === 403) {
          setUser(null);
        }
      });
    // fetcherGetUser('users/me', auth).then((data) => {
    //   setUser(data);
    //   console.log(data);
    // });
  }, []);

  function logOut() {
    localStorage.removeItem('loginToken');
    setUser(null);
  }

  function handleLoginModal() {
    setLoginModal(true);
    setIsDropdownVisible(false);
  }

  function handleRegisterModal() {
    setRegisterModal(true);
    setIsDropdownVisible(false);
  }
  return (
    <>
      <header>
        <div className=" mx-auto flex items-center justify-between px-4 sm:py-4  bg-[#171717]">
          <div className="flex items-center">
            <Link href="/" className="ml-5 text-2xl font-bold text-gray-100">
              Dian project
            </Link>
            <div className="text-white text-xl pl-40">Category</div>
          </div>

          <div className="hidden md:flex items-center">
            <form className="mr-6">
              <div className="relative">
                <input className="block bg-white focus:text-gray-900 rounded-full py-2 pl-3 pr-10 leading-tight" placeholder="Хайх" type="text" />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </svg>
                </span>
              </div>
            </form>

            <div className="flex gap-5 pr-10">
              {!user ? (
                <>
                  <FaUser className="text-white text-xl relative my-3" onClick={toggleDropdown} />
                  {isDropdownVisible && (
                    <div className="absolute right-5 mt-10 w-40 bg-white rounded-lg shadow-lg transition-opacity opacity-300">
                      <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleRegisterModal}>
                          Бүртгүүлэх
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer " onClick={handleLoginModal}>
                          Нэвтрэх
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <FaUser className="text-white text-xl relative my-3" onClick={toggleDropdown} />
                  {isDropdownVisible && (
                    <div
                      className="absolute right-5 mt-12 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">
                          {user.email}
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-3">
                          Профайл
                        </a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">
                          Захиалга
                        </a>
                      </div>

                      <div className="py-1" role="none">
                        <a onClick={logOut} href="#" className="text-red-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-6">
                          Гарах
                        </a>
                      </div>
                    </div>
                  )}
                </>
              )}

              <HiShoppingCart className="text-white text-xl my-3 " />
            </div>
          </div>
        </div>
      </header>

      <UserLogin showModal={loginModal} setShowModal={setLoginModal} />
      <UserSignUp showModal={registerModal} setShowModal={setRegisterModal} />
    </>
  );
}
