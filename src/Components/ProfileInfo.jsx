import React from 'react'
import profilePic from "../Asserts/profileImg.png"
import verified from "../Asserts/verified.png"
import TransactionHistory from "./Graphs/TransactionHistory";

const ProfileInfo = (props) => {
    const {classes}=props;
    return (
        <div className={`${classes} bg-white text-gray-600 px-10 py-6 rounded-t-xl rounded-b-xl`}>

            <div id="Profile" className="pb-6 flex-1 flex border-b border-gray-200 mt-10 flex-col justify-center items-center">
                <h1 className="font-bold text-4xl">My Profile</h1>
                <img className="my-2" src={profilePic} height={"100px"} width={"100px"} alt="" />
                <h1 className="text-xl font-semibold">Muhammad Hammad Asghar</h1>
                <div className="flex flex-row items-center gap-2">
                    <div>Pro Account</div>
                    <img src={verified} height={30} width={30} alt="" />
                </div>
                <div className="flex my-2 flex-row">
                    <button class=" text-gray-600 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <span class="  px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                            <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279" />
                            </svg>
                        </span>
                    </button>

                    <button class=" text-gray-600 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <span class="  px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                            GO Full Profile
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex-1 mt-4">
                <h1 className="text-xl font-bold">Your last transaction</h1>
                <TransactionHistory title={"Abdr"} amount={"$ 1700"} lastDate={"12 Feb 2023"} status={"Sent"} />
                <TransactionHistory title={"Talha Ijlal"} amount={"$ 3010"} lastDate={"29 Jun 2019"} status={"Recived"} />
                <TransactionHistory title={"Hammad Ejaz"} amount={"$ 1150"} lastDate={"01 July 2023"} status={"Recived"} />
            </div>
        </div>
    )
}

export default ProfileInfo
