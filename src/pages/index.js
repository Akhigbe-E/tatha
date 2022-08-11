import * as React from "react";
import { useSpring, easings, animated } from "react-spring";

import TheNavigationBar from "../components/TheNavigationBar";
import TheFooter from "../components/TheFooter";

import BrandInformation from "../sections/BrandInformation";
import BrandStatistics from "../sections/BrandStatistics";
import HeroSection from "../sections/HeroSection";
import FrequentlyAskedQuestions from "../sections/FrequentlyAskedQuestions";
import TestimonialsSection from "../sections/TestimonialsSection";
import TrendingProducts from "../sections/TrendingProducts";

const IndexPage = () => {
  const overlayAnimationStyle = useSpring({
    from: OVERLAY_FROM_STYLE,
    to: OVERLAY_TO_STYLE,
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

  return (
    <>
      {/* Overlay to start after logo animation */}
      {!isAnimationDone && (
        <animated.div
          className="absolute bg-[#f1e3ef]"
          style={overlayAnimationStyle}
        ></animated.div>
      )}
      <div
        className="h-screen overflow-y-scroll overflow-x-hidden"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <header className="relative t-container" style={{ scrollSnapAlign: "start" }}>
          <TheNavigationBar />
          <HeroSection />
        </header>
        <main>
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
          <div style={{ scrollSnapAlign: "start" }}>
            <TheFooter />
          </div>
        </main>
      </div>
    </>
  );
};

const OVERLAY_TO_STYLE = {
  width: "100vw",
  height: "100vh",
  zIndex: -10000,
  transform: "translate(33%, 100%)",
  opacity: 1,
};
const OVERLAY_FROM_STYLE = {
  width: "100vw",
  height: "100vh",
  right: "0%",
  left: "0px",
  top: "0%",
  zIndex: 30,
  transform: "translate(0%, 0%)",
  opacity: 1,
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
