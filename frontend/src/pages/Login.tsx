import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { IoEyeOutline, IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { AppDispatch } from "../app/store";
import Navigation from "../components/Navigation";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div className="relative overflow-hidden h-screen w-screen bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-800 flex justify-center">
      <Navigation />
      <main className="h-full w-full max-w-[1200px] p-5 sm:p-0 sm:w-9/12 flex justify-center flex-col">
        <h1 className="font-semibold text-4xl sm:text-6xl mb-5 sm:mb-7 dark:text-white">
          Login to your account
          <span className="text-blue-400 text-4xl sm:text-6xl">.</span>
        </h1>
        <div className="flex gap-2 mb-12 font-medium">
          <p className="text-gray-400 dark:text-gray-500">Not a member?</p>
          <Link to="/register" className="text-blue-400">
            Register
          </Link>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center max-w-[473px]"
        >
          <div className="flex flex-col items-center gap-5 w-full">
            <Input
              onChange={onChange}
              value={email}
              name="email"
              label="Email"
              type="text"
              icon={
                <IoMailOutline
                  size={20}
                  className="text-black dark:text-white"
                />
              }
            />
            <Input
              onChange={onChange}
              value={password}
              label="Password"
              name="password"
              type="password"
              icon={
                <IoEyeOutline
                  size={20}
                  className="text-black dark:text-white"
                />
              }
            />
          </div>
          <Button value="Login" />
        </form>
      </main>
      <img
        className="absolute h-[70rem] bottom-[-15rem] right-[-15rem] pointer-events-none hidden xl:block"
        src="https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/519304df-20e8-4d86-5bd7-373ac154b200/public"
        alt=""
      />
    </div>
  );
};

export default Login;
