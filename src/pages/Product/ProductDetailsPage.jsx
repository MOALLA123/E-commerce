import React from "react";
import CategoryHeader from "../../components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../components/Products/ProductDetails";
import RateContainer from "../../components/Rate/RateContainer";
import CardProductContainer from "./../../components/Products/CardProductContainer";

import ProductDetailsHook from "../../hook/product/Product_Details_Hook";


const ProductDetailsPage = () => {
  const [res] = ProductDetailsHook();

  if (res?.data) {
    var quantity = res.data.ratingsQuantity;
    var avarage = res.data.ratingsAverage;
    return (
      <>
        <div style={{ minHeight: "670px" }}>
          <CategoryHeader />
          <Container>
            <ProductDetails productdetails={res.data} />

            <RateContainer quantity={quantity} avarage={avarage} />

            <CardProductContainer title="منتجات قد تعجبك" />
          </Container>
        </div>{" "}
      </>
    );
  }
};

export default ProductDetailsPage;
