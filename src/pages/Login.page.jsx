import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../service/userService";
import { FetchClient } from "../service/fetchClient";

const Loginpage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const userService = new UserService(FetchClient)

  const submitLoginForm = async (event) => {
    event.preventDefault();

    const userCredentials = {
      email,
      password
    }

    await userService.loginUser(userCredentials)
    return navigate('/')

  }

  return (
    <section className="text-center flex flex-col justify-center items-center w-[350px] md:w-[400px] mx-auto">
    {/* <FaExclamationTriangle className="text-6xl text-yellow-400 fa-4x mb-4" /> */}
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
                className="rounded w-full py-2 px-3 mb-2 bg-gray-100"
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
                className="rounded w-full py-2 px-3 mb-2 bg-gray-100"
                required
                value={password}
                onChange={(e) => (setPassword(e.target.value))}
              />
      <button
        className="text-white bg-emerald-400 hover:bg-gray-600 rounded-sm px-3 py-3 mt-6 w-full"
        type="submit"
        >LOGIN</button
      >
      </form>
      <p className="text-md text-gray-400 my-4"> Forgot your password?</p>
    </div>
    <div className="text-xs sm:text-sm my-4 bg-gray-50 bg-opacity-70 w-full py-4 text-gray-500 shadow-lg bg-opacity-65">
      <p>Not yet registered? Create a free account.</p>
    </div>

  </section>
  );
};

export default Loginpage;
