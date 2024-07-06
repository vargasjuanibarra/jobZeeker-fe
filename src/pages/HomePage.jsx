import React from "react";
import Hero from "../components/Hero";
import HomeCards from '../components/HomeCards';
import JobListings from "../components/JobListings";
import AllJobs from "../components/AllJobs";
const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings />
        <AllJobs />
    </>
  )
};

export default HomePage;
