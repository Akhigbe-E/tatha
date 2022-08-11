import React from "react";

// COMPONENTS FOR THE BRAND INFORMATION SECTION

export const TrendingProductsHead = () => (
  <h2 className="headfont leading-tight">
    Trending On <span className="text-d-orange">Essentials</span>
  </h2>
);

export const TrendingProductsSubtext = () => (
  <p className="text-d-gray text-lg w-[90%]">
    Made with nature's best ingredients — our products' transparent ingredient. Fear of God
    Essentials.
  </p>
);

export const TrendingProductsHeadAction = () => (
  <button className="mt-8 py-4 px-7 flex items-center justify-between rounded-full bg-transparent border border-d-orange text-d-orange space-x-1">
    <span className="text-lg">Browse All Products</span>
    <i className="ri-arrow-right-line text-xl"></i>
  </button>
);
