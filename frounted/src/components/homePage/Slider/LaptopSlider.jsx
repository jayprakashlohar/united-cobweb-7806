import React from "react";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "../../../styles/Slider.css";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { Box } from "@chakra-ui/react";

function LaptopSlider() {
  const LaptopData = [
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
      id: 1,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15643/15643341.jpg",
      title: "ASUS Flip CM5 15.6'' Touchscreen Chromebook - Grey",
      rate: "⭐⭐⭐⭐",
      review: "(4 Reviews)",
      top: "Top Deal",
      save: "250",
      price: "499",
    },
    {
      id: 17,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/154/15459/15459252.jpg",
      title:
        "Acer Predator Orion 3000 Gaming PC (Intel Ci7-11700F/1TB SSD/16GB RAM/Nvidia RTX 3060Ti/Windows 10)",
      rate: "⭐⭐⭐⭐ (37 Reviews)",
      top: "1,699.95",
      price: "300",
      save: "",
      end: "Sold out online",
      brand: "Acer",
    },
    {
      id: 18,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15650/15650440.jpg",
      title:
        "Acer Nitro 27'' 1440p WQHD 144Hz 1ms GTG IPS LED FreeSync Gaming Monitor (VG270U) - Black",
      rate: "⭐⭐⭐⭐ (7 Reviews)",
      top: "Top Deal",
      price: "349.99",
      save: "SAVE $50",
      end: "Available to ship",
      brand: "Acer",
    },
    {
      id: 19,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15650/15650425.jpg",
      title:
        "Acer 31.5'' 1440p WQHD 165Hz 1ms GTG Curved VA LED FreeSync Gaming Monitor (EI322QUR) - Black",
      rate: "⭐⭐⭐ (6 Reviews)",
      top: "",
      price: "499.99",
      save: "",
      end: "Available to ship",
      brand: "Acer",
    },
    {
      id: 20,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/147/14742/14742355.jpg",
      title:
        "Acer Spin 11.6'' Touchscreen 2-in-1 Chromebook - Silver (MediaTek M8183/64GB eMMC/4GB RAM/Chrome OS)",
      rate: "⭐⭐⭐⭐ (59 Reviews)",
      top: "Top Deal",
      price: "299",
      save: "",
      end: "Available to ship",
      brand: "Acer",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Box className="slider_heading">
        <p>Best selling Laptops</p>
      </Box>
      <div className="carousel_container">
        <Slider {...settings}>
          {LaptopData.map((el, index) => (
            <div key={index}>
              <SliderCard
                img={el.imgUrl}
                title={el.title}
                rate={el.rate}
                price={el.price}
                link={"/acerproductpage"}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LaptopSlider;
