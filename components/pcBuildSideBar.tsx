import { useEffect, useState } from 'react';
import { fetcherGet } from '../utils/fetcher';
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subCategories, setSubCategories] = useState<any>();

  useEffect(() => {
    fetcherGet(`categories/subCategory/6ac583ed-76c9-419a-9b2f-df3290cf6bc1`).then((data) => setSubCategories(data));
  }, []);

  return (
    <div className={` ${open ? 'w-72' : 'w-20 '} bg-sky-100 h-screen p-5  pt-8 relative duration-300`}>
      <img
        src=""
        className={`absolute cursor-pointer -left-3 top-9 w-7 border-dark-purple 
           border-2 rounded-full  ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img src="" className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
        <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>Designer</h1>
      </div>
      <div className="pt-6">
        {subCategories?.map((category: any) => (
          <div
            key={category._id}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              `}
          >
            <img src={category.imageUrl} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
