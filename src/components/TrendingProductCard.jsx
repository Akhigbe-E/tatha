import React, { useState } from "react";

const TrendingProductCard = ({ name = "Shower Butter", img = "" }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <button className="w-full h-full space-y-5 relative outline-none">
      <div
        onMouseOver={() => {
          setIsHovering(true);
        }}
        onFocus={() => 0}
        onMouseOut={() => {
          setIsHovering(false);
        }}
        onBlur={() => 0}
        className="bg-white w-full h-[370px] flex item-center"
      >
        <img src={img} alt="product" className=" mx-auto object-scale-down scale-[0.7]" />
        {isHovering && <Actions />}
      </div>
      <div className="text-center space-y-2">
        <p className="headfont text-xl">{name}</p>
        <p className="text-d-gray/80 text-base">$190.99</p>
      </div>
    </button>
  );
};

const Actions = () => (
  <div className="flex flex-col items-center justify-center space-y-3 absolute right-[25px] bottom-[105px]">
    <div className="outline-none bg-d-orange w-11 h-11 rounded-full">
      <div className="flex w-full h-full items-center justify-center">
        <i className="ri-shopping-bag-line text-white text-lg" />
      </div>
    </div>
    <div className="outline-none bg-white border border-d-orange w-11 h-11 rounded-full">
      <div className="flex w-full h-full items-center justify-center">
        <i className="ri-heart-line text-d-orange text-xl" />
      </div>
    </div>
  </div>
);

export default TrendingProductCard;
