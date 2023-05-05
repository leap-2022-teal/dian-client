import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserLogin from './login';
import { fetcherGetUser } from '../utils/fetcher';
import { Dropdown, Avatar, Text, Grid, User } from '@nextui-org/react';
import UserSignUp from './signUp';

//garah zasah
//register design zasah

export function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [user, setUser] = useState<any>();

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

  function logOut() {
    console.log('1');
    localStorage.removeItem('loginToken');
    setUser(null);
  }

  function handleLoginModal() {
    setLoginModal(true);
  }

  function handleRegisterModal() {
    setRegisterModal(true);
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
                <button onClick={handleLoginModal} className="mr-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
                  Нэвтрэх
                </button>
                <button onClick={handleRegisterModal} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
                  Бүртгүүлэх
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="font-medium ">
                  <div>Сайн байна уу? </div>
                  <div className="text-sm text-gray-500 ">oyu@gmail.com</div>
                </div>

                <Grid>
                  <Dropdown placement="bottom-left">
                    <Dropdown.Trigger>
                      <Avatar bordered size="lg" as="button" src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" />
                    </Dropdown.Trigger>
                    <Dropdown.Menu aria-label="Static Actions">
                      <Dropdown.Item>Профайл</Dropdown.Item>
                      <Dropdown.Item>Захиалга</Dropdown.Item>
                      <Dropdown.Item>Хадгалсан бараа</Dropdown.Item>
                      <Dropdown.Item color="error">
                        <button onClick={() => logOut}>Гарах</button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
              </div>
            )}
          </div>
        </div>
      </header>

      <UserLogin showModal={loginModal} setShowModal={setLoginModal} />
      <UserSignUp showModal={registerModal} setShowModal={setRegisterModal} />
    </>
  );
}
