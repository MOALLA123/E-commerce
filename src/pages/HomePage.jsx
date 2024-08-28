import React, { useEffect } from "react";

import Slider from "../components/Home/Slider";

import HomeCategory from "../components/Home/HomeCategory";
import CardProductContainer from "../components/Products/CardProductContainer";
import DiscountSection from "../components/Home/DiscountSection";
import BrandFeautured from "../components/Brand/BrandFeatured";
import GetAllProductsHook from "../hook/product/Get_AllProducts_Hook";
import { useParams } from "react-router-dom";
import Transitions from "../transation";

const Home = () => {
  const [items] = GetAllProductsHook();
  items && console.log(items, "allllllllllllllllllllls");
  return (
    <>
      <div className="font" style={{ minHeight: "670px" }}>
        <Slider />
        <HomeCategory />
        <CardProductContainer
          products={items}
          title="الاكثر مبيعا"
          btntitle="المزيد"
          pathText="/products"
        />

        <CardProductContainer title="الاكثر تقييما" btntitle="المزيد" />
        <DiscountSection />
        <CardProductContainer
          title="احدث الازياء"
          btntitle="المزيد"
          pathText="/products"
          products={items}
        />
        <BrandFeautured title="الماركات " btntitle="المزيد" />
      </div>{" "}
    </>
  );
};

export default Home;
