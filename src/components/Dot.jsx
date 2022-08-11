import React, { useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";

const Dot = () => {
  const shapes = [
    "M35.0144 1.56198L32.9846 1.49953C15.2078 0.952547 0.5 15.2147 0.5 33C0.5 50.7853 15.2078 65.0475 32.9846 64.5005L35.0144 64.438C52.0007 63.9154 65.5 49.9943 65.5 33C65.5 16.0057 52.0007 2.08464 35.0144 1.56198Z",
    "M67.5429 3.81033L23.4414 0.622273C11.3181 -0.254112 1 9.34505 1 21.5C1 33.6549 11.3181 43.2541 23.4414 42.3777L67.5429 39.1897C76.8178 38.5192 84 30.7991 84 21.5C84 12.2009 76.8178 4.4808 67.5429 3.81033Z",
    "M85.5009 1.79718L23.499 1.21225C11.1076 1.09535 1 11.1081 1 23.5C1 35.8919 11.1076 45.9046 23.499 45.7877L85.501 45.2028C97.4072 45.0905 107 35.4068 107 23.5C107 11.5932 97.4072 1.9095 85.5009 1.79718Z",
    "M23.5054 0.516976L22.9943 0.50549C10.6536 0.228172 0.5 10.1562 0.5 22.5C0.5 34.8438 10.6536 44.7718 22.9943 44.4945L23.5054 44.483C35.4539 44.2145 45 34.4515 45 22.5C45 10.5485 35.4539 0.78548 23.5054 0.516976Z",
    "M37.5089 1.67609L19.2436 1.33784C9.22305 1.15228 1 9.22446 1 19.2467V23.0918C1 34.0104 12.0855 41.4324 22.1807 37.2728C25.7285 35.8109 29.7436 35.7497 33.3467 37.0694C43.7711 40.8874 55 33.2382 55 22.1367V19.4941C55 9.78044 47.2209 1.85594 37.5089 1.67609Z",
  ];
  const [animatedDot, animatedDotApi] = useSpring(() => ({
    from: {
      path: shapes[0],
      transform: "translate(0px, 0px) rotate(0deg) scale(0)",
      opacity: 0,
      wholeScale: "scale(1.6)",
      top: "50%",
      left: "45%",
    },
    to: [
      { path: shapes[0], transform: "translate(0px, 0px) rotate(0deg) scale(0.5)" },
      { path: shapes[0], transform: "translate(0px, 0px) rotate(0deg) scale(1)" },
      { path: shapes[1], transform: "translate(0px, 0px) rotate(0deg) scale(1)" },
      { path: shapes[2], transform: "translate(149px, 0px) rotate(0deg) scale(1)", opacity: 1 },
      { path: shapes[3], transform: "translate(255px, 0px) rotate(0deg) scale(1)" },
      { transform: "translate(265px, 0px) rotate(-45deg) scale(0.5)" },
      {
        path: shapes[0],
        transform: "translate(160px, 47px) rotate(200deg) scale(0.27)",
        wholeScale: "scale(1)",
      },
      {
        path: shapes[0],
        transform: "translate(160px, 47px) rotate(200deg) scale(0.27)",
        top: "12%",
        left: "0%",
        wholeScale: "scale(0.6)",
      },
    ],
    config: {
      precision: 0.15,
      tension: 120,
      friction: 22,
      clamp: true,
    },
  }));

  const [logoTextTransitions, logoTextTransitionsApi] = useTransition(LETTERS_TRANS, () => ({
    from: { opacity: 0.3 },
    enter: { opacity: 1 },
    delay: 1000,
    config: {
      tension: 280,
      friction: 50,
    },
  }));

  useEffect(() => {
    logoTextTransitionsApi.start();
    animatedDotApi.start();
  }, []);

  return (
    <animated.div
      className="absolute translate-y-[-50%] translate-x-[45%] w-60 z-50"
      style={{ transform: animatedDot.wholeScale, top: animatedDot.top, left: animatedDot.left }}
    >
      <animated.div className="relative headfont flex items-end">
        {/* <animated.svg
          width="144"
          height="46"
          viewBox="0 0 144 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: animatedDot.opacity, position: "absolute", scale: "scale(0.1)" }}
        >
          <animated.path
            d="M32.6826 44.583C30.3991 45.1787 27.3809 45.4766 23.6279 45.4766C19.8949 45.4766 16.688 45.0099 14.0073 44.0767C11.3465 43.1434 9.05306 41.7633 7.12695 39.9365C2.99674 36.0843 0.931641 30.723 0.931641 23.8525C0.931641 19.3649 2.00391 15.4928 4.14844 12.2363C7.04753 7.80827 11.5054 4.98861 17.522 3.77734C19.3687 3.41992 21.6323 3.24121 24.313 3.24121C26.9937 3.24121 29.307 3.37028 31.2529 3.62842V9.34717C29.5452 8.91032 27.1029 8.69189 23.9258 8.69189C20.7686 8.69189 18.1772 9.04932 16.1519 9.76416C14.1265 10.479 12.4486 11.5016 11.1182 12.832C8.45736 15.4333 7.12695 19.1068 7.12695 23.8525C7.12695 28.6777 8.4375 32.5399 11.0586 35.439C13.918 38.5962 17.9985 40.1748 23.3003 40.1748C24.5314 40.1748 25.6732 40.1252 26.7256 40.0259V24.7461H32.6826V44.583ZM43.584 0.679688H49.541V33.354C49.541 37.2856 50.4346 39.599 52.2217 40.2939C52.8174 40.5322 53.4528 40.6514 54.1279 40.6514C54.8031 40.6514 55.4087 40.5719 55.9448 40.4131V45L54.8428 45.1191C54.4854 45.1589 54.1379 45.1787 53.8003 45.1787C49.9878 45.1787 47.2376 43.9277 45.5498 41.4258C44.2393 39.46 43.584 36.7793 43.584 33.3838V0.679688ZM60.6807 29.5713C60.6807 24.7461 62.2196 20.8343 65.2974 17.8359C68.1766 15.0361 71.7409 13.6362 75.9902 13.6362C80.1602 13.6362 83.645 15.0361 86.4448 17.8359C89.4233 20.8145 90.9126 24.7262 90.9126 29.5713C90.9126 34.3965 89.4134 38.2884 86.415 41.2471C83.5755 44.0667 80.0907 45.4766 75.9604 45.4766C71.7707 45.4766 68.2163 44.0667 65.2974 41.2471C62.2196 38.2884 60.6807 34.3965 60.6807 29.5713ZM66.876 29.5713C66.876 34.6546 68.5042 38.1097 71.7607 39.9365C72.9124 40.5719 74.2925 40.8896 75.9009 40.8896C77.5093 40.8896 78.8695 40.5719 79.9814 39.9365C81.0934 39.2812 82.0068 38.4274 82.7217 37.375C84.0521 35.3496 84.7173 32.7484 84.7173 29.5713C84.7173 24.5277 83.1188 21.0726 79.9219 19.2061C78.8099 18.5508 77.4795 18.2231 75.9307 18.2231C74.3818 18.2231 73.0316 18.5508 71.8799 19.2061C70.748 19.8415 69.8148 20.6854 69.0801 21.7378C67.6107 23.8029 66.876 26.4141 66.876 29.5713ZM94.0996 14.2617H100.444L108.337 38.6855L116.319 14.2617H122.515L130.586 38.5962L138.092 14.2617H143.99L133.654 45H127.519L119.238 21.708L111.405 45H105.269L94.0996 14.2617Z"
            fill="black"
          />
        </animated.svg> */}
        <div
          className="headfont flex text-[4rem]"
          style={{
            opacity: animatedDot.opacity,
            position: "absolute",
            scale: "scale(0.1)",
          }}
        >
          {logoTextTransitions(({ opacity }, item) => (
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
        <animated.svg
          width="133"
          height="68"
          viewBox="0 0 133 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: animatedDot.transform,
            transformOrigin: "top left",
            position: "absolute",
          }}
        >
          <animated.path d={animatedDot.path} fill="#F5683C" />
        </animated.svg>
      </animated.div>
    </animated.div>
  );
};

const LETTERS_TRANS = [
  {
    component: <p>G</p>,
    op: { output: [0, 1], range: [0.75, 1] },
    trans: { output: [10, 0], range: [0.75, 1] },
  },
  {
    component: <p>l</p>,
    op: { output: [0, 1], range: [0.75, 1] },
    trans: { output: [40, 0], range: [0.75, 1] },
  },
  {
    component: <p>o</p>,
    op: { output: [0, 1], range: [0.75, 1] },
    trans: { output: [70, 0], range: [0.75, 1] },
  },
  {
    component: <p>w</p>,
    op: { output: [0, 1], range: [0.75, 1] },
    trans: { output: [100, 0], range: [0.75, 1] },
  },
];

export default Dot;
