import React from "react";
import { TopDealsDiv } from "./TopDeals.styled";
import TopDealsImage from "../../assets/image/Icon.png";
import QuickPage from "../../assets/image/quick.png";
import FeaturedTopDeals from "../../components/topDeals/FeaturedTopDeals";
import ShopDealsByCategory from "../../components/topDeals/ShopDealsByCategory";
import CourosalContainer from "../../components/topDeals/CourosalContainer";
import { useState } from "react";
import ProductContainer from "../ProductPage/ProductContainer";
let futureDeals = [
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltabcad40d8d875509/622014d16f0333490a0e77bd/bbym-20220304-offer-ff-lockup-en-xs.jpg?width=828&quality=80&auto=webp",
    title: "The mobile sale you've been waiting for is here.",
    desc: "Check out the hottest deals on cell phones and plans. Sale ends Thursday, June 16.",
    link: "Explore the deals",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc175c8355e9c14ae/6298eaaeb86a794d785d42b0/sportsandrec-20220603-offer-top-deals-xs.jpg?width=828&quality=80&auto=webp",
    title: "Save up to $500 on select electric bikes.",
    desc: "Plus, get more deals on electric scooters and hoverboards.",
    link: "Shop Now",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt090e986a37bd806a/62a0dd531944ac5ac425ecf8/ht-20220610-offer-smart-light-xs.jpg?width=828&quality=80&auto=webp",
    title: "Save 25% when you buy 2 or more Philips Hue lights.",
    desc: "Create the perfect ambiance for any occasion with great deals on smart lights you can control with your phone.",
    link: "Shop Deals",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt515f5e34c7a113c9/629e3fc99bb72a0f7439ea32/ma-20220610-offer-td-2across-xs-evergreen.jpg?width=828&quality=80&auto=webp",
    title:
      "Save up to $1,000 with the purchase of 2 or more major kitchen appliances*.",
    desc: "",
    link: "Shop Deals",
  },
];

