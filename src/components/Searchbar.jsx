import React from "react";
import SearchSvg from "../svg/SearchSvg";
import SearchNotificationSvg from "../svg/SearchNotificationSvg";

const Searchbar = () => {
  return (
    <div className="bg-lightgray flex items-center p-5 w-full justify-between border-b-[1px] border-bordercolor">
      <h1 className="text-lightblack text-lg">Dashboard</h1>
      <div className="flex items-center gap-3">
        <div className="flex items-center border p-2 gap-2 rounded-lg border-[#EAECF0]">
          <SearchSvg />
          <input
            type="text"
            name="search"
            className="outline-none"
            placeholder="Search..."
            id=""
          />
        </div>
        <SearchNotificationSvg />
      </div>
    </div>
  );
};

export default Searchbar;
