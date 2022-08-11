import React, { useEffect } from "react";
import { useTransition, useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import heroImage from "../images/hero-photo.png";
import heroTextImage from "../images/img-hero-text.png";

const HeadText = () => (
  <div>
    <h1 className="headfont text-d-blue leading-tight">Let your skin</h1>
    <div className="flex flex-wrap items-center space-x-4">
      <h1 className="headfont text-d-blue leading-tight">Going</h1>
      <div className=" h-20 w-36 rounded-full relative bg-[#a294cd] flex items-center justify-center overflow-hidden">
        <div className="absolute z-20 border-[2px] border-white rounded-[95px] w-[88%] h-[87.5%] mx-auto"></div>
        <img
          className="absolute z-10 rounded-[95px] w-full h-full object-contain object-center scale-x-[-1.5] scale-y-[1.5]"
          src={heroTextImage}
          alt="image"
        />
      </div>
      <h1 className="headfont text-d-blue leading-tight">Out.</h1>
    </div>
  </div>
);
const HeadSubtext = () => (
  <div className="w-[52%] mb-12 mt-3">
    <p className="text-lg text-d-gray">
      We want to bring to the world through our products that very special feeling joy, healthy and
      positive energy.
    </p>
  </div>
);
const HeadActions = () => (
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

const HERO_TRANS = [
  {
    component: <HeadText />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [100, 0], range: [0.75, 1] },
  },
  {
    component: <HeadSubtext />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [200, 0], range: [0.75, 1] },
  },
  {
    component: <HeadActions />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [300, 0], range: [0.75, 1] },
  },
];

const HeroSection = () => {
  const [transitions, transitionsApi] = useTransition(HERO_TRANS, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 2200,
    config: {
      tension: 280,
      friction: 80,
    },
  }));
  const imageAnimation = useSpring({
    from: { opacity: 0.5, top: "700px" },
    to: { opacity: 1, top: "0px" },
    delay: 2200,
    config: {
      tension: 280,
      friction: 100,
    },
  });

  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      transitionsApi.start();
      // imageAnimationApi.start();
    } else {
      transitionsApi.stop();
      // imageAnimationApi.stop();
    }
    return () => {};
  }, [inView]);

  return (
    <section ref={ref} className="flex items-start justify-between relative h-[702px]">
      <aside className="w-[750px] pt-28">
        {transitions(({ opacity }, item) => (
          <animated.div
            style={{
              opacity: opacity.to(item.op),
              transform: opacity.to(item.trans).to((y) => `translate3d(0,${y}px,0)`),
            }}
          >
            {item.component}
          </animated.div>
        ))}
      </aside>
      <section className="hero-image absolute top-0 w-[702px] h-auto right-[-65px]">
        <div className="relative w-full h-full">
          <animated.div className="absolute" style={imageAnimation}>
            <animated.img src={heroImage} alt="lady" />
          </animated.div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
