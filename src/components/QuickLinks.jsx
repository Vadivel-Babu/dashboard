import React from "react";

const QuickLinks = () => {
  const links = [
    {
      title: "deposit",
      svg: "arrowdown.svg",
    },
    {
      title: "withdraw",
      svg: "arrowup.svg",
    },
    {
      title: "settings",
      svg: "settings.svg",
    },
    {
      title: "verification",
      svg: "verification.svg",
    },
    {
      title: "Bonuses",
      svg: "star.svg",
    },
    {
      title: "MT5",
      svg: "line-chart.svg",
    },
    {
      title: "Transfer",
      svg: "arrow.svg",
    },
    { title: "history", svg: "history.svg" },
    { title: "partner", svg: "partner.svg" },
    { title: "Exchange", svg: "exchange.svg" },
    { title: "analytics", svg: "analytics.svg" },
  ];
  return (
    <div className=" p-3 border border-bordercolor rounded-xl">
      <h1 className="text-sm">QuickLinks</h1>
      <div className="flex flex-wrap gap-2 mt-3">
        {links.map((link, i) => (
          <div
            key={i}
            className="bg-lightgray p-3 rounded-lg flex flex-col justify-between gap-2 items-center border border-[#F9FAFB] w-[6.4rem] cursor-pointer transition-all hover:bg-white hover:shadow-lg"
          >
            <img src={link.svg} alt={link.title} />

            <p className="text-sm capitalize">{link.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
