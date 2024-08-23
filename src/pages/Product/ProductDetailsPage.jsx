import React, { useEffect } from "react";
import CategoryHeader from "../../components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../components/Products/ProductDetails";
import RateContainer from "../../components/Rate/RateContainer";
import CardProductContainer from "./../../components/Products/CardProductContainer";
import { useDispatch, useSelector } from "react-redux";
import { GetProductDetails } from "../../redux/actions/ProductsAction";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  console.log(id, "hhhhhhhhhhhhhhhhh");
  const dispatch = useDispatch();

  useEffect(() => {
    // const id = "66c5f0abbeb2ab968a54a40c";
    dispatch(GetProductDetails(id));
  }, []);

  const res = useSelector((state) => state.allproducts.productDetails.data);
  console.log(res, "opopoop");
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails productdetails={{ res }} />
        <RateContainer />
        <CardProductContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
