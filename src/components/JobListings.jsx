import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Spinner from "./Spinner";

const JobListings = ({viewAllJobs=false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = !viewAllJobs ? '/api/jobs?_limit=3' : '/api/jobs'
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       {!viewAllJobs ? 'Recent Jobs' : 'All Jobs'}
      </h2>
        {loading ? (<Spinner loading={loading}/>) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              { jobs.map((job) => (
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
                ))}
            </div>
          </>
        ) }
    </div>
  </section>
  );
};

export default JobListings;
