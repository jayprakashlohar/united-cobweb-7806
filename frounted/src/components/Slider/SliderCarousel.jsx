import React from "react";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "../../styles/Slider.css"
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

function SliderCarousel() {
  const IphoneData = [
    {
      id: 1,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003180.jpg",
      title: "Rogers Apple iPhone 13 128GB - Green - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "32.09",
    },
    {
      id: 2,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003178.jpg",
      title:
        "Rogers Apple iPhone 13 Pro 128GB - Alpine Green - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "59.92",
      p1: "Start activation online",
      p2: "Sold in stores",
      brand: "iphone",
    },
    {
      id: 3,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003204.jpg",
      title:
        "TELUS Apple iPhone 13 Pro 128GB - Alpine Green - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "59.92",
    },
    {
      id: 4,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003193.jpg",
      title: "Koodo Apple iPhone 13 128GB - Green - Monthly Tab Payment",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "32.00",
    },
    {
      id: 5,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15727/15727231.jpg",
      title: "Fido Apple iPhone 13 128GB - Pink - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "32.09",
    },
    {
      id: 6,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003150.jpg",
      title:
        "Bell Apple iPhone 13 Pro Max 128GB - Alpine Green - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "66.38",
    },
    {
      id: 7,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15727/15727261.jpg",
      title:
        "Rogers Apple iPhone 13 Pro Max 128GB - Sierra Blue - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "66.38",
    },
    {
      id: 8,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003165.jpg",
      title:
        "Fido Apple iPhone 13 Pro 128GB - Alpine Green - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "33.34",
    },

    {
      id: 9,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003167.jpg",
      title: "Fido Apple iPhone 13 128GB - Green - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "32.09",
    },
    {
      id: 10,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003206.jpg",
      title: "TELUS Apple iPhone 13 128GB - Green - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "32.08",
    },
    {
      id: 11,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003154.jpg",
      title: "Bell Apple iPhone 13 128GB - Green - Monthly Financing",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "32.12",
    },
    {
      id: 12,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003128.jpg",
      title:
        "Freedom Mobile Apple iPhone 13 128GB - Green - Monthly Tab Payment",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      price: "31.13",
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
          dots: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className="carousel_container">
      <Slider {...settings}>
        {IphoneData.map((el, index) => (
          <div key={index}>
            <SliderCard
              img={el.imgUrl}
              title={el.title}
              rate={el.rate}
              price={el.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCarousel;
