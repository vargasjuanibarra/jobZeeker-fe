import React from "react";
import avatar from '../assets/images/default-avatar.webp'
import { FaImage } from "react-icons/fa";

const Avatar = ({ show }) => {
  return (
    <>
        <div className="relative">
            <img
                className="rounded-full shadow-xl border w-40 h-auto md:h-auto mx-auto md:mx-0 bg-white"
                src={avatar}
                alt="avatar"
            />
            <div className={"opacity-0 hover:opacity-70 z-[1000] absolute top-0 left-0 right-0 bottom-0 bg-gray-400 w-40 mx-auto rounded-full text-center py-12 px-2 " + (show ? 'block' : 'hidden')}>
                <FaImage className="mx-auto"/>
                <p className="flex flex-wrap">
                    Update Profile Picture 
                </p>
                </div>
        </div>
    </>
  );
};

export default Avatar;
