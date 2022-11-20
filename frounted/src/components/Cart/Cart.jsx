import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE, ADD, REMOVE } from "../../Redux/Card Reducer/actions";
import "./cart.css";
import { CartCard } from "./CartCard";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";
import { GiStarAltar } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";



export const Cart = () => {
  const [price, setPrice] = useState(0);
  // console.log(price);
  let discount = +(price * 0.05).toFixed(2);
  let tax = +(price * 0.03).toFixed(2);
  let cartTotal = price - discount + tax;
  let orderTotal = cartTotal.toFixed(2);
  const carts = useSelector((state) => state.cartreducer.carts);
  console.log(carts);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DELETE(id));
  };

  //add increment
  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  };

  //remove quantity by 1:-
  const remove = (item) => {
    dispatch(REMOVE(item));
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

  return (
    <div className="cartGp">
      <div className="cartY">Your Cart</div>
      <div className="cartE">
        {carts.length === 0 ? (
          <div className="cart-empty">
            <div>
              <h2>Looks like it's empty!</h2>
              <p style={{ fontSize: "16px" }}>Why not add SomeThing ?</p>
            </div>
            <div className="start-shopping">
              <Link to="/prod">
                {" "}
                <BsCart4 size="120px" color="#1d252c" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="cartParent">
            <div className="cartLeft">
              {" "}
              <div className="cardLeftI">
                Sold and shipped by Best Buy Canada
              </div>
              {carts.map((cartItem) => {
                return (
                  <>
                    <div>
                      <div className="cartCard" key={cartItem.id}>
                        <div className="cartCardImg">
                          {" "}
                          <img
                            className="cartImg"
                            src={cartItem.imgUrl}
                            alt=""
                          />
                        </div>
                        <div className="cartCardTitle">
                          {" "}
                          <span
                            style={{
                              fontSize: "14px",
                              lineHeight: "20px",
                              color: "#1d252c",
                              cursor: "pointer",
                            }}
                          >
                            {cartItem.title}
                          </span>{" "}
                          <div className="cartCardCircle">
                            <AiFillMinusCircle
                              size="22"
                              color="blue"
                              onClick={
                                cartItem.qnty <= 1
                                  ? () => dlt(cartItem)
                                  : () => remove(cartItem)
                              }
                            />
                            <div
                              className="count"
                              style={{
                                fontSize: "1p4x",
                                margin: "5px 10px",
                                color: "black",
                              }}
                            >
                              {cartItem.qnty}
                            </div>
                            <AiFillPlusCircle
                              color="blue"
                              size="22"
                              onClick={() => send(cartItem)}
                            />
                          </div>
                          <RiDeleteBin6Line
                            className="cartCardBin"
                            size="20"
                            color="blue"
                            onClick={() => dlt(cartItem._id)}
                          />{" "}
                          <div style={{ display: "inline", fontSize: "12px" }}>
                            Remove
                          </div>{" "}
                        </div>
                        <div className="cartCardPrice">
                          <h4>${cartItem.price}</h4>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="subTotalH">
                <div className="subTotal">
                  <div className="leftCol">
                    {" "}
                    <span>Product Total</span>
                  </div>
                  <div className="rightCol">
                    {" "}
                    <span>${price}</span>
                  </div>
                </div>
              </div>
            </div>
            <CartCard
              price={price}
              discount={discount}
              tax={tax}
              orderTotal={orderTotal}
              route={"/checkout"}
            />
          </div>
        )}
      </div>
      <div className="valueProps">
        <div className="cartVal">
          {" "}
          <span className="cartIcon">
            <BiTimer color="#0046be" size="40px" />
          </span>{" "}
          <span style={{ margin: "16px 1px 1px 10px" }}>
            Quick and Easy <p> Store Pickup</p>
          </span>{" "}
        </div>
        <div className="cartVal">
          {" "}
          <span className="cartIcon">
            <FaShippingFast color="#0046be" size="40px" />
          </span>{" "}
          <span style={{ margin: "16px 1px 1px 10px" }}>
            Free shipping <p>over $35</p>{" "}
          </span>
        </div>
        <div className="cartVal">
          {" "}
          <span className="cartIcon">
            <AiOutlineDollarCircle color="#0046be" size="40px" />
          </span>{" "}
          <span style={{ margin: "16px 1px 1px 10px" }}>
            Low Price <p> Guarantee</p>{" "}
          </span>{" "}
        </div>
        <div className="cartVal">
          {" "}
          <span className="cartIcon">
            <GiStarAltar color="#0046be" size="40px" />
          </span>{" "}
          <span style={{ margin: "16px 1px 1px 10px" }}>
            Latest and <p>Greatest Tech</p>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
