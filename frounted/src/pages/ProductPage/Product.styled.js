import styled from "styled-components";

export const ProductPageContainer = styled.div`
  width: 100%;
  /* width: 1350px; */
  margin: auto;
  /* border: 1px solid black; */
  .CONTAINER {
    width: 80rem;
    margin: auto;
  }
  .container {
    /* border: 1px solid red; */
    height: auto;
    display: flex;
  }

  .sideBarOptions {
    /* background-color: red; */
    background-color: #f4f6f9;
    width: 20%;
    height: 100%;

    //Sidebar
    .options {
      margin-bottom: 16px;
      font-size: 14px;
      color: #1d252c;

      &:hover {
        text-decoration: underline;
      }
    }
    .checkBoxesCon {
      span {
        font-size: 14px;
      }
    }
    .priceContainer {
      /* border: 1px solid black; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 15px;
        input {
          width: 98%;
          height: 35px;
          text-indent: 10px;
          font-size: 14px;

          /* Chrome, Safari, Edge, Opera */
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          &[type="number"] {
            -moz-appearance: textfield;
          }

          &:focus {
            outline: 1.5px solid blue;
          }
        }
      }
    }
    .submitPriceFilter {
      width: 100%;
      height: 45px;
      font-size: 14px;
      font-weight: bold;
      background-color: #c5cbd5;
      border: 0;
      color: #1d252c;
      margin-top: 15px;
      cursor: pointer;
    }

    .MuiAccordionSummary-content {
      font-weight: 600;
      font-size: 14px;
    }
    .MuiCheckbox-root .MuiSvgIcon-root {
      height: 20px;
    }
  }

  //2nd Container
  .products {
    width: 80%;

    /* flex-grow: 1; */
    box-sizing: border-box;
    padding: 20px;
    padding-top: 0;
    .topBar {
      height: 100px;
      width: 100%;
      background-color: #f4f6f9;
      display: flex;
      box-sizing: border-box;
      padding: 0 45px;
      border-radius: 8px;
      margin-bottom: 25px;
      justify-content: space-between;
      & > div {
        height: 100%;
        /* border: 1px solid black; */
        box-sizing: border-box;
        padding: 10px;
      }

      & > div:first-child {
        /* flex-grow: 1; */
        /* width: 400px; */
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #55555a;
      }

      //Options
      & > div:last-child {
        /* width: 550px; */
        /* flex-grow: 1; */
        font-size: 17.5px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }

    .productGrid {
      margin: 10px;
      /* border: 1px solid black; */
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 14rem);
      grid-template-rows: auto;
      column-gap: 24px;
      row-gap: 34px;
      & > div {
        /* border: 1px solid red; */
      }
    }
  }
  .checkBoxesCon {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loading,
  .error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
