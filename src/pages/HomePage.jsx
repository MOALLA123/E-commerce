import React, { useEffect, useState } from "react";
import Slider from "../components/Home/Slider";
import HomeCategory from "../components/Home/HomeCategory";
import CardProductContainer from "../components/Products/CardProductContainer";
import DiscountSection from "../components/Home/DiscountSection";
import BrandFeautured from "../components/Brand/BrandFeatured";
import GetAllProductsHook from "../hook/product/Get_AllProducts_Hook";
import ScrollAnimation from "./Animation/ScrollAnimation";
import Home_Wishlist from "../hook/Wishlist/Home_Wishlist";
import LoadingCard from "../components/utility/LoadingCard";
import axios from "axios";

const Home = () => {
  const [items, loading] = GetAllProductsHook();

  //to get the products that user liked it ((only if he logged in))
  localStorage.getItem("token") && Home_Wishlist();
  return (
    <>
      <div className="font" style={{ minHeight: "670px" }}>
        <Slider />
        <ScrollAnimation>
          <HomeCategory />
        </ScrollAnimation>{" "}
        <ScrollAnimation>
          {loading ? (
            <LoadingCard />
          ) : (
            <CardProductContainer
              products={items}
              title="الاكثر مبيعا"
              btntitle="المزيد"
              pathText="/products"
            />
          )}
        </ScrollAnimation>
        <CardProductContainer title="الاكثر تقييما" btntitle="المزيد" />
        <DiscountSection />
        <ScrollAnimation>
          <CardProductContainer
            title="احدث الازياء"
            btntitle="المزيد"
            pathText="/products"
            products={items}
          />
        </ScrollAnimation>
        <ScrollAnimation>
          <BrandFeautured title="الماركات " btntitle="المزيد" />
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Home;
