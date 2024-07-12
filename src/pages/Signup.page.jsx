import React, { useState } from "react";

const Signuppage = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
  return (
    <section className="text-center flex flex-col justify-center items-center w-[350px] md:w-[400px] mx-auto sm:my-10 h-screen sm:h-auto md:h-auto lg:h-screen lg:my-0">
    {/* <FaExclamationTriangle className="text-6xl text-yellow-400 fa-4x mb-4" /> */}
    <div className="flex items-center pt-8 pb-4 mt-8 mb-4">
        <h1 className="text-lg font-semibold">Signup | </h1>
        <p className="ml-2 text-lg text-black"> Make work happen.</p>
    </div>
    <div className="grid rounded-lg bg-white shadow-xl bg-opacity-70 w-full p-6">
      <form>
        <label htmlFor="type" className="text-start text-xs block text-gray-400 my-2">
            FULL NAME
        </label>
        <input
                type="text"
                id="email"
                name="email"
                className="rounded w-full py-2 px-3 mb-1 bg-gray-100"
                required
                value={email}
                onChange={(e) => (setEmail(e.target.value))}
              />
        <label htmlFor="type" className="text-start text-xs block text-gray-400 my-2">
            EMAIL ADDRESS
        </label>
        <input
                type="text"
                id="email"
                name="email"
                className="rounded w-full py-2 px-3 mb-1 bg-gray-100"
                required
                value={email}
                onChange={(e) => (setEmail(e.target.value))}
              />
        <label htmlFor="type" className="text-start text-xs block text-gray-400 my-2">
            DATE OF BIRTH
        </label>
        <input
                type="text"
                id="email"
                name="email"
                className="rounded w-full py-2 px-3 mb-1 bg-gray-100"
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
                id="password"
                name="password"
                className="rounded w-full py-2 px-3 mb-1 bg-gray-100"
                required
                value={password}
                onChange={(e) => (setPassword(e.target.value))}
              />
      </form>
      <button
        className="text-white bg-emerald-400 hover:bg-gray-600 rounded-sm px-3 py-3 mt-6"
        >SIGNUP</button
      >
    </div>
    <div className="text-xs sm:text-sm px-4 my-4 bg-gray-50 bg-opacity-70 w-full py-4 text-gray-500 shadow-lg bg-opacity-65">
      <p>Already have an account? <span className="text-orange-500 hover:text-orange-600 cursor-pointer hover:font-semibold">Click here to login.</span></p>
    </div>

  </section>
  );
};

export default Signuppage;
