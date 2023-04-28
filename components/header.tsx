import Link from 'next/link';

export function Header() {
  return (
    <>
      <header>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
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
                <input className="block bg-gray-700 focus:outline-none focus:bg-white focus:text-gray-900 rounded-full py-2 pl-10 pr-3 leading-tight" placeholder="Хайх" type="text" />
              </div>
            </form>

            <Link href="/login" className="text-gray-300 hover:text-white mr-10">
              Нэвтрэх
            </Link>
            <Link href="/signUp" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
              Бүртгүүлэх
            </Link>
          </div>
          <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline-gray">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
