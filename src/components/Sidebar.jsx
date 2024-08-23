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
    <nav className=" bg-violet text-white w-max py-9">
      <div>
        <img src="name.svg" alt="logo" className="w-50 py-4 px-5" />
      </div>
      <ul className="flex flex-col gap-2 mt-2">
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <DashboardSvg />
          <p className="group-hover:text-green transition ease-in-out">
            Dashboard
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <CrmSvg />
          <p className="group-hover:text-green transition ease-in-out">CRM</p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <MAMSvg />
          <p className="group-hover:text-green transition ease-in-out">MAM</p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <PAMMSvg />
          <p className="group-hover:text-green transition ease-in-out">PAMM</p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <TradeSvg />
          <p className="group-hover:text-green transition ease-in-out">Trade</p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <WalletSvg />
          <p className="group-hover:text-green transition ease-in-out">
            Wallet
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <AccountSvg />
          <p className="group-hover:text-green transition ease-in-out">
            Accounts
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <HistorySvg />
          <p className="group-hover:text-green transition ease-in-out">
            History
          </p>
        </li>
      </ul>
      <ul className="flex flex-col gap-2 mt-20 py-3">
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <NotificationSvg />
          <p className="group-hover:text-green transition ease-in-out">
            Notifications
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <SettingSvg />
          <p className="group-hover:text-green transition ease-in-out">
            Settings
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <HelpSvg />
          <p className="group-hover:text-green transition ease-in-out">
            Help & Support
          </p>
        </li>
        <li className="group flex items-center gap-3 pl-3 pr-5 py-2 transition ease-in-out hover:bg-gradient cursor-pointer hover:border-r-4 border-green">
          <LogoutSvg />
          <p className="group-hover:text-green transition ease-in-out">
            Logout
          </p>
        </li>
      </ul>
      <hr />
      <div className="py-2 ">
        <div className="flex gap-2 items-center px-3">
          <img src="user.svg" alt="user" />
          <div>
            <h1>Shyam Shakur</h1>
            <p>{"shyam01.shankur@mail.com".slice(0, 17)}...</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
