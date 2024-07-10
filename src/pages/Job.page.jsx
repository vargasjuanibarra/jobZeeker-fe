// import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaBriefcase, FaClock, FaDollarSign  } from "react-icons/fa";
import { toast } from 'react-toastify';

const Jobpage = ({ removeJob }) => {
    const job = useLoaderData();
    const navigate = useNavigate();
    // const [job, setJob] = useState(null);
    // const [loading, setLoading] = useState(true);
    
    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             console.log(id);
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             setJob(data);
    //         } catch (error) {
    //             console.log('Error on fetching data', error)
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchJob();
    // }, [])

    const onDeleteJob = (id) => {
        const confirm = window.confirm('Delete this item?');

        if(!confirm) {
            return;
        }

        removeJob(id);

        toast.success('Job deleted successfully')
        navigate('/jobs');
    }

  return (
    <div className="max-w-[1200px] mx-auto">

        <section className="">
        <div className="m-auto py-6 px-6">
            <Link
            to="/jobs"
            className="text-gray-500 hover:text-gray-800 flex items-center"
            >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
            </Link>
        </div>
        </section>

        <section className="bg-stone-50 bg-opacity-75">
        <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
                <div
                className="bg-white p-6 rounded-lg shadow-md md:text-left"
                >
                <div className="flex flex-col flex-wrap sm:flex-row justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold mb-4">
                        {job.title}
                    </h1>
                    <button
                    to="/jobs"
                    className="text-white text-sm bg-emerald-400 px-4 py-2 hover:bg-gray-400 hover:text-white rounded-full mb-4 font-semibold"
                    >Apply for this Job</button>
                </div>
                <div>
                    <div className="flex items-center text-gray-500">
                        <FaBriefcase /> 
                        <p className="ml-4 text-gray-500">{job.type}</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <FaDollarSign /> 
                        <p className="ml-4 text-gray-500">{job.salary}</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <FaClock />
                        <p className="ml-4 text-gray-500">TBD</p>
                    </div>
                    <div className=" mt-6">
                    <h3 className="text-gray-600 text-lg font-bold mb-6">
                    JOB OVERVIEW
                    </h3>

                    <p className="mb-4">
                    {job.description}
                    </p>
                </div>
                </div>

                {/* <div
                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                    <FaMapMarker className=" text-lg text-orange-700 mr-2" />
                    <p className="text-orange-700">{job.location}</p>
                </div> */}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-gray-500 text-lg font-bold mb-2">
                        ABOUT THE EMPLOYER
                    </h3>
                    <hr />
                    <div className="grid mt-4">
                    <p className="mb-2">
                    Company Name: <span className="font-semibold">{job.company.name}</span>
                    </p>
                    <p className="mb-2">
                    Email: <span className="font-semibold">{job.company.contactEmail}</span>
                    </p>
                    <p className="mb-2">
                    Phone: <span className="font-semibold">{job.company.contactPhone}</span>
                    </p>
                    </div>
                </div>
            </main>

            <aside>
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">
                    {job.company.description}
                </p>

                <hr className="my-4" />

                <p className="text-md">EMAIL:</p>

                <p className="my-2 bg-gray-100 p-2 font-bold">
                    {job.company.contactEmail}
                </p>

                <h3 className="text-md">PHONE:</h3>

                <p className="my-2 bg-gray-100 p-2 font-bold">{job.company.contactPhone}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                    to={`/edit-job/${job.id}`}
                    className="bg-amber-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >Edit Job</Link
                >
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    onClick={() => onDeleteJob(job.id)}
                >
                    Delete Job
                </button>
                </div>
            </aside>
            </div>
        </div>
        </section>
    </div>
  );
};


export default Jobpage;
