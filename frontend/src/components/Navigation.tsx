import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Switcher from "./Switcher";
import { Squeeze as Hamburger } from "hamburger-react";

const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <nav className="sm:flex fixed w-full items-center py-5 px-10">
      <div className="hidden sm:flex w-full justify-between">
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
      </div>
      <div className="flex justify-between sm:hidden text-black dark:text-white">
        <img src="http://acmelogos.com/images/logo-7.svg" alt="Logo" />
        <Hamburger
          color={`${isOpen ? "white" : "currentColor"}`}
          toggled={isOpen}
          toggle={setOpen}
        />

        {isOpen && (
          <div className="flex flex-col top-0 z-50 left-0 w-full h-screen bg-black absolute">
            <Link className="font-medium text-white" to="/">
              Home
            </Link>
            <Link className="font-medium text-white" to="/register">
              Join
            </Link>
            <Link
              className="font-medium flex items-center gap-2 text-white"
              to="/login"
            >
              <FiLogIn /> Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
