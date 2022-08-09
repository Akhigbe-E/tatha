import React from "react";

const HeroSection = () => {
  return (
    <section className="t-container flex mt-14">
      <aside className="w-[60%]">
        <div>
          <h1 className="headfont text-d-blue leading-tight">Let your skin</h1>
          <div className="flex flex-wrap items-center space-x-2">
            <h1 className="headfont text-d-blue leading-tight">Going</h1>
            <span className="inline-block h-20 w-36 rounded-full relative bg-[#a294cd] items-end">
              <span className=""></span>
            </span>
            <h1 className="headfont text-d-blue leading-tight">Out.</h1>
          </div>
        </div>
        <div className="w-[53%] mb-12">
          <p className="text-lg text-d-gray">
            We want to bring to the world through our products that very special feeling joy,
            healthy and positive energy.
          </p>
        </div>
        <div className="flex items-center justify-start space-x-4">
          <button className="py-4 px-6 flex items-center justify-between rounded-full bg-d-orange text-white space-x-1">
            <span className="text-lg">Shop Now</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
          <button className="py-4 flex items-center justify-between text-black space-x-2">
            <i className="ri-play-fill text-xl"></i>
            <span className="text-lg">How to use</span>
          </button>
        </div>
      </aside>
    </section>
  );
};

export default HeroSection;
