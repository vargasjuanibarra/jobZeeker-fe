import React from "react";
import Hero from "../components/Hero";
import HomeCards from '../components/HomeCards';
import JobListings from "../components/JobListings";
import AllJobs from "../components/AllJobs";
const HomePage = () => {
  return (
    <>
    <div className="h-[80vh] flex flex-col justify-center max-w-[1200px] mx-auto">
        <Hero title="The Job Board for Virtual Workers" subTitle="Make work happen"/>
        <HomeCards />

    </div>
        {/* <JobListings />
        <AllJobs /> */}
    </>
  )
};

export default HomePage;
