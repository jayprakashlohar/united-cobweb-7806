import styled from "styled-components";

export const TopDealsDiv = styled.div`
  /* border: 1px solid black; */
  width: 80rem;
  padding: 50px 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 45px;

  .title-heading {
    font-size: 24px;
    font-weight: 500;
  }

  /* Banner */
  .topImageBanner {
    /* border: 1px solid black; */
    background-image: url("https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte6b53642872d8d96/61d4bb3bc455652925b7ab1c/global-topdeals-20220107-title-bg-s.jpg?width=150p&quality=80&auto=webp");
    /* background-image: url("../../assets/image/bannerTopDealsBG.webp"); */
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
    /* background-color: #0146b5; */
  }

  //center

  .quickSupportImage {
    /* border: 1px solid black; */
    width: 100%;
  }

  //CSS of fututre top deals
  .futureTopDeals {
  }
  //Title
  .titleOfComp {
    /* border: 1px solid black; */
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    /* padding: 30px 0; */
    margin-bottom: 30px;
  }

  .shpByCate {
    /* border: 1px solid black; */
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
    cursor: pointer;
    & > div {
      /* border: 1px solid black; */
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      text-align: center;
      padding: 10px;
      img {
        width: 110px;
        /* border: 1px solid black; */
      }
      p {
        color: #0046be;
        line-height: 20px;
        font-size: 14px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .advertiseMent {
    background-image: url("https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt84cbaa144b435751/620aa480e1d7c708f6601211/global-20220220-bar-happyhour-m.jpg?width=150p&quality=80&auto=webp");
    width: 100%;
    height: 185px;
    background-size: cover;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 30px;

    div {
      p {
        color: #ffffff;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
      }

      button {
        background-color: #ffffff;
        color: #0046be;
        height: 55px;
        width: 154px;
        margin-top: 30px;
        border: 0;
        cursor: pointer;
        width: 30%;
        font-weight: bold;
      }
    }
  }
`;
