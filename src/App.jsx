import React from "react";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import QuickLinks from "./components/QuickLinks";
import Chart from "./components/Chart";

const App = () => {
  return (
    <div className="font-inter text-lightblack flex">
      <Sidebar />
      <div className=" w-full">
        <Searchbar />
        <div className="max-w-[49.5rem]">
          <QuickLinks />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default App;
