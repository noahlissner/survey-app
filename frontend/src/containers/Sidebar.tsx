import SidebarItem from "../components/SidebarItem";
import {
  IoGrid,
  IoFolder,
  IoSettings,
  IoExtensionPuzzle,
} from "react-icons/io5";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="min-w-[100px] max-w-[100px] md:min-w-[220px] md:max-w-[220px] bg-blue-300 dark:bg-blue-850">
      <section className="w-full">
        <div>
          <h1 className="text-3xl pt-10 px-5 font-semibold text-black dark:text-white">
            LOGO
          </h1>
        </div>
        <nav className="mt-10 flex flex-col w-full justify-between">
          <SidebarItem page="" title="Dashboard" icon={<IoGrid />} />
          <SidebarItem page="surveys" title="Surveys" icon={<IoFolder />} />
          <SidebarItem
            page="quizes"
            title="Quizes"
            icon={<IoExtensionPuzzle />}
          />
          <SidebarItem page="settings" title="Settings" icon={<IoSettings />} />
        </nav>
      </section>
    </div>
  );
};
export default Sidebar;
