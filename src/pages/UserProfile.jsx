import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa";
import UserService from "../service/userService";
import { FetchClient } from "../service/fetchClient";
import { navigateWindowLocation } from "../utils/parseJSON.utils";
import Avatar from "../components/Avatar";

const UserProfile = ({user}) => {
    const [userState, setUserState] = useState(null);

    const userService = new UserService(FetchClient)
    const fetchUserDetails = async () => {
        try {
            const userDetails = await userService.getUser(user.id)
            console.log(userDetails);
            setUserState(userDetails)
        } catch (error) {
            console.error('Error getting user details on User profile page')
        }
    }

    useEffect(() => {
        fetchUserDetails()
    }, [])

  return (
    <>
        <section className="bg-stone-50 bg-opacity-75 px-4 py-2 lg:max-w-[1200px] mx-auto my-10 lg:my-20">
            <div className="bg-orange-500 rounded-t-lg shadow-md relative p-4 md:p-6">
                <div className="grid grid-col xs-md:justify-center mb-4 md:flex  md:translate-y-20">
                    <Avatar/>
                    <div className="p-4 text-center md:text-left">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold my-1">{user && userState.fullName}</h3>
                            <p className="text-gray-500 my-1">FullStack Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white grid md:grid-cols-30/70">
                <div className="mb-4 mt-8 px-4">
                    <button
                    onClick={() => navigateWindowLocation(`/edit-profile/${user.id}`)}
                    className="text-white text-xs sm:text-sm md:text-md bg-emerald-400 hover:bg-gray-600 rounded-sm px-3 py-2 md:py-3 mt-6 w-full"
                    >EDIT PROFILE</button>
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
