import React from "react";
import JobListings from "../components/JobListings";

const Jobspage = () => {
  return (
  <section className="px-4 py-6 max-w-[1200px] mx-auto">
    <JobListings viewAllJobs={true}/>
  </section>
  )
};

export default Jobspage;
