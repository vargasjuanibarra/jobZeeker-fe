import React from "react";
import HomeCards from "./HomeCards";

const Hero = ({title='Default Prop Title', subTitle='default subtitle'}) => {
  return (
    <>
    <section className="mt-16 mb-4">
      <div
        className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-3xl font-extrabold text-black md:text-4xl lg:text-5xl xl:text-6xl"
          >
            {title}
          </h1>
          <p className="my-4 text-xl text-black">
            {subTitle}
          </p>
        </div>
      </div>
      <HomeCards />
    </section>
    </>

  );
};

export default Hero;
