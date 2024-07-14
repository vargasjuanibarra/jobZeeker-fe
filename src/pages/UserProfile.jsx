import React, { useEffect, useState } from "react";
import avatar from '../assets/images/default-avatar.webp'
import { FaImage, FaMapMarker } from "react-icons/fa";
import UserService, { USER_URL } from "../service/userService";
import { FetchClient } from "../service/fetchClient";
import { useLoaderData } from "react-router-dom";

const UserProfile = ({user}) => {
  return (
    <>
        <section className="bg-stone-50 bg-opacity-75 px-4 py-2 lg:max-w-[1200px] mx-auto my-10 lg:my-20">
            <div className="bg-orange-500 rounded-t-lg shadow-md relative p-4 md:p-6">
                                <div className="grid grid-col xs-md:justify-center mb-4 md:flex  md:translate-y-20">
                                    <div className="relative">
                                        <img
                                            className="rounded-full shadow-xl border w-40 h-auto md:h-auto mx-auto md:mx-0 bg-white"
                                            src={avatar}
                                            alt="avatar"
                                        />
                                        <div className="opacity-0 hover:opacity-70 z-[1000] absolute top-0 left-0 right-0 bottom-0 bg-gray-400 w-40 mx-auto rounded-full text-center py-12 px-2 ">
                                            <FaImage />
                                            <p className="flex flex-wrap">
                                                Update Profile Picture 
                                            </p>
                                            </div>
                                    </div>
                                    <div className="p-4 text-center md:text-left">
                                        <div className="mb-4">
                                            {/* <h3 className="text-xl font-bold my-1">{userState.fullName}</h3> */}
                                            <p className="text-gray-500 my-1">FullStack Software Developer</p>
                                            {/* <div className="bg-white rounded-full w-24">
                                                <span className=" text-xs rounded-full bg-emerald-400 font-semibold">0</span>
                                                <span className="text-xs font-semibold px-2 py-1">ID PROOF</span>
                                            </div> */}
                                            {/* <div className="my-2">
                                                <div className="text-gray-500">
                                                <p> NewTek Solutions  • <FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1"/>
                                                <span className="text-orange-700">Boston, MA</span></p>
                                            </div>
                                            <p className="text-gray-500 mb-2">$70K - $80K</p>
                                            </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="mb-5 px-2">
                                <p className="text-gray-500 text-sm font-semibold mb-4">PROFILE DESCRIPTION</p>
                            We are excited to announce an opening for a talented Front-End Developer to join our dynamic team in Boston, MA. If you are passionate about web development and eager to work on cutting-edge projects, we want to hear from you! Key Responsibilities: Develop and maintain high-quality web applications using HTML, CSS, and JavaScript.
                            </div> */}
                            
            </div>
            <div className="bg-white grid md:grid-cols-30/70">
                <div className="mb-4 mt-8 px-4">
                    <button
                    className="text-white text-xs sm:text-sm md:text-md bg-emerald-400 hover:bg-gray-600 rounded-sm px-3 py-2 md:py-3 mt-6 w-full"
                    >EDIT PROFILE</button>
                    <button
                    className="text-white text-xs sm:text-sm md:text-md bg-emerald-400 hover:bg-gray-600 rounded-sm px-3 py-2 md:py-3 mt-6 w-full"
                    >VERIFICATION</button>
                </div>
                <div className="my-4 mb-4 mt-8 px-4">
                    <div>
                        <p className="text-xs">SALARY</p>
                        <p>Looking for work ( hours/day)</p>
                        <p>at ₱0.00/hour (₱0.00/month)</p>
                    </div>
                    <div className="my-4">
                        <p className="text-xs">EDUCATION</p>
                        <p>Bachelor of Science in Information Technology</p>
                    </div>
                    <div className="my-4">
                        <p className="text-xs">WORK EXPERIENCES</p>
                        <p>Bachelor of Science in Information Technology</p>
                    </div>
                </div>
            </div>
                       
        </section>
    </>
  ) ;
};

export default UserProfile;
