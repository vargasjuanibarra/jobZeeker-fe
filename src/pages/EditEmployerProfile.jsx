import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserService from "../service/userService";
import { FetchClient } from "../service/fetchClient";
import { toast } from "react-toastify";
import { navigateWindowLocation } from "../utils/parseJSON.utils";
import BackNavigationButton from "../components/BackNavigationButton";
import Avatar from "../components/Avatar";

const EditEmployerProfile = () => {
    const user = useLoaderData()
    const [fullName, setFullName] = useState(user?.fullName || '');
    const [profession, setProfession] = useState(user?.companyProfile?.profession || '');
    const [companyName, setCompanyName] = useState(user?.companyProfile?.companyName || '');
    const [dateOfBirth, setDateOfBirth] = useState(user?.dateOfBirth  || '');
    const [industry, setIndustry] = useState(user?.companyProfile?.industry  || '');
    const [address, setAddress] = useState(user?.companyProfile?.address  || '');
    const [country, setCountry] = useState(user?.companyProfile?.country  || '');
    const [contactNumber, setContactNumber] = useState(user?.companyProfile?.contactNumber || '');
    const [profileDesc, setProfileDesc] = useState(user?.companyProfile?.profileDesc  || '');
    
    const userService = new UserService(FetchClient)

    const submitUpdateProfile = async (event) => {
        event.preventDefault();

        const updateDetails = {
            id: user.id,
            fullName,
            dateOfBirth,
            profession,
            companyName,
            industry,
            address,
            country,
            contactNumber,
            profileDesc
        }

        try {
            await userService.updateUser(updateDetails);
            toast.success('Successfully updated profile');
            navigateWindowLocation(`/admin-dashboard/${user.id}`);
            
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error('Failed to update profile');
        }
    }

  return (
    <>
        <section className="bg-stone-50 bg-opacity-75 px-4 py-2 lg:max-w-[1200px] mx-auto my-10 lg:my-20">
            <BackNavigationButton link={`/admin-dashboard/${user.id}`} btnLabel="Profile"/>
        <form onSubmit={submitUpdateProfile}>

            <div className="bg-white rounded-t-lg shadow-md relative p-4 md:p-6">
                <div className="grid grid-col justify-center mb-4 ">
                    <Avatar />
                </div>
            </div>
            <div className=" grid md:grid-cols-30/70 gap-4">
                <div className="bg-white mb-4 my-4 md:mt-8 px-4 pt-4 pb-6 rounded-md shadow-xl">
                    <h3 className="font-semibold text-gray-400 mb-4">BASIC INFORMATION</h3>
                    <div>
                        <div className="relative">
                            <div className="flex items-center mb-4">
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
                                <label htmlFor="profession" className="text-start text-xs block text-gray-400 font-semibold px-2">PROFESSION
                                </label>
                                <input
                                    type="text"
                                    id="profession"
                                    name="profession"
                                    className="rounded py-1 md:py-1 px-3 bg-gray-100 ml-3 w-full"
                                    required
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl my-4 mb-4 md:mt-8 px-4 pt-4 pb-6 rounded-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-400 ">OVERVIEW</h3>
                        <button
                        type="submit"
                        className="text-white text-xs sm:text-sm md:text-md bg-orange-400 hover:bg-gray-600 rounded-sm px-3 py-2"
                        >UPDATE</button>
                    </div>
                    <div>
                        <div className="relative">
                        <div className="flex items-center mb-4">
                                <label htmlFor="company" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                    COMPANY NAME
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full rounded py-1 md:py-1 px-3 mb-2 bg-gray-100 ml-3"
                                        required
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}

                                    />
                            </div>
                            <div className="flex items-center mb-4">
                                <label htmlFor="industry" className="text-start text-xs block text-gray-400 font-semibold px-2">INDUSTRY
                                </label>
                                <input
                                    type="text"
                                    id="industry"
                                    name="industry"
                                    className="rounded py-1 md:py-1 px-3 bg-gray-100 ml-3 w-full"
                                    required
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                />
                            </div>
                            <div className="flex no items-center mb-4">
                                <label htmlFor="address" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                    ADDRESS
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        className="w-full rounded py-1 md:py-1 px-3 mb-2 bg-gray-100 ml-3"
                                        required
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <label htmlFor="salary" className="text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                    COUNTRY
                                </label>
                                <div className="flex items-center bg-gray-100 rounded w-full ml-3">
                                    <input
                                    type="text"
                                    id="country"
                                    name="contry"
                                    className="py-1 md:py-1 px-3 bg-gray-100 w-full rounded-r"
                                    required
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}

                                    />
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <label htmlFor="contactNumber" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4">
                                    CONTACT NUMBER
                                </label>
                                    <input
                                        type="text"
                                        id="contactNumber"
                                        name="contactNumber"
                                        className="w-full rounded py-1 md:py-1 px-3 mb-2 bg-gray-100 ml-3"
                                        required
                                        value={contactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)}
                                    />
                            </div>
                            <div>
                                <label htmlFor="profileDesc" className="whitespace-nowrap text-start text-xs block text-gray-400 font-semibold px-2 mr-4 mb-2">
                                    COMPANY DESCRIPTION
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

export default EditEmployerProfile;
