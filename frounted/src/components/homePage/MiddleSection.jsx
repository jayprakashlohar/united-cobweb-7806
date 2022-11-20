import React from "react";
import "../../styles/MiddleSection.css";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MiddleSection() {
  return (
    <Box className="Middle_container">
      <Box className="middle_parent_container">
        <Box className="clearance_parent">
          <Box className="name_box">
            <p className="color_p">
              Outlet<span className="noncolor_p"> Deals</span>
            </p>
          </Box>
          <Box className="clearance_box">
            <Box>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ClearanceOpenBox_White-217158.png;maxHeight=230;maxWidth=330"
                alt="clearance"
              />
            </Box>
            <Box>
              <p>
                Save when you shop the Best Buy Outlet for clearance, open-box,
                refurbished and pre-owned items.
              </p>
              <button><Link to="/products">View Outlet Deals</Link></button>
            </Box>
          </Box>
        </Box>
        <Box className="iphone_container">
          <Box className="name_box">
            <p className="color_p">
              Continue<span className="noncolor_p"> Shopping</span>
            </p>
          </Box>
          <Box className="iphone_box">
            <Box>
              <img
                className="apple_img"
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505113_sd.jpg;maxHeight=282;maxWidth=442"
                alt="Apple"
              />
            </Box>
            <Box>
              <p>Apple - iPhone 14 128GB - Blue (Verizon)</p>
              <button><Link to="/iphoneproductpage">Save on Similar items</Link></button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="offer_container">
        <img
          alt="image"
          src="https://user-images.githubusercontent.com/107500115/201157807-27841ad0-072d-469c-85fb-b7be32dd44bf.png"
        />
      </Box>
    </Box>
  );
}

export default MiddleSection;
