import React from "react";

import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "./SliderCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const CourosolDiv = styled.div`
  /* width: 700px; */
  width: 89%;
  /* padding: 20px; */
  margin: auto;
  /* background-color: red; */
  height: 80%;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  .swiper {
    /* border: 1px solid white; */
    box-sizing: border-box;
    padding: 0 70px;
  }

  .sliderEl {
    background-color: #ffffff;
    height: 100%;
    border-radius: 10px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: #a8b4d2;
    box-sizing: border-box;

    height: 40px;
    width: 40px;
    /* padding: 20px; */
    border-radius: 1000px;

    &:hover {
      background-color: #ffffff;
      transition: 700ms;
    }
  }
  .swiper-button-prev {
    position: absolute;
    left: 10px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 20px;
    font-weight: bolder;
    color: #0046be;
  }
`;

// import Swiper core and required modules

export const SliderComp = ({ data, cardShadow }) => {
  console.log(data, "s");
  return (
    <CourosolDiv>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        swipeHandler={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        allowSlideNext={true}
        allowSlidePrev={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: true,
        }}
      >
        {data.map((el) => {
          return (
            <SwiperSlide key={el.id} className={"sliderEl"}>
              <SliderCard {...el} cardShadow={cardShadow} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CourosolDiv>
  );
};

export default SliderComp;