let data1 = [
  {
    id: 1,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15345/15345702.jpg",
    title:
      "Fitbit Versa 3 Smartwatch with Voice Assistant, GPS & 24/7 HR - Olive Green - Only at Best Buy",
    rate: "⭐⭐⭐⭐⭐ (1762 Reviews)",
    top: "",
    price: "219.99",
    save: "SAVE $80",
    end: "Available to ship",
  },
  {
    id: 2,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/152/15265/15265629.jpg",
    title: "Dyson V8 Animal Cordless Stick Vacuum - Nickel",
    rate: "⭐⭐⭐⭐⭐ (4001 Reviews)",
    top: "Top Deal",
    price: "399.99",
    save: "SAVE $100",
    end: "Available to ship",
  },
  {
    id: 3,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15753/15753557.jpg",
    title:
      "GE Smart Portable Air Conditioner - 11000 BTU (SACC 7800 BTU) - White",
    rate: "⭐⭐⭐⭐ (137 Reviews)",
    top: "Top Deal",
    price: "499.99",
    save: "SAVE $300",
    end: "Sold out online",
  },
  {
    id: 4,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/154/15492/15492679.png",
    title:
      "Gyrocopters Flash 3.0 Portable Electric Scooter (350W Motor / 28km Range / 25km/h Top Speed)",
    rate: "⭐⭐⭐⭐⭐ (20 Reviews)",
    top: "",
    price: "399.99",
    save: "SAVE $400",
    end: "Available to ship",
  },
  {
    id: 5,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/144/14469/14469365.jpg",
    title:
      "Samsung 58'' 4K UHD HDR LED Tizen Smart TV (UN58TU7000FXZC) - Titan Grey",
    rate: "⭐⭐⭐⭐ (10100 Reviews)",
    top: "Top Deal",
    price: "699.99",
    save: "SAVE $100",
    end: "Available to ship",
  },
  {
    id: 6,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16011/16011817.jpg",
    title:
      "Lenovo S345 14'' Chromebook - Mineral Grey (AMD A6-9220C/64GB/4GB RAM/Chrome OS) - English",
    rate: "⭐⭐⭐⭐⭐ (24 Reviews)",
    top: "Top Deal",
    price: "199.99",
    save: "SAVE $200",
    end: "Available to ship",
  },
  {
    id: 7,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16020/16020141.jpg",
    title:
      "HP 15.6'' Laptop - Jet Black (Intel Pentium Silver N6000/512GB SSD/8GB RAM/Windows 11 Home)",
    rate: "⭐⭐⭐⭐ (7 Reviews)",
    top: "Top Deals",
    price: "499.99",
    save: "SAVE $130",
    end: "Available to ship",
  },
  {
    id: 8,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/158/15821/15821434.jpeg",
    title:
      "Microsoft Surface Laptop Go, 12.4in Multi-Touchscreen, Intel Core i5-1035G1, 8GB RAM, 128GB SSD, Windows 10 Home in S Mode, Sandstone - Certified Refurbished",
    rate: "⭐⭐⭐⭐⭐ (1 Reviews)",
    top: "Top Deal",
    price: "499.00",
    save: "SAVE $400",
    end: "Available to ship",
  },
  {
    id: 9,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15766/15766135.jpeg",
    title:
      "MotionGrey Standing Desk Height Adjustable Electric Motor Sit to Stand Desk Computer for Home and Office - Black Frame (55inx24in Top Included) - Only at Best Buy",
    rate: "⭐⭐⭐⭐⭐ (110 Reviews)",
    top: "Top Deal",
    price: "299.99",
    save: "SAVE $415",
    end: "Available to ship",
  },
  {
    id: 10,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/137/13797/13797305.jpg",
    title: "JBL Flip 5 Waterproof Bluetooth Wireless Speaker - Black",
    rate: "⭐⭐⭐⭐⭐ (4868 Reviews)",
    top: "Top Deal",
    price: "119.99",
    save: "SAVE $40",
    end: "Available to ship",
  },
  {
    id: 11,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/500x500/152/15262/15262566.jpg",
    title: "Samsung 25W Fast Charging Wall Charger - Black",
    rate: "⭐⭐⭐⭐⭐ (2191 Reviews)",
    top: "Top Deal",
    price: "12.99",
    save: "SAVE $5",
    end: "Available to ship",
  },
  {
    id: 12,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/152/15201/15201345.jpg",
    title:
      "TCL 4-Series 50'' 4K UHD HDR LED Roku TV Smart TV (50S435-CA) - 2021",
    rate: "⭐⭐⭐⭐ (18 Reviews)",
    top: "Top Deal",
    price: "399.99",
    save: "SAVE $50",
    end: "Available to ship",
  },
  {
    id: 13,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15303/15303231.jpg",
    title:
      "Google Nest Hub (2nd Gen) Smart Display with Google Assistant - Charcoal",
    rate: "⭐⭐⭐⭐ (236 Reviews)",
    top: "Top Deal",
    price: "64.99",
    save: "SAVE $35",
    end: "Available to ship",
  },
  {
    id: 14,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/145/14547/14547097.jpg",
    title:
      "Sony WH-CH710N Over-Ear Noise Cancelling Bluetooth Headphones - Black",
    rate: "⭐⭐⭐⭐ (1575 Reviews)",
    top: "Top Deal",
    price: "129.99",
    save: "SAVE $120",
    end: "Available to ship",
  },
  {
    id: 15,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15303/15303234.jpg",
    title:
      "Google Nest Hub (2nd Gen) Smart Display with Google Assistant - Chalk",
    rate: "⭐⭐⭐⭐ (236 Reviews)",
    top: "Top Deal",
    price: "64.99",
    save: "SAVE $35",
    end: "Available to ship",
  },
  {
    id: 16,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/148/14882/14882488.jpg",
    title: "tbit Inspire 2 Fitness Tracker with 24/7 Heart Rate - Black",
    rate: "⭐⭐⭐⭐⭐ (2349 Reviews)",
    top: "Top Deal",
    price: "89.99",
    save: "SAVE $40",
    end: "Available to ship",
  },
  {
    id: 17,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15396/15396150.jpg",
    title:
      "Samsung Galaxy Buds Pro In-Ear Noise Cancelling Truly Wireless Headphones - Phantom Black - Open Box",
    rate: "⭐⭐⭐⭐ (741 Reviews)",
    top: "Top Deal",
    price: "84.99",
    save: "SAVE $115",
    end: "Available to ship",
  },
  {
    id: 18,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/146/14609/14609472.jpg",
    title:
      "LG 34'' Ultrawide FHD 75Hz 5ms GTG IPS LED Monitor (34WN650-W) - White",
    rate: "⭐⭐⭐⭐⭐ (59 Reviews)",
    top: "Top Deal",
    price: "349.99",
    save: "SAVE $100",
    end: "Available to ship",
  },
  {
    id: 19,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/150/15081/15081903.jpg",
    title: "DJI Mini 2 Quadcopter Drone Fly More Combo - Grey - Bilingual",
    rate: "⭐⭐⭐⭐⭐ (2488 Reviews)",
    top: "Top Deal",
    price: "699.99",
    save: "",
    end: "Available to ship",
  },
  {
    id: 20,
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16022/16022241.png",
    title:
      "METAKOO Cybertrack 100 Electric Mountain Bike /Shimano Professional 21 Speed/350W Powerful Motor/16.7Inch Frame/26 Inch Tires",
    rate: "⭐⭐⭐⭐⭐ (5 Reviews)",
    top: "",
    price: "1009.99",
    save: "",
    end: "Available to ship",
  },
];

const DealOfTheDay = () => {
  const [data, setData] = useState([]);

  let courosal1 = {
    logo: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc70b31bb92ddfced/61d60327191c5560467de5a2/global-topdeals-20220107-showcase-logo-m-en.png",
    title: "Don't miss out on these great deals.",
    desc: "Find incredible savings on must-have tech essentials and more.",
    // button: "Add to cart",
    bg: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt8e1e4ddccfad34af/61d5f9d095fe2513b569c488/global-topdeals-20220107-showcase-bg-m.jpg?width=5760&quality=80&auto=webp",
    data: data1,
    logoSize: "200px",
  };

  // useEffect(() => {
  //   async function data() {
  //     let { data } = await axios.get("http://localhost:8080/deal");
  //     console.log(data);
  //     setData([...data]);
  //   }
  //   data();
  // }, []);
  return (
    <TopDealsDiv>
      <p className="title-heading">Deal of the Day</p>
      {/* <div> */}
      <div className="topImageBanner flex ">
        <img src={TopDealsImage} alt="" />
      </div>
      {/* </div> */}
      <img className="quickSupportImage" src={QuickPage} alt="" />
      <div>
        <p className="titleOfComp">Featured top deals</p>
        <FeaturedTopDeals data={futureDeals} />
      </div>
      <div>
        <p className="titleOfComp">Shop deals by category</p>
        <ShopDealsByCategory className="shpByCate" />
      </div>
      <CourosalContainer className="courosalContainer" {...courosal1} />
      <div className="advertiseMent">
        <img
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1ca9ebcd9783f1c9/620aeba6f011e923b061d514/global-20220220-bar-happyhour-m-en.png?width=50p&quality=80&auto=webp"
          alt=""
        />
        <div>
          <p>Our next great deal? Help us choose</p>
          <button>Learn More</button>
        </div>
      </div>

      <ProductContainer />
    </TopDealsDiv>
  );
};

export default DealOfTheDay;
