import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserLogin from './login';
import { fetcherGet, fetcherGetUser } from '../utils/fetcher';

export function Header() {
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState<any>('');
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetcherGetUser('user', auth).then((data) => {
      setUser(data);
      console.log(data);
    });
  }, []);

  // useEffect(() => {
  //   const tok = localStorage.getItem('loginToken');
  //   setToken(tok);
  // }, []);

  function loginModal() {
    setShowModal(true);
  }
  return (
    <>
      <header>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Dian project
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <form className="mr-10">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </svg>
                </span>
                <input className="block bg-white focus:text-gray-900  rounded-full py-2 pl-10 pr-3 leading-tight" placeholder="Хайх" type="text" />
              </div>
            </form>
            {!user ? (
              <div>
                <button onClick={loginModal} className="mr-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
                  Нэвтрэх
                </button>
                <Link href="/signUp" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
                  Бүртгүүлэх
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="font-medium dark:text-white">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Сайна байна уу?</div>
                  <div></div>
                </div>
                <img className="w-10 h-10 rounded-full" src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" alt="" />
              </div>
            )}
          </div>
        </div>
      </header>
      <UserLogin showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
