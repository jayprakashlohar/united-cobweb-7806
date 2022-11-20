import React from "react";
import styled from "styled-components";
let data = [
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt100fc1a0ee5fdd12/5d23bb6f8d27ea11c3822271/ht-20190712-homepage-ht-shopby.jpg?width=250&quality=80&auto=webp",
    title: "TVs, Home Audio, and Home Theatre Accessories",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt24a700f32e929659/61b93a189d4a976169b6f9c3/computing-evergreen-category-icon-computers-and-accessories.jpg?width=250&quality=80&auto=webp",
    title: "Computers and Accessories",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5f8121276fa8ab54/609cfe73c1ac134bc5d3bc32/computing-evergreen-category-icon-tablets.jpg?width=250&quality=80&auto=webp",
    title: "Tablets and iPad",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt9450d10d80be158b/6192ea614eed0e4a24dca596/homepage-shopbycategory-pa-on-sale.jpg?width=250&quality=80&auto=webp",
    title: "Headphones and Portable Speakers",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4af9cf5e3faa1073/6194388c34c0aa7f9f9595ca/sh-onsale-shopby-icon.jpg?width=250&quality=80&auto=webp",
    title: "Smart Home",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt819b5f45dd06be17/6025c7884b8030688c37d8bd/bbym-20210212-icon-cellphone-accessories.jpg?width=250&quality=80&auto=webp",
    title: "Unlocked Cell Phones and Accessories",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt48f9a71256a00104/5de97c6d036e2358f6267003/computing-evergreen-category-icon-gaming-laptops.jpg?width=250&quality=80&auto=webp",
    title: "PC Gaming",
  },
  {
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15661/15661931.jpg",
    title: "Video Games, Consoles, and VR",
  },
  {
    imgUrl:
      "https://multimedia.bbycastatic.ca/multimedia/products/250x250/148/14882/14882493.jpg",
    title: "Wearable Technology",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltebba6ba1bd154354/5ee2c83e0f079e4334fd6c74/majorapps-icon.jpg?width=250&quality=80&auto=webp",
    title: "Major Appliances",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2f9307f50e7b9ad0/5f7b8d08879de80eb41b07e9/mixers-icon.jpg?width=250&quality=80&auto=webp",
    title: "Small Kitchen Appliances",
  },
  {
    imgUrl:
      "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltff769e2ada93c2db/5fa9e4b44e40cf53001f5252/di-evergreen-category-icon-cameras-drones.jpg?width=250&quality=80&auto=webp",
    title: "Cameras, Camcorders and Drones",
  },
];

// const Wrapper = styled.div`
//   & > div {
//   }
// `;

const ShopDealsByCategory = ({ className }) => {
  return (
    <div className={className}>
      {data.map((el, i) => {
        return (
          <div key={i}>
            <img src={el.imgUrl} alt="" />
            <p>{el.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShopDealsByCategory;
