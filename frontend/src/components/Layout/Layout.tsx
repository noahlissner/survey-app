import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import Sidebar from "../../containers/Sidebar";
import { fetchSurveys } from "../../features/surveys/surveySlice";
import DashboardTopNav from "../DashboardTopNav";

const Layout = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  if (!user) {
    return <Navigate to="/landing" replace />;
  }

  useEffect(() => {
    dispatch(fetchSurveys());
  });

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-800">
        <DashboardTopNav />
        <section className="flex-1 w-full overflow-y-scroll">
          <Outlet></Outlet>
        </section>
      </main>
    </div>
  );
};

export default Layout;
