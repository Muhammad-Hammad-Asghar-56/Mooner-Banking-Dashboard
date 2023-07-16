import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import Stats from "./Stats";
import BalanceCard from "./BalanceCard";
import ProfileInfo from "./ProfileInfo";

const Dashboard = () => {

  return (
    <div className="my-6 mx-6">

      <DashBoardHeader/>
      <div className="mt-6 flex flex-row justify-between h-full w-full">
        <div className="md:w-2/3 lg:w-2/3 mr-6 sm:w-full">
          <BalanceCard />
          <Stats />
        </div>

        <div className="hidden w-2/6 md:block lg:block">
          <ProfileInfo/>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
