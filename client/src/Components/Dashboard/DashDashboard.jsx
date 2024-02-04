import React, { useState } from "react";
import { useSelector } from "react-redux";

const DashDashboard = () => {
    const { currentUser } = useSelector(state => state.user);
    const [userName , setUserName] = useState(currentUser.userName);

    const inputChangeHandler = (event) => {
        setUserName(event.target.value);
    }
  return (
    <div className="flex flex-col items-center my-5 dark:text-white ">
      <div className="mx-auto text-5xl my-3 font-semibold ">Profile</div>
      <div>
        <img
          src={currentUser.profilePhoto}
          alt="profilePhoto"
          className="w-[100px] h-[100px] rounded-full border border-gray-700 dark:border-gray-300"
        ></img>
      </div>
      <div>
        <form>
          <div className="flex gap-2 text-2xl mt-5 items-center">
            <div className="font-semibold w-[210px]">User Name :</div>
            <input
              onChange={inputChangeHandler}
              className="bg-gray-300 dark:bg-gray-600 px-2 py-1 font-thin rounded-lg w-[330px]"
              value={userName}
            />
          </div>
          <div className="flex gap-2 text-2xl mt-5 items-center">
            <div className="font-semibold w-[210px]">Email Id :</div>
            <div className="dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]">
              {currentUser.email}
            </div>
          </div>
          <div className="flex gap-2 text-2xl mt-5 items-center">
            <div className="font-semibold w-[210px]">User Id :</div>
            <input
              type="text"
              className="dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]"
              required
            />
          </div>
          <div className="flex gap-2 text-2xl mt-5 items-center">
            <div className="font-semibold w-[210px]">Change Password :</div>
            <input
              type="password"
              className="dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]"
              required
            />
          </div>
          <div className="flex gap-2 text-2xl mt-5 items-center">
            <div className="font-semibold w-[210px]">Confirm Password :</div>
            <input
              type="password"
              className="dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]"
              required
            />
          </div>
          <div className="text-center my-5">
            <button className="text-white rounded-lg w-[100px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashDashboard;
