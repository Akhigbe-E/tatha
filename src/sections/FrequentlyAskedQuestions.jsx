import React, { useEffect } from "react";
import { animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import { useFramedImageAnimation, useImageFrameAnimation } from "../animations";
import QuestionItemList from "../components/QuestionItemList";

import faqImage from "../images/img-faq.png";
import purpleFlower from "../images/purpleFlower.svg";

const FAQHead = () => (
  <h2 className="headfont leading-tight text-d-faint-blue mb-10 w-full">
    You have <span className="text-d-orange">questions,</span> we have answers.
  </h2>
);

const FrequentlyAskedQuestions = () => {
  const [imageFrameAnimation, imageFrameApi] = useImageFrameAnimation();
  const [framedImageAnimation, framedImageApi] = useFramedImageAnimation();

  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      imageFrameApi.start({ transform: "translateY(-60%) scale(1)" });
      framedImageApi.start({ transform: "scale(1)" });
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative pt-40 pb-36 ">
      <img
        src={purpleFlower}
        alt="flower"
        className="w-[200px] h-auto absolute top-[-145px] right-[-10px] rotate-[120deg] z-50 scale-[-1]"
      />
      <div className="t-container">
        <div className="flex items-center justify-between relative space-x-10">
          <div className="relative w-[80%]">
            <animated.div
              style={imageFrameAnimation}
              className="w-[470px] h-[600px] bg-[#b7abd9] absolute rounded-t-full"
            >
              <animated.img
                style={framedImageAnimation}
                src={faqImage}
                alt="hand up"
                className="w-full h-full ml-5 rounded-t-full object-cover object-bottom"
              />
            </animated.div>
          </div>
          <div className="">
            <div className="w-[95%]">
              <FAQHead />
              <QuestionItemList shouldStartAnimation={inView} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
