import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import JobsService, { JOBS_URL } from "../service/jobsService";
import { FetchClient } from "../service/fetchClient";
import SearchInput from "../components/SearchInput";
import Filters from "../components/Filters";
import { FaMapMarker } from "react-icons/fa";
import avatar from '../assets/images/profile.png'

const Talentspage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const apiUrl = JOBS_URL
      const jobService = new JobsService(FetchClient)
      const fetchJobs = async () => {
        try {
          const jobs = await jobService.getjobs(apiUrl)
          setJobs(jobs);
        } catch (error) {
          console.log('Error fetching data', error)
        } finally {
          setLoading(false);
        }
      }
      fetchJobs();
    }, [])
  
    return (
      <section className="bg-stone-50 bg-opacity-75 px-4 py-2 lg:max-w-[1200px] mx-auto my-10 lg:my-20">
        <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
        </h2>
          {loading ? (<Spinner loading={loading}/>) : (
            <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg px-4 py-8 rounded-lg">
                <SearchInput />

              </div>
              
                <div className="gap-3 md:flex flex-cols-2">
                    <Filters />
                    <div className="flex flex-col gap-4">
                        <div className="bg-white rounded-lg shadow-md relative p-4 hover:shadow-xl md:p-6">
                            <div className="grid grid-col xs-md:justify-center mb-4 md:flex">
                                <img
                                    className="rounded-full shadow-xl border w-40 h-auto md:h-auto mx-auto md:mx-0"
                                    src={avatar}
                                    alt="avatar"
                                />
                                <div className="p-4 text-center md:text-left">
                                    <div className="mb-4">
                                        <p className="text-gray-500">John Doe</p>
                                        <h3 className="text-xl font-bold">Fullstack Software Developer</h3>
                                        <div className="my-2">
                                            <div className="text-gray-500">
                                            <p> NewTek Solutions  • <FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1"/>
                                            <span className="text-orange-700">Boston, MA</span></p>
                                        </div>
                                        <p className="text-gray-500 mb-2">$70K - $80K</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 px-2">
                            <p className="text-gray-500 text-sm font-semibold mb-4">PROFILE DESCRIPTION</p>
                        We are excited to announce an opening for a talented Front-End Developer to join our dynamic team in Boston, MA. If you are passionate about web development and eager to work on cutting-edge projects, we want to hear from you! Key Responsibilities: Develop and maintain high-quality web applications using HTML, CSS, and JavaScript.
                        </div>
                        
                        </div>
                        <div className="bg-white rounded-xl shadow-md relative p-4 hover:shadow-xl md:p-6">
                            <div className="grid grid-col xs-md:justify-center mb-4 md:flex">
                                <img
                                    className="rounded-full shadow-xl border w-40 h-auto md:h-auto mx-auto md:mx-0"
                                    src={avatar}
                                    alt="avatar"
                                />
                                <div className="p-4 text-center md:text-left">
                                    <div className="mb-4">
                                        <p className="text-gray-500">John Doe</p>
                                        <h3 className="text-xl font-bold">Fullstack Software Developer</h3>
                                        <div className="my-2">
                                            <div className="text-gray-500">
                                            <p> NewTek Solutions  • <FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1"/>
                                            <span className="text-orange-700">Boston, MA</span></p>
                                        </div>
                                        <p className="text-gray-500 mb-2">$70K - $80K</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 px-2">
                            <p className="text-gray-500 text-sm font-semibold mb-4">PROFILE DESCRIPTION</p>
                        We are excited to announce an opening for a talented Front-End Developer to join our dynamic team in Boston, MA. If you are passionate about web development and eager to work on cutting-edge projects, we want to hear from you! Key Responsibilities: Develop and maintain high-quality web applications using HTML, CSS, and JavaScript.
                        </div>
                        
                        </div>

                        <div className="bg-white rounded-xl shadow-md relative p-4 hover:shadow-xl md:p-6">
                            <div className="grid grid-col xs-md:justify-center mb-4 md:flex">
                                <img
                                    className="rounded-full shadow-xl border w-40 h-auto md:h-auto mx-auto md:mx-0"
                                    src={avatar}
                                    alt="avatar"
                                />
                                <div className="p-4 text-center md:text-left">
                                    <div className="mb-4">
                                        <p className="text-gray-500">John Doe</p>
                                        <h3 className="text-xl font-bold">Fullstack Software Developer</h3>
                                        <div className="my-2">
                                            <div className="text-gray-500">
                                            <p> NewTek Solutions  • <FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1"/>
                                            <span className="text-orange-700">Boston, MA</span></p>
                                        </div>
                                        <p className="text-gray-500 mb-2">$70K - $80K</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 px-2">
                            <p className="text-gray-500 text-sm font-semibold mb-4">PROFILE DESCRIPTION</p>
                        We are excited to announce an opening for a talented Front-End Developer to join our dynamic team in Boston, MA. If you are passionate about web development and eager to work on cutting-edge projects, we want to hear from you! Key Responsibilities: Develop and maintain high-quality web applications using HTML, CSS, and JavaScript.
                        </div>
                        
                        </div>

                        <div className="bg-white rounded-xl shadow-md relative p-4 hover:shadow-xl md:p-6">
                            <div className="grid grid-col xs-md:justify-center mb-4 md:flex">
                                <img
                                    className="rounded-full shadow-xl border w-40 h-auto md:h-auto mx-auto md:mx-0"
                                    src={avatar}
                                    alt="avatar"
                                />
                                <div className="p-4 text-center md:text-left">
                                    <div className="mb-4">
                                        <p className="text-gray-500">John Doe</p>
                                        <h3 className="text-xl font-bold">Fullstack Software Developer</h3>
                                        <div className="my-2">
                                            <div className="text-gray-500">
                                            <p> NewTek Solutions  • <FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1"/>
                                            <span className="text-orange-700">Boston, MA</span></p>
                                        </div>
                                        <p className="text-gray-500 mb-2">$70K - $80K</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 px-2">
                            <p className="text-gray-500 text-sm font-semibold mb-4">PROFILE DESCRIPTION</p>
                        We are excited to announce an opening for a talented Front-End Developer to join our dynamic team in Boston, MA. If you are passionate about web development and eager to work on cutting-edge projects, we want to hear from you! Key Responsibilities: Develop and maintain high-quality web applications using HTML, CSS, and JavaScript.
                        </div>
                        
                        </div>
                    </div>
                </div>
             </div>
            </>
          ) }
      </div>
    </section>
    );
};

export default Talentspage;
