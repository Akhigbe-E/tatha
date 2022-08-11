import React from "react";
import newStar from "../images/newStar.svg";
import { animated, useSpring } from "react-spring";
import curologyVideo from "../images/curology-video.jpg";

const NewVideo = () => {
  const videoAnimation = useSpring({
    from: { scaleX: 0, starScale: "scale(0)", starZIndex: 30 },
    to: { scaleX: 1, starScale: "scale(1)", starZIndex: 40 },
    delay: 2000,
    config: {
      tension: 280,
      friction: 80,
    },
  });
  return (
    <div className="relative">
      <animated.div
        className="absolute top-[-4rem] left-[-4rem]"
        style={{ zIndex: videoAnimation.starZIndex, transform: videoAnimation.starScale }}
      >
        <div className="relative">
          <animated.img src={newStar} alt="star" className="new-video-star w-36 h-36" />
          <p className="text-white text-lg absolute top-[3.5rem] left-[3.5rem] -rotate-[30deg]">
            New
          </p>
        </div>
      </animated.div>
      <animated.div
        className="border-[4px] border-white w-80 h-[200px] bg-[#c0b3df] relative flex items-center justify-center"
        style={videoAnimation}
      >
        <img src={curologyVideo} alt="video" className="w-full h-full object-cover" />
        {/* Play Button */}
        <div className="w-14 h-14 bg-white rounded-full absolute center-flex ">
          <i className="ri-play-fill text-4xl text-[#37316e]"></i>
        </div>
      </animated.div>
    </div>
  );
};

export default NewVideo;
