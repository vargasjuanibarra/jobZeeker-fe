import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { FetchClient } from "../service/fetchClient";
import SearchInput from "../components/SearchInput";
import Filters from "../components/Filters";
import { FaMapMarker } from "react-icons/fa";
import UserService, { USER_URL } from "../service/userService";
import Avatar from "../components/Avatar";
import NoResultsFound from "../components/NoResultsFound";

const Talentspage = () => {
    const [users, setUsers] = useState([]);
    const [jobTypes, setJobTypes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const userService = new UserService(FetchClient)
    
    useEffect(() => {
        const getchUsers = async () => {
          try {
            const users = await userService.getUsers(USER_URL)
            setUsers(users);
          } catch (error) {
            console.error('Error fetching data', error)
          } finally {
            setLoading(false);
          }
        }

        getchUsers();

    }, [])

    const filters = (jobTypes) => {
        setJobTypes(jobTypes)
      }

    const userSearch = async(searchTerm) => {
        const filteredSearchJobs = await userService.usersSearch(searchTerm, jobTypes.join(','));
        setUsers(filteredSearchJobs)
        }
  
    return (
      <section className="bg-stone-50 bg-opacity-75 px-4 py-2 lg:max-w-[1200px] mx-auto my-10 lg:my-20">
        <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
        </h2>
          {loading ? (<Spinner loading={loading}/>) : (
            <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg px-4 py-8 rounded-lg">
                <SearchInput searchInput={userSearch}/>
              </div>
                <div className="gap-3 md:flex flex-cols-2">
                    <Filters selectedFilters={filters}/>
                    <div className="flex flex-col gap-4 w-full">
                        { users.length > 0 ? users.map((user) => (
                            <div className="bg-white rounded-lg shadow-md relative p-4 hover:shadow-xl md:p-6" key={user?.id}>
                                <div className="grid grid-col xs-md:justify-center mb-4 md:flex">
                                    <Avatar />
                                    <div className="p-4 text-center md:text-left">
                                        <div className="mb-4">
                                            <p className="text-gray-500">{user?.fullName}</p>
                                            <h3 className="text-xl font-bold">{user?.userProfile?.profession}</h3>
                                            <div className="my-2">
                                                <div className="text-gray-500">
                                                <p> NewTek Solutions  • <FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1"/>
                                                <span className="text-orange-700">Boston, MA</span></p>
                                            </div>
                                            <p className="text-gray-500 mb-2">{user?.userProfile?.salary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="mb-5 px-2">
                                    <p className="text-gray-500 text-sm font-semibold mb-4">PROFILE DESCRIPTION</p>
                                    {user?.userProfile?.profileDesc}
                                </div>
                            </div>
                        )): 
                        <NoResultsFound />
                        }
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
