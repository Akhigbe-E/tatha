import * as React from "react";
import TheNavigationBar from "../components/TheNavigationBar";
import HeroSection from "../sections/HeroSection";

const IndexPage = () => {
  return (
    <>
      <header>
        <TheNavigationBar />
        <HeroSection />
      </header>
      <main>{/* <p>Hello</p> */}</main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
