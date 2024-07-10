import React from "react";

const Hero = ({title='Default Prop Title', subTitle='default subtitle'}) => {
  return (
    <section className=" py-20 mb-4">
      <div
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-3xl font-extrabold text-black sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          <p className="my-4 text-xl text-black">
            {subTitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
