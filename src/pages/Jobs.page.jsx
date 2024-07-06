import React from "react";
import JobListings from "../components/JobListings";

const Jobspage = () => {
  return (
  <section className="bg-blue-50 px-4 py-6">
    <JobListings viewAllJobs={true}/>
  </section>
  )
};

export default Jobspage;
