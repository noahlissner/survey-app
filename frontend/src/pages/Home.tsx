import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../containers/Sidebar";
import DashboardTopNav from "../components/DashboardTopNav";
import Settings from "../containers/Settings";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { AppDispatch, RootState } from "../app/store";

const Home = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const currentPage = useSelector((state: RootState) => state.page.value);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-800">
        <DashboardTopNav />
        <section className="flex-1 w-full">
          {currentPage === "Dashboard" && (
            <h1 className="text-6xl text-white">Dashboard</h1>
          )}
          {currentPage === "Surveys" && (
            <h1 className="text-6xl text-white">Surveys</h1>
          )}
          {currentPage === "Quizes" && (
            <h1 className="text-6xl text-white">Quizes</h1>
          )}
          {currentPage === "Settings" && <Settings />}
        </section>
      </main>
      {/* <button onClick={onLogout}>Logout</button> */}
    </div>
  );
};
export default Home;
