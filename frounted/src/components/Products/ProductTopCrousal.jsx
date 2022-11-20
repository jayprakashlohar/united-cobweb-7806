import React from "react";
import ProductSliderCard from "./ProductSliderCard";
import Slider from "react-slick";
import "../../styles/Slider.css"
import SampleNextArrow from "../Slider/SampleNextArrow";
import SamplePrevArrow from "../Slider/SamplePrevArrow";

function ProductTopCrousal() {
  const Productdata = [
    {
      id: 1,
      imgUrl:
        "https://pbs.twimg.com/profile_images/915251508760920065/CS3k9D2W_400x400.jpg",
      title: "Acer Products",
      rate: "⭐⭐⭐⭐ (293 Reviews)",
      
    },
    {
      id: 2,
      imgUrl:
        "https://cdn.vox-cdn.com/thumbor/o3hWfI8VxYP_EoOVqHYw0mYjTfE=/0x0:792x528/1400x1400/filters:focal(396x264:397x265)/cdn.vox-cdn.com/uploads/chorus_asset/file/19232117/amazonlineup.jpg",
      title:
        "Amazon Products",
      rate: "⭐⭐⭐⭐ (152 Reviews)",
    },
    {
      id: 3,
      imgUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/android-phones-1651081480.jpg?crop=0.554xw:0.739xh;0.0465xw,0.141xh&resize=640:*",
      title:
        "Android Products",
      rate: "⭐⭐⭐⭐ (420 Reviews)",
      
    },
    {
      id: 4,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003193.jpg",
      title: "Iphone Products",
      rate: "⭐⭐⭐⭐ (212 Reviews)",
      
    },
    {
      id: 5,
      imgUrl:
        "https://i2-prod.mirror.co.uk/incoming/article20823613.ece/ALTERNATES/s1200c/0_Amazon-Echo-devices.jpg",
      title: "Latest Product",
      rate: "⭐⭐⭐⭐ (56 Reviews)",
 
    },
    {
      id: 6,
      imgUrl:
        "https://image.shutterstock.com/shutterstock/photos/1248412693/display_1500/stock-photo-gadgets-and-accessories-isolated-on-white-background-1248412693.jpg",
      title:
        "MarketPlace Products",
      rate: "⭐⭐⭐⭐ (51 Reviews)",
      style:"mt-12"
   
    },
    {
      id: 7,
      imgUrl:
        "https://newlintech.com/wp-content/uploads/2020/05/Best-Smart-Home-Devices-2018.jpg",
      title:
        "Smarthome Products",
      rate: "⭐⭐⭐⭐ (89 Reviews)",
      style:"mt-24"
     
    },
    {
      id: 8,
      imgUrl:
        "https://thumbs.dreamstime.com/b/sponsor-electronic-gadgets-office-supplies-collection-214012719.jpg",
      title:
        "Sponsered Products",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      style:"mt-16"
    },

    {
      id: 9,
      imgUrl:
        "https://i.gadgets360cdn.com/large/flipkart_gadgets_sale_1521539020287.jpg",
      title: "Top Deals",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      style:"mt-20"
    }
   
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
        {Productdata.map((el, index) => (
          <div key={index}>
            <ProductSliderCard
              img={el.imgUrl}
              title={el.title}
              rate={el.rate}
              price={el.price}
              style={el.style}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductTopCrousal;
