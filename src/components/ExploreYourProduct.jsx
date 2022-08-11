import React from "react";
import exploreProduct from "../images/explore.svg";
import exploreArrow from "../images/exploreArrow.svg";

const ExploreYourProduct = () => {
  return (
    <div className="glass w-[135px] h-[135px] rounded-full border flex items-center justify-center relative">
      <img src={exploreProduct} alt="explore product" className="w-[90%] h-[90%]" />
      <img src={exploreArrow} alt="explore product" className="w-[40%] h-[40%] absolute" />
    </div>
  );
};

export default ExploreYourProduct;
