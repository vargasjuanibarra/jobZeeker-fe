import React from "react";
import { FaDollarSign, FaMapMarker } from "react-icons/fa";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";

const TalentCard = ({ user }) => {
  return (
    <Link
    to={`/talent/${user.id}`}
    >
        <div className="bg-white rounded-lg shadow-md relative p-4 hover:shadow-xl md:p-6" key={user?.id}>
            <div className="grid grid-col xs-md:justify-center mb-4 md:flex">
                {/* <Avatar show={false}/> */}
                <div className="p-4 text-center md:text-left">
                    <div className="mb-4">
                        <p className="text-gray-500">{user?.fullName}</p>
                        <h3 className="text-xl font-bold">{user?.userProfile?.profession}</h3>
                        <div className="my-2">
                            <div className="text-gray-500">
                            <p> NewTek Solutions  • <FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1"/>
                            <span className="text-orange-700">Boston, MA</span></p>
                        </div>
                        <div className="text-gray-500 mb-2 flex items-center justify-center md:justify-start"><FaDollarSign /> <span>{user?.userProfile?.salary}</span></div>
                    </div>
                </div>
            </div>
        </div>
            <div className="mb-5 px-2">
                <p className="text-gray-500 text-sm font-semibold mb-4">PROFILE DESCRIPTION</p>
                {user?.userProfile?.profileDesc}
            </div>
        </div>
    </Link>
  );
};

export default TalentCard;
