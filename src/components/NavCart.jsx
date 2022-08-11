import React from "react";

const NavCart = () => {
  return (
    <button className="relative">
      <div className="outline-none bg-d-orange w-11 h-11 rounded-full">
        <div className="flex w-full h-full items-center justify-center">
          <i className="ri-shopping-bag-line text-white text-lg" />
        </div>
      </div>
      <div className="absolute top-[-4px] right-[-4px]">
        <div className="bg-d-blue border-[1px] border-white rounded-full w-[22px] h-[22px] center-flex">
          <p className="text-white text-xs">1</p>
        </div>
      </div>
    </button>
  );
};

export default NavCart;
