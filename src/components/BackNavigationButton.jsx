import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackNavigationButton = ({link, btnLabel}) => {
  return (
    <div className="m-auto py-6 px-6">
          <Link
          to={link}
          className="text-orange-500 hover:text-gray-800 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to {btnLabel}
          </Link>
    </div>
  );
};

export default BackNavigationButton;
