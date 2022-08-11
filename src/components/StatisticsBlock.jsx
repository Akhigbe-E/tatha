import React from "react";

const StatisticsBlock = ({ angleUp = true, title, value }) => {
  return (
    <div className="relative center-flex">
      <div
        className={`h-36 w-52 rounded-full ${angleUp ? "rotate-[120deg]" : "-rotate-[60deg]"}`}
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.3) 50%, rgb(255,229,222,0) 70%)",
        }}
      ></div>
      <div className={`text-center absolute top-[10%] right-[50%] translate-x-[55%]`}>
        <p className="mb-3 w-20">{title}</p>
        <p className="text-d-orange text-4xl headfont">{value}</p>
      </div>
    </div>
  );
};

export default StatisticsBlock;
