export function Header() {
  return (
    <>
      <div className="container h-8 mx-auto p-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>
            <h1 className="text-3xl text-gray-600 ml-2">Logo</h1>
          </div>
          <div className="mt-2">
            <a href="" className=" text-gray-300 me-8 text-lg">
              Бүртгүүлэх
            </a>
            <a href="" className="bg-purple-500 text-gray-50 text-lg hover:bg-purple-700 p-3 px-5 rounded-full">
           
              Нэвтрэх
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-block ms-2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
