import React from "react";
import { Link } from "react-router-dom";
const Card = ({title, subtitle, color, button, btnColor, link}) => {
  return (
    <div className={color + " p-6 rounded-lg shadow-md"}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">
        {subtitle}
        </p>
        <Link
        to={link}
        className={`inline-block ${btnColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
        >
        {button}
        </Link>
    </div>
  );
};

export default Card;
