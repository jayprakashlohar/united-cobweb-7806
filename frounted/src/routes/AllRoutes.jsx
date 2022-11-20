import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductContainer from "../pages/ProductPage/ProductContainer";
import DealOfTheDay from "../pages/DealOfTheDay/DealOfTheDay";
import Detailsitem from "../pages/Product Detail Page/Detailsitem";
import { Cart } from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import Payment from "../components/Payment/Payment";
import GiftCards from "../components/GiftCards/GiftCards";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Products from "../pages/Products";
import AcerProductPage from "../pages/ProductPages/AcerProductPage";
import AmazonProductPage from "../pages/ProductPages/AmazonProductPage";
import AndroidProductPage from "../pages/ProductPages/AndroidProductPage";
import IphoneProductPage from "../pages/ProductPages/IphoneProductPage";
import LatestProductPage from "../pages/ProductPages/LatestProductPage";
import MarketPlaceProductPage from "../pages/ProductPages/MarketplaceProducrPage";
import SmarthomeProductPage from "../pages/ProductPages/SmarthomeProductPage";
import SponseredProductPage from "../pages/ProductPages/SponseredProductPage";
import TopdealsProductPage from "../pages/ProductPages/TopdealsProductPage";
import Homepage from "../components/homePage/Homepage";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/topDeal" element={<Products />} />
        <Route path="/acerproductpage" element={<AcerProductPage />}></Route>
        <Route
          path="/amazonproductpage"
          element={<AmazonProductPage />}
        ></Route>
        <Route
          path="/androidproductpage"
          element={<AndroidProductPage />}
        ></Route>
        <Route
          path="/iphoneproductpage"
          element={<IphoneProductPage />}
        ></Route>
        <Route
          path="/latestproductpage"
          element={<LatestProductPage />}
        ></Route>
        <Route
          path="/marketplaceproductpage"
          element={<MarketPlaceProductPage />}
        ></Route>
        <Route
          path="/smarthomeproductpage"
          element={<SmarthomeProductPage />}
        ></Route>
        <Route
          path="/sponseredproductpage"
          element={<SponseredProductPage />}
        ></Route>
        <Route
          path="/topdealsproductpage"
          element={<TopdealsProductPage />}
        ></Route>
        <Route path="/giftCards" element={<GiftCards />} />
        <Route path="/dealOfTheDay" element={<DealOfTheDay />} />
        <Route path="/products/:id" element={<ProductContainer />} />
        <Route path="/products/single/:id" element={<Detailsitem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
