import { IoNotificationsOutline, IoPersonCircle } from "react-icons/io5";
import Switcher from "./Switcher";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../app/store";
import { logout, reset } from "../features/auth/authSlice";

const DashboardTopNav = () => {
  const [showUser, setShowUser] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const { user } = useSelector((state: any) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const userClick = () => {
    setShowUser(!showUser);
    setShowNotification(false);
  };

  const notificationClick = () => {
    setShowNotification(!showNotification);
    setShowUser(false);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <section className="flex justify-end w-full p-4 text-black dark:text-white">
      <div className="flex items-center gap-5">
        <div
          onClick={notificationClick}
          className={`${
            showNotification ? "bg-red-400" : "bg-transparent"
          } border-[2px] border-transparent hover:border-red-400 p-3 rounded-xl cursor-pointer duration-150`}
        >
          <IoNotificationsOutline size={20} />
        </div>

        <div
          onClick={userClick}
          className={`${
            showUser ? "bg-blue-400" : "bg-transparent"
          } flex items-center gap-2 border-[2px] border-transparent hover:border-blue-400 p-2 rounded-xl cursor-pointer duration-150`}
        >
          {/* <IoPersonCircle size={25} /> */}
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt=""
            className="h-8 rounded-full"
          />
          <p>
            {user.firstName} {user.lastName}
          </p>
        </div>
      </div>
      <div
        className={`${
          showUser ? "flex" : "hidden"
        } absolute bg-white dark:bg-black top-20 p-14 flex-col items-center gap-10 rounded-xl`}
      >
        <Switcher />
        <button
          className="bg-blue-400 hover:bg-blue-450 active:scale-[0.97] duration-150 py-2 px-6 text-white rounded-full"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      <div
        className={`${
          showNotification ? "flex" : "hidden"
        } absolute bg-white dark:bg-black top-20 p-16 flex-col items-center rounded-xl`}
      >
        <h3>Notifications</h3>
      </div>
    </section>
  );
};
export default DashboardTopNav;
