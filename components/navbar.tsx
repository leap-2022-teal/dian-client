import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { CategoryFilter } from './categoryFilter';
import UserLogin from './login';
import UserSignUp from './signUp';

export function Navbar() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [user, setUser] = useState<any>();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, { headers: { Authorization: token ? `Bearer ${token}` : '' } })
        .then((res: any) => setUser(res.data))
        .catch((res) => {
          const { status } = res;
          if (status === 403) {
            setUser(null);
          }
        });
    }
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
      <header className={`fixed top-0 left-0 w-full bg-[#171717] z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-90' : 'opacity-100'}`}>
        <div className=" mx-auto flex items-center justify-between px-3 lg:py-3 bg-[#171717]">
          <div className="flex items-center">
            <Link href="/" className="ml-5 text-2xl font-bold text-gray-100">
              Dian project
            </Link>
            <div className="text-white text-xl pl-40">
              <CategoryFilter />
            </div>
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
                    <div className="absolute z-50 right-5 mt-10 w-40 bg-white rounded-lg shadow-lg transition-opacity opacity-300">
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
                      className="absolute z-50 right-5 mt-12 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
      <div className={`w-full h-[50px] ${isScrolled ? 'hidden' : 'block'}`}></div>
      <UserLogin showModal={loginModal} setShowModal={setLoginModal} />
      <UserSignUp showModal={registerModal} setShowModal={setRegisterModal} />{' '}
    </>
  );
}
