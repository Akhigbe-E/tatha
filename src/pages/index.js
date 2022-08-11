import * as React from "react";
import { useSpring, useSpringRef, easings, animated } from "react-spring";
import createScrollSnap from "scroll-snap";

import TheNavigationBar from "../components/TheNavigationBar";
import HeroSection from "../sections/HeroSection";
import BrandInformation from "../sections/BrandInformation";
import TrendingProducts from "../sections/TrendingProducts";

import BrandStatistics from "../sections/BrandStatistics";
import FrequentlyAskedQuestions from "../sections/FrequentlyAskedQuestions";
import TestimonialsSection from "../sections/TestimonialsSection";
import TheFooter from "../components/TheFooter";

const IndexPage = () => {
  const overlayAnimationStyle = useSpring({
    from: {
      width: "100vw",
      height: "100vh",
      right: "0%",
      left: "0px",
      top: "0%",
      zIndex: 30,
      transform: "translate(0%, 0%)",
      opacity: 1,
    },
    to: {
      width: "100vw",
      height: "100vh",
      zIndex: -10000,
      transform: "translate(33%, 100%)",
      opacity: 1,
    },
    config: {
      duration: 500,
      easing: easings.easeInOutCirc,
    },
    delay: 2200,
  });
  const [isAnimationDone, setIsAnimationDone] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsAnimationDone(true);
    }, 2550);
    return () => clearTimeout();
  }, []);

  // const container = React.useRef();
  // const bindScrollSnap = () => {
  //   const element = container.current;
  //   createScrollSnap(
  //     element,
  //     {
  //       snapDestinationY: "97%",
  //       duration: 500,
  //       timeout: 10,
  //       threshold: 0.4,
  //       easing: 0,
  //     },
  //     () => console.log("snapped")
  //   );
  // };
  // React.useEffect(() => {
  //   bindScrollSnap();
  // }, []);

  return (
    <>
      {/* Overlay to start after logo animation */}
      {!isAnimationDone && (
        <animated.div
          className="absolute bg-[#f1e3ef]"
          style={overlayAnimationStyle}
        ></animated.div>
      )}
      <div className="h-screen overflow-y-scroll overflow-x-hidden" style={{ scrollSnapType: "y" }}>
        <header className="relative t-container" style={{ scrollSnapAlign: "start" }}>
          <TheNavigationBar />
          <HeroSection />
        </header>
        {/* <main> */}
        <div style={{ scrollSnapAlign: "start" }}>
          <BrandInformation />
        </div>
        <div style={{ scrollSnapAlign: "start" }}>
          <TrendingProducts />
        </div>
        <div style={{ scrollSnapAlign: "start" }}>
          <BrandStatistics />
        </div>
        <div style={{ scrollSnapAlign: "start" }}>
          <FrequentlyAskedQuestions />
        </div>
        <div style={{ scrollSnapAlign: "center" }}>
          <TestimonialsSection />
        </div>
        <div style={{ scrollSnapAlign: "bottom" }}>
          <TheFooter />
        </div>
        {/* </main>  */}
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
