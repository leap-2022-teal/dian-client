import Link from 'next/link';
import { useState } from 'react';
import { fetcherLogin } from '../utils/fetcher';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Image from 'next/image';
import loginImage from '../image/login.png';
import { useRouter } from 'next/router';

export default function UserLogin({ showModal, setShowModal, setRegisterModal }: any) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function handleLogin(event: any) {
    event.preventDefault();
    fetcherLogin('users/login', { email, password })
      .then((res: any) => {
        const { token } = res;
        if (token) {
          localStorage.setItem('loginToken', token);
          setEmail('');
          setPassword('');
          setError(false);
          setShowModal(false);
          router.reload();
          // toast.success(`${email} хэрэглэгч амжилттай нэвтэрлээ!`, {
          //   position: 'top-center',
          //   autoClose: 3000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: 'light',
          // });
        } else {
          setError(true);
        }
      })
      .catch(({ res, code }) => {
        if (res.status === 400) {
          toast(res.message, {
            position: 'top-right',
            type: 'error',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          alert(code);
        }
      });
  }
  const handleClose = () => {
    setShowModal(false);
    setEmail('');
    setPassword('');
    setError(false);
  };

  function register() {
    setShowModal(false);
    setRegisterModal(true);
  }

  setTimeout(() => {
    setError(false);
  }, 3000);

  return (
    <>
      {showModal ? (
        <div className={` ${showModal ? 'backdrop-blur' : null} flex items-center justify-center fixed z-10 inset-0 overflow-y-auto`}>
          <div className="shadow-xl flex items-center justify-center">
            <div className="bg-[#171717] rounded-lg shadow-md ">
              <div className="justify-end pt-3 pr-3 flex">
                <button onClick={handleClose} className="bg-gray-100 rounded-full p-1">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:px-10 max-w-3xl mx-auto">
                <div className="md:w-1/2 hidden md:block">
                  <Image src={loginImage} alt="login" />
                </div>
                <div className="px-6 pb-6 space-y-4 md:space-y-6 sm:px-8 sm:pb-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">Нэвтрэх</h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    {!error ? (
                      <div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-white ">И-мэйл хаяг</label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            className="bg-gray-200 border text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          />
                        </div>
                        <div className="mt-5">
                          <label className="block mb-2 text-sm font-medium text-white ">Нууц үг</label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className="bg-gray-200 border text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="animate-shake">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-white ">И-мэйл хаяг</label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            className="bg-gray-200 border text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          />
                        </div>
                        <div className="mt-5">
                          <label className="block mb-2 text-sm font-medium text-white ">Нууц үг</label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className="bg-gray-200 border text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          />
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      onClick={handleLogin}
                      className="w-full text-white bg-[#C10206] hover:[#A50113] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Нэвтрэх
                    </button>
                    <p className="text-sm font-light text-gray-400 ">
                      Шинэ хэрэглэгч үүсгэх?
                      <span onClick={register} className="font-medium text-[#C10206] hover:underline ml-1 ">
                        Бүртгүүлэх
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
