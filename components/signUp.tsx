import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetcherPost } from '../utils/fetcher';
import registerImage from '../image/sign up.png';
import Image from 'next/image';

export default function UserSignUp({ showModal, setShowModal }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useRouter();

  function handleSignUp(event: any) {
    event.preventDefault();
    if (password.length >= 8) {
      setPasswordError(false);
      if (isCheck) {
        fetcherPost('users/register', { email, password, confirmPassword }).then((res) => {
          const { status } = res;
          if (status === 200) {
            toast('Амжилттай', {
              position: 'top-right',

              type: 'success',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setIsCheck(false);
            navigate.push('/');
            setShowModal(false);
          } else if (status === 400) {
            return res.json().then((data: any) => {
              toast(data.message, {
                position: 'top-right',
                type: 'error',

                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
          }
        });
      } else {
        setError(true);
      }
    } else {
      setPasswordError(true);
    }
  }

  function handleCheckBox(event: any) {
    setIsCheck(event.target.checked);
    setError(false);
  }

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      {showModal ? (
        <div className={` ${showModal ? 'backdrop-blur' : null} flex items-center justify-center fixed z-10 inset-0 overflow-y-auto`}>
          <div className="shadow-xl flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md ">
              <div className="justify-end pt-3 pr-3 flex ">
                <button onClick={handleClose} className="bg-gray-100 rounded-full p-1">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-center md:px-10  max-w-3xl mx-auto">
                <div className="px-6 pb-10 space-y-4 md:space-y-6 sm:px-8 sm:pb-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Бүртгүүлэх</h1>
                  <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSignUp}>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">И-мэйл хаяг</label>
                      <input
                        type="email"
                        value={email}
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 "
                      />
                    </div>
                    <div className="relative">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">Нууц үг</label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value), setPasswordError(false);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 "
                      />
                      <div className="absolute top-10 right-4">
                        <button type="button" className="text-gray-600 " onClick={handlePasswordVisibility}>
                          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                      </div>
                      {passwordError && <p className="text-red-500 text-sm mt-2">Нууц үг .</p>}
                    </div>

                    <div className="relative">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">Нууц үг баталгаажуулах</label>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 "
                      />
                      <div className="absolute top-10 right-4">
                        <button type="button" className="text-gray-600 " onClick={handleConfirmPasswordVisibility}>
                          {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                      </div>
                    </div>
                    {!error ? (
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            aria-describedby="terms"
                            type="checkbox"
                            checked={isCheck}
                            onChange={handleCheckBox}
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label className="font-light text-gray-500 ">
                            <a className="font-medium text-[#C10206] hover:underline " href="#">
                              Үйлчилгээний нөхцөлийг
                            </a>
                            <span className="ml-1">хүлээн зөвшөөрөх</span>
                          </label>
                        </div>
                      </div>
                    ) : (
                      <div className="animate-shake flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            aria-describedby="terms"
                            type="checkbox"
                            checked={isCheck}
                            onChange={handleCheckBox}
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label className="font-light text-gray-500 ">
                            <a className="font-medium text-[#C10206] hover:underline" href="#">
                              Үйлчилгээний нөхцөлийг
                            </a>
                            хүлээн зөвшөөрч байна
                          </label>
                        </div>
                      </div>
                    )}

                    <input
                      type="submit"
                      value={'Create an account'}
                      className="w-full text-white bg-[#C10206] hover:bg-[#A50113] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    />
                    <p className="text-sm font-light text-gray-500 ">
                      Таньд хаяг бий юу?
                      <Link href="login" className="ml-1 font-medium text-[#C10206] hover:underline ">
                        Нэвтрэх
                      </Link>
                    </p>
                  </form>
                </div>
                <Image src={registerImage} className="md:w-1/2 hidden md:block" alt="login" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
