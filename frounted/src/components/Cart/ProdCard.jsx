import React from "react";

import { Link } from "react-router-dom";
export const ProdCard = ({ item }) => {
  const mainID = item.id;
  return (
    <>
      <div className="cartCard">
        <Link to={`/${mainID}`}>
          <div className="cartCardImg">
            {" "}
            <img src={item.imgUrl} alt="" />
          </div>
          <div className="cartCardTitle"> {item.title} </div>
          <div className="cartCardPrice">
            <h4>{item.price}</h4>
          </div>
        </Link>
      </div>
    </>
  );
};
