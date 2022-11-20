import React from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import "../../styles/Footer.css";
import footer from "./Footer.png";
import { BsFacebook } from "react-icons/bs";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { ImPinterest2 } from "react-icons/im";
import { SiYoutubemusic } from "react-icons/si";

const Footer = () => {
  return (
    <Box h="auto" bg="#f0f2f4" className="mainContainer">
      <Box className="banner">
        <Image src={footer} />
      </Box>
      <Box
        w="95%"
        h="auto"
        mt="30px"
        ml="38px"
        className="grid_container_footer"
      >
        {/* <Grid templateColumns="repeat(4, 1fr)" gap={6}> */}
        <Box className="div_box">
          <Heading fontSize="16px">Order & Purchases</Heading>
          <a className="a" href="">
            Check Order Status
          </a>{" "}
          <br />
          <a className="a" href="">
            Shipping, Delivery & Pickup
          </a>{" "}
          <br />
          <a className="a" href="">
            Returns & Exchanges
          </a>{" "}
          <br />
          <a className="a" href="">
            Price Match Guarantee
          </a>{" "}
          <br />
          <a className="a" href="">
            Product Recallss
          </a>{" "}
          <br />
          <a className="a" href="">
            Trade-In Program
          </a>{" "}
          <br />
          <a className="a" href="">
            Gift Cards
          </a>{" "}
          <br />
          <Heading fontSize="16px" mt="20px">
            Payment Options
          </Heading>
          <a className="a" href="">
            Check Order Status
          </a>{" "}
          <br />
          <a className="a" href="">
            Shipping, Delivery & Pickup
          </a>{" "}
          <br />
          <a className="a" href="">
            Returns & Exchanges
          </a>{" "}
          <br />
        </Box>
        <Box className="div_box">
          <Heading fontSize="16px">Support & Services</Heading>
          <a className="a" href="">
            Visit our Support Center
          </a>{" "}
          <br />
          <a className="a" href="">
            Shop with an Expert
          </a>{" "}
          <br />
          <a className="a" href="">
            Schedule a Service
          </a>{" "}
          <br />
          <a className="a" href="">
            Manage an Appointment
          </a>{" "}
          <br />
          <a className="a" href="">
            Protection & Support Plans
          </a>{" "}
          <br />
          <a className="a" href="">
            Haul Away & Recycling
          </a>{" "}
          <br />
          <a className="a" href="">
            Contact Us
          </a>{" "}
          <br />
          <Heading fontSize="16px" mt="20px">
            Rewards & Membership
          </Heading>
          <a className="a" href="">
            Best Buy Totaltech
          </a>{" "}
          <br />
          <a className="a" href="">
            My Best Buy
          </a>{" "}
          <br />
          <a className="a" href="">
            View Points & Certificates
          </a>{" "}
          <br />
          <a className="a" href="">
            Member Offers
          </a>{" "}
          <br />
        </Box>
        <Box className="div_box">
          <Heading fontSize="16px">Partnerships</Heading>
          <a className="a" href="">
            Affiliate Program
          </a>{" "}
          <br />
          <a className="a" href="">
            Advertise with Us
          </a>{" "}
          <br />
          <a className="a" href="">
            Developers
          </a>{" "}
          <br />
          <a className="a" href="">
            Best Buy Health
          </a>{" "}
          <br />
          <a className="a" href="">
            Best Buy Education
          </a>{" "}
          <br />
          <a className="a" href="">
            Trade-In Program
          </a>{" "}
          <br />
          <a className="a" href="">
            Best Buy Business
          </a>{" "}
          <br />
          <Heading fontSize="16px" mt="20px">
            About Best Buy
          </Heading>
          <a className="a" href="">
            Corporate Information
          </a>{" "}
          <br />
          <a className="a" href="">
            Careers
          </a>{" "}
          <br />
          <a className="a" href="">
            Corporate Responsibility & Sustainability
          </a>{" "}
          <br />
          <a className="a" href="">
            Discover & Learn
          </a>
        </Box>
        {/* </Grid> */}
        <Box className="div_signup" bg="#fff">
          <a className="a1" href="">
            Sign in or Create Account
          </a>
          <hr className="hr" />
          <Heading fontSize="20px" pl="20px" pt="10px">
            Get the latest deals and more.
          </Heading>
          <Box display="flex" justifyContent="space-evenly">
            <Box mt="20px">
              {" "}
              <Input
                border="1px solid #0046be"
                p="3px 3px"
                borderRadius="5px"
                placeholder="Enter email address"
                type="email"
              />
            </Box>
            <Box mt="20px">
              {" "}
              <Button color="#fff" bg="#0046be" p="3px 5px" borderRadius="5px">
                Sign Up
              </Button>
            </Box>
          </Box>
          <hr className="hr1" />
          <Heading fontSize="20px" pl="20px" pt="10px">
            Best Buy App
          </Heading>
          <p className="p1">Learn more</p>
          <hr className="hr2" />
          <Box display="flex" justifyContent="space-around">
            <BsFacebook className="logo" />
            <TiSocialTwitterCircular className="logo" />
            <BsInstagram className="logo" />
            <ImPinterest2 className="logo" />
            <SiYoutubemusic className="logo" />
          </Box>
          <hr className="hr2" />
          <a className="a1" href="">
            Forums, blogs & more
          </a>
        </Box>
      </Box>

      {/* --------------------->>>> */}
      <Box p="10px 0px 10px 25px ">
        <p>
          How was your experience?{" "}
          <span className="span">Give feedback about our website</span>
        </p>
      </Box>
      <hr className="hr3" />
      <Box p="10px 0px 10px 25px " className="down_container">
        <a className="a2" href="">
          Accessibility{" "}
        </a>
        <a className="a2" href="">
          Terms & Conditions Privacy
        </a>
        <a className="a2" href="">
          Interest-Based Ads
        </a>
        <a className="a2" href="">
          California Privacy Rights
        </a>
        <a className="a2" href="">
          {" "}
          Do Not Sell My Personal Information
        </a>
        <a className="a2" href="">
          California Supply Chain Transparency Act
        </a>
      </Box>
      <Box mt="20px" ml="20px">
        <p>
          In-store pricing may vary. Prices and offers are subject to change. ©
          2022 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the
          tag design, and MY BEST BUY are trademarks of Best Buy and its
          affiliated companies.
        </p>
      </Box>
    </Box>
  );
};
export default Footer;
