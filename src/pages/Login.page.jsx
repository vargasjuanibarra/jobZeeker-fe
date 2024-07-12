import React, { useState } from "react";
import UserService from "../service/userService";
import { FetchClient } from "../service/fetchClient";
import { navigateWindowLocation, parseToJson } from "../utils/parseJSON.utils";

const Loginpage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    
    const userService = new UserService(FetchClient)
    
    const submitLoginForm = async (event) => {
      event.preventDefault();
      
      const userCredentials = {
        email,
        password
      }
      
      await userService.loginUser(userCredentials)
      const userAdmin = window.localStorage.getItem('userAdmin');
      parseToJson(userAdmin) ? navigateWindowLocation('/admin-dashboard') : navigateWindowLocation('/profile');
  }

  return (
    <section className="text-center flex flex-col justify-center items-center w-[350px] md:w-[400px] mx-auto sm:my-10 h-screen sm:h-auto md:h-auto lg:h-screen lg:my-0">
    <div className="flex items-center pt-8 pb-4 mt-8 mb-4">
        <h1 className="text-lg font-semibold">Login | </h1>
        <p className="ml-2 text-lg text-black"> Make work happen.</p>
    </div>
    <div className="grid rounded-lg bg-white shadow-xl bg-opacity-70 w-full p-6">
      <form onSubmit={submitLoginForm}>
        <label htmlFor="type" className="text-start text-xs block text-gray-400 my-2">
            EMAIL ADDRESS
        </label>
        <input
                type="text"
                id="email"
                name="email"
                className="rounded w-full py-1 md:py-2 px-3 mb-2 bg-gray-100"
                required
                value={email}
                onChange={(e) => (setEmail(e.target.value))}
              />
        <label htmlFor="type" className="text-start text-xs block text-gray-400 my-2">
            PASSWORD
        </label>
        <input
                type="password"
                id="password"
                name="password"
                className="rounded w-full py-1 md:py-2 px-3 mb-2 bg-gray-100"
                required
                value={password}
                onChange={(e) => (setPassword(e.target.value))}
              />
      <button
        className="text-white text-xs sm:text-sm md:text-md bg-emerald-400 hover:bg-gray-600 rounded-sm px-3 py-2 md:py-3 mt-6 w-full"
        type="submit"
        >LOGIN</button
      >
      </form>
      <p className="text-xs md:text-md text-gray-400 my-4"> Forgot your password?</p>
    </div>
    <div className="text-xs my-4 bg-gray-50 bg-opacity-70 w-full py-4 text-gray-500 shadow-lg bg-opacity-65">
      <p>Not yet registered? <span className="text-orange-500 hover:text-orange-600 cursor-pointer hover:font-semibold">Create an account.</span></p>
    </div>

  </section>
  );
};

export default Loginpage;
