import React, { useState } from 'react'
import profile from "../Asserts/profileImg.png"
import ProfileInfo from './ProfileInfo';
const DashBoardHeader = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [ProfileShow, setProfileShow] = useState(false);

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className={`flex justify-between flex-col-reverse md:flex-row lg:flex-row`}>
      <div className="flex-1 ">
        <h1 className="text-3xl">
          <span className="font-bold">Hello! </span> M H Asghar &#x1F44B;
        </h1>
      </div>
      <div className="flex mb-4 justify-between items-center">
        <div className='text-gray-300 sm:block md:hidden lg:hidden'>
          <h1 className="font-bold text-3xl">
            Mo<span className="text-black">nn</span>er
          </h1>
        </div>
        <div className='flex justify-end items-center'>
          {openSearch && (
            <div className="">
              <input
                type="search"
                id="default-search"
                className="absolute top-15 left-0 block p-2 mr-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  "
                placeholder="Search ..."
              />
            </div>
          )}
          <button
            type="button"
            onClick={toggleSearch}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-2"
          >
            {
              openSearch ? <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg> : <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            }
          </button>
          <svg class="w-6 mx-4 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15.133 10.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.944.944 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.39A1.001 1.001 0 1 1 4.854 3.8a7.431 7.431 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 15.146 3.8a1 1 0 0 1 1.471-1.354 9.425 9.425 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z" />
          </svg>
          <img className={`block md:hidden lg:hidden`} src={profile} onClick={() => { setProfileShow(!ProfileShow) }} width={40} height={40} alt="" />
        </div>
      </div>
      {ProfileShow ? <ProfileInfo classes={"block overflow-scroll z-10 h-2/3 absolute top-10 right-10 md:hidden lg:hidden"} /> : ""}
    </div>
  )
}

export default DashBoardHeader
