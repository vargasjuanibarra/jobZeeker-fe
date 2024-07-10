import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="flex flex-row items-center relative">
        <input
        type="text"
        id="search"
        name="search"
        className="border rounded-full w-full py-2 pl-10 pr-3 bg-gray-100"
        required
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <FaSearch />
        </span>
        <button className="hidden text-white border border-emerald-400 bg-emerald-400 hover:bg-gray-500 hover:border-gray-500 rounded-full py-2 px-6 -ml-20 md:block">
        SEARCH
        </button>
        <button className="text-white border border-emerald-400 bg-emerald-400 hover:bg-gray-500 hover:border-gray-500 rounded-full py-3 px-6 -ml-12 md:hidden">
        <FaSearch />
        </button>
    </div>
  );
};

export default SearchInput;
