import React from 'react'
import Analytics from "./Graphs/Analytics";
import RadialAnalytics from "./Graphs/RadialAnalytics";
import SparkArea from "./Graphs/SparkArea";

const Stats = (props) => {
  const {classes}=props;
    return (
    <div className={`${classes} mt-6`}>
            <div class="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <div class="bg-white rounded-t-xl rounded-b-xl py-4 px-2 row-span-2 ">
                <Analytics />
              </div>
              <div class="bg-white rounded-t-xl rounded-b-xl p-2"><SparkArea /></div>
              <div class="bg-white rounded-t-xl rounded-b-xl p-2 row-span-2">
                <RadialAnalytics />
              </div>
              <div class="bg-white flex flex-col items-center  rounded-t-xl rounded-b-xl p-4">
                <span className="my-2">Safely Widthdrawal your money anywhere</span>
                <button class=" text-gray-600 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <span class="  px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    Withdrawal
                  </span>
                </button>
              </div>
            </div>

          </div>
  )
}
export default Stats;