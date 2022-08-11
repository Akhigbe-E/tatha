import heroTextImage from "../images/img-hero-text.png";
import React from "react";

export const HeadText = () => (
  <div>
    <h1 className="headfont text-d-blue leading-tight">Let your skin</h1>
    <div className="flex flex-wrap items-center space-x-4">
      <h1 className="headfont text-d-blue leading-tight">Going</h1>
      <div className=" h-20 w-36 rounded-full relative bg-[#a294cd] flex items-center justify-center overflow-hidden">
        <div className="absolute z-20 border-[2px] border-white rounded-[95px] w-[88%] h-[87.5%] mx-auto"></div>
        <img
          className="absolute z-10 rounded-[95px] w-full h-full object-contain object-center scale-x-[-1.5] scale-y-[1.5]"
          src={heroTextImage}
          alt="hero text"
        />
      </div>
      <h1 className="headfont text-d-blue leading-tight">Out.</h1>
    </div>
  </div>
);
export const HeadSubtext = () => (
  <div className="w-[52%] mb-12 mt-3">
    <p className="text-lg text-d-gray">
      We want to bring to the world through our products that very special feeling joy, healthy and
      positive energy.
    </p>
  </div>
);
export const HeadActions = () => (
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
);
