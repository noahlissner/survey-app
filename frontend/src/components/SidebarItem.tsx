import { IconType } from "react-icons";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { currentPage } from "../features/page/pageSlice";
import { AppDispatch, RootState } from "../app/store";
import React, { useEffect } from "react";

interface Props {
  title: string;
  icon: any;
  page: string;
}

console.log(window.location.href.split("/")[3]);

const SidebarItem: React.FC<Props> = ({ title, icon, page }) => {
  const activePage = useSelector((state: RootState) => state.page.value);

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e: any) => {
    dispatch(currentPage(page));
  };

  useEffect(() => {
    dispatch(currentPage(window.location.href.split("/")[3]));
  }, []);

  return (
    <Link
      className={`w-full flex relative py-6 hover:bg-blue-100 dark:hover:bg-blue-700
      ${
        page === activePage
          ? "text-black dark:text-white bg-blue-100 dark:bg-blue-700"
          : "text-gray-400 dark:text-gray-100"
      }`}
      to={`/${page}`}
      onClick={handleClick}
    >
      <div className="flex gap-6 items-center ml-10">
        {icon}
        <span className="hidden md:block">{title}</span>
      </div>
    </Link>
  );
};
export default SidebarItem;
