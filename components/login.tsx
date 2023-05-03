import Link from 'next/link';
import { useState } from 'react';
import { fetcherLogin } from '../utils/fetcher';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useRef } from 'react';
import Image from 'next/image';
import loginImage from '../image/Shiny Happy - Home Vacation small.png';

// modal animation
// modalaas uur gazar darah uyd modal haagddag bh

export default function UserLogin({ showModal, setShowModal }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useRouter();
  const modalRef = useRef<HTMLInputElement>(null);

  function handleCloseModal(event: any) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  }

  function handleLogin(event: any) {
    event.preventDefault();
    fetcherLogin('user/login', { email, password })
      .then((res: any) => {
        const { token } = res;
        if (token) {
          localStorage.setItem('loginToken', token);
          navigate.push('/');
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

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      {showModal ? (
        <div className={`modal ${showModal ? 'show' : ''}`} ref={modalRef} onClick={handleCloseModal}>
          <div className=" fixed z-10 inset-0 overflow-y-auto">
            <div className=" flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center md:p-10 md:mt-[7rem] max-w-3xl mx-auto">
                <div className="md:w-1/2">
                  <Image src={loginImage} alt="login" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="">
                    <div className="md:space-y-6">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Sign in to your account</h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                        {!error ? (
                          <div>
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                              <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              />
                            </div>
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                              <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="animate-shake">
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                              <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              />
                            </div>
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                              <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              />
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " />
                            </div>
                            <div className="ml-3 text-sm">
                              <label className="text-gray-500 ">Remember me</label>
                            </div>
                          </div>
                          <a href="#" className="text-sm font-medium text-green-600 hover:underline ">
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          onClick={handleLogin}
                          className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                          Login
                        </button>
                        <p className="text-sm font-light text-gray-500 ">
                          Don’t have an account yet?
                          <Link href="/signUp" className="font-medium text-green-600 hover:underline ">
                            Sign up
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
