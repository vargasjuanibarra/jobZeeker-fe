import React from "react";
import { FaEdit } from "react-icons/fa";
import { navigateWindowLocation } from "../utils/parseJSON.utils";
import Avatar from "../components/Avatar";
import { useLoaderData } from "react-router-dom";

const UserProfile = ({user}) => {
    const userData = useLoaderData()


  return (
    <>
        <section className="bg-stone-50 bg-opacity-75 px-4 py-4 lg:max-w-[1200px] mx-auto my-10 lg:my-20">
            <div className="bg-gray-200 rounded-t-lg relative p-4 md:p-6">
                <div className="grid grid-col xs-md:justify-center mb-4 md:flex  md:translate-y-20">
                    <Avatar/>
                    <div className="p-4 text-center md:text-left">
                        <div className="mb-4">
                            <div className="flex items-center">
                                <h3 className="text-xl font-bold my-1 mr-4">{userData?.fullName}</h3>
                                <FaEdit
                                    onClick={() => navigateWindowLocation(`/edit-profile/${userData?.id}`)}
                                    className="text-orange-500 cursor-pointer text-lg"
                                />
                            </div>
                            <p className="my-1 font-semibold">{userData?.userProfile?.profession}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white grid md:grid-cols-2">
                <div className="mb-4 mt-16 px-8 pb-4">
                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2 mt-2">PROFILE DESCRIPTION</p>
                        <p>{userData?.userProfile?.profileDesc}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-2 mt-2">SALARY</p>
                        <p>Looking for <span className="text-orange-500 font-semibold">{userData?.userProfile?.jobType}</span> work</p>
                        <p>at <span className="text-orange-500 font-semibold">${userData?.userProfile?.salary}</span> a month</p>
                    </div>
                    <div className="my-4 mb-2 mt-2">
                        <p className="text-xs text-gray-500 my-4">EDUCATION</p>
                        <p>{userData?.userProfile?.education}</p>
                    </div>
                </div>
            </div>
                       
        </section>
    </>
  ) ;
};

export default UserProfile;
