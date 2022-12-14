import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, useTransition, animated } from "react-spring";

import ExploreYourProduct from "../components/ExploreYourProduct";
import NewVideo from "../components/NewVideo";
import { BrandInformationHead, BrandInformationQuestions } from "../components/BrandInfo";

import curology from "../images/curology.jpg";
import purpleFlower from "../images/purpleFlower.svg";

const BrandInformation = () => {
  const newVideoAnimation = useSpring({
    from: { opacity: 0, top: "100px" },
    to: { opacity: 1, top: "0%" },
    delay: 2000,
    config: {
      tension: 280,
      friction: 80,
    },
  });
  const [exploreProductAnimation, exploreApi] = useSpring(() => ({
    transform: "scale(0.3)",
    config: {
      tension: 280,
      friction: 70,
    },
  }));
  const [curologyAnimation, curologyApi] = useSpring(() => ({
    transform: "translateY(-60%) scale(0)",
    top: "60%",
    config: {
      tension: 280,
      friction: 70,
    },
  }));
  const [curologyImageAnimation, curologyImageApi] = useSpring(() => ({
    transform: "scale(1.7)",
    config: {
      tension: 280,
      friction: 60,
    },
  }));

  const [biTransitions, biTransitionsApi] = useTransition(BRAND_INFO_TRANS, () => ({
    from: { opacity: 0.45 },
    enter: { opacity: 1 },
    delay: 100,
    config: {
      tension: 280,
      friction: 50,
    },
  }));

  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      exploreApi.start({ transform: "scale(1)" });
      curologyImageApi.start({ transform: "scale(1.15)" });
      curologyApi.start({ transform: "translateY(-60%) scale(1)" });
      biTransitionsApi.start();
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative pb-20">
      <img
        src={purpleFlower}
        alt="flower"
        className="w-[250px] h-auto absolute top-[-170px] left-[-20px] rotate-[110deg] z-50"
      />
      <div className="t-container relative top-[-90px]">
        <animated.div className="absolute right-0 z-30" style={newVideoAnimation}>
          <NewVideo />
        </animated.div>
      </div>
      <div className="flex items-center relative">
        <div className="w-[32%]">
          <div className="absolute top-[100px] left-[460px] z-30">
            <animated.div style={exploreProductAnimation}>
              <ExploreYourProduct />
            </animated.div>
          </div>
          <animated.div
            style={curologyAnimation}
            className="w-[470px] overflow-hidden h-[600px] bg-[#b7abd9]/80 absolute left-[8.75%] rounded-t-full"
          >
            <animated.img
              style={curologyImageAnimation}
              src={curology}
              alt="products"
              className="w-full h-full ml-5 rounded-t-full object-cover object-bottom"
            />
          </animated.div>
        </div>
        <div className="bg-d-faint-purple pt-60 pb-32 pl-64 w-[68%]">
          <div className="w-[80%]">
            {biTransitions(({ opacity }, item) => (
              <animated.div
                style={{
                  opacity: opacity.to(item.op),
                  transform: opacity.to(item.trans).to((y) => `translate3d(0,${y}px,0)`),
                }}
              >
                {item.component}
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------------------
// -------------------  TRANSITION FOR CHILD COMPONENTS ----------------------------------
// ---------------------------------------------------------------------------------------

const BRAND_INFO_TRANS = [
  {
    component: <BrandInformationHead />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [270, 0], range: [0.75, 1] },
  },
  {
    component: <BrandInformationQuestions />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [450, 0], range: [0.75, 1] },
  },
];

export default BrandInformation;
