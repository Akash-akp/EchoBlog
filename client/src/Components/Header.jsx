import { React , useState } from "react";
import { Link , NavLink , useLocation } from "react-router-dom"
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useDispatch , useSelector } from 'react-redux';
import { changeMode } from '../Redux/user/darkSlice'

const Header = () => {
    const [profileDropdown , setProfileDropdown] = useState(false);
    const location = useLocation();
    const { mode:darkMode } = useSelector(state => state.dark);
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
  console.log(darkMode);
    const navLinkClickHandler = (path) =>{
        return location.pathname===path?('block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'):("block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700");
    }

    const darkModeHandler = () => {
        dispatch(changeMode());
    }

    const searchHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className="">
      <nav className="bg-white dark:bg-gray-900 relative w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to='/'>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                EchoBlog
                </span>
            </Link>
            <form onSubmit={searchHandler} className="flex items-center">   
                <div className="relative lg:w-[200px] w-[40px]">
                    <input 
                    type="text" 
                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-full lg:rounded-lg focus:ring-blue-500 focus:border-blue-500 hidden lg:block lg:w-[180px]  lg:pl-3 lg:pr-8 py-2 dark:bg-gray-700 dark:border-gray-600 placeholder:text-transparent lg:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search..." 
                    />
                    <div className="lg:hidden h-[30px] w-[30px] border border-gray-300 rounded-full">

                    </div>
                    {/* Search Icon */}
                    <button type="button" className="absolute text-lg lg:right-7 lg:top-[10px] right-[16px] top-[6px] text-gray-700 dark:text-gray-400 flex items-center">
                        <CiSearch />
                    </button>
                </div>
            </form>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
            <button onClick={darkModeHandler} className=" h-[30px] w-[30px] flex justify-center items-center rounded-full text-sm border text-gray-800 dark:text-gray-300 dark:border-gray-300 border-gray-800 ">
                {darkMode?(<MdSunny />):(<IoMdMoon />)}
            </button>
            {currentUser?
            (<div className="max-w-[1280px] relative">
              <button onClick={()=>setProfileDropdown(!profileDropdown)}>
                <img src={currentUser.profilePhoto} alt="user-img" className="h-[40px] w-[40px] rounded-full border border-black dark:border-white"/>
              </button>
              <div class={(profileDropdown?("absolute top-[50px] right-0 "):("hidden "))+" bg-white rounded-lg shadow dark:bg-gray-900 border dark:border-gray-700"}>
                   <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="mb-2">
                        <Link class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Dashboard</Link>
                    </li>
                    <div className="h-[1px] w-[90%] mx-auto bg-gray-300 dark:bg-gray-500"></div>
                    <li className="mt-2">
                        <Link class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Log Out</Link>
                    </li>
                   </ul>
               </div>
            </div>)
            :
            (<div className="flex gap-3">
              <Link to='/sign-up' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Register
            </Link>
            <Link to='/sign-in' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login
            </Link>
            </div>)
            }
            
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to='/' className={navLinkClickHandler('/')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/blog' className={navLinkClickHandler('/blog')}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to='/project' className={navLinkClickHandler('/project')}>
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' className={navLinkClickHandler('/contact')}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
