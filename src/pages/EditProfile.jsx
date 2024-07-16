import React, { useEffect, useState } from "react";
import avatar from '../assets/images/default-avatar.webp'
import { useLoaderData, useParams } from "react-router-dom";
import UserService from "../service/userService";
import { FetchClient } from "../service/fetchClient";
import { FaDollarSign, FaImage } from "react-icons/fa";
import { toast } from "react-toastify";
import { navigateWindowLocation } from "../utils/parseJSON.utils";
import BackNavigationButton from "../components/BackNavigationButton";
import Avatar from "../components/Avatar";

const EditProfile = () => {
    const user = useLoaderData()
    const [fullName, setFullName] = useState(user && user.fullName || '');
    const [dateOfBirth, setDateOfBirth] = useState(user && user.dateOfBirth || '');
    const [education, setEducation] = useState(user && user.userProfile.education || '');
    const [profession, setProfession] = useState(user && user.userProfile.profession || '');
    const [jobType, setJobType] = useState(user && user.userProfile.jobType || '');
    const [isActive, setIsActive] = useState(user && user.userProfile.jobType || '');
    const [salary, setSalary] = useState(user && user.userProfile.salary || '');
    const [profileDesc, setProfileDesc] = useState(user && user.userProfile.profileDesc || '');
    
    const userService = new UserService(FetchClient)

    const submitUpdateProfile = async (event) => {
        event.preventDefault();

        const updateDetails = {
            id: user.id,
            fullName,
            dateOfBirth,
            education,
            profession,
            jobType,
            salary,
            profileDesc
        }

        console.log(updateDetails);

        try {
            const userUpdated = await userService.updateUser(updateDetails);
            console.log(userUpdated);
            toast.success('Successfully updated profile');
            return navigateWindowLocation(`/profile/${user.id}`)
            
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error('Failed to update profile');
        }
    }

  return (
    <>
        <section className="bg-stone-50 bg-opacity-75 px-4 py-2 lg:max-w-[1200px] mx-auto my-10 lg:my-20">
            <BackNavigationButton link={`/profile/${user.id}`} btnLabel="Profile"/>
        <form onSubmit={submitUpdateProfile}>

            <div className="bg-white rounded-t-lg shadow-md relative p-4 md:p-6">
                <div className="grid grid-col justify-center mb-4 ">
                    <Avatar />
                </div>
            </div>
            <div className=" grid md:grid-cols-30/70 gap-6">
                <div className="bg-white mb-4 mt-8 px-4 pt-4 pb-6 rounded-md shadow-xl">
                    <h3 className="font-semibold text-gray-400 mb-4">BASIC INFORMATION</h3>
                    <div>
                        <div className="relative">
                            <div className="flex no items-center mb-4">
                                <label htmlFor="fullName" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                    FULL NAME
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className="w-full rounded py-1 md:py-1 px-3 mb-2 bg-gray-100 ml-3"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}

                                    />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <label htmlFor="dateOfBirth" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                        DATE OF BIRTH
                                        </label>
                                        <input
                                            type="date"
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                            className="rounded py-1 md:py-1 px-3 bg-gray-100 ml-3 w-full text-sm"
                                            required
                                            value={dateOfBirth}
                                            onChange={(e) => (setDateOfBirth(e.target.value))}

                                        />
                            </div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="education" className="text-start text-xs block text-gray-400 font-semibold px-2">EDUCATION
                                </label>
                                <input
                                    type="text"
                                    id="education"
                                    name="education"
                                    className="rounded py-1 md:py-1 px-3 bg-gray-100 ml-3 w-full"
                                    required
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl my-4 mb-4 mt-8 px-4 pt-4 pb-6 rounded-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-400 ">OVERVIEW</h3>
                        <button
                        type="submit"
                        className="text-white text-xs sm:text-sm md:text-md bg-emerald-400 hover:bg-gray-600 rounded-sm px-3 py-2"
                        >SAVE</button>
                    </div>
                    <div>
                        <div className="relative">
                            <div className="flex no items-center mb-4">
                                <label htmlFor="profession" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                    PROFESSION
                                    </label>
                                    <input
                                        type="text"
                                        id="profession"
                                        name="profession"
                                        className="w-full rounded py-1 md:py-1 px-3 mb-2 bg-gray-100 ml-3"
                                        required
                                        value={profession}
                                        onChange={(e) => setProfession(e.target.value)}
                                    />
                            </div>
                            <div className="flex items-center mb-4">
                                <label htmlFor="dropdown" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">LOOKING FOR
                                </label>
                                    <select 
                                    id="dropdown" 
                                    className="w-full border border-gray-300 rounded-sm shadow-sm text-sm"
                                    name="jobType"
                                    value={jobType}
                                    onChange={(e) => setJobType(e.target.value)}
                                    >
                                        <option value="Full-Time">Full-Time</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Gig">Gig</option>
                                    </select>
                            </div>
                            <div className="flex items-center mb-4">
                                <label htmlFor="dropdown-isActive" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">PROFILE STATUS
                                </label>
                                    <select 
                                    id="dropdown-isActive" 
                                    className="w-full border border-gray-300 rounded-sm shadow-sm text-sm"
                                    name="isActive"
                                    value={isActive}
                                    onChange={(e) => setIsActive(e.target.value)}
                                    >
                                        <option value="option1">ACTIVE</option>
                                        <option value="option2">IN-ACTIVE</option>
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
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}

                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="profileDesc" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4 mb-2">
                                    PROFILE DESCRIPTION
                                    </label>
                                    <textarea
                                        type="text"
                                        id="profileDesc"
                                        name="profileDesc"
                                        rows='6'
                                        className="rounded py-1 md:py-1 px-2 bg-gray-100 w-full"
                                        required
                                        value={profileDesc}
                                        onChange={(e) => setProfileDesc(e.target.value)}
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
