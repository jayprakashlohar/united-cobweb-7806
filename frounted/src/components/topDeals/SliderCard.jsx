import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  /* border: 1px solid white; */
  box-sizing: border-box;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  font-size: 13px;
  gap: 25px;
  text-align: left;
  line-height: 16px;
  box-shadow: ${(props) => (props.cardShadow ? props.cardShadow : 0)};
  img {
    width: 90%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .desc {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 8px;

    .title {
      color: #1d252c;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
    .review {
      font-size: 12px;
    }
    .price {
      font-size: 18px;
      color: #bb0628;
      font-weight: 600;
    }
    .save {
      font-size: 12px;
      font-weight: bold;
      color: #bb0628;
      margin-bottom: 0;
    }

    .topDealSlider {
      background-color: #bb0628;
      color: #ffffff;
      font-weight: 600;
      width: fit-content;

      font-size: 12px;
      padding: 0 5px;
      clip-path: polygon(0 1%, 100% 0, 97% 100%, 0% 100%);
    }
  }
`;
const SliderCard = (el) => {
  return (
    <Wrapper cardShadow={el.cardShadow}>
      <Link to="#" style={{ textDecoration: "none" }}>
        <img src={el.imgUrl} alt="" />
        <div className="desc">
          <p className="title">{el.title}</p>
          <p className="review">{el.rate}</p>
          <p>{el.review}</p>
          {el.top ? <p className="topDealSlider">{el.top}</p> : ""}
          {el.save ? <p className="save">{el.save}</p> : ""}
          <p className="price">${el.price}</p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default SliderCard;
