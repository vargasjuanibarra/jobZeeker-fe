import React, { useEffect, useState } from "react";
import BackNavigationButton from "../components/BackNavigationButton";
import { FaBriefcase, FaClock, FaDollarSign } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../service/userService";
import { FetchClient } from "../service/fetchClient";
import { toast } from "react-toastify";
import Avatar from "../components/Avatar";
import { parseToJson } from "../utils/parseJSON.utils";

const TalentViewPage = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const getLocalUser = parseToJson(window.localStorage.getItem('user'));

  const { id } = useParams();
  const userService = new UserService(FetchClient);
  

  const getUser = async () => {
    try {
      const userData = await userService.getUser(id);
      if (!userData) {
        toast.error('User not found');
        console.error('User not Found');
      }
      setUser(userData);
    } catch (error) {
      console.error('User not Found');
    }
  }

  useEffect(() => {
    getUser();

  }, [])

  const loginRedirect = () => {
    window.localStorage.setItem('lastVisitedLink', `jobs/${id}`)

    navigate('/login')
}


  return (
    <div className="max-w-[1200px] mx-auto my-10 lg:my-20">

        <section className="">
        <BackNavigationButton link="/talents" btnLabel="Talents Listing" />
        </section>

        <section className="bg-stone-50 bg-opacity-75">
        <div className="container m-auto py-10 px-6">
            <div className="grid grid-col w-full gap-6">
            <main>
                <div
                className="bg-white p-6 rounded-lg shadow-md md:text-left"
                >
                <div className="flex flex-col flex-wrap md:flex-row justify-between items-center md:items-start mb-4">
                    <div className=" mb-4">
                      <Avatar show={false}/>
                      <h1 className="mt-4 py-2 text-md md:text-lg lg:text-2xl text-2xl font-bold">{user?.userProfile?.profession}</h1>
                      <p className="text-md md:text-lg font-semibold text-center md:text-start">{user?.fullName}</p>
                    </div>
                    <button
                    onClick={() =>!getLocalUser ? loginRedirect() : navigate(`/email-talent/${id}`)}
                    className={"text-white text-sm bg-emerald-400 px-4 py-2 hover:bg-gray-400 hover:text-white rounded-md mb-4 font-semibold "}
                    >Send Email</button>
                </div>
                <div>
                    <div className="flex items-center text-gray-500">
                        <FaBriefcase /> 
                        <p className="ml-4 text-gray-500">{user?.userProfile?.jobType}</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <FaDollarSign /> 
                        <p className="ml-4 text-gray-500">{user?.userProfile?.salary}</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <FaClock />
                        <p className="ml-4 text-gray-500">TBD</p>
                    </div>
                    <div className=" mt-6">
                    <h3 className="text-gray-600 text-lg font-bold mb-6">
                    OVERVIEW
                    </h3>

                    <p className="mb-4">
                    {user?.userProfile?.profileDesc}
                    </p>
                </div>
                </div>

                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-gray-500 text-lg font-bold mb-2">
                        ABOUT THE JOB SEEKER
                    </h3>
                    <hr />
                    <div className="grid mt-4">
                        <p className="mb-2">
                        Email: <span className="font-semibold">{user?.email}</span>
                        </p>
                        <p className="mb-2">
                        Education: <span className="font-semibold">{user?.userProfile?.education}</span>
                        </p>
                        <p className="mb-2">
                        Experience: <span className="font-semibold">3 Years of work experience as a professional {user?.userProfile?.profession}</span>
                        </p>
                    </div>
                </div>
            </main>
            </div>
        </div>
        </section>
    </div>
  );
};

export default TalentViewPage;
