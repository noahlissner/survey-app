import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Switcher from "./Switcher";

const Navigation = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center py-5 px-10">
      <div className="flex items-center gap-5 text-black dark:text-white">
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
      <div className="flex items-center gap-5">
        <Link
          className="font-medium flex items-center gap-2 text-black dark:text-white"
          to="/login"
        >
          <FiLogIn /> Login
        </Link>
        <Switcher />
      </div>
    </nav>
  );
};

export default Navigation;
