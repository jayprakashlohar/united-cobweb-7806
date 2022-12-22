import React from "react";
import { Box, Button, Heading, Input, Flex } from "@chakra-ui/react";
import "../../styles/Pament.css";

const Payment = () => {
  return (
    <Box border="1px solid teal" w="full" h="650px" display="flex" bg="#c5cbd5">
      <Box w="50%" h="500px" m="50px" bg="#fff">
        <Heading fontSize="20px" m="10px">
          Payment
        </Heading>
        <hr />

        <Box className="proceedBtn" bg="#ffffff" w="562px" ml="10px">
          <Box ml="160px" mr="20px" pt="20px" h="260px" bg="#ffffff">
            <Input
              variant="flushed"
              w="400px"
              placeholder="Enter card no."
              type="number"
            />
            <Flex mt="20px">
              <Input
                variant="flushed"
                w="130px"
                placeholder="MM"
                type="number"
              />
              <Input
                variant="flushed"
                w="130px"
                ml="10px"
                placeholder="YYYY"
                type="number"
              />
              <Input
                variant="flushed"
                w="130px"
                ml="10px"
                placeholder="Enter CVV"
                type="number"
              />
            </Flex>
            <Input
              variant="flushed"
              mt="20px"
              w="400px"
              placeholder="Name on card."
              type="text"
            />
            <Button
            //   onClick={goToThankyou}
              display="block"
              className="btn"
              mt="10px"
            >
              NEXT 
            </Button>
          </Box>
        </Box>
      </Box>
      <Box w="35%" h="550px" ml="10px" bg="#fff" m="50px">
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

        <Button
          bg="#ffe000"
          m="40px 0px 0px 20px"
          w="90%"
          h="40px"
          fontSize="16px"
          cursor="pointer"
          border="none"
          fontWeight="bold"
        >
          Pament
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
