import React from "react";

const Trades = () => {
  return (
    <div className="border border-bordercolor p-4 rounded-xl w-full mt-3">
      <h1 className="text-sm">Open Trades</h1>
      <div className="border border-[#EAECF0] rounded-xl px-4 py-3 mt-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-[#667085] text-xs">GBPUSD</h1>
            <p className="py-1 px-3 rounded-3xl bg-[#EBFFEE] text-xs">Long</p>
          </div>
          <p className="text-[#667085] text-xs">0.12</p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <h1 className="text-[2rem] text-[#14AE5C] font-bold">+56.00</h1>
          <span>USD</span>
        </div>
      </div>
      <div className="border border-[#EAECF0] rounded-xl px-4 py-3 mt-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-[#667085] text-xs">USDJPY</h1>
            <p className="py-1 px-3 rounded-3xl bg-[#EBFFEE] text-xs">Long</p>
          </div>
          <p className="text-[#667085] text-xs">0.12</p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <h1 className="text-[2rem] text-[#EC221F] font-bold">-0.09</h1>
          <span>USD</span>
        </div>
      </div>
      <div className="border border-[#EAECF0] rounded-xl px-4 py-3 mt-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-[#667085] text-xs">EURUSD</h1>
            <p className="py-1 px-3 rounded-3xl bg-[#FEE9E7] text-xs">short</p>
          </div>
          <p className="text-[#667085] text-xs">0.12</p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <h1 className="text-[2rem] text-[#EC221F] font-bold">-1.09</h1>
          <span>USD</span>
        </div>
      </div>
    </div>
  );
};

export default Trades;
