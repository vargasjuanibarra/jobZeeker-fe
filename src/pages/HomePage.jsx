import React from "react";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
    <div className="h-screen flex items-center justify-center lg:max-w-[900px] xl:max-w-[1200px] mx-auto ">
        <Hero subTitle="Make work happen"/>
    </div>
    </>
  )
};

export default HomePage;
