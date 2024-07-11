import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Spinner from "./Spinner";
import JobsService, { BASE_URL } from "../service/jobsService";
import { FetchClient } from "../service/fetchClient";
import SearchInput from "./SearchInput";
import Filters from "./Filters";
import NoResultsFound from "./NoResultsFound";

const JobListings = ({viewAllJobs=false}) => {
  const jobService = new JobsService(FetchClient)

  const [jobs, setJobs] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = !viewAllJobs ? `${BASE_URL}?_limit=3` : BASE_URL
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

  const filters = (jobTypes) => {
    setJobTypes(jobTypes)
  }

  const jobSearch = async(searchTerm) => {
  const filteredSearchJobs = await jobService.jobSearch(searchTerm, jobTypes.join(','));
  setJobs(filteredSearchJobs)
  }


  return (
    <section className="bg-stone-50 bg-opacity-75 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
       {!viewAllJobs ? 'Recent Posted Jobs' : ''}
      </h2>
        {loading ? (<Spinner loading={loading}/>) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SearchInput jobSearchInput={jobSearch}/>
            
            <div className="gap-3 md:flex flex-cols-2">
              <Filters selectedFilters={filters}/>
              <div className="flex flex-col gap-4 w-full">
                { jobs.length > 0 ? jobs.map((job) => (
                    <JobCard 
                        key={job.id}
                        id={job.id}
                        jobtype={job.type}
                        jobtitle={job.title}
                        jobdescription={job.description}
                        salary={job.salary}
                        location={job.location}
                        company={job.company}
                    />
                  )) : 
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

export default JobListings;
