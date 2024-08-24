import React from "react";

const Trading = () => {
  return (
    <div className="border border-bordercolor p-4 rounded-xl w-full">
      <h1 className="text-sm">Trading Accounts</h1>
      {[1, 2].map((i) => (
        <div key={i} className="border p-2 border-[#EAECF0] rounded-xl mt-3">
          <h1 className="text-[12px] font-semibold">Master Account</h1>
          <div className="flex gap-2 items-center my-3">
            <p className="text-[12px] bg-[#F2F4F7] px-2 py-1 rounded-3xl">
              CTrader
            </p>
            <span className="text-[12px] text-[#667085]">#273728</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <h1 className="text-[2rem] font-bold">0.00</h1>
              <span>USD</span>
            </div>
            <img src="arrowup.svg" alt="arrow" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trading;
