import React, { useState, Component } from "react";
import { useEffect } from "react";
import axios from "axios";
import SliderComp from "./SliderComp";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 1px solid black; */
  height: 475px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  border-radius: 10px;
  display: flex;
  background-position: center center;
  background-repeat: no-repeat;

  margin: 30px 0;

  & > div {
    /* bor: 1px solid white; */
  }
  .detailsOfCourosol {
    width: 35%;
    box-sizing: border-box;
    padding: 30px;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    color: ${(props) => (props.textColor ? props.textColor : "#ffffff")};
    gap: 15px;
    img {
      width: ${(props) => (props.logoSize ? props.logoSize : "auto")};
    }
    .title {
      font-size: 32px;
      line-height: 40px;
      font-weight: bold;
    }
    .desc {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .courosol {
    /* flex-grow: 1; */
    /* height: auto; */
    width: 65%;
    /* border: 1px solid red; */
    box-sizing: border-box;
    /* padding: 20px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    width: 60%;
    height: 45px;
    border: 0;
    .link {
      color: ${(props) => (props.btnColor ? props.btnColor : "#0046be")};
    }
    background-color: ${(props) => (props.btnBg ? props.btnBg : "#ffffff")};
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
  }
`;

const CourosalContainer = ({
  button,
  className,
  title,
  desc,
  logo,
  bg,
  data,
  logoSize,
  cardShadow,
  textColor,
  btnBg,
  btnColor,
}) => {
  let css = {
    cardShadow,
    textColor,
    btnBg,
    btnColor,
  };
  console.log(logoSize);
  return (
    <Wrapper bg={bg} logoSize={logoSize} {...css}>
      <div className="detailsOfCourosol">
        <img src={logo} alt="" />
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        {button ? (
          <button className="button">
            <a className="link" href="#" style={{ textDecoration: "none" }}>
              {button}
            </a>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="courosol">
        <SliderComp data={data} cardShadow={cardShadow} />
      </div>
    </Wrapper>
  );
};

export default CourosalContainer;
