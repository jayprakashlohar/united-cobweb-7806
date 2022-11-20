import React from "react";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import SliderCarousel from "./Slider/SliderCarousel";
import TopSection from "./TopSection";

function Homepage() {
  return (
    <div>
      <TopSection />
      <MiddleSection />
      <SliderCarousel />
      <BottomSection />
    </div>
  );
}

export default Homepage;
