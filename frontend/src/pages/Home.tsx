import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoNotificationsOutline, IoPersonCircle } from "react-icons/io5";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { AppDispatch } from "../app/store";
import Sidebar from "../containers/Sidebar";
import Switcher from "../components/Switcher";
import DashboardTopNav from "../components/DashboardTopNav";

const Home = () => {
  const { user } = useSelector((state: any) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const handleClick = (e: any) => {
    console.log(e.target.name);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onClick={handleClick} />
      <main className="flex-1 flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-800">
        <DashboardTopNav />
        <section className="flex-1"></section>
      </main>
      {/* <button onClick={onLogout}>Logout</button> */}
    </div>
  );
};
export default Home;
