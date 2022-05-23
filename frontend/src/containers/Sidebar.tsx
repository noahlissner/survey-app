import SidebarItem from "../components/SidebarItem";
import { IoGrid, IoFolder, IoSettings } from "react-icons/io5";

const Sidebar = ({ onClick }: any) => {
  return (
    <div className="max-w-[300px] flex-1 bg-blue-300 dark:bg-blue-850">
      <section className="w-full">
        <div>
          <h1 className="text-3xl pt-10 px-5 font-semibold text-black dark:text-white">
            LOGO
          </h1>
        </div>
        <nav className="mt-10 flex flex-col w-full justify-between text-black dark:text-white">
          <SidebarItem onClick={onClick} title="Dashboard" icon={<IoGrid />} />
          <SidebarItem onClick={onClick} title="Surveys" icon={<IoFolder />} />
          <SidebarItem
            onClick={onClick}
            title="Settings"
            icon={<IoSettings />}
          />
        </nav>
      </section>
    </div>
  );
};
export default Sidebar;
