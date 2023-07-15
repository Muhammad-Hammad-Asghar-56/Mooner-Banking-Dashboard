import React from "react";

const Navbar = (props) => {
  const {classes}=props;
  return (
    <div className={` text-white h-full gap-8 flex flex-col justify-center items-center ${classes}`}>
      <div className="flex flex-row gap-2 justify-center align-center">
        <h1 className="font-bold text-3xl">
          Mo<span className="text-black">nn</span>er
        </h1>
      </div>
      <div class="w-full" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:mt-0 md:border-0 ">
          <li className="hidden">
            <a
              href="#"
              class="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-white"
            >
              <div className="">Contact</div>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block py-2 pl-4  text-gray-900 rounded-l-3xl hover:bg-gray-100 md:hover:bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-white"
            >
              <div className="flex flex-row py-2 pl-4">
                <svg
                  className={`w-6 h-6 mr-4 text-gray-800 hover:text-gray-0 dark:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                  />
                </svg>
                <span className="hidden md:block lg:block"> DashBoard </span>
              </div>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block py-2   text-gray-900 rounded-l-3xl  hover:bg-gray-100 md:hover:bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-white"
            >
              <div className="flex flex-row py-2 pl-4">
                <svg
                  className="w-6 h-6 mr-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 11 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"
                  />
                </svg>
                <span className="hidden md:block lg:block"> Pricing</span>
              </div>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block py-2 pl-4  text-gray-900 rounded-l-3xl  hover:bg-gray-100 md:hover:bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-white"
            >
              <div className="flex flex-row py-2 pl-4">
                <svg
                  className="w-6 h-6 mr-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M1 1v14h16m0-9-3-2-3 5-3-2-3 4"
                  />
                </svg>
                <span className="hidden md:block lg:block"> Stats</span>
              </div>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block py-2 pl-4  text-gray-900 rounded-l-3xl  hover:bg-gray-100 md:hover:bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-white"
            >
              <div className="flex flex-row py-2 pl-4">
                <svg
                  className="w-6 h-6 mr-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                  />
                </svg>
                <span className="hidden md:block lg:block"> Contact</span>
              </div>
            </a>
          </li>

          <li>
            <a
              href="#"
               class="block py-2 text-gray-900 rounded-l-3xl  hover:bg-gray-100 md:hover:bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-white"
            >
              <div className="flex flex-row py-2 pl-4">
                <svg
                  className="w-6 h-6 mr-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706"
                  />
                </svg>
                <span className="hidden md:block lg:block"> About</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;



