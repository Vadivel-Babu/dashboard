import React from "react";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import QuickLinks from "./components/QuickLinks";
import Chart from "./components/Chart";
import Trading from "./components/Trading";
import Trades from "./components/Trades";

const App = () => {
  return (
    <div className="font-inter text-lightblack flex overflow-hidden">
      <Sidebar />
      <div className=" w-full">
        <Searchbar />
        <div className="p-2 flex gap-5 flex-wrap">
          <div className="max-w-[49.5rem]">
            <QuickLinks />
            <Chart />
          </div>
          <div className="w-full md:w-[20rem]">
            <Trading />
            <Trades />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
