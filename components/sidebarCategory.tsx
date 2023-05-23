// import { useEffect, useState } from 'react';
// import { fetcherGet } from '../utils/fetcher';
// import { BiCategory } from 'react-icons/bi';
// import { SubCategoryFilter, SubCategoryFilterSidebar } from './subCategoryFilter';
// import Link from 'next/link';

// export default function SidebarCategory() {
//   const [categories, setCategories] = useState<any>();
//   const [selectedId, setSelectedId] = useState<any>();

//   useEffect(() => {
//     fetcherGet(`categories`).then((data) => setCategories(data));
//   }, []);
//   return (
//     <>
//       <div className="flex">
//         <div className="my-auto pl-2 pr-2 text-xl text-[#B52424]">
//           <BiCategory />
//         </div>
//         <div className="text-lg font-semibold">Ангилал</div>
//       </div>

//       {/* {categories?.map((category: any) => (
//         <div className="mt-5 ml-8 hover:text-[#B52424] cursor-pointer" key={category._id}>
//           {category.title}
//         </div>
//       ))} */}

//       {categories?.map((category: any) => {
//         return (
//           <Link
//             key={category._id}
//             className="hover:text-[#B52424]"
//             onMouseEnter={() => {
//               setSelectedId(category?._id);
//             }}
//             href={`/category/${category.slugUrl}`}
//           >
//             <div className={`cursor-pointer`}>
//               <button aria-haspopup="true" aria-controls="menu-lang" className="w-full text-start items-center focus:outline-none">
//                 {category.number === 2 || category.number === 1 || category.number === 3 || category.number === 4 ? (
//                   <>
//                     <span className="p-3 w-full">{category.title}</span>
//                     {selectedId === category._id && <SubCategoryFilterSidebar selectedId={selectedId} />}
//                   </>
//                 ) : (
//                   <>
//                     <p className="w-full p-3 items-center focus:outline-none">{category.title}</p>
//                   </>
//                 )}
//               </button>
//             </div>
//           </Link>
//         );
//       })}
//     </>
//   );
// }
