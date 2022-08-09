import React from "react";
import NavCart from "./NavCart";

const TheNavigationBar = () => {
  return (
    <nav className="t-container py-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-full"></div>
        <ul className="flex items-center justify-end space-x-14 text-d-gray font-medium text-lg">
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Reviews</li>
          <li>
            <NavCart />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TheNavigationBar;
