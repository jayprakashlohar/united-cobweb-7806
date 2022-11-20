import styled from "styled-components";
import React from "react";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  flex-direction: column;
  gap: 30px;
  color: #1d252c;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  .linkTag {
    text-decoration: none;
    color: #1d252c;

    .imgCon {
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        width: 200px;
        /* aspect-ratio: 1; */
      }
    }
    .descDiv {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .title {
      font-size: 15px;

      &:hover {
        text-decoration: underline;
      }
    }
    .ratings {
      font-size: 12px;
    }
    .topDeal {
      font-size: 10px;
    }
    .price {
      font-size: 20px;
      color: #bb0628;
      font-weight: 600;
    }
    .available {
      color: #55555a;
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 5px;
      & > span:first-child {
        color: #5d9e2f;
        /* border: 1px solid #bb0628; */
      }
    }
  }
`;

const ProductCard = ({ imgUrl, save, top, price, rate, title, end, _id }) => {
  return (
    <Wrapper>
      <Link to={`/products/single/${_id}`} className="linkTag">
        <div className="imgCon">
          <img src={imgUrl} alt="product image" />
        </div>
        <div className="descDiv">
          <p className="title">{title}</p>
          <p className="ratings"> {rate}</p>
          {top ? <p className="topDeal">{top}</p> : ""}
          <p className="price">
            ${price}{" "}
            {save ? (
              <span style={{ fontSize: "12px" }}>save ${save} </span>
            ) : (
              ""
            )}
          </p>
          {end ? (
            <p className="available">
              <span>{<MdDone />}</span> <span>{end}</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </Link>
    </Wrapper>
  );
};

export default ProductCard;
