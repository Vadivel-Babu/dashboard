import React from "react";
import DashboardSvg from "../svg/DashboardSvg";
import CrmSvg from "../svg/CrmSvg";
import MAMSvg from "../svg/MAMSvg";
import PAMMSvg from "../svg/PAMMSvg";
import TradeSvg from "../svg/TradeSvg";
import WalletSvg from "../svg/WalletSvg";
import AccountSvg from "../svg/AccountSvg";
import HistorySvg from "../svg/HistorySvg";
import NotificationSvg from "../svg/NotificationSvg";
import SettingSvg from "../svg/SettingSvg";
import HelpSvg from "../svg/HelpSvg";
import LogoutSvg from "../svg/LogoutSvg";
const Sidebar = () => {
  return (
    <nav className=" bg-violet text-white w-[70px]  md:w-[245px] py-9">
      <div>
        <img
          src="name.svg"
          alt="logo"
          className="hidden md:inline-block w-50 py-4 px-5"
        />
        <h1 className="text-green text-xl text-center p-2 inline-block md:hidden">
          DD
        </h1>
      </div>
      <ul className="flex flex-col gap-2 mt-2">
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <DashboardSvg />
          <p className=" hidden md:inline-block group-hover:text-green transition ease-in-out">
            Dashboard
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <CrmSvg />
          <p className="hidden md:inline-block group-hover:text-green transition ease-in-out">
            CRM
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <MAMSvg />
          <p className=" hidden md:inline-block group-hover:text-green transition ease-in-out">
            MAM
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <PAMMSvg />
          <p className="hidden md:inline-block group-hover:text-green transition ease-in-out">
            PAMM
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <TradeSvg />
          <p className="hidden md:inline-block group-hover:text-green transition ease-in-out">
            Trade
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <WalletSvg />
          <p className="hidden md:inline-block group-hover:text-green transition ease-in-out">
            Wallet
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <AccountSvg />
          <p className=" hidden md:inline-block group-hover:text-green transition ease-in-out">
            Accounts
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <HistorySvg />
          <p className="hidden md:inline-block group-hover:text-green transition ease-in-out">
            History
          </p>
        </li>
      </ul>
      <ul className="flex flex-col gap-2 mt-20 py-3">
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <NotificationSvg />
          <p className="hidden md:inline-block group-hover:text-green transition ease-in-out">
            Notifications
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <SettingSvg />
          <p className="hidden md:inline-block group-hover:text-green transition ease-in-out">
            Settings
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <HelpSvg />
          <p className="hidden md:inline-block group-hover:text-green transition ease-in-out">
            Help & Support
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <LogoutSvg />
          <p className="hidden md:inline-block group-hover:text-green transition ease-in-out">
            Logout
          </p>
        </li>
      </ul>
      <hr />
      <div className="py-2 ">
        <div className="flex gap-2 items-center px-3">
          <img src="user.svg" alt="user" />
          <div className="hidden md:inline-block">
            <h1>Shyam Shakur</h1>
            <p className="text-sm">
              {"shyam01.shankur@mail.com".slice(0, 17)}...
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
