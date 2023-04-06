import Input from "../../components/input";
// import axios from "axios";
// import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import Card from "../../components/card";

const Auth = () => {
  // const router = useRouter();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')
  
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, [])


  return(
    <div className="h-full w-full">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="" alt="Logo" className="h-12"/>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Нэвтрэх' : 'Бүртгүүлэх'}
            </h2>
            <div className=" flex flex-col gap-4">
              {variant === 'register' && (
                <Input 
              label="Username"
              onChange={(ev: any)=> setName(ev.target.value)}
              id="name"
              value={name}/>
              )}
              <Input 
              label="Email"
              onChange={(ev: any)=> setEmail(ev.target.value)}
              id="email"
              type="email"
              value={email}/>
              <Input 
              label="Password"
              onChange={(ev: any)=> setPassword(ev.target.value)}
              id="password"
              type="password"
              value={password}/>
            </div>
            <button className="bg-sky-500 py-3 text-white rounded-md w-full mt-10 hover:bg-sky-700 transition">
              {variant === 'login' ? 'Нэвтрэх' : "Бүртгүүлэх"}
            </button>
            <div className="flex flec-row items-center gap-4 mt-8 justify-center">
            </div>
            <p className="text-neutral-500 mt-12">
            {variant === 'login' ? 'tex1' : 'tex2'}
            <span onClick={toggleVariant} className="text-white ml-1 hover:under cursor-pointer">
              {variant === 'login' ? 'Бүртгүүлэх' : 'Нэвтрэх'}
            </span>
            </p>
          </div>
        </div>
        <Card/>
      </div>
    </div>
  )
}
export default Auth