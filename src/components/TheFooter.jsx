import React, { useEffect } from "react";
import FooterLinksRow from "./FooterLinksRow";
import { useTransition, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import purpleFlower from "../images/purpleFlower.svg";
import faqImage from "../images/img-faq.png";
import footerImageOne from "../images/img-footer-one.png";
import footerImageThree from "../images/img-footer-three.png";

const TheFooter = () => {
  useEffect(() => {
    generateFooterLinkTrans(FOOTER_LINKS);
  }, []);
  const [footerImageTransitions, footerImageTransitionsApi] = useTransition(
    FOOTER_IMAGE_TRANS,
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
  const [footerLinksTransitions, footerLinksTransitionsApi] = useTransition(
    FOOTER_LINKS_TRANS,
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
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      footerImageTransitionsApi.start();
      footerLinksTransitionsApi.start();
    }
  }, [inView]);

  return (
    <footer ref={ref} className="pt-32 relative overflow-hidden">
      <img
        src={purpleFlower}
        className="w-[140px] h-auto absolute bottom-[-40px] left-0 rotate-[45deg] z-50 opacity-[0.05]"
      />
      <div className="t-container grid grid-cols-4 gap-x-5">
        {footerImageTransitions(({ opacity }, item) => (
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
      <div className="bg-d-blue w-full -mt-32 pt-60 text-base text-[#fefeff]">
        <div className="t-container flex items-start justify-start space-x-24 pb-28">
          <div className="w-[280px] flex flex-col space-y-10">
            <div className="flex items-start space-x-1">
              <p className="text-4xl headfont">Glow</p>
              <div className="w-[10px] h-[10px] mt-[10px] bg-d-orange rounded-full"></div>
            </div>
            <p className="capitalize font-normal">
              Keep Up With Our New Releases Beauty Tips And What emma's been up to.
            </p>
            <ul className="flex space-x-4 items-center text-[22px]">
              <i class="cursor-pointer ri-facebook-fill"></i>
              <i class="cursor-pointer ri-instagram-line"></i>
              <i class="cursor-pointer ri-twitter-fill"></i>
              <i class="cursor-pointer ri-linkedin-box-fill"></i>
            </ul>
          </div>
          <div className="flex-grow">
            <div className="flex items-start justify-start space-x-20">
              {footerLinksTransitions(({ opacity }, item) => (
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
        <div className="w-[35%] mx-auto border-t-2 border-white/5 text-white/20 py-10">
          <p className="text-center">Copyright @ 2022 Musemind | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ---------------------------------------------------------------------------------------
// -------------------  TRANSITION FOR CHILD COMPONENTS ----------------------------------
// ---------------------------------------------------------------------------------------

// Data for footer links
const FOOTER_LINKS = [
  {
    title: "Company",
    links: [{ text: "About" }, { text: "Jobs" }, { text: "Branding" }, { text: "Newsroom" }],
  },
  {
    title: "Resources",
    links: [{ text: "College" }, { text: "Support" }, { text: "Safety" }, { text: "StreamKit" }],
  },
  {
    title: "Terms & Condition",
    links: [
      { text: "Policy" },
      { text: "Faq" },
      { text: "Return & Delivery" },
      { text: "Tracking" },
    ],
  },
  {
    title: "Subscribe",
    links: [{ text: "Get 10% off your first order" }],
    extraLinkComponent: () => (
      <div className="p-1 pl-5 bg-[#262653] w-full rounded-full flex items-center justify-between">
        <p className="text-white/20 text-lg py-3">Enter your Email</p>
        <div className="bg-d-orange w-12 h-12 rounded-full border-[1.5px] border-white center-flex">
          <i className="ri-send-plane-2-line text-xl -rotate-45 mb-1 ml-1"></i>
        </div>
      </div>
    ),
  },
];

// Transitions
const FOOTER_LINKS_TRANS = [];
const generateFooterLinkTrans = (fLinks) => {
  fLinks.map(({ title, links, extraLinkComponent }, i) => {
    FOOTER_LINKS_TRANS.push({
      component: extraLinkComponent ? (
        <div className={"w-64"}>
          <FooterLinksRow title={title} links={links} extraLinkComponent={extraLinkComponent()} />
        </div>
      ) : (
        <FooterLinksRow title={title} links={links} />
      ),
      op: { output: [1, 1], range: [0.75, 1] },
      trans: { output: [70 + i * 60, 0], range: [0.75, 1] },
    });
  });
};

const FOOTER_IMAGE_TRANS = [
  {
    component: (
      <div className="w-full h-72 bg-[#bcc5e6]">
        <img src={footerImageOne} alt="hand up" />
      </div>
    ),
    op: { output: [1, 1], range: [0.75, 1] },
    trans: { output: [270, 0], range: [0.75, 1] },
  },
  {
    component: (
      <div className="w-full h-72 bg-[#fe8159] overflow-hidden">
        <img src={faqImage} alt="hand up" className="object-bottom scale-110 pt-2" />
      </div>
    ),
    op: { output: [1, 1], range: [0.75, 1] },
    trans: { output: [350, 0], range: [0.75, 1] },
  },
  {
    component: (
      <div className="w-full h-72 bg-[#d3c7ee]">
        <img src={footerImageThree} alt="hand up" />
      </div>
    ),
    op: { output: [1, 1], range: [0.75, 1] },
    trans: { output: [430, 0], range: [0.75, 1] },
  },
  {
    component: (
      <div className="w-full h-72 bg-[#fe8159] text-white center-flex">
        <div className="w-[60%] mx-auto text-center">
          <i class="cursor-pointer ri-instagram-line text-5xl mb-10"></i>
          <p className="mb-10">Join us and get all the services we provide</p>
          <div className="w-10 h-10 mx-auto center-flex rounded-full bg-[#f4764f]">
            <i class="cursor-pointer ri-arrow-right-line text-xl"></i>
          </div>
        </div>
      </div>
    ),
    op: { output: [1, 1], range: [0.75, 1] },
    trans: { output: [510, 0], range: [0.75, 1] },
  },
];

export default TheFooter;
