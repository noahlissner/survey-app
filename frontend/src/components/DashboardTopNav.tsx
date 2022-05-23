import { IoNotificationsOutline } from "react-icons/io5";
import Switcher from "./Switcher";
import { useSelector } from "react-redux";

const DashboardTopNav = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <section className="flex gap-5 items-center justify-end w-full p-4 text-black dark:text-white">
      <IoNotificationsOutline size={20} />
      <div className="flex items-center">
        {/* <IoPersonCircle size={25} /> */}
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
      <Switcher />
    </section>
  );
};
export default DashboardTopNav;
