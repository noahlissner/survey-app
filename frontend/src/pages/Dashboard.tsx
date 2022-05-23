import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { AppDispatch } from "../app/store";

const Dashboard = () => {
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

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
export default Dashboard;
