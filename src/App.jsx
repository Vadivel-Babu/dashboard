import React from "react";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import QuickLinks from "./components/QuickLinks";

const App = () => {
  return (
    <div className="font-inter text-lightblack flex">
      <Sidebar />
      <div className=" w-full">
        <Searchbar />
        <div>
          <QuickLinks />
        </div>
      </div>
    </div>
  );
};

export default App;
