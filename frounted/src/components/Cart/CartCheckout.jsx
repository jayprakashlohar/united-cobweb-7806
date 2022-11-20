import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdGpsFixed } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";
import Payment from "../Payment/Payment";
export const CartCheckout = ({ price, discount, tax, orderTotal, route }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cartRight">
        <div>
          <div>
            <div className="cartSum">
              <h2>Order Summary</h2>
            </div>
            <table className="tableTop">
              <tbody>
                <tr>
                  <th className="tableLeft">Product Subtotal</th>
                  <td>${price}</td>
                </tr>
                <tr className="discount">
                  <th className="tableLeft">Order Discounts</th>
                  <td>
                    <div>${discount}</div>
                  </td>
                </tr>
                <tr>
                  <th className="tableLeft">Estimated Shipping</th>
                  <td>Free</td>
                </tr>
                <tr>
                  <th className="tableLeft">Environmental Handling Fees</th>
                  <td>$2.55</td>
                </tr>
                <tr>
                  <th className="tableLeft tableE">Estimated Taxes</th>
                  <td>${tax}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="total">
                  <th>Estimated Total</th>
                  <td>${orderTotal}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="cP">
          <div>
            {/* <Link></Link> */}
            {/* <Link to={"/otp"}> */}
            <button
              className="checkoutBtn"
              onClick={() => {
                if (route === "/") {
                  alert(
                    "Your order is confirmed. You will receive an order confirmationemail/SMS shortly with the expected delivery date for your items."
                  );
                }
                navigate(route);
              }}
            >
              {route === "/" ? "Payment" : "Checkout"}
            </button>{" "}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};
