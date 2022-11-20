import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartCheckout } from "../Cart/CartCheckout";

export default function Checkout() {
  const [price, setPrice] = useState(0);

  let discount = +(price * 0.05).toFixed(2);
  let tax = +(price * 0.03).toFixed(2);
  let cartTotal = price - discount + tax;
  let orderTotal = cartTotal.toFixed(2);
  const carts = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

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
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f4f6f9",
        height: "auto",
        flexFlow: "row",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "30px",
        width: "80%",
      }}
    >
      <div
        style={{
          width: "75%",
          textAlign: "left",
          marginLeft: "5%",
          borderRightColor: "red",
          height: "auto",
        }}
      >
        <div style={{ backgroundColor: "", margin: "2%" }}>
          <h2 style={{ fontSize: "14px" }}> Shipping</h2>

          <div style={{ fontSize: "14px", lineHeight: "3" }}>
            {" "}
            * indicates required information{" "}
          </div>
        </div>
        <div style={{ backgroundColor: "white", margin: "2%", padding: "1%" }}>
          <Box>
            <div>
              {" "}
              <strong style={{ fontSize: "14px" }}>Contact Information </strong>
            </div>
            <div style={{ marginLeft: "10px", marginTop: "1px" }}>
              <label
                style={{ fontSize: "14px", lineHeight: "20px" }}
                htmlFor=""
              >
                *Email Address
              </label>{" "}
              <br />
              <input
                style={{
                  width: "50%",
                  height: "40px",
                  marginTop: "10px",
                  border: "1px solid black",
                }}
                type="email"
                name="email"
                onChange={(e) => {
                  handlerChange(e);
                }}
              />
              <div
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  marginTop: "10px",
                }}
              >
                We'll send order updates to this email.
              </div>
            </div>
          </Box>
        </div>
        <div
          style={{
            backgroundColor: "white",
            margin: "2%",
            padding: "1%",
            border: "1px solid black",
          }}
        >
          <Box>
            <form action="">
              <div>
                {" "}
                <strong style={{ fontSize: "14px" }}>Shipping Address </strong>
              </div>
              <div style={{ display: "flex", margin: "5px" }}>
                <div style={{ width: "100%" }}>
                  {" "}
                  <label
                    style={{ fontSize: "14px", lineHeight: "20px" }}
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
                      border: "1px solid black",
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
                    style={{ fontSize: "14px", lineHeight: "20px" }}
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
                      border: "1px solid black",
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
                    style={{ fontSize: "14px", lineHeight: "20px" }}
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
                      border: "1px solid black",
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
                    style={{ fontSize: "14px", lineHeight: "20px" }}
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
                      border: "1px solid black",
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
                We’ll only call you if there’s an issue with the order.
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
                    border: "1px solid black",
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
                    style={{ fontSize: "14px", lineHeight: "20px" }}
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
                      border: "1px solid black",
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
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                    htmlFor=""
                  >
                    *Province
                  </label>{" "}
                  <br />
                  <select
                    id=""
                    style={{ width: "90%", height: "40px", marginTop: "10px" }}
                    name="province"
                    onClick={(e) => {
                      handlerChange(e);
                    }}
                  >
                    <option>Select</option>
                    <option value="Alberta">Alberta</option>
                    <option value="British_Columbia">British Columbia</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="New_Brunswick">New Brunswick</option>
                    <option value="new-foundland_and_labrodor">
                      New Foundland & Labrador
                    </option>
                    <option value="nova_scotia">Nova Scotiva</option>
                  </select>
                </div>
                <div style={{ width: "25%" }}>
                  {" "}
                  <label
                    style={{ fontSize: "14px", lineHeight: "20px" }}
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
                      border: "1px solid black",
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
            <div style={{ backgroundColor: "#f4f6f9", marginTop: "10px" }}>
              <div style={{ fontSize: "14px", padding: "10px" }}>
                We only ship to Canada.
              </div>
            </div>
          </Box>
        </div>
      </div>

      <div
        style={{
          width: "40%",
          borderRightColor: "red",
          height: "700px",
          backgroundColor: "white",
          display: "flex",
        }}
      >
        <CartCheckout
          price={price}
          discount={discount}
          tax={tax}
          orderTotal={orderTotal}
          route={"/payment"}
          onClick={localStorage.setItem("formData", JSON.stringify(data))}
        />
      </div>
    </div>
  );
}
