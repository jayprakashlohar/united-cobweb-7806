import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */

  div {
    width: 310px;
    /* border: 1px solid black; */
    img {
      width: 100%;
    }

    //desc div
    & > .descCon {
      box-sizing: border-box;
      padding: 10px 0;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      flex-direction: column;
      gap: 7px;
      .title {
        font-weight: 750;
      }
      .desc {
        color: #2d373f;
      }
      .links {
        color: #0046be;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .linkCon {
        align-items: center;
        color: #0046be;
      }
    }
  }
`;

const FeaturedTopDeals = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      {data.map((el, i) => {
        return (
          <div key={i}>
            <img src={el.imgUrl} alt="" />
            <div className="descCon">
              <p className="title">{el.title}</p>
              <p className="desc">{el.desc}</p>
              <div className="flex linkCon">
                <p className="links">{el.link}</p> <IoIosArrowForward />
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default FeaturedTopDeals;
