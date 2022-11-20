import React from "react";
import { Link } from "react-router-dom";
import ProductBanner from "../components/Products/ProductBanner";
import ProductTopCrousal from "../components/Products/ProductTopCrousal";
import AllProductPageRoute from "./ProductPages/AllProductPageRoute";

function Products() {
  const ProductData = [
    {
      id: 1,
      imgUrl:
        "https://pbs.twimg.com/profile_images/915251508760920065/CS3k9D2W_400x400.jpg",
      title: "Acer Products",
      rate: "⭐⭐⭐⭐ (293 Reviews)",
      link: "/acerproductpage",
    },
    {
      id: 2,
      imgUrl:
        "https://cdn.vox-cdn.com/thumbor/o3hWfI8VxYP_EoOVqHYw0mYjTfE=/0x0:792x528/1400x1400/filters:focal(396x264:397x265)/cdn.vox-cdn.com/uploads/chorus_asset/file/19232117/amazonlineup.jpg",
      title: "Amazon Products",
      rate: "⭐⭐⭐⭐ (152 Reviews)",
      link: "/amazonproductpage",
    },
    {
      id: 3,
      imgUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/android-phones-1651081480.jpg?crop=0.554xw:0.739xh;0.0465xw,0.141xh&resize=640:*",
      title: "Android Products",
      rate: "⭐⭐⭐⭐ (420 Reviews)",
      link: "/androidproductpage",
    },
    {
      id: 4,
      imgUrl:
        "https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16003/16003193.jpg",
      title: "Iphone Products",
      rate: "⭐⭐⭐⭐ (212 Reviews)",
      style: "mt-24",
      link: "/iphoneproductpage",
    },
    {
      id: 5,
      imgUrl:
        "https://i2-prod.mirror.co.uk/incoming/article20823613.ece/ALTERNATES/s1200c/0_Amazon-Echo-devices.jpg",
      title: "Latest Product",
      rate: "⭐⭐⭐⭐ (56 Reviews)",
      style: "mt-4",
      link: "/latestproductpage",
    },
    {
      id: 6,
      imgUrl:
        "https://image.shutterstock.com/shutterstock/photos/1248412693/display_1500/stock-photo-gadgets-and-accessories-isolated-on-white-background-1248412693.jpg",
      title: "MarketPlace Products",
      rate: "⭐⭐⭐⭐ (51 Reviews)",
      style: "mt-20",
      link: "/marketplaceproductpage",
    },
    {
      id: 7,
      imgUrl:
        "https://newlintech.com/wp-content/uploads/2020/05/Best-Smart-Home-Devices-2018.jpg",
      title: "Smarthome Products",
      rate: "⭐⭐⭐⭐ (89 Reviews)",
      style: "mt-48",
      link: "/smarthomeproductpage",
    },
    {
      id: 8,
      imgUrl:
        "https://thumbs.dreamstime.com/b/sponsor-electronic-gadgets-office-supplies-collection-214012719.jpg",
      title: "Sponsered Products",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      style: "mt-32",
      link: "/sponseredproductpage",
    },

    {
      id: 9,
      imgUrl:
        "https://i.gadgets360cdn.com/large/flipkart_gadgets_sale_1521539020287.jpg",
      title: "Top Deals",
      rate: "⭐⭐⭐⭐ (1 Reviews)",
      style: "mt-20",
      link: "/topdealsproductpage",
    },
  ];

  return (
    <div >
      <AllProductPageRoute />
      <ProductBanner />
      <ProductTopCrousal />
      <div className="border-solid border-b-2 border-gray-200 ">
        <p className="text-3xl w-fit mt-4 ml-8 py-2 ">Products</p>
      </div>
      <div
        className="mt-8 w-fit"
        style={{
          backgroundImage: `url(" https://pisces.bbystatic.com/image2/BestBuy_US/dam/custom_fluid_xl_mmt-599505-715e51c3-2718-4a87-a9b7-1dd78586d130.jpg")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-16 w-fit ml-96 pl-96">
          <div className="w-fit ">
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/UpgradePlus_Powered_by_Citizens_Pay_hz_2L_K_ai_renditionpicker_319x319-218068.png;maxHeight=76;maxWidth=319"
              alt=""
              className="w-11/12 ml-20"
            />
          </div>
          <div className="w-fit ml-20 my-6 ">
            <p className="text-4xl font-bold">
              Amazing new <span className="text-5xl">MacBook</span>
              <span className="text-red-700">.</span>
            </p>

            <p className="text-3xl font-bold">Unbelievable monthly price.</p>

            <p className="hidden xl:block my-2">
              From $19.99/month for 36 months. $280.35 final payment due in
              month 37. Based on <br /> original price of $999.99. Final payment
              will be made by Best Buy if product is returned <br /> or upgraded
              per the Upgrade+ Program terms.
            </p>
            <p className="hidden 2xl:block text-sm">
              Eligibility subject to credit approval. Monthly payment amount for
              the first 36 months is based on creditworthiness. <br /> Limited
              time promotion.
            </p>

            <button className="bg-blue-700 my-6 text-white p-2 rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  mt-10">
        {ProductData.map((el) => (
          <div className=" border-2 p-3" key={el.id}>
            <img src={el.imgUrl} alt="" />

            <p
              className={`text-2xl font-bold  text-sky-500 cursor-pointer hover:underline my-2 ${el.style}`}
            >
              {el.title}
            </p>

            <p className="text-sm text-gray-400 ">Get all {el.title}</p>
            <Link to={el.link}>
              {" "}
              <button className="bg-blue-900 text-white rounded-md py-1 mt-6 text-sm px-4 w-fit">
                Shop Now
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* <div style={{ 
      backgroundImage: `url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/gl-77114-giftideas-ep-td-half_der-e5653191-ad0b-42de-a484-6759bfdd6ad5.jpg")` ,
      backgroundRepeat: 'no-repeat',
    
    }}
    className="h-">
   
   </div> */}
    </div>
  );
}

export default Products;
