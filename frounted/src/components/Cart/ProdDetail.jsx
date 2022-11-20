import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../../redux/actions";

export const ProdDetail = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartreducer.carts);

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };

  const { id } = useParams();
  const [data, setdata] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/deal/${id}`).then((res) => {
      setdata(res.data);
    });
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(carts));
  }, [carts]);
  console.log(data);
  return (
    <div>
      <div className="cartCardImg">
        {" "}
        <img src={data.imgUrl} alt="" />
      </div>
      <div className="cartCardTitle"> {data.title} </div>
      <div className="cartCardPrice">
        <h4>{data.price}</h4>
      </div>
      <div className="addToCart" onClick={() => send(data)}>
        Add to Cart{" "}
      </div>
    </div>
  );
};
