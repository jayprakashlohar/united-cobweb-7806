import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Slider.css";

function SliderCard({ img, title, rate, price, link }) {
  return (
    <Box className="slider_card_container">
      <Link to={link}>
        <Box className="slider_card_parent">
          <Box>
            <img src={img} alt="iphone" />
          </Box>
          <Box>
            <p>{title}</p>
          </Box>
          <Box>
            <p>{rate}</p>
            <p>${price}</p>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default SliderCard;
