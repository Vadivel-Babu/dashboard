import React from "react";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

const App = () => {
  return (
    <div className="font-inter text-lightblack flex">
      <Sidebar />
      <div className=" w-full">
        <Searchbar />
      </div>
    </div>
  );
};

export default App;
