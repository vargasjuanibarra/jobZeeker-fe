import React from "react";
import Avatar from "../components/Avatar";
import { useLoaderData } from "react-router-dom";
import { FaEdit, FaMapMarker } from "react-icons/fa";
import { navigateWindowLocation } from "../utils/parseJSON.utils";

const AdminDashboard = () => {
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
                                  onClick={() => navigateWindowLocation(`/edit-employer-profile/${userData?.id}`)}
                                  className="text-orange-500 cursor-pointer text-lg"
                              />
                          </div>
                          <p className="my-1 font-semibold">{userData?.companyProfile?.profession}</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-white grid md:grid-cols-2">
              <div className="mb-4 mt-16 px-8 pb-4">
                  <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2 mt-2">COMPANY NAME</p>
                      <p>{userData?.companyProfile?.companyName} <span className="text-xs text-gray-500 mb-2">{userData?.companyProfile?.industry}</span></p>
                  </div>
                  <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2 mt-2">COMPANY DESCRIPTION</p>
                      <p>{userData?.companyProfile?.profileDesc}</p>
                  </div>
                  <div className="my-4">
                      <p className="text-xs text-gray-500 mb-2 mt-2">ADDRESS</p>
                      <p ><FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1"/>{userData?.companyProfile?.address} • {userData?.companyProfile?.country}</p>
                      <p></p>
                  </div>
                  <div className="my-4">
                      <p className="text-xs text-gray-500">CONTACT NUMBER</p>
                      <p>{userData?.companyProfile?.contactNumber}</p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default AdminDashboard;
