import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linkClass = 'text-black px-3 py-2 hover:text-black md:rounded-md'

  const toggleNavigations = () => {
    setToggle(!toggle);
  }
  return (
    <>
    <nav className="border border-b-gray-200 relative shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div
            className="flex flex-1 justify-between items-center md:justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 md:items-center mr-4" to="/">
              <span className="text-start text-black text-2xl font-bold ml-2 italic "
                >Job<span className="not-italic text-emerald-400">Zeek</span></span
              >
            </NavLink>
            <div className="hidden md:ml-auto md:block">
              <div className="flex space-x-2">
                {/* <NavLink
                  to="/"
                  className={linkClass}
                  >Home</NavLink> */}
                <NavLink
                  to="/jobs"
                  className="text-white bg-emerald-400 px-6 py-2 hover:bg-gray-400 hover:text-white md:rounded-full"
                  >Find Jobs</NavLink>
                <NavLink
                  to="/talents"
                  className="text-white bg-stone-400 px-6 py-2 hover:bg-gray-400 hover:text-white md:rounded-full"
                  >Find Talents</NavLink>
                {/* <NavLink
                  to="/add-job"
                  className={linkClass}
                  >Add Job</NavLink
                > */}
                <NavLink
                  to="#"
                  className={linkClass}
                  >|</NavLink
                >
                <NavLink
                  to="/login"
                  className={linkClass}
                  >Login</NavLink>
                <NavLink
                  to="/register"
                  className={linkClass}
                  >Sign up
                </NavLink>
              </div>
            </div>
            <div>
              <FaBars className="block md:hidden mr-2" onClick={() => toggleNavigations()}/>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className={'absolute right-0 border border-gray-200 w-64 md:hidden bg-white z-[50] ' + (toggle ? 'block' : 'hidden')}>
      <div className="grid grid-col">
        <NavLink
          to="/"
          className={linkClass}
          >Home</NavLink>
        <NavLink
          to="/jobs"
          className={linkClass}
          >Jobs</NavLink>
        <NavLink
          to="/add-job"
          className={linkClass}
          >Add Job</NavLink
        >
        <NavLink
          to="/login"
          className={linkClass}
          >Login</NavLink>
        <NavLink
          to="/register"
          className={linkClass}
          >Sign up
        </NavLink>
      </div>
    </div>
    </>
    
  );
};

export default Navbar;
