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
      <div className="mx-auto text-5xl my-3 font-semibold ">Dashboard</div>
      <div>
        <img
          src={currentUser.profilePhoto}
          alt="profilePhoto"
          className="w-[100px] h-[100px] rounded-full border border-gray-700 dark:border-gray-300"
        ></img>
      </div>
        <div>
          {currentUser.userName}
        </div>
        <div className="my-3 flex gap-2">
          <div className="w-[150px] h-[150px] bg-blue-500 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-900 rounded-lg shadow-xl flex flex-col items-center justify-center">
            <div className="text-5xl text-white my-2">
              {currentUser.follower.length}
            </div>
            <div className="text-xl text-white">
              Follower
            </div>
          </div>
          <div className="w-[150px] h-[150px] bg-red-500 dark:bg-red-600 hover:bg-red-800 dark:hover:bg-red-900 rounded-lg shadow-xl flex flex-col items-center justify-center">
            <div className="text-5xl text-white my-2">
              {currentUser.following.length}
            </div>
            <div className="text-xl text-white">
              Following
            </div>
          </div>
        </div>
        <div className="h-[80px] w-[300px] bg-gray-500 hover:bg-gray-800 rounded-lg shadow-xl">
          <div className="h-full w-full flex justify-center items-center text-3xl text-white">
            Post Count: {currentUser.posts.length}
          </div>
        </div>
    </div>
  );
};

export default DashDashboard;
