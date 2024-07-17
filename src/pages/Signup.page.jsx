import React, { useState } from "react";
import UserService from "../service/userService";
import { FetchClient } from "../service/fetchClient";
import { toast } from "react-toastify";
import { navigateWindowLocation, parseToJson } from "../utils/parseJSON.utils";

const Signuppage = () => {
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [dateOfBirth,setDateOfBirth] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const userService = new UserService(FetchClient)

  const onRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Password does not match');
      return;
    }

    const newUser = {
      fullName,
      email,
      dateOfBirth,
      password
    }

    await userService.registerUser(newUser);
    toast.success('You are now logged in!')
    const userAdmin = window.localStorage.getItem('userAdmin');
    const user = parseToJson(window.localStorage.getItem('user'));
    parseToJson(userAdmin) ? navigateWindowLocation('/admin-dashboard') : navigateWindowLocation(`/edit-profile/${user.id}`)
    
  }

  return (
    <section className="text-center flex flex-col justify-center items-center w-[350px] md:w-[400px] mx-auto sm:my-10 h-screen sm:h-auto md:h-auto lg:h-screen lg:my-0">
    {/* <FaExclamationTriangle className="text-6xl text-yellow-400 fa-4x mb-4" /> */}
    <div className="flex items-center pt-8 pb-4 mt-8 mb-4">
        <h1 className="text-lg font-semibold">Signup | </h1>
        <p className="ml-2 text-lg text-black"> Make work happen.</p>
    </div>
    <div className="grid rounded-lg bg-white shadow-xl bg-opacity-70 w-full p-6">
      <form onSubmit={onRegister}>
        <label htmlFor="type" className="text-start text-xs block text-gray-400 my-2">
            FULL NAME
        </label>
        <input
                type="text"
                id="fullName"
                name="fullName"
                className="rounded w-full py-2 px-3 mb-1 bg-gray-100"
                required
                value={fullName}
                onChange={(e) => (setFullName(e.target.value))}
              />
        <label htmlFor="email" className="text-start text-xs block text-gray-400 my-2">
            EMAIL ADDRESS
        </label>
        <input
                type="email"
                id="email"
                name="email"
                className="rounded w-full py-2 px-3 mb-1 bg-gray-100"
                required
                value={email}
                onChange={(e) => (setEmail(e.target.value))}
              />
        <label htmlFor="date" className="text-start text-xs block text-gray-400 my-2">
            DATE OF BIRTH
        </label>
        <input
                type="date"
                id="date"
                name="date"
                className="rounded w-full py-2 px-3 mb-1 bg-gray-100"
                required
                value={dateOfBirth}
                onChange={(e) => (setDateOfBirth(e.target.value))}
              />
        <label htmlFor="type" className="text-start text-xs block text-gray-400 my-2">
            PASSWORD
        </label>
        <input
                type="password"
                id="password"
                name="password"
                className="rounded w-full py-2 px-3 mb-1 bg-gray-100"
                required
                value={password}
                onChange={(e) => (setPassword(e.target.value))}
              />
        <label htmlFor="type" className="text-start text-xs block text-gray-400 my-2">
            CONFIRM PASSWORD
        </label>
        <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="rounded w-full py-2 px-3 mb-1 bg-gray-100"
                required
                value={confirmPassword}
                onChange={(e) => (setConfirmPassword(e.target.value))}
              />
      <button
        type="submit"
        className="text-white bg-emerald-400 hover:bg-gray-600 rounded-sm px-3 py-3 mt-6 w-full"
        >SIGNUP</button
      >
      </form>
    </div>
    <div className="text-xs sm:text-sm px-4 my-4 bg-gray-50 bg-opacity-70 w-full py-4 text-gray-500 shadow-lg bg-opacity-65">
      <p>Already have an account? <span className="text-orange-500 hover:text-orange-600 cursor-pointer hover:font-semibold">Click here to login.</span></p>
    </div>

  </section>
  );
};

export default Signuppage;
