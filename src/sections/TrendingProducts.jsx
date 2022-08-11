import React, { useEffect } from "react";

import { useTransition, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import productOneImage from "../images/product-one.png";
import productTwoImage from "../images/product-two.png";
import productThreeImage from "../images/product-three.png";
import productFourImage from "../images/product-four.png";
import productFiveImage from "../images/product-five.png";

import {
  TrendingProductsHead,
  TrendingProductsHeadAction,
  TrendingProductsSubtext,
} from "../components/TrendingProductHead";
import TrendingProductCard from "../components/TrendingProductCard";

const TrendingProducts = () => {
  useEffect(() => {
    generateCardTransitions(PRODUCT_CARD_DETAILS);
  }, []);
  const [pcTransitions, pcTransitionsApi] = useTransition(PRODUCT_CARD_TRANS, () => ({
    from: { opacity: 0.3 },
    enter: { opacity: 1 },
    delay: 200,
    config: {
      tension: 280,
      friction: 50,
    },
  }));
  const [trendingTitleTransitions, trendingTitleTransitionsApi] = useTransition(
    TITLE_TRANS,
    () => ({
      from: { opacity: 0.3 },
      enter: { opacity: 1 },
      config: {
        tension: 280,
        friction: 50,
      },
    })
  );

  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      trendingTitleTransitionsApi.start();
      pcTransitionsApi.start();
    } else {
      // trendingTitleTransitionsApi.stop();
      // pcTransitionsApi.stop();
    }
  }, [inView]);

  return (
    <div ref={ref} className="t-container pt-16 py-36 relative">
      <div className="w-full grid grid-cols-3 gap-x-5 gap-y-7 items-start">
        <animated.div className="space-y-6">
          {trendingTitleTransitions(({ opacity }, item) => (
            <animated.div
              style={{
                opacity: opacity.to(item.op),
                transform: opacity.to(item.trans).to((y) => `translate3d(0,${y}px,0)`),
              }}
            >
              {item.component}
            </animated.div>
          ))}
        </animated.div>
        {pcTransitions(({ opacity }, item) => (
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
  );
};

// ---------------------------------------------------------------------------------------
// -------------------  DUMMY DATA  ----------------------------------
// ---------------------------------------------------------------------------------------

const PRODUCT_CARD_DETAILS = [
  { name: "Shower Butter", img: productOneImage },
  { name: "Luxury Oil Gel", img: productTwoImage },
  { name: "Shower Butter", img: productThreeImage },
  { name: "Shower Butter", img: productFourImage },
  { name: "Luxury Oil Gel", img: productFiveImage },
];

// ---------------------------------------------------------------------------------------
// -------------------  TRANSITION FOR CHILD COMPONENTS ----------------------------------
// ---------------------------------------------------------------------------------------

const PRODUCT_CARD_TRANS = [];

const TITLE_TRANS = [
  {
    component: <TrendingProductsHead />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [100, 0], range: [0.75, 1] },
  },
  {
    component: <TrendingProductsSubtext />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [200, 0], range: [0.75, 1] },
  },
  {
    component: <TrendingProductsHeadAction />,
    op: { output: [0.5, 1], range: [0.75, 1] },
    trans: { output: [300, 0], range: [0.75, 1] },
  },
];

const generateCardTransitions = (cardComponents = []) => {
  let gap = 50;
  cardComponents.forEach(({ name, img }, i) => {
    PRODUCT_CARD_TRANS.push({
      component: <TrendingProductCard name={name} img={img} />,
      op: { output: [0.5, 1], range: [0.75, 1] },
      trans: { output: [70 + i * gap, 0], range: [0.75, 1] },
    });
  });
};

export default TrendingProducts;
