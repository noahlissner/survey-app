import Dashboard from "../containers/Dashboard";
import React from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../containers/Sidebar";
import DashboardTopNav from "../components/DashboardTopNav";
import Settings from "../containers/Settings/Settings";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Surveys from "../containers/Surveys";

const Home: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const currentPage = useSelector((state: RootState) => state.page.value);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-800">
        <DashboardTopNav />
        <section className="flex-1 w-full overflow-y-scroll">
          {currentPage === "Dashboard" && <Dashboard />}
          {currentPage === "Surveys" && <Surveys />}
          {currentPage === "Quizes" && (
            <h1 className="text-6xl text-white">Quizes</h1>
          )}
          {currentPage === "Settings" && <Settings />}
        </section>
      </main>
    </div>
  );
};
export default Home;
