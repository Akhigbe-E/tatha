import React, { useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { useFramedImageAnimation, useImageFrameAnimation } from "../animations";
import brandStatsWoman from "../images/img-brand-stats-woman.png";
import { useInView } from "react-intersection-observer";
import StatisticsBlock from "../components/StatisticsBlock";
import { BrandStatisticsHead, BrandStatisticsSubtext } from "../components/BrandStatisticsHead";

const BrandStatistics = () => {
  const [framedImageAnimation, framedImageApi] = useFramedImageAnimation();
  const [imageFrameAnimation, imageFrameApi] = useImageFrameAnimation();

  const [statBlocksTransitions, statBlocksTransitionsApi] = useTransition(
    STAT_BLOCKS_TRANS,
    () => ({
      from: { opacity: 0.3 },
      enter: { opacity: 1 },
      delay: 100,
      config: {
        tension: 280,
        friction: 80,
      },
    })
  );

  const BRAND_INFO_TRANS = [
    {
      component: <BrandStatisticsHead />,
      op: { output: [0.5, 1], range: [0.75, 1] },
      trans: { output: [100, 0], range: [0.75, 1] },
    },
    {
      component: <BrandStatisticsSubtext />,
      op: { output: [0.5, 1], range: [0.75, 1] },
      trans: { output: [200, 0], range: [0.75, 1] },
    },
    {
      component: (
        <div className="w-full flex items-center justify-start -space-x-10 ">
          {statBlocksTransitions(({ opacity }, item) => (
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
      ),
      op: { output: [0.2, 1], range: [0.75, 1] },
      trans: { output: [300, 0], range: [0.75, 1] },
    },
  ];

  const [bsTransitions, bsTransitionsApi] = useTransition(BRAND_INFO_TRANS, () => ({
    from: { opacity: 0.3 },
    enter: { opacity: 1 },
    delay: 100,
    config: {
      tension: 280,
      friction: 80,
    },
  }));

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      framedImageApi.start({ transform: "scale(1)" });
      imageFrameApi.start({ transform: "translateY(-60%) scale(1)" });
      bsTransitionsApi.start();
      statBlocksTransitionsApi.start();
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative py-16 min-h-90vh">
      <div className="flex items-center relative">
        <div className="bg-[#ffe5de] pt-32 pb-32 px-32 w-[77%]">
          <div className="w-[70%]">
            {bsTransitions(({ opacity }, item) => (
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
        <div className="w-[23%]">
          <animated.div
            style={imageFrameAnimation}
            className="w-[470px] overflow-hidden h-[620px] bg-[#f6866a]/80 absolute right-[125px] rounded-full"
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
    </div>
  );
};

// ---------------------------------------------------------------------------------------
// -------------------  TRANSITION FOR CHILD COMPONENTS ----------------------------------
// ---------------------------------------------------------------------------------------

const STAT_BLOCKS_TRANS = [
  {
    component: <StatisticsBlock title={"Product Users"} value="7M+" />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [-100, 0], range: [0.75, 1] },
  },
  {
    component: <StatisticsBlock angleUp={false} title={"Brand Product"} value="99+" />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [-200, 0], range: [0.75, 1] },
  },
  {
    component: <StatisticsBlock title={"Product Reviews"} value="5M" />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [-300, 0], range: [0.75, 1] },
  },
];

export default BrandStatistics;
