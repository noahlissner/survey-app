import React from "react";
import { IoChevronForward } from "react-icons/io5";

interface Props {
  title: string;
  onClick: any;
  active: string;
}

const SettingsNavLink: React.FC<Props> = ({ title, onClick, active }) => {
  return (
    <li
      className={`w-fit flex items-center gap-3 cursor-pointer duration-150 ${
        active === title
          ? "ml-[-32px] text-black dark:text-white"
          : "text-gray-400 dark:text-gray-100 hover:text-black dark:hover:text-white"
      }`}
      onClick={onClick}
    >
      {active === title && <IoChevronForward color="#1D90F5" size={20} />}
      {title}
    </li>
  );
};

export default SettingsNavLink;
