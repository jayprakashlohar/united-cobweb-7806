import React, { useEffect, useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { MdLabel } from "react-icons/md";
import { Box } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch, useSelector } from "react-redux";
import { CartCheckout } from "../Cart/CartCheckout";




export default function Payment() {
  const [price, setPrice] = useState(0);
  console.log(price);
  let discount = +(price * 0.05).toFixed(2);
  let tax = +(price * 0.03).toFixed(2);
  let cartTotal = price - discount + tax;
  let orderTotal = cartTotal.toFixed(2);
  const carts = useSelector((state) => state.cartreducer.carts);
  console.log(carts);

  const dispatch = useDispatch();
  const alertMessage = () => {
    alert("Payment Succesfull Item Ordered");
  };

  const total = () => {
    let price = 0;
    carts.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(Math.round(price * 100) / 100);
  };
  localStorage.setItem("total", JSON.stringify(price));

  useEffect(() => {
    total();
  }, [total]);
  const [data, setData] = useState({});
  const handlerChange = (e) => {
    const d = e.target;
    setData({
      ...data,
      [d.name]: d.value,
    });
  };
  const toLacalStorage = () => {
    localStorage.setItem("formData", JSON.stringify(data));
  };
  const {
    MobileNumber,
    address,
    city,
    email,
    exMobileNumber,
    firstName,
    lastName,
    postalCode,
    province,
  } = JSON.parse(localStorage.getItem("formData"));

  const [aFlag, setAflag] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#ffffff",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "30px",
        width: "70%",
      }}
    >
      <div style={{ width: "60%", marginLeft: "5%" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600", textAlign: "left" }}>
          Payment
        </h2>
        <div style={{ width: "100%", marginTop: "10px" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<MdLabel />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "blue" }}> Gift Card</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div style={{ textAlign: "left" }}>
                  You can apply up to 2 gift cards per order.
                </div>
                <div style={{ textAlign: "left" }}>
                  We don't accept gift cards with Best Buy Financing.
                </div>
                <div
                  style={{ width: "100%", display: "flex", marginTop: "10px" }}
                >
                  {" "}
                  <div style={{ width: "50%", textAlign: "left" }}>
                    {" "}
                    <label
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                      htmlFor=""
                    >
                      Gift Card Number
                    </label>{" "}
                    <br />
                    <input
                      style={{
                        width: "90%",
                        height: "40px",
                      }}
                      type="text"
                      name="city"
                    />
                  </div>
                  <div style={{ width: "50%", textAlign: "left" }}>
                    {" "}
                    <label
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                      htmlFor=""
                    >
                      Pin
                    </label>{" "}
                    <br />
                    <input
                      style={{
                        width: "90%",
                        height: "40px",
                      }}
                      type="text"
                      name="city"
                      placeholder="4_ digit Number"
                    />
                  </div>
                  <div style={{ width: "50%", textAlign: "left" }}>
                    {" "}
                    <br />
                    <button
                      style={{
                        backgroundColor: "#0046be",
                        width: "60%",
                        height: "40px",
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div style={{ marginTop: "5px" }}>
          <Accordion expanded={aFlag ? "true" : ""}>
            <AccordionSummary
              expandIcon={<RadioButtonCheckedIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{}}>Credit Card</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div
                  style={{
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  Card Information
                </div>
                <Box
                  sx={{
                    border: "none",
                  }}
                >
                  <div
                    style={{ width: "70%", textAlign: "left", margin: "10px" }}
                  >
                    {" "}
                    <div
                      style={{
                        fontWeight: "600",
                        display: "block",
                      }}
                    >
                      New Card{" "}
                    </div>
                    <div style={{ fontSize: "12px", lineHeight: "26px" }}>
                      We accept the following cards.
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "10px",
                        gap: "10px",
                        width: "50%",
                      }}
                    >
                      <img
                        style={{ height: "20px", width: "40px" }}
                        src="https://pngimg.com/uploads/visa/visa_PNG4.png"
                        alt=""
                      />
                      <img
                        style={{ height: "25px", width: "45px" }}
                        src="https://toppng.com/uploads/preview/today-mastercard-and-the-western-union-company-announced-master-card-logo-2017-11563240478tm5ug5sqcz.png"
                        alt=""
                      />
                      <img
                        style={{ height: "20px", width: "40px" }}
                        src="https://img.favpng.com/21/5/13/american-express-logo-credit-card-payment-png-favpng-8tx6epUgjhQeNcJFzp5fhKgZQ.jpg"
                        alt=""
                      />
                    </div>
                    <div style={{ width: "50%", textAlign: "left" }}>
                      {" "}
                      <label
                        style={{ fontSize: "14px", lineHeight: "20px" }}
                        htmlFor=""
                      >
                        Card Number
                      </label>{" "}
                      <br />
                      <input
                        style={{
                          width: "90%",
                          height: "40px",
                        }}
                        type="text"
                        name="city"
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "25%", textAlign: "left" }}>
                        {" "}
                        <label
                          style={{ fontSize: "14px", lineHeight: "20px" }}
                          htmlFor=""
                        >
                          Expiry Month
                        </label>{" "}
                        <br />
                        <select
                          style={{
                            width: "90%",
                            height: "40px",
                          }}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                      <div style={{ width: "25%", textAlign: "left" }}>
                        {" "}
                        <label
                          style={{ fontSize: "14px", lineHeight: "20px" }}
                          htmlFor=""
                        >
                          Expiry Year
                        </label>{" "}
                        <br />
                        <select
                          style={{
                            width: "90%",
                            height: "40px",
                          }}
                        >
                          <option value="2022">2022</option>
                          <option value="">2021</option>
                          <option value="">2020</option>
                          <option value="">2019</option>
                          <option value="">2018</option>
                          <option value="">2017</option>
                          <option value="">2016</option>
                          <option value="">2015</option>
                          <option value="">2014</option>
                          <option value="">2013</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "25%", textAlign: "left" }}>
                        {" "}
                        <label
                          style={{ fontSize: "14px", lineHeight: "20px" }}
                          htmlFor=""
                        >
                          cvv
                        </label>{" "}
                        <br />
                        <input
                          style={{
                            width: "90%",
                            height: "40px",
                          }}
                          type="text"
                          name="city"
                        />
                      </div>
                      <div style={{ width: "25%", textAlign: "left" }}>
                        {" "}
                        <div style={{ fontSize: "12px", marginTop: "25px" }}>
                          This 3 or 4 digit code is on the back or front of your
                          card.
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
                <div
                  style={{
                    borderTop: "1px solid #e4e9f1",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <div
                    style={{
                      textAlign: "left",
                      fontWeight: "600",
                      marginTop: "10px",
                      marginLeft: "1px",
                    }}
                  >
                    Billing Address
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      marginTop: "10px",
                      fontSize: "12px",
                      lineHeight: "20px",
                      border: "1px solid black",
                      textAlign: "left",
                      padding: "10px",
                    }}
                  >
                    <div style={{ fontWeight: "600", fontSize: "16px" }}>
                      {firstName} - {city} ,{postalCode}{" "}
                    </div>
                    <div>
                      {firstName} {lastName}{" "}
                    </div>
                    <div>
                      {address} {city}{" "}
                    </div>
                    <div> {MobileNumber} </div>
                  </div>
                </div>
                <div
                  style={{ marginTop: "10px", borderTop: "1px solid #ffffff" }}
                >
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<RadioButtonUncheckedIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ color: "blue" }}>
                        New Address
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div style={{ textAlign: "left" }}>
                          <form action="">
                            <div>
                              {" "}
                              <strong style={{ fontSize: "14px" }}>
                                Shipping Address{" "}
                              </strong>
                            </div>
                            <div style={{ display: "flex", margin: "5px" }}>
                              <div style={{ width: "100%" }}>
                                {" "}
                                <label
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                  htmlFor=""
                                >
                                  *First Name
                                </label>{" "}
                                <br />
                                <input
                                  style={{
                                    width: "90%",
                                    height: "40px",
                                    marginTop: "10px",
                                  }}
                                  type="text"
                                  name="firstName"
                                  onChange={(e) => {
                                    handlerChange(e);
                                  }}
                                />
                              </div>
                              <div style={{ width: "100%" }}>
                                {" "}
                                <label
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                  htmlFor=""
                                >
                                  *Last Name
                                </label>{" "}
                                <br />
                                <input
                                  style={{
                                    width: "90%",
                                    height: "40px",
                                    marginTop: "10px",
                                  }}
                                  type="text"
                                  name="lastName"
                                  onChange={(e) => {
                                    handlerChange(e);
                                  }}
                                />
                              </div>
                            </div>
                            <div style={{ display: "flex", margin: "5px" }}>
                              <div style={{ width: "100%" }}>
                                {" "}
                                <label
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                  htmlFor=""
                                >
                                  *Phone Number
                                </label>{" "}
                                <br />
                                <input
                                  style={{
                                    width: "90%",
                                    height: "40px",
                                    marginTop: "10px",
                                  }}
                                  type="number"
                                  name="MobileNumber"
                                  onChange={(e) => {
                                    handlerChange(e);
                                  }}
                                />
                              </div>
                              <div style={{ width: "100%" }}>
                                {" "}
                                <label
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                  htmlFor=""
                                >
                                  *Ext. (Optional)
                                </label>{" "}
                                <br />
                                <input
                                  style={{
                                    width: "90%",
                                    height: "40px",
                                    marginTop: "10px",
                                  }}
                                  type="number"
                                  name="exMobileNumber"
                                  onChange={(e) => {
                                    handlerChange(e);
                                  }}
                                />
                              </div>
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                lineHeight: "16px",
                                marginTop: "10px",
                                marginLeft: "6px",
                              }}
                            >
                              We’ll only call you if there’s an issue with the
                              order.
                            </div>
                            <div style={{ marginTop: "10px" }}>
                              <label
                                style={{ fontSize: "14px", lineHeight: "20px" }}
                                htmlFor=""
                              >
                                *Address
                              </label>{" "}
                              <br />
                              <input
                                style={{
                                  width: "94%",
                                  marginLeft: "5px",
                                  height: "40px",
                                  marginTop: "10px",
                                }}
                                type="text"
                                name="address"
                                onChange={(e) => {
                                  handlerChange(e);
                                }}
                              />
                            </div>
                            <div style={{ display: "flex", margin: "5px" }}>
                              <div style={{ width: "50%" }}>
                                {" "}
                                <label
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                  htmlFor=""
                                >
                                  *City
                                </label>{" "}
                                <br />
                                <input
                                  style={{
                                    width: "90%",
                                    height: "40px",
                                    marginTop: "10px",
                                  }}
                                  type="text"
                                  name="city"
                                  onChange={(e) => {
                                    handlerChange(e);
                                  }}
                                />
                              </div>
                              <div style={{ width: "25%" }}>
                                {" "}
                                <label
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                  htmlFor=""
                                >
                                  *Province
                                </label>{" "}
                                <br />
                                <select
                                  id=""
                                  style={{
                                    width: "90%",
                                    height: "40px",
                                    marginTop: "10px",
                                  }}
                                  name="province"
                                  onClick={(e) => {
                                    handlerChange(e);
                                  }}
                                >
                                  <option>Select</option>
                                  <option value="Alberta">Alberta</option>
                                  <option value="British_Columbia">
                                    British Columbia
                                  </option>
                                  <option value="Manitoba">Manitoba</option>
                                  <option value="New_Brunswick">
                                    New Brunswick
                                  </option>
                                  <option value="new-foundland_and_labrodor">
                                    New Foundland & Labrador
                                  </option>
                                  <option value="nova_scotia">
                                    Nova Scotiva
                                  </option>
                                </select>
                              </div>
                              <div style={{ width: "25%" }}>
                                {" "}
                                <label
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                  htmlFor=""
                                >
                                  *Postal Code
                                </label>{" "}
                                <br />
                                <input
                                  style={{
                                    width: "82%",
                                    height: "40px",
                                    marginTop: "10px",
                                  }}
                                  type="number"
                                  name="postalCode"
                                  onChange={(e) => {
                                    handlerChange(e);
                                  }}
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <div style={{ marginTop: "10px", borderTop: "1px solid #ffffff" }}>
            <Accordion
              onClick={() => {
                setAflag(false);
              }}
            >
              <AccordionSummary
                expandIcon={<RadioButtonUncheckedIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "blue" }}>
                  {" "}
                  <img
                    style={{ width: "100px", height: "30px" }}
                    src="https://www.bestbuy.ca/ch/static/media/paypallogo.04b82a13.svg"
                    alt=""
                  />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      margin: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      Select "Pay with PayPal" to enter your payment details on
                      the PayPal site.
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "50px",
                        paddingTop: "10px",
                        width: "100%",
                        backgroundColor: "#009cde",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {" "}
                      <div style={{ fontSize: "14px", marginTop: "3px" }}>
                        Pay with
                      </div>{" "}
                      <img
                        style={{ width: "80px", height: "30px" }}
                        src="https://www.bestbuy.ca/ch/static/media/paypal-white.31d24521.svg"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Accordion
              onClick={() => {
                setAflag(false);
              }}
            >
              <AccordionSummary
                expandIcon={<RadioButtonCheckedIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{}}>
                  <div style={{ display: "flex" }}>
                    <img
                      style={{ width: "70px", height: "30px" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKTdZ-0crtPPgc0250NIy5AjDiM-u429CiNYpCCZvUq6F4IDNU7uuy2R6_TmX7KLy3Ho&usqp=CAU"
                    ></img>
                    <div style={{ fontWeight: "600" }}>Financing</div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    Credit provided by Fairstone Financial Inc.
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div
                    style={{
                      borderTop: "1px solid #e4e9f1",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        marginLeft: "10px",
                        textAlign: "left",
                        marginTop: "5px",
                      }}
                    >
                      Your <b> Billing Address</b> must match the address on
                      your <b> Fairstone</b> account. If it doesn’t, please add
                      a <b> New Address.</b>
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        fontWeight: "600",
                        marginTop: "10px",
                        marginLeft: "1px",
                      }}
                    >
                      Billing Address
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        marginTop: "10px",
                        fontSize: "12px",
                        lineHeight: "20px",
                        border: "1px solid black",
                        textAlign: "left",
                        padding: "10px",
                      }}
                    >
                      <div style={{ fontWeight: "600", fontSize: "16px" }}>
                        {firstName} - {city} ,{postalCode}{" "}
                      </div>
                      <div>
                        {firstName} {lastName}{" "}
                      </div>
                      <div>
                        {address} {city}{" "}
                      </div>
                      <div> {MobileNumber} </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      borderTop: "1px solid #ffffff",
                    }}
                  >
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<RadioButtonUncheckedIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography style={{ color: "blue" }}>
                          New Address
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{ textAlign: "left" }}>
                            <form action="">
                              <div>
                                {" "}
                                <strong style={{ fontSize: "14px" }}>
                                  Shipping Address{" "}
                                </strong>
                              </div>
                              <div style={{ display: "flex", margin: "5px" }}>
                                <div style={{ width: "100%" }}>
                                  {" "}
                                  <label
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                    }}
                                    htmlFor=""
                                  >
                                    *First Name
                                  </label>{" "}
                                  <br />
                                  <input
                                    style={{
                                      width: "90%",
                                      height: "40px",
                                      marginTop: "10px",
                                    }}
                                    type="text"
                                    name="firstName"
                                    onChange={(e) => {
                                      handlerChange(e);
                                    }}
                                  />
                                </div>
                                <div style={{ width: "100%" }}>
                                  {" "}
                                  <label
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                    }}
                                    htmlFor=""
                                  >
                                    *Last Name
                                  </label>{" "}
                                  <br />
                                  <input
                                    style={{
                                      width: "90%",
                                      height: "40px",
                                      marginTop: "10px",
                                    }}
                                    type="text"
                                    name="lastName"
                                    onChange={(e) => {
                                      handlerChange(e);
                                    }}
                                  />
                                </div>
                              </div>
                              <div style={{ display: "flex", margin: "5px" }}>
                                <div style={{ width: "100%" }}>
                                  {" "}
                                  <label
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                    }}
                                    htmlFor=""
                                  >
                                    *Phone Number
                                  </label>{" "}
                                  <br />
                                  <input
                                    style={{
                                      width: "90%",
                                      height: "40px",
                                      marginTop: "10px",
                                    }}
                                    type="number"
                                    name="MobileNumber"
                                    onChange={(e) => {
                                      handlerChange(e);
                                    }}
                                  />
                                </div>
                                <div style={{ width: "100%" }}>
                                  {" "}
                                  <label
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                    }}
                                    htmlFor=""
                                  >
                                    *Ext. (Optional)
                                  </label>{" "}
                                  <br />
                                  <input
                                    style={{
                                      width: "90%",
                                      height: "40px",
                                      marginTop: "10px",
                                    }}
                                    type="number"
                                    name="exMobileNumber"
                                    onChange={(e) => {
                                      handlerChange(e);
                                    }}
                                  />
                                </div>
                              </div>
                              <div
                                style={{
                                  fontSize: "12px",
                                  lineHeight: "16px",
                                  marginTop: "10px",
                                  marginLeft: "6px",
                                }}
                              >
                                We’ll only call you if there’s an issue with the
                                order.
                              </div>
                              <div style={{ marginTop: "10px" }}>
                                <label
                                  style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                  htmlFor=""
                                >
                                  *Address
                                </label>{" "}
                                <br />
                                <input
                                  style={{
                                    width: "94%",
                                    marginLeft: "5px",
                                    height: "40px",
                                    marginTop: "10px",
                                  }}
                                  type="text"
                                  name="address"
                                  onChange={(e) => {
                                    handlerChange(e);
                                  }}
                                />
                              </div>
                              <div style={{ display: "flex", margin: "5px" }}>
                                <div style={{ width: "50%" }}>
                                  {" "}
                                  <label
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                    }}
                                    htmlFor=""
                                  >
                                    *City
                                  </label>{" "}
                                  <br />
                                  <input
                                    style={{
                                      width: "90%",
                                      height: "40px",
                                      marginTop: "10px",
                                    }}
                                    type="text"
                                    name="city"
                                    onChange={(e) => {
                                      handlerChange(e);
                                    }}
                                  />
                                </div>
                                <div style={{ width: "25%" }}>
                                  {" "}
                                  <label
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                    }}
                                    htmlFor=""
                                  >
                                    *Province
                                  </label>{" "}
                                  <br />
                                  <select
                                    id=""
                                    style={{
                                      width: "90%",
                                      height: "40px",
                                      marginTop: "10px",
                                    }}
                                    name="province"
                                    onClick={(e) => {
                                      handlerChange(e);
                                    }}
                                  >
                                    <option>Select</option>
                                    <option value="Alberta">Alberta</option>
                                    <option value="British_Columbia">
                                      British Columbia
                                    </option>
                                    <option value="Manitoba">Manitoba</option>
                                    <option value="New_Brunswick">
                                      New Brunswick
                                    </option>
                                    <option value="new-foundland_and_labrodor">
                                      New Foundland & Labrador
                                    </option>
                                    <option value="nova_scotia">
                                      Nova Scotiva
                                    </option>
                                  </select>
                                </div>
                                <div style={{ width: "25%" }}>
                                  {" "}
                                  <label
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                    }}
                                    htmlFor=""
                                  >
                                    *Postal Code
                                  </label>{" "}
                                  <br />
                                  <input
                                    style={{
                                      width: "82%",
                                      height: "40px",
                                      marginTop: "10px",
                                    }}
                                    type="number"
                                    name="postalCode"
                                    onChange={(e) => {
                                      handlerChange(e);
                                    }}
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <div style={{ width: "40%", display: "flex" }}>
        <CartCheckout
          price={price}
          discount={discount}
          tax={tax}
          orderTotal={orderTotal}
          route={"/"}
        />
      </div>
    </div>
  );
}
