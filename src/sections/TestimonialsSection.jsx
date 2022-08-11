import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, useTransition, animated } from "react-spring";

import { useFramedImageAnimation, useImageFrameAnimation } from "../animations";
import brandStatsWoman from "../images/img-brand-stats-woman.png";
import framesi from "../images/framesi.png";
import barione from "../images/barione.png";

const TestimonialsSection = () => {
  const [framedImageAnimation, framedImageApi] = useFramedImageAnimation();
  const [imageFrameAnimation, imageFrameApi] = useImageFrameAnimation();

  const [companiesTransitions, companiesTransitionsApi] = useTransition(COMPANIES_TRANS, () => ({
    from: { opacity: 0.3 },
    enter: { opacity: 1 },
    delay: 200,
    config: {
      tension: 280,
      friction: 50,
    },
  }));

  const [quoteContainerAnimation, quoteContainerApi] = useSpring(() => ({
    opacity: 0.5,
    width: "50%",
    marginLeft: "60%",
    paddingLeft: "20px",
    paddingRight: "20px",
    config: {
      tension: 280,
      friction: 50,
    },
  }));

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      quoteContainerApi.start({
        opacity: 1,
        width: "85%",
        marginLeft: "0%",
        paddingLeft: "80px",
        paddingRight: "80px",
      });
      imageFrameApi.start({ transform: "translateY(-60%) scale(1)" });
      framedImageApi.start({ transform: "scale(1)" });
      companiesTransitionsApi.start();
    }
  }, [inView]);

  return (
    <>
      <section ref={ref} className="t-container relative py-24">
        <div className="flex flex-col w-full space-y-32">
          <div className="relative w-full h-[500px]">
            {/* <animated.div className="bg-white py-20" style={quoteContainerAnimation}>
              <animated.div style={{ opacity: quoteContainerAnimation.opacity }}>
                <i className="ri-double-quotes-l text-8xl text-d-orange mb-14"></i>
                <p className="text-3xl headfont text-d-faint-blue w-[636px] mb-14">
                  The UK Jewelery awards is an event we always look forward to and we are so
                  honoured to be recognised.
                </p>
                <p className="text-d-blue text-2xl mb-2">Jane Cooper</p>
                <p className="text-d-gray">Nashville, USA</p>
              </animated.div>
            </animated.div> */}
            <div
              className="bg-white py-20"
              style={{
                opacity: 1,
                width: "85%",
                marginLeft: "0%",
                paddingLeft: "80px",
                paddingRight: "80px",
              }}
            >
              <div>
                <i className="ri-double-quotes-l text-8xl text-d-orange mb-14"></i>
                <p className="text-3xl headfont text-d-faint-blue w-[636px] mb-14">
                  The UK Jewelery awards is an event we always look forward to and we are so
                  honoured to be recognised.
                </p>
                <p className="text-d-blue text-2xl mb-2">Jane Cooper</p>
                <p className="text-d-gray">Nashville, USA</p>
              </div>
            </div>
            <div className="rounded-full w-[430px] h-[430px]  absolute right-0 top-[50%] translate-y-[-50%]">
              <animated.div
                style={imageFrameAnimation}
                className="w-[430px] overflow-hidden h-[430px] bg-[#f6866a] border-[10px] border-[#f7f4ef] absolute right-0 rounded-full"
              >
                <animated.img
                  style={framedImageAnimation}
                  src={brandStatsWoman}
                  alt="woman"
                  className="w-full h-full ml-5 rounded-t-full object-cover object-bottom"
                />
              </animated.div>
            </div>
          </div>
          <div className={`grid grid-cols-5 gap-x-28 items-center`}>
            {companiesTransitions(({ opacity }, item) => (
              <animated.div
                style={{
                  opacity: opacity.to(item.op),
                  transform: opacity.to(item.trans).to((x) => `translate3d(${x}px,0,0)`),
                }}
              >
                {item.component}
              </animated.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ---------------------------------------------------------------------------------------
// -------------------  TRANSITION FOR CHILD COMPONENTS ----------------------------------
// ---------------------------------------------------------------------------------------

const COMPANIES_TRANS = [
  {
    component: (
      <img src={framesi} alt="woman" className="w-full h-full object-cover object-center" />
    ),
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [80, 0], range: [0.75, 1] },
  },
  {
    component: (
      <img src={barione} alt="woman" className="w-full h-full object-cover object-center" />
    ),
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [160, 0], range: [0.75, 1] },
  },
  {
    component: (
      <img src={barione} alt="woman" className="w-full h-full object-cover object-center" />
    ),
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [240, 0], range: [0.75, 1] },
  },
  {
    component: (
      <img src={barione} alt="woman" className="w-full h-full object-cover object-center" />
    ),
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [320, 0], range: [0.75, 1] },
  },
  {
    component: (
      <img src={barione} alt="woman" className="w-full h-full object-cover object-center" />
    ),
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [400, 0], range: [0.75, 1] },
  },
];

export default TestimonialsSection;
