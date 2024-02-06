import React from "react";
import { CiSearch } from "react-icons/ci";

const BlogSideBar = ({setCreateBlogUI}) => {
  return (
    <div className="w-[300px] p-5 h-full bg-lightBgColor dark:bg-gray-800 flex flex-col items-center shadow-2xl">
      <div className="sticky top-5">
        <form onSubmit={()=>{}} className="flex items-center relative">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 pr-10 py-3 dark:bg-gray-900 dark:border-gray-600 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
            {/* Search Icon */}
            <button
              type="button"
              className="absolute text-lg right-4 top-[14px] text-gray-700 dark:text-gray-400 flex items-center"
            >
              <CiSearch />
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-2 items-start justify-start w-[80%] mt-5 dark:text-white">
          <div className="text-2xl font-medium">
            Category:
          </div>
          <div>
            <input id="politics" type="checkbox" />
            <label htmlFor="politics"> Politics </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> National </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Health </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Tech </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Others </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-[80%] mt-5 dark:text-white">
          <div className="text-2xl font-medium">
            Sorted By:
          </div>
          <div>
            <input id="" type="checkbox" />
            <label htmlFor=""> Recently Posted </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Most Liked </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Trending </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Most viewed </label>
          </div>
          <div>
            <input type="checkbox" />
            <label> Most Followed </label>
          </div>
        </div>

        <button onClick={()=>setCreateBlogUI(true)} className={` dark:text-white dark:bg-gray-600 my-5 block text-xl font-medium m-2 py-2 w-[90%] rounded-lg text-center border border-gray-400 hover:bg-white dark:border-gray-800 dark:hover:bg-gray-900 bg-gray-300 `}>
          Create Post
        </button>

      </div>

    </div>
  );
};

export default BlogSideBar;
