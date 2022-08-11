import React, { useEffect } from "react";
import { useTransition, useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import heroImage from "../images/hero-photo.png";

import { HeadActions, HeadSubtext, HeadText } from "../components/TheHero";

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
    } else {
      transitionsApi.stop();
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

// ---------------------------------------------------------------------------------------
// -------------------  TRANSITION FOR CHILD COMPONENTS ----------------------------------
// ---------------------------------------------------------------------------------------

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

export default HeroSection;
