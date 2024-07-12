import React from "react";
import { Link } from "react-router-dom";
const Card = ({title, topic, textColor, subtitle, color, button, btnColor, link}) => {
  return (
    <div className={color + " p-4 w-full bg-opacity-70"}>
        <div className="flex justify-between items-center">
        <h2 className="text-md md:text-xl lg:text-2xl italic">{title}<span className={'font-bold not-italic ' + textColor}>{topic}</span></h2>
        <Link
        to={link}
        className={`text-xs md:text-md lg:text-lg inline-block ${btnColor} text-white rounded-md px-2 md:px-3 py-2 hover:bg-gray-700`}
        >
        {button}
        </Link>

        </div>
        {/* <p className="text-sm md:text-lg mt-2 mb-4">
        {subtitle}
        </p> */}
    </div>
  );
};

export default Card;
