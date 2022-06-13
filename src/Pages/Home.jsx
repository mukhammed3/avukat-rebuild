import React from "react";
import SectionThree from "../Components/SectionThree/SectionThree";
import SectionTwo from "../Components/SectionTwo/SectionTwo";
import SliderComponent from "../Components/Slider/SliderComponent";

function Home() {
  return (
    <>
      <SliderComponent />
      <SectionTwo />
      <SectionThree />
    </>
  );
}

export default Home;
