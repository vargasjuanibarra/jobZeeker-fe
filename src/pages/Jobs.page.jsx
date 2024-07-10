import React from "react";
import JobListings from "../components/JobListings";

const Jobspage = () => {
  return (
  <section className="max-w-[1200px] mx-auto">
    <JobListings viewAllJobs={true}/>
  </section>
  )
};

export default Jobspage;
