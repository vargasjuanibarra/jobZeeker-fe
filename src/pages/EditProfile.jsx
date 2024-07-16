import React, { useEffect, useState } from "react";
import avatar from '../assets/images/default-avatar.webp'
import { useParams } from "react-router-dom";
import UserService from "../service/userService";
import { FetchClient } from "../service/fetchClient";
import { FaDollarSign, FaImage } from "react-icons/fa";

const EditProfile = () => {
    const [userState, setUserState] = useState(null);
    const {id} = useParams();

    const userService = new UserService(FetchClient)
    const fetchUserDetails = async () => {
        try {
            const userDetails = await userService.getUser(id)
            console.log(userDetails);
            setUserState(userDetails)
        } catch (error) {
            console.error('Error getting user details on Edit profile page')
        }
    }

    useEffect(() => {
        console.log(id);
        fetchUserDetails()
    }, []);

  return (
    <>
        <section className="bg-stone-50 bg-opacity-75 px-4 py-2 lg:max-w-[1200px] mx-auto my-10 lg:my-20">
        <form className="">

            <div className="bg-white rounded-t-lg shadow-md relative p-4 md:p-6">
                    <div className="grid grid-col justify-center mb-4 ">
                        <div className="relative">
                            <img
                                className="rounded-full shadow-xl border w-40 h-auto md:h-auto mx-auto bg-white"
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
                    </div>
                    {/* <div className="p-4">
                        <div className="mb-4 ">
                            <div class="grid justify-center gap-4">
                               
                            </div>
                    </div>
                </div> */}
            </div>
            <div className=" grid md:grid-cols-30/70 gap-6">
                <div className="bg-white mb-4 mt-8 px-4 pt-4 pb-6 rounded-md shadow-xl">
                    <h3 className="font-semibold text-gray-400 mb-4">BASIC INFORMATION</h3>
                    <div>
                        <div class="relative">
                            <div className="flex no items-center mb-4">
                                <label htmlFor="type" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                    FULL NAME
                                    </label>
                                    <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            className="w-full rounded py-1 md:py-1 px-3 mb-2 bg-gray-100 ml-3"
                                            required

                                        />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <label htmlFor="type" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                        DATE OF BIRTH
                                        </label>
                                        <input
                                            type="date"
                                            id="profession"
                                            name="profession"
                                            className="rounded py-1 md:py-1 px-3 bg-gray-100 ml-3 w-full text-sm"
                                            required

                                        />
                            </div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="type" className="text-start text-xs block text-gray-400 font-semibold px-2">EDUCATION
                                </label>
                                <input
                                    type="text"
                                    id="education"
                                    name="eduction"
                                    className="rounded py-1 md:py-1 px-3 bg-gray-100 ml-3 w-full"
                                    required

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl my-4 mb-4 mt-8 px-4 pt-4 pb-6 rounded-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-400 ">OVERVIEW</h3>
                        <button
                            className="text-white text-xs sm:text-sm md:text-md bg-emerald-400 hover:bg-gray-600 rounded-sm px-3 py-2"
                            >SAVE</button>
                    </div>
                    <div>
                        <div class="relative">
                            <div className="flex no items-center mb-4">
                                <label htmlFor="type" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                    PROFESSION
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="w-full rounded py-1 md:py-1 px-3 mb-2 bg-gray-100 ml-3"
                                        required

                                    />
                            </div>
                            <div className="flex items-center mb-4">
                                <label for="dropdown" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">LOOKING FOR
                                </label>
                                    <select id="dropdown" className="w-full border border-gray-300 rounded-sm shadow-sm text-sm">
                                        <option value="option1">Full-Time</option>
                                        <option value="option2">Part-Time</option>
                                        <option value="option3">Gig</option>
                                    </select>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <label htmlFor="salary" className="text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                    SALARY
                                </label>
                                <div className="flex items-center bg-gray-100 rounded w-full ml-3">
                                    <span className="px-3 text-gray-500">
                                    <FaDollarSign />
                                    </span>
                                    <input
                                    type="text"
                                    id="salary"
                                    name="salary"
                                    className="py-1 md:py-1 px-3 bg-gray-100 w-full rounded-r"
                                    required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="type" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4 mb-2">
                                    PROFILE DESCRIPTION
                                    </label>
                                    <textarea
                                        type="text"
                                        id="education"
                                        name="eduction"
                                        rows='6'
                                        className="rounded py-1 md:py-1 px-2 bg-gray-100 w-full"
                                        required
                                        
                                        />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </section>
    </>
  );
};

export default EditProfile;
