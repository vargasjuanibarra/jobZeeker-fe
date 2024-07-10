import React from "react";
import { Link } from "react-router-dom";
const Card = ({title, topic, textColor, subtitle, color, button, btnColor, link}) => {
  return (
    <div className={color + " p-6 rounded-lg w-full bg-opacity-70"}>
        <div className="flex justify-between">
        <h2 className="text-2xl ">{title}<span className={'font-bold ' + textColor}>{topic}</span></h2>
        <Link
        to={link}
        className={`inline-block ${btnColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
        >
        {button}
        </Link>

        </div>
        <p className="mt-2 mb-4">
        {subtitle}
        </p>
    </div>
  );
};

export default Card;
