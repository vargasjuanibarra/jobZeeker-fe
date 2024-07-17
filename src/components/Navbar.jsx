import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { navigateWindowLocation, parseToJson } from "../utils/parseJSON.utils";

const Navbar = () => {
  const user = parseToJson(window.localStorage.getItem('user'));
  const accessToken = window.localStorage.getItem('accessToken');
  const userAdmin = parseToJson(window.localStorage.getItem('userAdmin'));

  const [toggle, setToggle] = useState(false);
  const linkClass = 'text-black px-3 py-2 hover:text-orange-500 md:rounded-md '

  const toggleNavigations = () => {
    setToggle(!toggle);
  }

  const logoutUser = () => {
    console.log('logout');
    window.localStorage.clear();
    setToggle(false);
    navigateWindowLocation("/login")
  }

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  const handleNavLinkClick = () => {
    setToggle(false);
  };

  return (
    <>
    <nav className="border border-b-gray-200 bg-white bg-opacity-65 z-[500] fixed top-0 left-0  w-full shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative">
        <div className="flex h-10 md:h-12 lg:h-16 items-center justify-between">
          <div
            className="flex flex-1 justify-between items-center md:justify-center md:items-stretch md:justify-start"
          >
            <NavLink className="flex flex-shrink-0 md:items-center mr-4" to="/">
              <span className="text-start text-black text-lg lg:text-2xl font-bold ml-2 italic "
                >Job<span className="not-italic text-emerald-400">Ze<span className="text-orange-500 italic">e</span>k</span></span
              >
            </NavLink>
            <div className="hidden md:ml-auto md:block">
              <div className="flex space-x-2">
                <NavLink
                  to="/jobs"
                  className={"text-white bg-emerald-400 px-6 py-2 hover:bg-gray-400 hover:text-white md:rounded-full " + (user && !userAdmin || !user ? 'block' : 'hidden')}
                  >Find Jobs</NavLink>
                <NavLink
                  to="/talents"
                  className={"text-white bg-stone-400 px-6 py-2 hover:bg-gray-400 hover:text-white md:rounded-full " + (user && userAdmin || !user ? 'block' : 'hidden')}
                  >Find Talents</NavLink>
                <NavLink
                  to="/add-job"
                  className={linkClass + (user && accessToken && userAdmin ? 'block' : 'hidden')}
                  >Add Job</NavLink
                >
                <div
                  className="text-black px-3 py-2 "
                  >|</div
                >
                <NavLink
                  to="/login"
                  className={linkClass + (!user && !accessToken ? 'block' : 'hidden')}
                  >Login</NavLink>
                  <NavLink
                  to="/login"
                  className={linkClass + (user && accessToken ? 'block' : 'hidden')}
                  onClick={logoutUser}
                  >Logout</NavLink>
                <NavLink
                  to="/register"
                  className={linkClass + (!user && !accessToken ? 'block' : 'hidden')}
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
      <div className={'absolute right-0 border border-gray-200 w-64 md:hidden bg-white z-[50] ' + (toggle ? 'block' : 'hidden')}>
      <div className="grid grid-col">
        {/* <NavLink
          onClick={handleNavLinkClick}
          to="/"
          className={linkClass}
          >Home</NavLink> */}
        <NavLink
          onClick={handleNavLinkClick}
          to="/jobs"
          className={linkClass + (user && !userAdmin || !user ? 'block' : 'hidden')}
          >Find Jobs
        </NavLink>
        <NavLink
          onClick={handleNavLinkClick}
          to="/talents"
          className={linkClass+ (user && userAdmin || !user ? 'block' : 'hidden')}
          >Find Talents
        </NavLink>
        <NavLink
          onClick={handleNavLinkClick}
          to="/login"
          className={linkClass + (!user && !accessToken ? 'block' : 'hidden')}
          >Login</NavLink>
        <NavLink
          onClick={handleNavLinkClick}
          to="/register"
          className={linkClass + (!user && !accessToken ? 'block' : 'hidden')}
          >Sign up
        </NavLink>
        <NavLink
          to="/login"
          className={linkClass + (user && accessToken ? 'block' : 'hidden')}
          onClick={logoutUser}
          >Logout</NavLink>
      </div>
    </div>
    </nav>
    
    </>
    
  );
};

export default Navbar;
