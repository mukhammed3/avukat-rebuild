import React from "react";
import Footer from "../Components/Footer/Footer";
import SectionFive from "../Components/SectionFive/SectionFive";
import SectionFour from "../Components/SectionFour/SectionFour";
import SectionThree from "../Components/SectionThree/SectionThree";
import SectionTwo from "../Components/SectionTwo/SectionTwo";
import SliderComponent from "../Components/Slider/SliderComponent";

function Home() {
  return (
    <>
      <SliderComponent />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
}

export default Home;
