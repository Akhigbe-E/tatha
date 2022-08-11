import React from "react";
import Dot from "./Dot";
import NavCart from "./NavCart";
import { useSpring, animated } from "react-spring";

const TheNavigationBar = () => {
  const navLinksAnimation = useSpring({
    from: { opacity: 0.25, y: -70 },
    to: { opacity: 1, y: 0 },
    delay: 2200,
    config: {
      tension: 280,
      friction: 80,
    },
  });
  return (
    <nav className="py-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-full">
          <Dot />
        </div>
        <animated.ul
          style={navLinksAnimation}
          className="flex items-center justify-end space-x-14 text-d-gray font-medium text-lg"
        >
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Reviews</li>
          <li>
            <NavCart />
          </li>
        </animated.ul>
      </div>
    </nav>
  );
};

export default TheNavigationBar;
