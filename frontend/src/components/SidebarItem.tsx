import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  icon: any;
  onClick: any;
}

const SidebarItem = ({ onClick, title, icon }: IProps) => {
  return (
    <Link
      className="w-full flex relative py-6  hover:bg-blue-100 dark:hover:bg-blue-700"
      to="#"
      onClick={onClick}
    >
      <div className="flex gap-6 items-center ml-10">
        {icon}
        <span>{title}</span>
      </div>
    </Link>
  );
};
export default SidebarItem;
