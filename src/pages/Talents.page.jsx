import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { FetchClient } from "../service/fetchClient";
import SearchInput from "../components/SearchInput";
import Filters from "../components/Filters";
import UserService, { USER_URL } from "../service/userService";
import NoResultsFound from "../components/NoResultsFound";
import TalentCard from "../components/TalentCard";

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
                            <TalentCard user={user} key={user.id} className="cursor-pointer"/>
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
