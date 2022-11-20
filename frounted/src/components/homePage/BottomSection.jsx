import React from "react";
import { Box } from "@chakra-ui/react";
import "../../styles/BottomSection.css";
import LaptopSlider from "../homePage/Slider/LaptopSlider";

function BottomSection() {
  return (
    <Box className="Bottom_container">
      <Box>
        <p>Our featured offers</p>
        <Box className="flex_container">
          <Box>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_6509653-macbook-pro-MMT-574306-0815-2c6fefe1-d0ed-4399-8b8a-43734c8ab582.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <p>MacBook Save up to $200 on select models.</p>
          </Box>
          <Box>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-604804-namebrandtv-pol_der-df0550ce-6248-40ed-a170-07adfed8ea92.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <p>Save up to $700 on select Samsung, LG and Sony TVs.</p>
          </Box>
          <Box>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-604780_der-3c8f3ec6-cce4-468c-b0bd-80f4a2783f0d.jpg;maxHeight=504;maxWidth=740"
              alt=""
            />
            <p>New Release of iPad pro. Get it Now</p>
          </Box>
        </Box>
      </Box>
      <Box>
        <img
          alt="image"
          src="https://user-images.githubusercontent.com/107500115/201289490-d63f5e30-72c9-49cb-a391-c22fa2240945.png"
        />
      </Box>
      <Box>
        <LaptopSlider />
      </Box>
    </Box>
  );
}

export default BottomSection;
