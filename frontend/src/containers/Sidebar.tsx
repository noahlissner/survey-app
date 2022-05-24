import SidebarItem from "../components/SidebarItem";
import {
  IoGrid,
  IoFolder,
  IoSettings,
  IoExtensionPuzzle,
} from "react-icons/io5";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="max-w-[300px] flex-1 bg-blue-300 dark:bg-blue-850">
      <section className="w-full">
        <div>
          <h1 className="text-3xl pt-10 px-5 font-semibold text-black dark:text-white">
            LOGO
          </h1>
        </div>
        <nav className="mt-10 flex flex-col w-full justify-between">
          <SidebarItem title="Dashboard" icon={<IoGrid />} />
          <SidebarItem title="Surveys" icon={<IoFolder />} />
          <SidebarItem title="Quizes" icon={<IoExtensionPuzzle />} />
          <SidebarItem title="Settings" icon={<IoSettings />} />
        </nav>
      </section>
    </div>
  );
};
export default Sidebar;
