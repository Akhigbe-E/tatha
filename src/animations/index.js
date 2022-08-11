import { useSpring, useTransition, animated } from "react-spring";

export const useFramedImageAnimation = () => {
  const [framedImageAnimation, framedImageApi] = useSpring(() => ({
    transform: "scale(1.7)",
    config: {
      tension: 280,
      friction: 40,
    },
  }));
  return [framedImageAnimation, framedImageApi];
};

export const useImageFrameAnimation = (p) => {
  return useSpring(() => ({
    transform: `translateY(-60%) scale(${p?.initialScale || 0})`,
    top: "60%",
    config: {
      tension: 280,
      friction: 50,
    },
  }));
};
