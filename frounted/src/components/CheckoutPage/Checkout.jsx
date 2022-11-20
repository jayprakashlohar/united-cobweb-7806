import React from "react";
import { Box, Button, Heading, Image, Input } from "@chakra-ui/react";
import "../../styles/Checkout.css";
import { ImRadioUnchecked } from "react-icons/im";
const Checkout = () => {
  return (
    <Box w="full" h="650px" bg="#f0f2f4">
      <p className="top-p">Sold and shipped by Best Buy India</p>
      <Box mt="20px" display="flex">
        <Box w="55%" h="230px" ml="60px" display="flex" bg="#fff">
          <Image
            className="Image"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487481_sd.jpg;maxHeight=640;maxWidth=550"
          />

          <Box>
            <p className="descri">
              Apple - iPhone 14 Pro Max 128GB - Deep <br />
              Purple (T-Mobile)
            </p>
            <Button mt="5px" borderRadius="100%" h="30px">
              -
            </Button>
            <Button mt="5px" borderRadius="100%" h="30px">
              +
            </Button>{" "}
            <br />
            <Button mt="10px">Remove</Button>
            <Heading fontSize="16px" pt="25px" mb="20px">
              Product Total
            </Heading>
          </Box>

          <Box pl="150px" pt="20px">
            <Heading fontSize="18px">$899.99</Heading>
            <Heading fontSize="18px" mt="150px">
              $1799.98
            </Heading>
          </Box>
        </Box>

        <Box w="35%" h="550px" ml="10px" bg="#fff">
          <Heading fontSize="22px" ml="10px" mt="10px">
            Order Summary
          </Heading>
          <hr className="hrr" />
          <Box
            display="flex"
            justifyContent="space-between"
            p="0px 20px 0px 20px"
          >
            <Box lineHeight="30px" fontWeight="500">
              <p>Product Subtotal</p>
              <p>Order Discounts</p>
              <p>Estimated Shipping</p>
              <p>Environmental Handing Fees</p>
              <p>Estimated</p>
              <hr />
              <Heading fontSize="15px">Estimated Total</Heading>
            </Box>
            <Box lineHeight="30px" fontWeight="500">
              <p>$1799</p>
              <p>$90</p>
              <p>Free</p>
              <p>$2.55</p>
              <p>$54</p>
              <hr />

              <Heading fontSize="15px">$1763.98</Heading>
            </Box>
          </Box>
          <hr className="hrr" />
          <hr className="hrr1" />
          <p className="pp">Choose how you'd like to get your order:</p>
          {/* <ImRadioUnchecked /> */}
          <Box mt="20px" display="flex">
            {" "}
            <input className="input" type="checkbox" value="Bike"></input>
            <p className="pick">Get it Shipped</p>
          </Box>
          <Box display="flex">
            {" "}
            <input className="input" type="checkbox" value="Bike"></input>
            <p className="pick">Pick Up at Store</p>
          </Box>
          <p className="store">
            The items in your cart are only available to ship
          </p>

          <Button bg="#ffe000" m="40px 0px 0px 20px" w="90%">
            Continue Checkout
          </Button>
          <Heading textAlign="center" fontSize="20px">
            Or
          </Heading>
          <Button bg="#2b5df5" m="0px 0px 0px 20px" w="90%" color="#fff">
            PayPal Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
