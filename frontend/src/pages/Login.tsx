import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { AppDispatch } from "../app/store";

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
    <div className="relative overflow-hidden h-screen w-screen bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center">
      {/* Refactor into its own component */}
      <nav className="fixed w-full flex justify-between items-center py-5 px-10">
        <div className="flex items-center gap-5">
          <img
            className="mr-10"
            src="http://acmelogos.com/images/logo-7.svg"
            alt="Logo"
          />
          <Link className="font-medium" to="/">
            Home
          </Link>
          <Link className="font-medium" to="/register">
            Join
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="font-medium flex items-center gap-2" to="/login">
            <FiLogIn /> Login
          </Link>
        </div>
      </nav>

      <main className="h-full w-9/12 flex justify-center flex-col">
        <h1 className="font-semibold text-6xl mb-7">
          Login to your account
          <span className="text-blue-400 text-6xl">.</span>
        </h1>
        <div className="flex gap-2 mb-12 font-medium">
          <p>Not a member?</p>
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
            />
            <Input
              onChange={onChange}
              value={password}
              label="Password"
              name="password"
              type="password"
            />
          </div>
          <Button value="Login" />
        </form>
      </main>
      <img
        className="absolute h-[70rem] bottom-[-15rem] right-[-15rem] pointer-events-none"
        src="https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/519304df-20e8-4d86-5bd7-373ac154b200/public"
        alt=""
      />
    </div>
  );
};

export default Login;
