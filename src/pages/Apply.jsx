import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BackNavigationButton from "../components/BackNavigationButton";
import { FaBriefcase, FaClock, FaDollarSign } from "react-icons/fa";

const Apply = () => {
    const job = useLoaderData();
    const {id} = useParams()

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    return (
    <>
        <div className="max-w-[1200px] mx-auto my-10 lg:my-20">
        <BackNavigationButton link={`/jobs/${id}`} btnLabel="Job Listing"/>

        <section className="bg-stone-50 bg-opacity-75">
        <div className="container m-auto py-10 px-6">
        <div className="bg-white p-6 rounded-lg shadow-md md:text-left mb-4">
                <div className="flex flex-col flex-wrap sm:flex-row justify-center items-center mb-4">
                    <h1 className="text-2xl font-bold mb-4">
                        {job.title}
                    </h1>
                </div>
                <div>
                    <div className="flex justify-center">
                        <div className="flex items-center text-gray-500">
                            <FaBriefcase /> 
                            <p className="ml-2 text-gray-500">{job.type}</p>
                        </div>
                        <div className="border border-l mx-4"></div>
                        <div className=" flex items-center text-gray-500">
                            <FaDollarSign /> 
                            <p className="ml-2 text-gray-500">{job.salary}</p>
                        </div>
                        <div className="border border-l mx-4"></div>
                        <div className=" flex items-center text-gray-500">
                            <FaClock />
                            <p className="ml-2 text-gray-500">TBD</p>
                        </div>
                    </div>
                </div>
            </div>
        <div
          className="bg-white bg-opacity-70 px-6 py-8 mb-4 shadow-lg rounded-lg m-4 md:m-0 w-full mx-auto"
        >
          <form >
            <div className="mb-4">
              <label className="text-xs block text-gray-500 font-bold mb-2"
                >SUBJECT</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={subject}
                onChange={(e) => (setSubject(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="text-xs block text-gray-500 font-bold mb-2"
                >MESSAGE</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                value={message}
                onChange={(e) => (setMessage(e.target.value))}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="text-xs block text-gray-500 font-bold mb-2"
                >EMAIL</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                required
                value={contactEmail}
                onChange={(e) => (setContactEmail(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="text-xs block text-gray-500 font-bold mb-2"
                >PHONE</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                value={contactPhone}
                onChange={(e) => (setContactPhone(e.target.value))}
              />
            </div>

            <div>
              <button
                className="bg-emerald-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                SEND EMAIL
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default Apply;
