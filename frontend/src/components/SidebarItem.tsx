import { IconType } from "react-icons";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { currentPage } from "../features/page/pageSlice";
import { AppDispatch, RootState } from "../app/store";

interface IProps {
  title: string;
  icon: any;
}

const SidebarItem = ({ title, icon }: IProps) => {
  const activePage = useSelector((state: RootState) => state.page.value);

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e: any) => {
    dispatch(currentPage(e.target.outerText));
  };

  return (
    <Link
      className={`w-full flex relative py-6 hover:bg-blue-100 dark:hover:bg-blue-700
      ${
        title === activePage
          ? "text-black dark:text-white bg-blue-100 dark:bg-blue-700"
          : "text-gray-400 dark:text-gray-100"
      }`}
      to="#"
      onClick={handleClick}
    >
      <div className="flex gap-6 items-center ml-10">
        {icon}
        <span>{title}</span>
      </div>
    </Link>
  );
};
export default SidebarItem;
